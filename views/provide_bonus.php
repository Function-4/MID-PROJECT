<?php
require('../controllers/header.php');
require('../models/workerModel.php');
?>
<html>
<head>
	<title>Provide Bonus to Worker</title>
</head>
	<table border = "2" width=100%>  
    	<tr>
                <td><h1 style=font-size:50px><center>Garments Function</center></h1></td>
                <td><center><p style=font-size:30px><a href="../index.php">Home</a></center></td>
		<td><center><p style=font-size:30px><a href="m_Home.php">Profile</a></center></td>
		<td><center><form method="POST" action="../controllers/logout.php">
            		<input type="submit" name="m_logout" value="Logout" style="height:50px; width:70px">
        			</form></center></td>
        </tr>
    </table>
<body><br>
        <center>
		<table border="1">
			<tr>
                
				<td>Serial</td>
				<td>User Name</td>
				<td>First Name</td>
				<td>Last Name</td>
				<td>Email</td>
				<td>Contact Number</td>
				<td><center>Ammount of Bonus</center></td>
                <td><center> Bonus</center></td>
                
			</tr>

			<?php 
				$row = view_worker();
				while($row = mysqli_fetch_assoc($result))
				{ 
			?>
			<tr>
				<td><?=$row['Serial']?></td>
				<td><?=$row['UserName']?></td>
				<td><?=$row['FirstName']?></td>
				<td><?=$row['LastName']?></td>
				<td><?=$row['Email']?></td>
				<td><?=$row['ContactNumber']?></td>
				<form method="POST" action="../controllers/bonus.php?id=<?=$row['UserName']?> & current=<?=$row['Salary']?>">
				<td><input type="number" name="bAmmount"style="height:50px; width:150px">
                </td>
				<td>
                <input type="submit" name="bWorker" value="Provide Bonus for this Worker" style="height:50px; width:200px">
                </form></td>
			</tr>
			<?php
				}
			?>
		</table>
		</center>
		</fieldset>
	</form>
</body><br>
			<table border="1"  width="100%">
			<tr>
				<td>
					<h4>
						<center> &copy; 2022 Function,inc.</center>
					</h4>
				</td>
			</tr>
			</table>
</html>