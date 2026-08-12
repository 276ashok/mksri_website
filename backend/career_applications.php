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
header('Access-Control-Allow-Methods: POST, OPTIONS');
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
    $phone = $data['phone'] ?? '';
    $resumePath = $data['resume_path'] ?? '';
    $jobTitle = $data['job_title'] ?? '';
    $status = $data['status'] ?? 'new'; // Default status

    // Basic validation
    if (empty($name) || empty($email) || empty($phone) || empty($resumePath) || empty($jobTitle)) {
        echo json_encode(['detail' => 'Name, email, phone, resume path, and job title are required.']);
        http_response_code(400);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['detail' => 'Invalid email format.']);
        http_response_code(400);
        exit();
    }

    // Prepare an insert statement
    $sql = "INSERT INTO career_applications (name, email, phone, resume_path, job_title, status) VALUES (?, ?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssssss", $name, $email, $phone, $resumePath, $jobTitle, $status);

        if ($stmt->execute()) {
            // Construct the full public URL for the resume
            // Assuming BASE_URL is defined and resumePath is relative to the public directory (e.g., 'uploads/resumes/...')
            $fullResumeUrl = BASE_URL . 'public/' . ltrim($resumePath, '/'); // Ensure no leading slash on resumePath if BASE_URL already has one

            // Send email notification for new application
            $to_email = MAIL_FROM_EMAIL; // Send to the configured admin email
            $subject = "New Job Application: " . htmlspecialchars($jobTitle) . " from " . htmlspecialchars($name);
            $email_body = "
                <h2>New Job Application</h2>
                <p><strong>Job Title:</strong> " . htmlspecialchars($jobTitle) . "</p>
                <p><strong>Applicant Name:</strong> " . htmlspecialchars($name) . "</p>
                <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
                <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
                <p><strong>Resume Path:</strong> <a href='" . $fullResumeUrl . "'>" . htmlspecialchars($resumePath) . "</a></p>
                <p>This application was submitted through your website's careers page.</p>
            ";
            error_log("DEBUG: BASE_URL: " . BASE_URL);
            error_log("DEBUG: resumePath: " . $resumePath);
            error_log("DEBUG: fullResumeUrl: " . $fullResumeUrl);

            if (sendEmail($to_email, $subject, $email_body)) {
                // Admin email sent successfully
            } else {
                // Admin email failed to send
            }

            // Send confirmation email to the candidate
            $candidate_subject = "Your Job Application to MKSRI Builders for " . htmlspecialchars($jobTitle);
            $candidate_email_body = "
                <h2>Thank You for Your Application, " . htmlspecialchars($name) . "!</h2>
                <p>We have received your application for the **" . htmlspecialchars($jobTitle) . "** position.</p>
                <p>Our team will review your application and update you regarding the interview schedule shortly.</p>
                <p>We appreciate your interest in MKSRI Builders.</p>
                <p>Best regards,<br>The MKSRI Builders Team</p>
            ";

            if (sendEmail($email, $candidate_subject, $candidate_email_body, MAIL_CAREERS_EMAIL, 'MKSRI Builders Careers')) {
                // Candidate confirmation email sent successfully
            } else {
                // Candidate confirmation email failed to send
            }

            echo json_encode(['message' => 'Career application submitted successfully.']);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to submit career application: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch all career applications
    $sql = "SELECT id, name, email, phone, resume_path, job_title, status, created_at FROM career_applications ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $applications = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $applications[] = $row;
        }
        echo json_encode($applications);
        http_response_code(200);
    } else {
        echo json_encode([]); // Return empty array if no applications
        http_response_code(200);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'] ?? null;
    $data = json_decode(file_get_contents('php://input'), true);
    $status = $data['status'] ?? '';

    if (empty($id) || empty($status)) {
        echo json_encode(['detail' => 'Application ID and status are required.']);
        http_response_code(400);
        exit();
    }

    // Prepare an update statement
    $sql = "UPDATE career_applications SET status = ?, updated_at = NOW() WHERE id = ?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("si", $status, $id);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Application status updated successfully.']);
            http_response_code(200);
        } else {
            echo json_encode(['detail' => 'Failed to update application status: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'] ?? null;

    if (empty($id)) {
        echo json_encode(['detail' => 'Application ID is required.']);
        http_response_code(400);
        exit();
    }

    // Prepare a delete statement
    $sql = "DELETE FROM career_applications WHERE id = ?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo json_encode(['message' => 'Application deleted successfully.']);
                http_response_code(200);
            } else {
                echo json_encode(['detail' => 'No application found with the provided ID.']);
                http_response_code(404);
            }
        } else {
            echo json_encode(['detail' => 'Failed to delete application: ' . $stmt->error]);
            http_response_code(500);
        }
        $stmt->close();
    } else {
        echo json_encode(['detail' => 'Database query preparation failed: ' . $conn->error]);
        http_response_code(500);
    }
}
else {
    echo json_encode(['detail' => 'Only POST, GET, PUT, and DELETE requests are allowed.']);
    http_response_code(405);
}

$conn->close();
