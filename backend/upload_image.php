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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['detail' => 'No file uploaded or upload error.']);
        http_response_code(400);
        exit();
    }

    $file = $_FILES['file'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];

    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowed = ['jpg', 'jpeg', 'png', 'gif'];

    if (!in_array($fileExt, $allowed)) {
        echo json_encode(['detail' => 'Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.']);
        http_response_code(400);
        exit();
    }

    if ($fileSize > 5000000) { // 5MB limit
        echo json_encode(['detail' => 'File is too large. Maximum 5MB allowed.']);
        http_response_code(400);
        exit();
    }

    $uploadDir = '../public/blog-images/'; // Relative to backend/
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true); // Create directory if it doesn't exist
    }

    $newFileName = uniqid('blog_image_', true) . '.' . $fileExt;
    $filePath = $uploadDir . $newFileName;

    if (move_uploaded_file($fileTmpName, $filePath)) {
        // Return the path relative to the public directory for frontend use
        $publicFilePath = 'blog-images/' . $newFileName; // Remove leading slash
        echo json_encode(['message' => 'Image uploaded successfully.', 'file_path' => $publicFilePath]);
        http_response_code(200);
    } else {
        echo json_encode(['detail' => 'Failed to move uploaded file.']);
        http_response_code(500);
    }

} else {
    echo json_encode(['detail' => 'Only POST requests are allowed.']);
    http_response_code(405);
}
?>
