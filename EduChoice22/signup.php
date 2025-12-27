<?php
require __DIR__ . "/../db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit("Method Not Allowed");
}

$name  = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$pass  = $_POST["password"] ?? "";
$role  = $_POST["role"] ?? "parent";

if ($name === "" || $email === "" || $pass === "") {
  exit("Missing fields");
}

if (strlen($pass) < 6) {
  exit("Password too short");
}

$hash = password_hash($pass, PASSWORD_DEFAULT);

// check email
$q = $conn->prepare("SELECT id FROM users WHERE email=?");
$q->bind_param("s", $email);
$q->execute();
$q->store_result();

if ($q->num_rows > 0) {
  exit("Email already exists");
}

// insert user
$stmt = $conn->prepare(
  "INSERT INTO users (name, email, password, role)
   VALUES (?, ?, ?, ?)"
);
$stmt->bind_param("ssss", $name, $email, $hash, $role);
$stmt->execute();

echo "OK"; // فقط إنشاء حساب
