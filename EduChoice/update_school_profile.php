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

$sql = "UPDATE schools_full SET
    name_en = ?,
    description_en = ?,
    email = ?,
    phone = ?,
    website = ?,
    address = ?,
    programs = ?,
    programs_description = ?,
    fees = ?
WHERE user_id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param(
    "sssssssssi",
    $data['name_en'],
    $data['description_en'],
    $data['email'],
    $data['phone'],
    $data['website'],
    $data['address'],
    $data['programs'],
    $data['programs_description'],
    $data['fees'],
    $user_id
);

$ok = $stmt->execute();

echo json_encode([
    "status" => $ok ? "ok" : "error"
]);
