var agt=navigator.userAgent.toLowerCase();
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);
var is_DOM   = (document.getElementById) ? true : false;
var is_nav = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
            && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
            && (agt.indexOf('webtv')==-1));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4up = (is_nav && (is_major >= 4));
var is_nav6up = (is_nav && is_DOM);
var is_ie = (agt.indexOf("msie") != -1);
var is_ie3 = (is_ie && (is_major < 4));
var msie_vers_start = agt.indexOf("msie")+5;
var msie_real_vers = parseFloat(agt.substring(msie_vers_start, msie_vers_start+3));
var is_ie4  = (is_ie && (is_major == 4) && (msie_real_vers < 5));
var is_ie4up  = (is_ie  && (is_major >= 4));
var is_ie5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.")!=-1));
var is_ie5up  = (is_ie  && !is_ie3 && !is_ie4);
var is_ie6  = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1));
var is_aol   = (agt.indexOf("aol") != -1);
var is_aol3  = (is_aol && is_ie3);
var is_aol4  = (is_aol && is_ie4);
var is_mac    = (agt.indexOf("mac")!=-1);
var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
var ver4=(is_ie4up||is_nav4up)?1:0;
if (typeof _site == 'undefined') _site="CBOL";
if (typeof _dh == 'undefined' && typeof _d != 'undefined') _dh=_d;
if (_site == 'JFP' && typeof _j != 'undefined') _dh=_j+'/JRS';
if (typeof deviceType != "undefined" && deviceType == "0") {
	/*if(_site != 'CITI')
		document.write('<script type=text/javascript src='+_dh+'/global_utils.js DEFER></script>');
	*/
	document.write("<link rel='stylesheet' type='text/css' href='"+_dh+"/cm/css/top_nav/top_nav.css'>");
	if(typeof _locale != 'undefined' && _locale == 'es_US_USPTL')
		document.write("<link rel='stylesheet' type='text/css' href='"+_dh+"/cm/css/top_nav/top_nav_es_US.css'>");
	if (is_ie)
		document.write("<link rel='stylesheet' type='text/css' href='"+_dh+"/cm/css/top_nav/top_nav_ie.css'>");
}