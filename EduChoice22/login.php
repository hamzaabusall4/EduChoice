<?php
session_start();
require_once __DIR__ . '/../db.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed");
}

$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if ($email === "" || $password === "") {
    exit("Missing fields");
}

// ✅ جلب المستخدم
$stmt = $conn->prepare(
  "SELECT id, password, role FROM users WHERE email=?"
);
$stmt->bind_param("s", $email);
$stmt->execute();

$res = $stmt->get_result();

if ($res->num_rows === 0) {
    exit("Invalid email or password");
}

$user = $res->fetch_assoc();

if (!password_verify($password, $user['password'])) {
    exit("Invalid email or password");
}

// ✅ session
$_SESSION['user_id'] = $user['id'];
$_SESSION['role']    = $user['role'];

/*
  🔹 التعديل الوحيد:
  نرجّع OK + الدور
*/
echo "OK|" . $user['role'];
