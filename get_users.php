<?php
require_once __DIR__ . "/../../backend/db.php";

header("Content-Type: application/json; charset=UTF-8");

$sql = "
  SELECT
    id,
    name,
    email,
    role,
    created_at
  FROM users
  ORDER BY id DESC
";

$res = mysqli_query($conn, $sql);

if (!$res) {
  echo json_encode([
    "error" => mysqli_error($conn)
  ]);
  exit;
}

$data = [];

while ($row = mysqli_fetch_assoc($res)) {
  $data[] = $row;
}

echo json_encode($data);
