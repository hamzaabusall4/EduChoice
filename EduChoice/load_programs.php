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

$user_id = $_SESSION["user_id"];

$stmt = $conn->prepare("
  SELECT programs, programs_description
  FROM schools_full
  WHERE user_id = ?
  LIMIT 1
");

$stmt->bind_param("i", $user_id);
$stmt->execute();

$res = $stmt->get_result();

if ($row = $res->fetch_assoc()) {
  echo json_encode([
    "status" => "success",
    "programs" => $row["programs"],
    "description" => $row["programs_description"]
  ]);
} else {
  echo json_encode(["status"=>"success","programs"=>"","description"=>""]);
}
