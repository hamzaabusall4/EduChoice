<?php
require_once "../backend/auth/guard.php";
$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html>
<head>
  <title>Profile</title>
  <link rel="stylesheet" href="../assets/css/profile.css">
</head>
<body>

<div class="profile-card">
  <h2>Welcome, <?= htmlspecialchars($user['name']) ?></h2>

  <div class="info">
    <p><b>Email:</b> <?= htmlspecialchars($user['email']) ?></p>
    <p><b>Role:</b> <?= htmlspecialchars($user['role']) ?></p>
  </div>

  <a href="payment.php" class="btn">Go to Payment</a>
  <a href="logout.php" class="btn danger">Logout</a>
</div>

</body>
</html>
