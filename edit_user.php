<?php
require_once __DIR__ . "/../../backend/db.php";
header("Content-Type: application/json");

$d = json_decode(file_get_contents("php://input"), true);

$stmt = mysqli_prepare(
  $conn,
  "UPDATE users SET name=?, role=? WHERE id=?"
);
mysqli_stmt_bind_param(
  $stmt,
  "ssi",
  $d["name"],
  $d["role"],
  $d["id"]
);

$ok = mysqli_stmt_execute($stmt);
echo json_encode(["success"=>$ok]);
