<?php
require_once __DIR__ . "/../../backend/db.php";

header("Content-Type: application/json; charset=UTF-8");

$sql = "
  SELECT 
    id,
    TRIM(name_en) AS name,
    TRIM(type) AS system,
    TRIM(city) AS city
  FROM schools_full
  WHERE name_en IS NOT NULL
    AND name_en != 'name_en'
  ORDER BY name_en
";

$res = mysqli_query($conn, $sql);

$schools = [];

while ($row = mysqli_fetch_assoc($res)) {
  $schools[] = $row;
}

echo json_encode($schools);
