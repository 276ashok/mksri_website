<?php
// Email Configuration (for Hostinger or any SMTP)
define('MAIL_HOST', 'smtp.hostinger.com');
define('MAIL_PORT', 465);
define('MAIL_USERNAME', 'info@mksribuilders.com');
define('MAIL_PASSWORD', 'Gothaidass@1');
define('MAIL_FROM_EMAIL', 'info@mksribuilders.com');
define('MAIL_FROM_NAME', 'MKSRI Builders');
define('MAIL_CAREERS_EMAIL', 'careers@mksribuilders.com');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

function sendEmail($to, $subject, $message, $fromEmail = MAIL_FROM_EMAIL, $fromName = MAIL_FROM_NAME) {
    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host       = MAIL_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = MAIL_USERNAME;
        $mail->Password   = MAIL_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = MAIL_PORT;

        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($to);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
        return false;
    }
}
?>
