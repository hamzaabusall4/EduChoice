<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "educhoice3";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("DB Connection Failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8mb4");








