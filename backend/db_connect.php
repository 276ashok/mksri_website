<?php
require_once 'config.php';

// Prevent browsers/CDN from caching API error or data responses
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

// PHP 8.1+ throws mysqli_sql_exception by default; catch it so APIs return JSON instead of a blank 500
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $conn->set_charset('utf8mb4');
} catch (Throwable $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'message' => 'Database connection failed.',
        'detail' => $e->getMessage(),
    ]);
    exit();
}
?>
