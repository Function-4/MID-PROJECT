<?php
require('../m_controllers/m_header.php');
?>
<html>
    <head>
	    <title>Provide Salary</title>
    </head>
    <body>
        <table>
            <tr>
                <td>
                    <form method="POST" action="../m_controllers/salaryCal.php">
            		<input type="submit" name="salary" value="Provide Salary to Worker" style="height:150px; width:300px">
        			</form>
                </td>
            </tr>
            <tr>
                <td>
                    <form method="POST" action="deleteSeller.php">
            		<input type="submit" name="dSeller" value="Provide Salary to Seller" style="height:150px; width:300px">
        			</form>
                </td>
            </tr>
        </table>
    </body>
</html>