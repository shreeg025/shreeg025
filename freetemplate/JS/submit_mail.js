var xmlHttp = createXmlHttpRequestObject();


$(window).load(function() 
{
	submitMail();


});



function submitMail()
{
	console.log("sumit mail contact us");
	submit_butt = document.getElementById("submit_mail");
	submit_butt.onclick = getDetails;
}

function getDetails()
{
	full_name= document.getElementById("full_name").value;
	email_Id = document.getElementById("e_id").value;
	msg_data = document.getElementById("msg").value;
	console.log(full_name,email_Id,msg_data);
	
		if(full_name != ""  && email_Id != "" && msg_data != "")
			{
					if(xmlHttp)
					{
							xmlHttp.open("POST", "../PHP/send_mail.php", true);
							xmlHttp.setRequestHeader("Content-type", "aapplication/json;charset=UTF-8");
							xmlHttp.onreadystatechange = ConfirmMail;
							xmlHttp.send(JSON.stringify({f_name : full_name,													
													e_Id : email_Id,
													m_data : msg_data
													}));	
						
					}
				else 
					{
						console.log("xml file not configured");
					}
			}
		else 
			{
				console.log("data incorrect !!");
			}
}


function ConfirmMail()
{
	if (xmlHttp.readyState == 4)
			{
			
				if (xmlHttp.status == 200)
						{
							try
								{
										response = xmlHttp.responseText;
										if(response == 1)
										{
											console.log("show confirm mail slip");
											document.getElementById("confirm_container").style.display = "block";
											var $isAnimate = $('#mail_confirm');
											 $isAnimate.addClass('animated fadeInDown'); 
											full_name= document.getElementById("full_name").value="";
											email_Id = document.getElementById("e_id").value="";
											msg_data = document.getElementById("msg").value="";
											
											setTimeout(FadeOut, 2000) 
											
										}
										else 
										{
										
										}
								}
							catch(e)
								{
									// display error message
									alert("Error reading the response: " + e.toString());
								}
						}
					else
						{
							// display status message
							alert("There was a problem retrieving the data:\n" +
									xmlHttp.statusText);
						}
			}
}

function FadeOut()
{
	 var $secAni = $('#mail_confirm');										  
	 $secAni.addClass('animated fadeOutUp');  
	
}	