<html>
<body>
<title> Feedback </title>
<table border = "2" width=100%>  
    <tr>
    <td><center><p style=font-size:30px><a href="../b_views/b_Home.php"> Product</a> </p></center></td>
        <td><center><p style=font-size:30px><a href="../b_views/b_order_product.php"> Oder Product</a> </p></center></td>
        <td><center><p style=font-size:30px><a href="../b_views/b_complain.php"> Complain</a> </p></center></td>
        <td><center><p style=font-size:30px><a href="../b_views/b_feedback.php"> Feedback</a> </p></center></td>
        <td><center><p style=font-size:30px><a href="../b_views/b_req_product.php"> Request for Product</a></p></center></td>
		<td><center><p style=font-size:30px><a href="../b_controllers/b_logout.php">Logout</a></center></td>
    </tr>
</table>

<form action="../b_controllers/reqcheck.php" method="post">
    
<center>
        <p style=font-size:30px><h1><u>Oder of the product</u></h1></p>    
            <p style=font-size:30px>Username</p>
            <input type="text" name="username" value="">

            <p style=font-size:30px>Item Name</p>
            <input type="text" name="Itemname" value="">

            <p style=font-size:30px>Quantity</p>
            <input type="text" name="quantity" value="">

            <p style=font-size:30px>Color</p>
            <input type="text" name="color" value="">

            <p style=font-size:30px>Size</p>
            <input type="text" name="size" value="">


            <br><br><br>
<center> <input type="submit" name="bLogin" value="Submit" style="height:50px; width:100px"> </center>

                    
</center>

</form>

</body>
</html>