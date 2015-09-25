
// pixel beacon code for Sapient.  Updated 10/20/2011

// until the OPSE code release, force load this pixel on dashboard
if(bv_masterID =='undefined') 
	{var bv_masterID=' ';}
else {
	if(_pid=='JPSINFRA_MyCitiHome' || _pid=='JPSINFRA_Home') { btPixelBeacon(23037); }
}
btPixelBeacon();

function btPixelBeacon(pageid) {
	_pid = _pid.replace('JRSPRODSERV_','');
	_pid = _pid.replace('JRSPLANNING_','');   
	window._pgi = window._pgi || "";         
	var pixelInit = (window.onload) ? window.onload : function () { };
	var _btl = document.location + "";
	var _btr = document.referrer + "";
	
	var pixID = (!isNaN(pageid) ? 'id=' + pageid : 'id=44715&PageID=' + _pid);
	
	var pixelSrcURL = window.location.protocol + '//' + _pgi + '/track/s/?' + pixID + '&masterID=' + bv_masterID + '&ref=' + escape(_btr) + '&p=' + escape(_btl) + '&random=' + Math.floor(Math.random() * 1000000000);

	window.onload = function () {
		pixelInit();
		var btPixelScript;
		btPixelScript = document.createElement("script");
		btPixelScript.src = pixelSrcURL;
		btPixelScript.type = "text/javascript";
		btPixelScript.id = "BTPixScript";
		document.getElementsByTagName("body")[0].appendChild(btPixelScript);
	}
}