<?php 
	session_start();

	
	unlink('../m_models/tempSalary.txt');
	$salary = '2';
	
	
				$file = fopen('../m_models/worker.txt', 'r');
				while (!feof($file)) 
                {
					$userfile = fgets($file);
					if($userfile == null)
                    {
						break;
					}
					$user = explode("|", $userfile);
				
				$wsalary = $user[0]."|".$user[1]."|".$user[2]."|".$user[3]."|".$user[4]."|".$user[5]."|".$user[6]+$salary."\r\n";
				
				$wfile = fopen('../m_models/tempSalary.txt', 'a');
				fwrite($wfile, $wsalary);
				fclose($wfile);
			}
			copy('../m_models/tempSalary.txt','../m_models/worker.txt');
?>