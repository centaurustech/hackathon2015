var isSubappBusy;
var warnType = "";
var lockType = "";
var displayType = "";
var displayPhrase = "";
var displayPhrase2= "";
var LOCK = "lock";
var WARN = "warn";
var logOffWhenCancelled = "false";
var suppressWarn = "false";
var suppressLock = "false";
var isE2e = false;
var openWins = new Array();
var openWinsCount = 0;
var execFuncName = "";
function addWinToList(winHandle)
{
openWins[openWinsCount++] = winHandle;
}
function closeOpenWins()
{
var i = 0;
for(i = 0; i < openWins.length; i++)
{
if(openWins[i])
openWins[i].close();
}
}
function isSubappBusy()
{
return ((displayPhrase != null) && (displayPhrase != ""));
}
function confirmGo(sprWarn, sprLock)
{
suppressWarn = sprWarn;
if(typeof suppressWarn == 'undefined')
suppressWarn = "false";
suppressLock = sprLock;
if(typeof suppressLock == 'undefined')
suppressLock = "false";
if(typeof mobile == 'undefined')
eval("mobile = false;");
if(typeof execFuncName != 'undefined' && execFuncName != "")
return ConfirmGo2();
else
return ConfirmGo();
}
function ConfirmGo()
{
var subappBusy = isSubappBusy();
if (subappBusy)
{
if (lockType == LOCK && suppressLock == "false")
{
if (!mobile)
alert (displayPhrase);
return false;
}
else if (warnType == WARN && suppressWarn == "false" )
{
if (mobile) return true;
if (!confirm(displayPhrase))
{
if(logOffWhenCancelled == "true")
{
logOff();
}
return false;
}
else
{
if (displayPhrase2 != "")
{
if (!confirm(displayPhrase2))
{
if(logOffWhenCancelled == "true")
{
logOff();
}
return false;
}
}
}
}
else
{
if(suppressWarn == "false" && suppressLock == "false")
alert("Dialog Error: ConfirmGo 'Type' not alert or confirm!");
}
}
return true;
}
function setSubappBusy(dType, phrase1, phrase2, execFunc)
{
if (dType == "")
{
lockType = dType;
warnType = dType;
displayPhrase = "";
displayPhrase2 = "";
execFuncName = "";
}
else
{
if(dType == WARN)
warnType = dType;
else if(dType == LOCK)
lockType = dType;
displayPhrase = phrase1;
displayPhrase2 = phrase2;
logOffWhenCancelled = "false";
execFuncName = execFunc;
}
}
function setSubappBusy2(dType, phrase1, phrase2, logOffIfCancelled, execFunc)
{
if (dType == "")
{
lockType = dType;
warnType = dType;
displayPhrase = "";
displayPhrase2 = "";
logOffWhenCancelled = "false";
execFuncName = "";
}
else
{
if(dType == WARN)
warnType = dType;
else if(dType == LOCK)
lockType = dType;
displayPhrase = phrase1;
displayPhrase2 = phrase2;
logOffWhenCancelled = logOffIfCancelled;
execFuncName = execFunc;
}
}
function ConfirmGo2()
{
var subappBusy = isSubappBusy();
if (subappBusy)
{
if (lockType == LOCK && suppressLock == "false")
{
if (!mobile)
alert (displayPhrase);
return false;
}
else if (warnType == WARN && suppressWarn == "false" )
{
if (mobile) return true;
if (confirm(displayPhrase))
{
if(typeof execFuncName != 'undefined' && execFuncName != ""){eval(execFuncName)};
return false;
}
}
else
{
if(suppressWarn == "false" && suppressLock == "false")
alert("Dialog Error: ConfirmGo 'Type' not alert or confirm!");
}
}
return true;
}
function submitLinkPostForm(formName)
{
var myForm = document.forms[formName];
myForm.submit();
}
function submitLinkPostForm2(formName, actionURL)
{
var myForm = document.forms[formName];
myForm.action=actionURL;
myForm.submit();
}
function encryptE2e(form)
{
if (!document.e2e)
return;
e2eapplet = document.e2e;
if (form.pin) {
enc = e2eapplet.encryptPIN(form.pin.value,eid);
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 5)
form.pin.maxLength = enc.length();
form.pin.value = enc;
}
if (form.pwd) {
enc = e2eapplet.encryptPassword(form.pwd.value,eid);
if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 5)
form.pwd.maxLength = enc.length();
form.pwd.value = enc;
}
}
function validateToken(form) {
return true;
}
function validateCredential(form) {
var isValid = true;
var focusField = null;
var i = 0;
var NO_SELECTION = '-1';
var fields = new Array();
oRequired = new credentials();
for (x in oRequired) {
var field = form[oRequired[x][0]];
if(typeof field != 'undefined') {
if(field.type != null) {
if(field != null && field.disabled == false) {
if (field.type == 'text' ||
field.type == 'password') {
if (field.type == 'text' || field.type == 'password') {
if (field.value == '' || field.value == null) {
focusField = field;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
}
}
}
if (fields.length > 0 && focusField != null) {
alert(fields.join('\n'));
focusField.focus();
}
if (isValid && document.getElementById("reentry"))
disablePinPad();
if (isValid && (document.getElementById("vkb") || document.getElementById("largevkb")))
hideVkb('done');
if (isValid && isE2e)
encryptE2e(form);
return isValid;
}
function validateCredentialOnClient(form) {
var isValid = true;
var focusField = null;
var i = 0;
var NO_SELECTION = '-1';
var fields = new Array();
oRequired = new credentialsonclient();
for (x in oRequired) {
var field = form[oRequired[x][0]];
if(typeof field != 'undefined') {
if(field.type != null) {
if(field != null && field.disabled == false) {
if (field.type == 'text' ||
field.type == 'password') {
if (field.type == 'text' || field.type == 'password') {
if (field.value == '' || field.value == null) {
focusField = field;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
}
}
}
if (fields.length > 0 && focusField != null) {
alert(fields.join('\n'));
focusField.focus();
}
if (isValid && document.getElementById("reentry"))
disablePinPad();
if (isValid && isE2e)
encryptE2e(form);
return isValid;
}
function validateRequired(form) {
var isValid = true;
var focusField = null;
var i = 0;
var NO_SELECTION = '-1';
var fields = new Array();
oRequired = new required();
for (x in oRequired) {
var field = form[oRequired[x][0]];
if(typeof field != 'undefined') {
if(field.type != null) {
if(field != null &&  field.disabled == false && (typeof field.readOnly == 'undefined' || field.readOnly == false) ) {
if (field.type == 'text' ||
field.type == 'textarea' ||
field.type == 'file' ||
field.type == 'select-one' ||
field.type == 'radio' ||
field.type == 'password' ||
field.type == 'hidden' ||
field.type == 'checkbox') {
var value = NO_SELECTION;
if (field.type == "select-one") {
var si = field.selectedIndex;
if (si >= 0) {
value = field.options[si].value;
}
}
else {
value = field.value;
}
if (field.type == "select-one" && value == NO_SELECTION) {
if (i == 0) {
focusField = field;
}
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
if (field.type == 'text'
|| field.type == 'password'
|| field.type == 'textarea'
|| field.type == 'hidden') {
if (field.value == '' || field.value == null) {
focusField = field;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
if (field.type == 'checkbox') {
var checked = false;
if (field.checked) {
checked=true;
}
if(checked==false){
focusField=field;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
}
else {
var checked = false;
var skipped = true;
var focusElem;
for(j=0;j<field.length;j++) {
temp = field[j];
if (temp == null
|| temp.disabled == true
|| typeof  temp.readOnly == 'undefined'
|| temp.readOnly == true) {
continue;
}
else {
skipped = false;
if (temp.type == 'radio') {
focusElem=temp;
if(temp.checked) {
checked=true;
}
}
if(temp.type == 'checkbox') {
focusElem=temp;
if(temp.checked) {
checked=true;
}
}
if(temp.type == 'text') {
focusElem=temp;
if(temp.value !='') {
checked=true;
}
}
}
}
if(checked==false && !skipped) {
focusField=focusElem;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
if (fields.length > 0 && focusField != null) {
alert(fields.join('\n'));
/* Commented out for defect 13232 fix - focusField.focus(); */
}
return isValid;
}
function validateRequired2(form) {
var isValid = true;
var focusField = null;
var i = 0;
var NO_SELECTION = '-1';
var fields = new Array();
oRequired = new required2();
for (x in oRequired) {
var field = form[oRequired[x][0]];
if(typeof field != 'undefined') {
if(field.type != null) {
if(field != null &&  field.disabled == false && (typeof field.readOnly == 'undefined' || field.readOnly == false) ) {
if (field.type == 'text' ||
field.type == 'textarea' ||
field.type == 'file' ||
field.type == 'select-one' ||
field.type == 'radio' ||
field.type == 'password' ||
field.type == 'hidden') {
var value = NO_SELECTION;
if (field.type == "select-one") {
var si = field.selectedIndex;
if (si >= 0) {
value = field.options[si].value;
}
}
else {
value = field.value;
}
if (field.type == "select-one" && value == NO_SELECTION) {
if (i == 0) {
focusField = field;
}
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
if (field.type == 'text'
|| field.type == 'password'
|| field.type == 'textarea'
|| field.type == 'hidden') {
if (field.value == '' || field.value == null) {
focusField = field;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
}
else {
var checked = false;
var skipped = true;
var focusElem;
for(j=0;j<field.length;j++) {
temp = field[j];
if (temp == null
|| temp.disabled == true
|| typeof  temp.readOnly == 'undefined'
|| temp.readOnly == true) {
continue;
}
else {
skipped = false;
if (temp.type == 'radio') {
focusElem=temp;
if(temp.checked) {
checked=true;
}
}
if(temp.type == 'checkbox') {
focusElem=temp;
if(temp.checked) {
checked=true;
}
}
if(temp.type == 'text') {
focusElem=temp;
if(temp.value !='') {
checked=true;
}
}
}
}
if(checked==false && !skipped) {
focusField=focusElem;
fields[i++] = oRequired[x][1];
isValid = false;
break;
}
}
}
}
if (fields.length > 0 && focusField != null) {
alert(fields.join('\n'));
focusField.focus();
}
return isValid;}
function validateMaxLength(form) {
return true;
}
function validateInputText(form) {
return true;
}
function getCookie(name)
{
var c=""+document.cookie;
var index = c.indexOf(name + "=");
if (index == -1) return null;
var endstr = c.indexOf(";", index);
if (endstr == -1) endstr = c.length;
return unescape(c.substring(index+name.length+1, endstr));
}
function setCookie (name,value,expires,path,domain,secure) {
document.cookie = name + "=" + value + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
}
function isEmpty(s){ return ((s == null) || (s.length == 0)) }
function isWhitespace (s)
{
var i;
var whitespace = " \t\n\r";
if (isEmpty(s)) return true;
for (i = 0; i < s.length; i++)
{
var c = s.charAt(i);
if (whitespace.indexOf(c) == -1) return false;
}
return true;
}
function displayHelp(helpURL, windowName, openWinOptions)
{
var anchor = "";
if(helpURL.indexOf("#") != -1)
{
anchor = helpURL.substring(helpURL.indexOf("#") + 1);
}
if(!isWhitespace(applicationID))
{
helpURL += (helpURL.indexOf("?") != -1) ? "&" : "?";
helpURL += "appId=" + applicationID;
}
if(!isWhitespace(screenID))
{
helpURL += (helpURL.indexOf("?") != -1) ? "&" : "?";
helpURL += "screenId=" + screenID;
}
if(!isWhitespace(transactionTypeCode))
{
helpURL += (helpURL.indexOf("?") != -1) ? "&" : "?";
helpURL += "ttc=" + transactionTypeCode;
}
if(!isWhitespace(helpVariant))
{
helpURL += (helpURL.indexOf("?") != -1) ? "&" : "?";
helpURL += "helpVariant=" + helpVariant;
}
if(!isWhitespace(anchor))
helpURL += "#" + anchor;
var winHandle = showPopup_W_XY(helpURL, windowName,openWinOptions, 160, 80);
addWinToList(winHandle);
winHandle.focus();
}
function OnClickHandler(e) {
	e = e || event;
if (window.fnCustomerAktion)
	fnCustomerAktion();
var el=null;
var flag=true;
el=e.srcElement;
while (flag && el) {
if (el.tagName=="A") {
flag=false;
if (el.protocol=="javascript:" || el.href.indexOf("javascript:")!=-1) {
execScript(unescape(el.href),"javascript");
window.event.returnValue=false;
}
}
else
el=el.parentElement;
}
}
if ((navigator.appName.indexOf("Microsoft")!=-1) && (navigator.appVersion.substring(0,1)>"3"))
if (navigator.userAgent.indexOf('Mac') == -1)
document.onclick=OnClickHandler;
function NS6OnClickHandler(event) {
if (window.fnCustomerAktionNS)
	fnCustomerAktionNS(event);
var srcElement=event.target;
if (srcElement.nodeType==1 || srcElement.nodeType==3)
srcElement=srcElement.parentNode;
if (srcElement.tagName=="A") {
if (lockType==LOCK && srcElement.onclick!=null && srcElement.onclick.toString().indexOf("confirmGo")==-1) {
alert(displayPhrase);
return false;
}
}
return true;
}
if (navigator.appName.indexOf("Netscape")!=-1  && document.getElementById  && navigator.userAgent.indexOf("Safari") == -1)
document.onclick = NS6OnClickHandler;

if (document.captureEvents)
{
if (Event.MOUSEDOWN)
{
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown = winMouseDown;
}
}
var _evt = null;
function winMouseDown(e)
{
_evt = e;
}
function winSize()
{
var wW = -1;
var wH = -1;
if (typeof(window.innerWidth) == 'number')
{
wW = window.innerWidth;
wH = window.innerHeight;
}
else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
{
wW = document.documentElement.clientWidth;
wH = document.documentElement.clientHeight;
}
else if (document.body && (document.body.clientWidth || document.body.clientHeight))
{
wW = document.body.clientWidth;
wH = document.body.clientHeight;
}
var win = new Object();
win.x = wW;
win.y = wH;
return win;
}
function popupWinSize(winProp)
{
var wW = -1;
var wH = -1;
var props = winProp.split(',');
for (var i = 0; i < props.length; i++)
{
var nv = props[i].split('=');
if (nv.length == 2)
{
var n = nv[0].replace(/^\s+/, '').replace(/\s+$/, '');
var v = nv[1].replace(/^\s+/, '').replace(/\s+$/, '');
if (n.toLowerCase() == "width" && !isNaN(parseInt(v,10))) wW = parseInt(v,10);
else if (n.toLowerCase() == "height" && !isNaN(parseInt(v,10))) wH = parseInt(v,10);
}
}
var win = new Object();
win.x = wW;
win.y = wH;
return win;
}
function getClickPos()
{
var mouseX = 0;
var mouseY = 0;
if (!_evt) _evt=window.event||arguments.callee.caller.arguments[0];
if (_evt)
{
if (typeof(_evt.pageX) == 'number' )
{
mouseX = _evt.pageX;
mouseY = _evt.pageY;
}
else if(typeof(_evt.clientX) == 'number')
{
mouseX = _evt.clientX;
mouseY = _evt.clientY;
}
}
var mouse = new Object();
mouse.x = mouseX;
mouse.y = mouseY;
return mouse;
}
function showPopup_W_XY(url, wn, winProp, X, Y)
{
var mouse = new Object();
mouse.x = X;
mouse.y = Y;
mouse.offsetX = 0;
mouse.offsetY = 0;
return doPopup(url, wn, winProp, mouse, 'W');
}
function showPopup_L_XY(url, wn, winProp, X, Y)
{
var mouse = getClickPos();
mouse.offsetX = X;
mouse.offsetY = Y;
return doPopup(url, wn, winProp, mouse, 'L');
}
function showPopup(url, wn, winProp)
{
var mouse = getClickPos();
mouse.offsetX = 25;
mouse.offsetY = 0;
return doPopup(url, wn, winProp, mouse, 'L');
}
function doPopup(url, wn, winProp, mouse, type)
{
var x = 0;
var y = 0;
var offsetX = 0;
var offsetY = 0;
url+="";
wn+="";
winProp+="";
if (winProp == null) winProp = "";
if (document.getElementById)
{
if (isNaN(window.screenX))
{
x=mouse.x+window.screenLeft
y=mouse.y+window.screenTop
}
else
{
if (type=='L')
{
offsetX = window.pageXOffset;
offsetY = window.pageYOffset;
}
x=mouse.x+window.screenX+(window.outerWidth-window.innerWidth)-offsetX;
y=mouse.y+window.screenY+(window.outerHeight-24-window.innerHeight)-offsetY;
}
}
else if (document.all)
{
x=mouse.x+window.screenLeft
y=mouse.y+window.screenTop
}
else if (document.layers)
{
if (type=='L')
{
offsetX = window.pageXOffset;
offsetY = window.pageYOffset;
}
x=mouse.x+window.screenX+(window.outerWidth-window.innerWidth)-offsetX;
y=mouse.y+window.screenY+(window.outerHeight-24-window.innerHeight)-offsetY;
}
x += mouse.offsetX;
y += mouse.offsetY;
if (x<0) x=0;
if (y<0) y=0;
var popupWin = popupWinSize(winProp);
if (popupWin.x < 0 || popupWin.y < 0)
{
var win = winSize();
if (popupWin.x < 0) popupWin.x = win.x;
if (popupWin.y < 0) popupWin.y = win.y;
}
if (screen && screen.availHeight)
{
if ((y + popupWin.y) > screen.availHeight)
y = screen.availHeight - popupWin.y;
}
if (screen && screen.availWidth)
{
if ((x + popupWin.x) > screen.availWidth)
x = screen.availWidth - popupWin.x;
}
return window.open (url, wn, winProp + ',screenX='+x+',left='+x+',screenY='+y+',top='+y);
}
function linkParentAndCloseSelf(url){
self.opener.location = url;
window.close();
}
function trim(str){
var reTrimRight = / +$/;
var reTrimLeft = /^ +/;
str = str.replace( reTrimRight, "" );
str = str.replace( reTrimLeft, "" );
return str;
}
function openPrintWin(url, wn, winProp)
{
	if(url.indexOf("JFP_TOKEN") > 0)
	{
		url = url;
	}
	
	else
	{
		if (url.indexOf("?") > 0) 
		{
			url = url + "&JFP_TOKEN="+JFP_CSRF_TOKEN;
		} 
		else 
		{
			url = url + "?JFP_TOKEN="+JFP_CSRF_TOKEN;
		}
	}
var winHandle = window.open(url, wn, winProp);
addWinToList(winHandle);
winHandle.focus();
}
var navClass="";
var L1,L2,L3,L4;
function hlMenu() {
var l = new Array("","A","B","C","D");
if(typeof L !='undefined' && L!=''){
for (var i = 1; i <= L; i++) {
var className = "NavL"+l[i]+"On";
if (navClass != "") className = navClass;
eval("var cellID = 'cell_link_'+L"+i);
eval("var linkID = 'link_'+L"+i);
if (document.getElementById(cellID) == null)
continue;
document.getElementById(cellID).className = className;
document.getElementById(linkID).className = className;
if (i == 1) {
if (document.getElementById(cellID+"L") == null)
continue;
eval("var imgID = 'image_link_'+L"+i);
document.getElementById(cellID+"L").className = className+"L";
document.getElementById(cellID+"R").className = className+"R";
var imgR = document.getElementById(imgID+"R").src;
var imgL = document.getElementById(imgID+"L").src;
var imgONR = imgR.substr(0,imgR.indexOf('spacer.gif')) + 'tab_r.gif';
var imgONL = imgL.substr(0,imgL.indexOf('spacer.gif')) + 'tab_l.gif';
document.images[imgID+"R"].src = imgONR;
document.images[imgID+"L"].src = imgONL;
}
}
}
}
var TimerId=0;
var NumExt=0;
var bTimerId=false;
var img=new Image();
function TimeStamp()
{
var zDate = new Date;
var zTime = zDate.getTime();
return zTime.toString();
}
function clrScrTOwinp()
{
if (bTimerId) { clearTimeout(TimerId); bTimerId = false }
}
function setScrTO(minutes)
{
clrScrTOwinp();
NumExt  = 0;
TmrWarn = minutes;
Begin = new Date();
TimerId = setTimeout('getmoretime(TmrWarn)', (TmrWarn-1)*60*1000);
bTimerId = true
}
function TerminateTO(sMsg)
{
clrScrTOwinp()
alert(sMsg);
SignOff = true;
window.location = SignOffLink + "&_ts=" + TimeStamp();
}
function GetTimeDiff(begin)
{
var end = new Date();
return end.getTime() - begin.getTime();
}
function getmoretime(TmrWarn)
{
window.focus();
Begin = new Date();
NumExt++;
if (NumExt > nAllowed)
{
window.location = SignOffLink + "&_ts=" + TimeStamp();
TerminateTO(TimerMsg2)
return;
}
alert(TimerMsg1)
if (GetTimeDiff(Begin) < 55000)
{
img.src = KeepAliveLink + "?_ts=" + TimeStamp();
clrScrTOwinp()
TimerId = setTimeout('getmoretime(TmrWarn)', (TmrWarn-1)*60*1000);
bTimerId = true
Begin = new Date();
}
else
{
TerminateTO(TimerMsg2)
}
}
function doOnload()
{

hlMenu();
pageLoaded = true;
if(typeof JPSOnload != 'undefined' && typeof callJPSOnload != 'undefined')
JPSOnload();
if(typeof JBAOnload != 'undefined' && typeof callJBAOnload != 'undefined')
JBAOnload();
if(typeof JSOOnload != 'undefined' && typeof loadCookie != 'undefined' && typeof callJSOOnload != 'undefined')
JSOOnload();
loadCookie();
}
function doUnload()
{
closeOpenWins();
unloadCookie();
}
//adding an empty function as UnloadCookies is not defined.
function unloadCookie(){
	
}

//KBA functions
var xmlhttp = null;
var urlToSubmit = null;  
var KBAconfirmPhrase;
function createAjaxObject(){
if (window.XMLHttpRequest){ // code for Firefox, Opera, IE7, etc.
  		return new XMLHttpRequest();   		
  	}	
	else if (window.ActiveXObject){ // code for IE6, IE5
  		return new ActiveXObject("Microsoft.XMLHTTP");
  	}
}
function checkKBA(applnurl,url,caller){
	kbaCallback = caller||null;
	xmlhttp = createAjaxObject();	
	urlToSubmit = _jcontext+ url;
	var url = "/JRS/portal/getTransactionType.do?url="+applnurl;
	if (xmlhttp!=null){
	  xmlhttp.onreadystatechange=processStateChange;	  
	  xmlhttp.open("POST",url,true);
	  xmlhttp.send(null);		  
  	}else{
			document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
			document.forms["ajaxform"].method = "POST";
			document.forms["ajaxform"].submit();
  	}
}
	  
function processStateChange(){	
	if (xmlhttp.readyState==4){// 4 = "loaded" 
	 	 if (xmlhttp.status==200){// 200 = "OK"
	 	   	var response = xmlhttp.responseText;
	 	    if(response.indexOf("false")== 0){
	 	    	if (_locale == "en_US_VIP_USPTL" ){
 	    	   		if (!confirm(KBAconfirmPhrase)) {	
						return false;
					}else{
						document.forms["ajaxform"].action=urlToSubmit;
						document.forms["ajaxform"].method = "POST";
						document.forms["ajaxform"].submit();
					}	 	    		
	 	    	}else{
	  				grayOut(true);
	  			}
	   		}else if(response.indexOf("error")== 0){
					document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
					document.forms["ajaxform"].method = "POST";
					document.forms["ajaxform"].submit();
	   		}else{
					if(kbaCallback) kbaCallback();
					else {
						document.forms["ajaxform"].action = urlToSubmit;
						document.forms["ajaxform"].method = "POST";
						document.forms["ajaxform"].submit();
					}
	   		}
	   }else{
	   	  		document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
	   	  		document.forms["ajaxform"].method = "POST";
				document.forms["ajaxform"].submit();
	    }
 	}
 }
 
function grayOut(vis,wait) {  
  var options = options || {}; 
  var zindex = options.zindex || 501;
  var opacity = options.opacity || 70;
  var opaque = (opacity / 100);
  var bgcolor = options.bgcolor || '#FFF';
  var dark=document.getElementById('hideScreen');
  var browserName=navigator.appName; 
  if (!dark) {
  
    var tbody = document.getElementsByTagName("body")[0];
	var tnode;
	if (browserName=="Microsoft Internet Explorer") {
		tnode = document.createElement('iframe'); 
		tnode.src = "/JPS/portal/images/pixel.gif";
	} else {
		tnode = document.createElement('div'); 
	}
        tnode.style.position='absolute';
        tnode.style.top='0px';
        tnode.style.left='0px'; 
        tnode.style.overflow='hidden';        
        tnode.style.display='none'; 
        tnode.id='hideScreen';
    	tbody.appendChild(tnode);                      
    	dark=document.getElementById('hideScreen');
  }
  if (vis) {
       
		var alertWindow = document.getElementById('alertWindow');
  		alertWindow.style.top = document.body.scrollTop;
		alertWindow.style.display = '';
		if(wait)
		{
		document.getElementById("alertWindowContent").style.display = "none";
		document.getElementById("waitMessage").style.display = "block";
		document.forms[subAppContextName].submit();
		}
    if( document.body && ( document.body.scrollWidth || document.body.scrollHeight ) ) {
		var pageWidthNum = document.body.offsetWidth+10;
        var pageWidth = pageWidthNum+'px';
		var pageHeightNum = document.body.scrollHeight+20;
		var pageHeight = pageHeightNum+'px';
    } else if( document.body.offsetWidth ) {
		var pageWidthNum = document.body.offsetWidth+10;
		var pageWidth = pageWidthNum+'px';
		var pageHeightNum = document.body.offsetHeight+20;
		var pageHeight = pageHeightNum+'px';
    } else {
		var pageWidth='100%';
		var pageHeight='100%';
    }   
		dark.style.opacity=opaque;                      
		dark.style.MozOpacity=opaque;                   
		dark.style.filter='alpha(opacity='+opacity+')'; 
		dark.style.zIndex=zindex;        
		dark.style.backgroundColor=bgcolor;  
		dark.style.width=pageWidth;
		dark.style.height=pageHeight;
		dark.style.display='block';
		window.location.hash='aw';
  } else {  		
		document.getElementById('alertWindow').style.display = 'none';
     	dark.style.display='none';     	  
  }
}

function btn_continue() {		
	document.getElementById("alertWindowContent").style.display = "none";
	document.getElementById("waitMessage").style.display = "block";
	//document.getElementById("waitMessage").style.visibility = "visible";
	if(kbaCallback) {
		grayOut(false);
		kbaCallback();
	} else {
		document.forms["ajaxform"].action = urlToSubmit;
		document.forms["ajaxform"].submit();
	}
}

function btn_noThanks() {		
		top.sof();
		GBhide();		
}

function GBhide() {
  parent.parent.GB_hide();
}
var child_win;

function launchPopupForTY(url,winName,winParams){
	if(winName=='_top'){top.location.href=url; return;}
	if(winName==null||winName=='')
		winName='childWin';
	if(child_win!=null&&!child_win.closed)
		child_win.close();
	child_win=window.open(url,winName,winParams);
	udpateTYWindowHandle(child_win);
}
var xmlhttpWindow;
function udpateTYWindowHandle(child_win)
{			
			xmlhttpWindow = createAjaxObject();
			var url = "/JRS/portlet/thankyou/TYChildWindow.do?TYWindowHandle="+child_win+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
			if (xmlhttpWindow!=null){
		  	xmlhttpWindow.open("POST",url,true);
		 	xmlhttpWindow.send(null);
	 	}
}

//copied the following functions from cssPref.js to resolve the error loadCookie() not defined
function loadCookie() {
	  var cookie = readCookie("style");
	  var title = cookie ? cookie : showPrefCSS();
	  loadCSS(title);
}