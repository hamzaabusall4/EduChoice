<?php
session_start();
header("Content-Type: application/json");

if (!isset($_SESSION['user_id'])) {
  echo json_encode([
    "logged" => false,
    "role"   => "visitor"   
  ]);
  exit;
}

echo json_encode([
  "logged" => true,
  "role"   => $_SESSION['role']
]);


