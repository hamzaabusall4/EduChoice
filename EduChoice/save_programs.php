<?php
session_start();
require "../db.php";
header("Content-Type: application/json");

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'school') {
    echo json_encode(["status"=>"error","message"=>"Unauthorized"]);
    exit;
}

$user_id = $_SESSION['user_id'];

$data = json_decode(file_get_contents("php://input"), true);

$type = $data['type'] ?? "";
$description = $data['description'] ?? "";

// تأكد إذا الصف موجود
$check = $conn->prepare("SELECT id FROM schools_full WHERE user_id = ?");
$check->bind_param("i", $user_id);
$check->execute();
$check->store_result();

if ($check->num_rows === 0) {
    // INSERT أول مرة
    $stmt = $conn->prepare(
        "INSERT INTO schools_full (user_id, type, programs_description)
         VALUES (?, ?, ?)"
    );
    $stmt->bind_param("iss", $user_id, $type, $description);
} else {
    // UPDATE
    $stmt = $conn->prepare(
        "UPDATE schools_full
         SET type = ?, programs_description = ?
         WHERE user_id = ?"
    );
    $stmt->bind_param("ssi", $type, $description, $user_id);
}

$stmt->execute();

echo json_encode([
    "status" => "ok",
    "saved_type" => $type
]);
