<?php
require_once "../db.php";

$id = intval($_GET["id"] ?? 0);
fetch("../backend/admin/get_schools.php")

$stmt = $conn->prepare("
  SELECT
    s.name_en,
    s.name_ar,
    s.system,
    s.city,
    s.email,
    s.phone,
    s.website,
    s.description_en,
    s.description_ar,
    s.programs_highlights,
    s.images,
    u.email AS account_email
  FROM schools s
  JOIN users u ON u.id = s.user_id
  WHERE s.id = ?
");

$stmt->bind_param("i", $id);
$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows === 0) {
  echo json_encode(["error" => "School not found"]);
  exit;
}

echo json_encode($res->fetch_assoc());
