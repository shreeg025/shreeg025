window.onload = home;
BgIndex=1;
$(window).load(function() {
												// Animate loader off screen
												$("#loading_screen").fadeOut("slow");;
											});
function home()
{	
		initFullpage();
		initTyped();
		  setInterval(changeBG, 5800);
		  initLoginPage();
		  setTimeout(changeLoadBG, 2000);
}

function changeLoadBG()
				{
					CurrentColor++;
					console.log(CurrentColor);
					O = document.getElementById("Load_O");
					if(CurrentColor>NoOfColors)
						{
							CurrentColor =1;
						}
					
					if(CurrentColor ==1)
						{
							O.style.backgroundImage="url('../images/utils/logo_O.png')";
						}
					else if(CurrentColor ==2)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_pink_R.png')";	
						}
					else if(CurrentColor ==3)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_turquoise_R.png')";	
						}
					else if(CurrentColor ==4)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_blue_R.png')";	
						}
					else if(CurrentColor ==5)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_green_R.png')";	
						}	
					else if(CurrentColor ==6)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_yellow_R.png')";	
						}
					else if(CurrentColor ==7)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_red_R.png')";	
						}
					else if(CurrentColor ==8)	
						{
							O.style.backgroundImage="url('../images/utils/logo_O_black_R.png')";	
						}
					setTimeout(changeLoadBG, 2000);	
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

function initFullpage()
{
		$('#full_page_wrapper').fullpage({
							
																	verticalCentered: false,
																	onLeave: function(index, nextIndex, direction) 
																				{
																						if(direction=="down" && index == 1)
																							{
																								console.log("2nd page is gonna load..load the animation");
																								var $isAnimate = $('#client_side_tab');
																								 $isAnimate.addClass('animated fadeInUp'); 
																								  $isAnimate.css('animation-delay', '.2s');
																								  var $isAnimate = $('#sv_side_tab');
																								 $isAnimate.addClass('animated fadeInUp'); 
																								  $isAnimate.css('animation-delay', '.6s');	
																								  
																								    var $isAnimate = $('#db_side_tab');
																									 $isAnimate.addClass('animated fadeInUp'); 
																								  $isAnimate.css('animation-delay', '1s');
																									
																								 DecreaseHeaderSize();	
																							}
																						if(direction=="up" && index == 2)
																							{
																								console.log("first page is gonna load..invert the header size");
																									ResizeHeaderSize();	
																							}
																						if(direction=="down" && index == 2)
																							{	
																								console.log("third page is gonna load... start up animation...");
																								var $isAnimate = $('#web_hosting_tab');
																								 $isAnimate.addClass('animated fadeInUp'); 
																								  $isAnimate.css('animation-delay', '.2s');
																								  var $isAnimate = $('#support_tab');
																								 $isAnimate.addClass('animated fadeInUp'); 
																								  $isAnimate.css('animation-delay', '.2s');
																								   var $isAnimate = $('#web_design_tab');
																								 $isAnimate.addClass('animated fadeInLeft'); 
																								  $isAnimate.css('animation-delay', '.2s');
																								   var $isAnimate = $('#seo_tab');
																								 $isAnimate.addClass('animated fadeInRight'); 
																								  $isAnimate.css('animation-delay', '.2s');
																							}
																						if(direction=="down" && index == 3)
																							{
																								console.log("Fourth page is gonna load... Load up the images");							
																								
																								
																							}																							
																							
																				}
							});
}

function initTyped()
{
	var typed = new Typed("#typing", {
		  // Waits 1000ms after typing "First"
		  strings: ["Web Development.", "  UI/UX design.","  Database design.","Search Engine Optimization.","Full Stack Development."],
		  stringsElement: null,
		   typeSpeed: 80,		   
		   backSpeed: 50,
		    backDelay: 2500,
			loop : true 
		});

}
function DecreaseHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = "0";
		header_tab.style.paddingTop = "0";
		
		/* var text_input = $('.header_nav_tabs');
		text_input.css("font-size", "90%");
		
		logo_id = document.getElementById("logo_id");
		logo_id.style.width ="5%";
	*/	
}

function ResizeHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = ".5%";
		header_tab.style.paddingTop = ".5%";
		
	/*	 var text_input = $('.header_nav_tabs');
		text_input.css("font-size", "110%");
		
		logo_id = document.getElementById("logo_id");
		logo_id.style.width ="6%";
	*/
}
function changeBG()
{
		if(BgIndex <5)
		{
			console.log("change BG");
			BgIndex=BgIndex+1;
			bgUrl = "home_BG_"+BgIndex+".jpg";
			fullURL = "url('./images/utils/"+bgUrl+"')";
			console.log(fullURL);
			document.getElementById("section_1").style.backgroundImage = fullURL;
		}
		else if(BgIndex ==5)
		{
			BgIndex =1;
			bgUrl = "home_BG_"+BgIndex+".jpg";
			fullURL = "url('./images/utils/"+bgUrl+"')";
			console.log(fullURL);
			document.getElementById("section_1").style.backgroundImage = fullURL;
		}
}