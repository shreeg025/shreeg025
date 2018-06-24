window.onload = initPage();
window.onscroll = screenChange;
var headerFlag = true;
var aboutFlag = 0;
var contactFlag = 0;
function initPage()
	{
		setOnClick();
		setBG();
		
	}
	
function showOnView()
	{
		var imgEle = document.getElementById("main").getElementsByTagName("img");	
		var ycoodinate;
		var bottom_of_window;
		for(var i=0;i<imgEle.length;i++)
			{
				ycoordinate = $(imgEle[i]).offset().top + 50;
				
				bottom_of_window = $(window).scrollTop() + $(window).height();
				
				if( bottom_of_window > ycoordinate )
				{	
					
					imgEle[i].style.animationName = "img-animate ";
					imgEle[i].style.WebkitAnimationName = "img-animate";          
				}
			}
	}
function setBG()
	{
	 var x  = Math.floor((Math.random() * 6) + 1);
	 console.log(x);
	 var ele = document.getElementById("head-image-container");
	 var fullImageUrl = "url('images/head/img-"+x+".jpg')";
	 ele.style.backgroundImage = fullImageUrl;
	}
function screenChange()
	{
		showOnView();
		var h=document.body.scrollTop;
		var header = document.getElementById("header-tabs");	
		var tab = document.getElementById("tab-container");
		var butt_1 = document.getElementById("button-1");
		var butt_2 = document.getElementById("button-2");
		console.log(document.body.scrollTop);
		
		if(document.body.scrollTop >= 800 || document.documentElement.scrollTop>= 800)
			{
				
				butt_1.style.display = "block";
				butt_2.style.display = "block";
				tab.style.display = "none";
				
				
				
			}
		else if(document.body.scrollTop < 800 || document.documentElement.scrollTop< 800)
			{
				
				
				butt_1.style.display = "none";
				butt_2.style.display = "none";
				
				
				tab.style.display = "flex";
			}
			
			
		if(document.body.scrollTop >= 800 || document.documentElement.scrollTop >=800)
			{
				if(headerFlag == true)
					{
						var changeHeader = document.getElementById("fixed-header");
						changeHeader.style.display = "block";
						header.style.display = "none";
					}
			}
		else if(document.body.scrollTop < 800 || document.documentElement.scrollTop < 800)
			{
				if(headerFlag == true)	
					{
						var changeHeader = document.getElementById("fixed-header");
						changeHeader.style.display = "none";
						header.style.display = "block";
					}	
			}	
			
		
		
	}
	
function setOnClick()
	{
		//initializing about and contact
		var headAbout = document.getElementById("head-about");
		var headContact = document.getElementById("head-contact");
		var butt_1 = document.getElementById("button-1");
		var butt_2 = document.getElementById("button-2");
		
		headAbout.onclick = showAbout;
		butt_1 .onclick = showAbout;
		
		headContact.onclick = showContact;
		butt_2.onclick  = showContact;
		//initializing img elements
		var imgEle = document.getElementById("main").getElementsByTagName("img");	
		
		
							
		for(var i=0;i<imgEle.length;i++)
				{
					imgEle[i].onclick = showFullImage;
				}
		
		//initializing down arrow
		
								
		$("#down-arrow").click(function() {
		$('html, body').animate({
        scrollTop: $("#header-tabs").offset().top
								}, 1000);
								
								});
		
	}
function showAbout()
	{
		
		
		console.log("show About tab");
		var ele2 = document.getElementById("contact-tab");
		
		var ele = document.getElementById("about-tab");
		ele.style.display = "block";
		
		ele2.style.animationName = "tab-animate-reverse ";
		ele2.style.WebkitAnimationName = "tab-animate-reverse ";
		
		
		ele.style.animationName = "tab-animate ";
		ele.style.WebkitAnimationName = "tab-animate ";
		
		contactFlag = 0;
		aboutFlag++;
		if(aboutFlag > 1)
			{
				 ele.style.animationName = "tab-animate-reverse ";
				ele.style.WebkitAnimationName = "tab-animate-reverse ";
				aboutFlag = 0;
				
			}
			
		
		
		
		var closeEle = document.getElementById("close-about-tab");
		closeEle.onclick = function()
									{
									 ele.style.animationName = "tab-animate-reverse ";
									 ele.style.WebkitAnimationName = "tab-animate-reverse ";
									 aboutFlag = 0;
									}
		
	}
	
function showContact()
	{
		console.log("show contact tab");
		var ele2 = document.getElementById("about-tab");

		var ele = document.getElementById("contact-tab");
		ele.style.display = "block";
		
		ele2.style.animationName = "tab-animate-reverse ";
		ele2.style.WebkitAnimationName = "tab-animate-reverse ";
		
		ele.style.animationName = "tab-animate ";
		ele.style.WebkitAnimationName = "tab-animate "
		
		aboutFlag = 0;	
		contactFlag++;	
		if(contactFlag >1)
			{
				 ele.style.animationName = "tab-animate-reverse ";
				ele.style.WebkitAnimationName = "tab-animate-reverse ";
				contactFlag = 0;
			}
			
		
		
		var closeEle = document.getElementById("close-contact-tab");
		closeEle.onclick = function()
									{ 
									  ele.style.animationName = "tab-animate-reverse ";
									 ele.style.WebkitAnimationName = "tab-animate-reverse ";
									 contactFlag = 0;
									}
	}
function showFullImage()
	{
		var showalbum = document.getElementById("full-res-container");
		var stopHeader= document.getElementById("fixed-header");
		stopHeader.style.display = "none";
		showalbum.style.display = "block";
		headerFlag = false;
		var c =  this.src.replace("img", "full");
		
		var imageHolder = document.getElementById("full-res");
		
		var imageFullUrl = "url('"+c+"')";
		imageHolder.style.backgroundImage =  imageFullUrl;
		
	//	var imageHolder = document.getElementById("image-holder");
	//		var imageFullUrl = "url('images/home/img-"+c[1]+".jpg')";
	//		imageHolder.style.backgroundImage = imageFullUrl;
	
		var ele = document.getElementById("full-res-close");
		ele.onclick = function ()
						{		
							var startHeader= document.getElementById("fixed-header");
							startHeader.style.display = "block";
							showalbum.style.display = "none";
							headerFlag = true;
						}
	}
	
function scrollDown()
		{
			var header = document.getElementById("header-tabs");	
			var changeHeader = document.getElementById("fixed-header");
				changeHeader.style.display = "block";
				header.style.display = "none";
		}