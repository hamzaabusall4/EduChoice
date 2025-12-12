<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "databasemyproject"; // اسم قاعدة البيانات تبعتك

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8mb4");
?>
