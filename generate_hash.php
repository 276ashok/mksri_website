<?php
$password = 'Gothaidass@1';
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
echo "Hashed Password: " . $hashed_password . "\n";
?>
