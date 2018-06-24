window.onload = project;
CurrentProject = null; //Current project FLAG {0,1,2} index;
NoOfColors = 8;
CurrentColor =1;
$(window).load(function() {
												// Animate loader off screen
												$("#loading_screen").fadeOut("slow");;
													
preload([
    '/images/utils/home_BG_1.jpg',
    '/images/utils/home_BG_2.jpgs',
    '/images/utils/home_BG_3.jpg',
    '/images/utils/home_BG_4.jpg',
    '/images/utils/home_BG_5.jpg'
]);
																				
											});
											
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
     
      
         (new Image()).src = this;
    });
}


preload([
    '/images/utils/home_BG_1.jpg',
    '/images/utils/home_BG_2.jpgs',
    '/images/utils/home_BG_3.jpg',
    '/images/utils/home_BG_4.jpg',
    '/images/utils/home_BG_5.jpg'
]);
function project()
{
	initFullpage();
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
																	 anchors: ['section1', 'section2', 'section3'],
																	
																	 
																	onSlideLeave: function( anchorLink, index, slideIndex, direction) 
																				{
																				
																				if(direction=="right" && slideIndex == 0)
																				
																							{
																							
																									
																								DecreaseHeaderSize();	
																							}
																					if(direction=="left" && slideIndex == 1)
																							{
																								ResizeHeaderSize();
																							}
																				},
																	afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) 
																				{
																					console.log(slideAnchor,slideIndex);
																					if(  slideIndex == 1) 
																						{
																							$('.fp-controlArrow.fp-prev').show()
																							$.fn.fullpage.setAllowScrolling(false, 'up');
																							$.fn.fullpage.setAllowScrolling(false, 'down');
																							$.fn.fullpage.setKeyboardScrolling(false, 'up,down');
																											
																						}
																					if(slideIndex == 0)
																						{
																							ResizeHeaderSize();
																							$('.fp-controlArrow.fp-prev').hide()
																							$.fn.fullpage.setAllowScrolling(true, 'up');
																							$.fn.fullpage.setAllowScrolling(true, 'down');
																							$.fn.fullpage.setKeyboardScrolling(true, 'up,down');
																						}
																				},
																	afterLoad: function(anchorLink, index) 
																				{
																						if(index ==1)
																						{
																							$('.fp-controlArrow.fp-prev').hide()
																						}
																				
																				}
							});
						
						
}



function DecreaseHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = "0";
		header_tab.style.paddingTop = "0";
		
		
}

function ResizeHeaderSize()
{
		header_tab = document.getElementById("home_header");
		header_tab.style.paddingBottom = ".5%";
		header_tab.style.paddingTop = ".5%";
		
		
}