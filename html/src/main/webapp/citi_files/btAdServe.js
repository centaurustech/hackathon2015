
var pgi_r = Math.floor(Math.random() * 1000000000);

if(typeof _rsid == 'undefined') { var _rsid = ""; }
if(typeof pgi_masterID == 'undefined') { var pgi_masterID = ""; } 
if(typeof pgi_v == 'undefined') { var pgi_v = ""; }

if (typeof mboxBTvars != 'undefined' && mboxBTvars!='') { 
	pgi_v = pgi_v + '%26' + escape(mboxBTvars); 
}

function adServe(type, pid, divName) {
	if ((typeof pid == 'undefined') || (pid == "")) pid = _pid;
	var scriptSRC_URI;

	if (!isNaN(pid))
		scriptSRC_URI = window.location.protocol + '//' + _pgi + '/a/s/?BT_CON=1&BT_PID=' + pid + '&r=' + pgi_r + '&masterID=' + pgi_masterID + '&_jfp=' + _j + '&BT_EXT=' + pgi_v + '&rateSheetId=' + _rsid;
	else
		scriptSRC_URI = window.location.protocol + '//' + _pgi + '/a/s/?BT_CON=1&PageID=' + pid + '&adPlacement=' + type + '&r=' + pgi_r + '&masterID=' + pgi_masterID + '&_jfp=' + _j + '&BT_EXT=' + pgi_v + '&rateSheetId=' + _rsid;

	if ((typeof divName != 'undefined') || (divName != '')) 
		scriptSRC_URI += '&target=' + divName;

	BTScriptLoad(scriptSRC_URI);
}

var element;
function BTScriptLoad(srcURL) {
	if (element != null) { document.getElementById('BTScript').removeElement };
	element = document.createElement("script");
	element.src = srcURL;
	element.type = "text/javascript";
	element.id = "BTScript";
	document.getElementsByTagName("head")[0].appendChild(element);
}