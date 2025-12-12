<?php
session_start();
require_once "../backend/db.php";

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = $_POST["password"];

    // جلب المستخدم من قاعدة البيانات
    $sql = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) === 1) {

        $user = mysqli_fetch_assoc($result);

        // التحقق من الباسورد
        if (password_verify($password, $user["password"])) {

            // خزّن بيانات المستخدم في السيشن
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["role"] = $user["role"];
            $_SESSION["name"] = $user["name"];

            // توجيه حسب الدور (role)
            if ($user["role"] === "parent") {
                header("Location: dashboard_parent.php");
                exit;
            }

            if ($user["role"] === "school") {
                header("Location: dashboard_school.php");
                exit;
            }

            if ($user["role"] === "admin") {
                header("Location: admin.php");
                exit;
            }

        } else {
            $error = "Incorrect password!";
        }

    } else {
        $error = "Email not found!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login – EduChoice</title>
</head>
<body>

<h2>Login</h2>

<?php if ($error): ?>
    <p style="color:red;"><?= $error ?></p>
<?php endif; ?>

<form method="POST">

    <label>Email:</label>
    <input type="email" name="email" required>
    <br><br>

    <label>Password:</label>
    <input type="password" name="password" required>
    <br><br>

    <button type="submit">Login</button>
</form>

<br>
<a href="register.php">Don't have an account? Register</a>

</body>
</html>
