<?php
require "../db.php";
header("Content-Type: application/json");

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

echo json_encode([
  "raw" => $raw,
  "parsed" => $data,
  "id" => $data["id"] ?? null
]);
exit;
