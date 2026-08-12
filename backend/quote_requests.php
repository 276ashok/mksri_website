<?php
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
require_once 'mail_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['detail' => 'Invalid JSON input.']);
        http_response_code(400);
        exit();
    }

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? null;
    $service_type = $data['service_type'] ?? null;
    $message = $data['message'] ?? '';
    $status = $data['status'] ?? 'new'; // Default status

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['detail' => 'Name, email, and message are required.']);
        http_response_code(400);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['detail' => 'Invalid email format.']);
        http_response_code(400);
        exit();
    }

    // Prepare an insert statement
    $sql = "INSERT INTO quote_requests (name, email, phone, service_type, message, status) VALUES (?, ?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssssss", $name, $email, $phone, $service_type, $message, $status);

        if ($stmt->execute()) {
            // Send email notification
            $to_email = MAIL_FROM_EMAIL; // Send to the configured admin email
            $subject = "New Quote Request from " . $name;
            $email_body = "
                <h2>New Quote Request</h2>
                <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
                <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
                <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
                <p><strong>Service Type:</strong> " . htmlspecialchars($service_type) . "</p>
                <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
                <p>This request was submitted through your website's quote form.</p>
            ";

            if (sendEmail($to_email, $subject, $email_body)) {
                // Admin email sent successfully
            } else {
                // Admin email failed to send
            }

            // Send confirmation email to the user
            $user_subject = "Your Quote Request to MKSRI Builders";
            $user_email_body = "
                <h2>Thank You for Your Quote Request, " . htmlspecialchars($name) . "!</h2>
                <p>We have received your quote request and our team will contact you shortly to discuss your requirements.</p>
                <p>Here are the details you submitted:</p>
                <p><strong>Service Type:</strong> " . htmlspecialchars($service_type) . "</p>
                <p><strong>Your Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
                <p>We appreciate your interest in MKSRI Builders.</p>
                <p>Best regards,<br>The MKSRI Builders Team</p>
            ";

            if (sendEmail($email, $user_subject, $user_email_body)) {
                // User confirmation email sent successfully
            } else {
                // User confirmation email failed to send
            }

            echo json_encode(['message' => 'Quote request submitted successfully.']);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to submit quote request: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch all quote requests
    $sql = "SELECT id, name, email, phone, service_type, message, status, created_at FROM quote_requests ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $requests = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $requests[] = $row;
        }
        echo json_encode($requests);
        http_response_code(200);
    } else {
        echo json_encode([]); // Return empty array if no requests
        http_response_code(200);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true) ?? [];
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    $status = $data['status'] ?? null;

    if (!$id || $status === null || $status === '') {
        echo json_encode(['detail' => 'ID and status are required for update.']);
        http_response_code(400);
        exit();
    }

    $sql = "UPDATE quote_requests SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("si", $status, $id);
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Quote request status updated successfully.']);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to update quote request status: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if (!$id) {
        echo json_encode(['detail' => 'ID is required for deletion.']);
        http_response_code(400);
        exit();
    }

    $sql = "DELETE FROM quote_requests WHERE id = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Quote request deleted successfully.']);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to delete quote request: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} else {
    echo json_encode(['detail' => 'Only POST, GET, PUT, and DELETE requests are allowed.']);
    http_response_code(405);
}

$conn->close();
