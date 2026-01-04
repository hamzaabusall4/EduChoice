<?php
header('Content-Type: application/json');
require_once '../db.php';


$sql = "SELECT 
  id,
  name_en,
  name_ar,
  type,
  gender,
  city,
  district,
  address,
  phone,
  whatsapp,
  email,
  website,
  images,
  gallery,
  programs,
  fees,
  description_en,
  description_ar
FROM schools_full
ORDER BY name_en";


$result = mysqli_query($conn, $sql);

$schools = [];

if ($result) {
  while ($row = mysqli_fetch_assoc($result)) {
    $schools[] = $row;
  }
}

echo json_encode($schools, JSON_UNESCAPED_UNICODE);


