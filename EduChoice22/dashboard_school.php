<?php
session_start();

// 🔒 منع الدخول إذا مش School
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'school') {
  header("Location: login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>School Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>
    body { font-family: Arial, sans-serif; background:#f5f7fb; }
    .container {
      max-width: 700px;
      margin: 40px auto;
      background: white;
      padding: 24px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,.08);
    }
    h2 { margin-bottom: 20px; }
    input, select, textarea {
      width: 100%;
      margin-bottom: 14px;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    button {
      padding: 12px;
      width: 100%;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    }
    #resultMsg {
      margin-top: 12px;
      font-weight: bold;
    }
  </style>
</head>
<body>

<div class="container">
  <h2>School Profile</h2>

  <form id="schoolProfileForm">

    <input type="text" id="name_en" placeholder="School Name (English)" required>
    <input type="text" id="name_ar" placeholder="اسم المدرسة" required>

    <select id="system" required>
      <option value="">Choose System</option>
      <option value="IB">IB</option>
      <option value="IGCSE">IGCSE</option>
      <option value="SAT">SAT / AP</option>
      <option value="National">National</option>
    </select>

    <input type="text" id="city" placeholder="City" required>
    <input type="email" id="email" placeholder="Email">
    <input type="text" id="phone" placeholder="Phone">
    <input type="text" id="website" placeholder="Website">

    <textarea id="description_en" placeholder="Description (EN)"></textarea>
    <textarea id="description_ar" placeholder="الوصف"></textarea>

    <button type="submit">Save School</button>
  </form>

  <div id="resultMsg"></div>
</div>

<script src="assets/js/school-profile.js"></script>
</body>
</html>
