<?php
require "../db.php";
header("Content-Type: application/json");

if (!isset($_GET['school_id'])) {
  echo json_encode(["error"=>"missing id"]);
  exit;
}

$id = (int) $_GET['school_id'];

$sql = "
  UPDATE schools_full
  SET profile_visits = profile_visits + 1
  WHERE id = $id
";

$result = $conn->query($sql);

if ($result) {
  echo json_encode([
    "status" => "ok",
    "school_id" => $id,
    "affected_rows" => $conn->affected_rows
  ]);
} else {
  echo json_encode([
    "status" => "error",
    "sql_error" => $conn->error
  ]);
}
