function createXmlHttpRequestObject()
{
	// stores the reference to the XMLHttpRequest object
	var xmlHttp;
	// if running Internet Explorer 6 or older
	if(window.ActiveXObject)
	{
		try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
		catch (e) 
			{
					xmlHttp = false;
			}
	}
	// if running Mozilla or other browsers
	else
	{
		try {
				xmlHttp = new XMLHttpRequest();
			}
		catch (e) 
			{
				xmlHttp = false;
			}
	}
	// return the created object or display an error message
	if (!xmlHttp)
		alert("Error creating the XMLHttpRequest object.");
	else
		return xmlHttp;
}