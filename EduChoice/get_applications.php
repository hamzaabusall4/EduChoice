<?php
session_start();
require "../db.php";
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION["user_id"]) || $_SESSION["role"] !== "school") {
  echo json_encode([]);
  exit;
}

$school_user_id = $_SESSION["user_id"];

// ✅ نجيب اسم المدرسة من جدول المدارس
$stmt = $conn->prepare("SELECT name_en FROM schools_full WHERE user_id = ?");
$stmt->bind_param("i", $school_user_id);
$stmt->execute();
$res = $stmt->get_result();
$row = $res->fetch_assoc();

if(!$row){
  echo json_encode([]);
  exit;
}

$school_name = $row["name_en"];

// ✅ نجيب الطلبات حسب اسم المدرسة
$stmt = $conn->prepare("
  SELECT *
  FROM applications
  WHERE target_name = ?
    AND type = 'school'
  ORDER BY created_at DESC
");

$stmt->bind_param("s", $school_name);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($r = $result->fetch_assoc()) {
  $data[] = $r;
}

echo json_encode($data);
