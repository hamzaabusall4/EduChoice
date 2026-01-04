<?php
require "../db.php";
header("Content-Type: application/json");

// قراءة البيانات القادمة من fetch
$data = json_decode(file_get_contents("php://input"), true);

// تأكد من وجود id
if (!isset($data["id"])) {
  echo json_encode([
    "success" => false,
    "error" => "NO_ID"
  ]);
  exit;
}

$id = intval($data["id"]);

// ⚠️ عدّل اسم الجدول إذا كان مختلف عندك
// مثال: schools_full بدل schools
$stmt = mysqli_prepare($conn, "DELETE FROM schools WHERE id = ?");
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);

// تحقق هل فعلاً انحذف صف
if (mysqli_stmt_affected_rows($stmt) === 1) {
  echo json_encode([
    "success" => true
  ]);
} else {
  echo json_encode([
    "success" => false,
    "error" => "NOT_DELETED"
  ]);
}
