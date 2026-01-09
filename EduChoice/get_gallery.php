<?php
require "../db.php";
header("Content-Type: application/json");

$id = $_GET["id"] ?? 0;

$stmt = $conn->prepare(
  "SELECT image FROM school_gallery WHERE school_id=? ORDER BY id DESC LIMIT 3"
);
$stmt->execute([$id]);

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
