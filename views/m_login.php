<?php
$error = "";
if(isset($_GET['msg'])){
		if($_GET['msg'] == 'error'){
			$error = "<span>&#9888;</span>  Invalid Username or Password";
		}
	}
?>
<script type="text/javascript" src="../assets/fv.js"></script>
<html>
<link rel="stylesheet" href="../CSS/test.css">
<head>
<title> Manager </title>
</head>

	<header id="header">
	<nav class="links" style="--items: 2;">
	<a href="../index.php"><h1 style=font-size:40px>Garments Function</h1></a>
	<a href="../index.php">Home</a>
	<span class="line"></span>
	</nav>
	</header>

<body>
	<center>
	<form method="POST" action="../controllers/loginCheck.php" onsubmit="return log()">
		<table><br><br><br><br><br><br><br>
			<tr><td colspan="2"><h1> Log-in As Manager </h1></td></tr>
			<tr>
				<td height = "70px"> Username : <input id="name" type="text" name="username"></td><td id="usernameError"></td>
			</tr>
			<tr>
				<td height = "30px"> Password : <input id="pass" type="password" name="password" ></td><td id="passError"></td><br><br><br>
			</tr>
			<tr>
				
				<td><input type="submit" name="mLogin" value="Login" style="height: 50px;width: 170px;"></td>
				<td><?=$error?></td><br><br><br><br>
			</tr>
		</table>
	</form>
	</center>
</body>
<element id= "footer"><a><ul> &copy; 2022 Function,inc.</ul></a></element>
<html>
</html>