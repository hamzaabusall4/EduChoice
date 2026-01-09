<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require __DIR__ . "/../db.php";

header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION["user_id"]) || $_SESSION["role"] !== "school") {
  echo json_encode(["status" => "error", "message" => "Unauthorized"]);
  exit;
}

$school_user_id = $_SESSION["user_id"];

/*
  الترتيب مهم:
  1. حذف بيانات المدرسة
  2. حذف المستخدم
*/

// حذف المدرسة
$stmt = $conn->prepare("DELETE FROM schools_full WHERE user_id = ?");
$stmt->bind_param("i", $school_user_id);
$stmt->execute();

// حذف المستخدم
$stmt2 = $conn->prepare("DELETE FROM users WHERE id = ?");
$stmt2->bind_param("i", $school_user_id);
$stmt2->execute();

// تدمير الجلسة
session_destroy();

echo json_encode(["status" => "ok"]);
