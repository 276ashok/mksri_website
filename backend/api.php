<?php
ini_set('display_errors', 'On');
ini_set('display_startup_errors', 'On');
ini_set('log_errors', 'On');
ini_set('error_log', __DIR__ . '/php_error.log'); // Log errors to a file in the backend directory

header('Content-Type: application/json');
// Get the origin of the request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Define allowed origins
$allowed_origins = [
    'https://mksribuilders.com',
    'https://www.mksribuilders.com'
];

// Check if the request origin is in the allowed list
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    // Fallback or deny if origin is not allowed
    // In a real production scenario, you might want to explicitly deny or log.
}
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db_connect.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'login':
        $data = json_decode(file_get_contents('php://input'), true) ?? [];
        handleLogin($data, $conn);
        break;
    case 'career_applications':
        require_once 'career_applications.php';
        exit(); // Ensure no further output from api.php
    case 'quote_requests':
        require_once 'quote_requests.php';
        exit(); // Ensure no further output from api.php
    default:
        echo json_encode(['message' => 'Invalid action.']);
        http_response_code(400);
        break;
}

function handleLogin($data, $conn) {
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($email) || empty($password)) {
        echo json_encode(['message' => 'Email and password are required.']);
        http_response_code(400);
        return;
    }

    // Prepare a select statement
    $sql = "SELECT id, username, password FROM users WHERE username = ?"; // Assuming 'username' column stores email

    if ($stmt = $conn->prepare($sql)) {
        // Bind parameters
        $stmt->bind_param("s", $param_email);
        $param_email = $email;

        // Attempt to execute the prepared statement
        if ($stmt->execute()) {
            $stmt->store_result();

            if ($stmt->num_rows == 1) {
                $stmt->bind_result($id, $db_email, $hashed_password);
                if ($stmt->fetch()) {
                    if (password_verify($password, $hashed_password)) {
                        // Password is correct, start a new session
                        // For simplicity, we're just returning success.
                        // In a real application, you'd manage sessions/tokens.
                        echo json_encode(['message' => 'Login successful.']);
                        http_response_code(200);
                    } else {
                        echo json_encode(['message' => 'Invalid email or password.']);
                        http_response_code(401);
                    }
                }
            } else {
                echo json_encode(['message' => 'Invalid email or password.']);
                http_response_code(401);
            }
        } else {
            echo json_encode(['message' => 'Oops! Something went wrong. Please try again later.']);
            http_response_code(500);
        }

        // Close statement
        $stmt->close();
    } else {
        echo json_encode(['message' => 'Database query preparation failed.']);
        http_response_code(500);
    }
}

// Close connection at the end of script execution
$conn->close();
