
$(window).load(function() {
												// Animate loader off screen
												$("#loading_screen").fadeOut("slow");;
											});
window.onload = initPage;

function initPage()
{
	console.log("init page");
	initLoginPage();
}

function initLoginPage()
{
	console.log("initlOGIN PAGE");
	Login_butt=document.getElementById("login_butt");
	Login_butt.onclick = ShowLogInPanel;
}

function ShowLogInPanel()
{
	console.log("Login Panel");
	login_container = document.getElementById("log_in_container");
	login_container.style.display ="block";
	var $isAnimate = $('#log_in_content');
	$isAnimate.addClass('animated fadeIn'); 
	
	$('#log_in_container').on('click', function(e) {
														  if (e.target !== this)
															return;
																
																login_container.style.display ="none";
													 });
}
$(document).ready(

					
					function()
						{
							$('#page2_img').hide();
							$('#full_page_wrapper').fullpage({
							
																	verticalCentered: false,
																	 
							
							});
						}
					
				);	