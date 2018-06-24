<?php 
		
		$data = json_decode(file_get_contents('php://input'), true);

		$full_name = $data['f_name'];
		$email_id =	$data['e_Id'];
		$msg_data =	$data['m_data'];
			
		if($full_name != ""  && $email_id != "" && $msg_data!="")
			{
				
				// The message
				$message = $msg_data."\nName :".$full_name."\n Email Id:".$email_id;
				
				// In case any of our lines are larger than 70 characters, we should use wordwrap()
				$message = wordwrap($message, 100, "\r\n");
				
				// Send
				mail('support@eosdeveloper.in', 'portfolio traffic', $message);
				echo 1;
			}
		else 
			{
				echo 0;
			}
?>