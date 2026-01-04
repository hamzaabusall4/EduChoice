<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require "../db.php";
header("Content-Type: application/json");

if (!isset($_SESSION["user_id"]) || $_SESSION["role"] !== "school") {
  echo json_encode(["status"=>"error","message"=>"Unauthorized"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// الاسم فقط إجباري
if (empty($data["name_en"])) {
  echo json_encode(["status"=>"error","message"=>"School name is required"]);
  exit;
}

$user_id = $_SESSION["user_id"];

// قيم افتراضية ذكية
$name_en = $data["name_en"];
$name_ar = $data["name_ar"] ?? $name_en;
$system  = $data["system"]  ?? null;
$city    = $data["city"]    ?? null;
$email   = $data["email"]   ?? null;
$phone   = $data["phone"]   ?? null;
$website = $data["website"] ?? null;

$stmt = $conn->prepare("
  INSERT INTO schools_full
    (user_id, name_en, name_ar, type, city, email, phone, website)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
    name_en = VALUES(name_en),
    name_ar = VALUES(name_ar),
    type    = VALUES(type),
    city    = VALUES(city),
    email   = VALUES(email),
    phone   = VALUES(phone),
    website = VALUES(website)
");

$stmt->bind_param(
  "isssssss",
  $user_id,
  $name_en,
  $name_ar,
  $system,
  $city,
  $email,
  $phone,
  $website
);

if ($stmt->execute()) {
  echo json_encode(["status"=>"success","message"=>"School saved (smart update)"]);
} else {
  echo json_encode(["status"=>"error","message"=>$stmt->error]);
}
