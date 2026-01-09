<?php
require "../db.php";
header("Content-Type: application/json");

$id = intval($_GET['id']);

$res = $conn->query("
  SELECT id, name, profile_visits 
  FROM schools_full 
  WHERE id = $id
");

echo json_encode($res->fetch_assoc());
