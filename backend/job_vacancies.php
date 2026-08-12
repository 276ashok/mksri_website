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
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $isActive = $_GET['is_active'] ?? null;

    $sql = "SELECT id, title, location, type, description, requirements, salary_range, is_active, created_at, updated_at FROM job_openings";
    $params = [];
    $types = "";

    if ($isActive === 'true') {
        $sql .= " WHERE is_active = ?";
        $params[] = 1;
        $types .= "i";
    }

    $sql .= " ORDER BY created_at DESC";

    if ($stmt = $conn->prepare($sql)) {
        if (!empty($params)) {
            $stmt->bind_param($types, ...$params);
        }

        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $jobOpenings = [];
            while ($row = $result->fetch_assoc()) {
                // Convert boolean from tinyint(1)
                $row['is_active'] = (bool)$row['is_active'];
                $jobOpenings[] = $row;
            }
            echo json_encode($jobOpenings);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to fetch job openings: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $title = $data['title'] ?? '';
    $description = $data['description'] ?? '';
    $requirements = $data['requirements'] ?? null;
    $location = $data['location'] ?? '';
    $salary_range = $data['salary_range'] ?? null;
    $is_active = $data['is_active'] ?? true; // Default to true

    if (empty($title) || empty($description) || empty($location)) {
        echo json_encode(['detail' => 'Title, description, and location are required.']);
        http_response_code(400);
        exit();
    }

    $sql = "INSERT INTO job_openings (title, description, requirements, location, salary_range, is_active) VALUES (?, ?, ?, ?, ?, ?)";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sssssi", $title, $description, $requirements, $location, $salary_range, $is_active);
        if ($stmt->execute()) {
            $newId = $conn->insert_id;
            echo json_encode([
                'id' => $newId,
                'title' => $title,
                'description' => $description,
                'requirements' => $requirements,
                'location' => $location,
                'salary_range' => $salary_range,
                'is_active' => (bool)$is_active,
                'created_at' => date('Y-m-d H:i:s'), // Placeholder, ideally fetch from DB
                'updated_at' => date('Y-m-d H:i:s')  // Placeholder
            ]);
            http_response_code(201); // Created
        } else {
            echo json_encode(['detail' => 'Failed to create job vacancy: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    if (!$id) {
        $requestUri = strtok($_SERVER['REQUEST_URI'] ?? '', '?');
        $uriParts = explode('/', trim($requestUri, '/'));
        $last = end($uriParts);
        if (is_numeric($last)) {
            $id = (int)$last;
        }
    }

    if (!$id) {
        echo json_encode(['detail' => 'Job ID is required for PUT request.']);
        http_response_code(400);
        exit();
    }

    $data = json_decode(file_get_contents('php://input'), true) ?? [];

    $title = $data['title'] ?? null;
    $description = $data['description'] ?? null;
    $requirements = $data['requirements'] ?? null;
    $location = $data['location'] ?? null;
    $salary_range = $data['salary_range'] ?? null;
    $is_active = $data['is_active'] ?? null;

    $setClauses = [];
    $params = [];
    $types = "";

    if ($title !== null) { $setClauses[] = "title = ?"; $params[] = $title; $types .= "s"; }
    if ($description !== null) { $setClauses[] = "description = ?"; $params[] = $description; $types .= "s"; }
    if ($requirements !== null) { $setClauses[] = "requirements = ?"; $params[] = $requirements; $types .= "s"; }
    if ($location !== null) { $setClauses[] = "location = ?"; $params[] = $location; $types .= "s"; }
    if ($salary_range !== null) { $setClauses[] = "salary_range = ?"; $params[] = $salary_range; $types .= "s"; }
    if ($is_active !== null) { $setClauses[] = "is_active = ?"; $params[] = (int)(bool)$is_active; $types .= "i"; }

    if (empty($setClauses)) {
        echo json_encode(['detail' => 'No fields provided for update.']);
        http_response_code(400);
        exit();
    }

    $sql = "UPDATE job_openings SET " . implode(", ", $setClauses) . ", updated_at = NOW() WHERE id = ?";
    $params[] = $id;
    $types .= "i";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param($types, ...$params);
        if ($stmt->execute()) {
            $fetchSql = "SELECT id, title, description, requirements, location, salary_range, is_active, created_at, updated_at FROM job_openings WHERE id = ?";
            if ($fetchStmt = $conn->prepare($fetchSql)) {
                $fetchStmt->bind_param("i", $id);
                $fetchStmt->execute();
                $result = $fetchStmt->get_result();
                $updatedJob = $result->fetch_assoc();
                if ($updatedJob) {
                    $updatedJob['is_active'] = (bool)$updatedJob['is_active'];
                    echo json_encode($updatedJob);
                    http_response_code(200);
                } else {
                    echo json_encode(['detail' => 'Job vacancy not found.']);
                    http_response_code(404);
                }
                $fetchStmt->close();
            } else {
                echo json_encode(['detail' => 'Failed to prepare fetch statement: ' . $conn->error]);
                http_response_code(500);
            }
        } else {
            echo json_encode(['detail' => 'Failed to update job vacancy: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    if (!$id) {
        $requestUri = strtok($_SERVER['REQUEST_URI'] ?? '', '?');
        $uriParts = explode('/', trim($requestUri, '/'));
        $last = end($uriParts);
        if (is_numeric($last)) {
            $id = (int)$last;
        }
    }

    if (!$id) {
        echo json_encode(['detail' => 'Job ID is required for DELETE request.']);
        http_response_code(400);
        exit();
    }

    $sql = "DELETE FROM job_openings WHERE id = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo json_encode(['detail' => 'Job vacancy deleted successfully.']);
                http_response_code(200);
            } else {
                echo json_encode(['detail' => 'Job vacancy not found.']);
                http_response_code(404);
            }
        } else {
            echo json_encode(['detail' => 'Failed to delete job vacancy: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} else {
    echo json_encode(['detail' => 'Method not allowed.']);
    http_response_code(405);
}

$conn->close();
?>
