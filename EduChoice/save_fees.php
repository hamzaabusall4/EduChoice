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

$user_id = $_SESSION["user_id"];
$fees = $data["fees"] ?? "";

if ($fees === "") {
  echo json_encode(["status"=>"error","message"=>"Fees required"]);
  exit;
}

$stmt = $conn->prepare("
  UPDATE schools_full
  SET fees = ?
  WHERE user_id = ?
");

$stmt->bind_param("si", $fees, $user_id);

if ($stmt->execute()) {
  echo json_encode(["status"=>"success","message"=>"Fees saved"]);
} else {
  echo json_encode(["status"=>"error","message"=>$stmt->error]);
}
