<?php
// Database and site URL configuration only.
// Email/PHPMailer lives in mail_config.php so API endpoints don't fatally fail if mail libs are missing.

if ($_SERVER['SERVER_NAME'] == 'localhost' || $_SERVER['SERVER_ADDR'] == '127.0.0.1') {
    // Local Development Settings
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'srinidhi_builds');
    define('BASE_URL', 'http://localhost/mksri_website/');
} else {
    // Production Settings (Hostinger account u809515374)
    // Must match hPanel → Databases (user must be assigned to this database)
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'u809515374_mksri_website');
    define('DB_PASSWORD', 'Gothaidass@1');
    define('DB_NAME', 'u809515374_mksriweb');
    define('BASE_URL', 'https://mksribuilders.com/');
}
?>
