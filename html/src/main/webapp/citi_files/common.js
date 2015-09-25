var tempe='';
var temppM='';
var temppV='';
var tempHref='';
var cancelFlag = false;

function cancelAOFunc()
{
   jQuery('#cancelAOConfirm').jfpwidget('open');
}
function clearCancelAO()
{
   jQuery('#cancelAOConfirm').jfpwidget('close');
}

function capturePromoID(){
        var _promo=tv(location.search.substring(1,location.search.length).split('&'),'Promo_ID')
        if(_promo!=''){
                var s='_promo='+_promo+'; path=/';
                document.cookie=s;
        }
}
function setPromoID() {
        var cookie=document.cookie.split("; ")
        var _promo=tv(cookie,'_promo');
        if(_promo!='') promoID=_promo;
}
//This change is added by for defect 19327(R121 SLP). Copied the following lines from production env.
//Putting these functions as these are required to capture the Promo ID. These are still defined in branding_universal.js
//but as the file is being included at the end of the page, not having access to this file.
function isCustomer() { return (_u == 'customer'); }
function isBanker() { return (_u == 'banker'); }
function isInvestor() { return (_u == 'investor'); }
function isMember() { return (isBanker() || isInvestor() || isCustomer()); }
//Changes Ends
capturePromoID();
setPromoID();
if(typeof promoID=='undefined' || promoID=='') promoID=isMember()?'CKCM':'CKCV';

function applyNow(e,pM,pV){
                var spfflag =getspfuser();
                var relonlyflag =getrelonlyuser();

                if(typeof(pM)=='undefined')pM='';
                if(typeof(pV)=='undefined')pV='';
                if(typeof(spfflag)=='undefined'){
                        var spfflag ='';
                }
                if(typeof(relonlyflag)=='undefined'){
                    var relonlyflag ='';
            }


if(cancelFlag && temppM == pM && temppV == pV){

e.href = tempe;
}

                if (pV=='') pV=pM;
//              commented in SPF. Splited the logic isMemeber logic
//              var params = 'Promo_ID='+promoID+(isMember()?pM:pV);
                var params = 'Promo_ID='+promoID;
                if(isMember()){
                        if(spfflag == 'true' || relonlyflag == 'true'){
                                params +=pV;
                        }else{
                                params +=pM;
                        }

                }else{
                        params +=pV;
                }
                var href = e.href;
                if(href.indexOf('javascript:') == 0){
                        var i1=href.indexOf('\'');
                        var i2=href.indexOf('\'',i1+1);
                        if(i2>i1) {
                                var s1 = href.substring(0,i2);
                                var s2 = href.substring(i2);
                                href = s1 + (s1.indexOf('?')<0 ? '?' : '&') + params + s2;
                        }
                } else {
                        if(href.indexOf('?')==-1)
                                href+='?';
                        else
                                href+='&';

//                      commented in SPF. Splited the logic isMemeber logic
//                      href+='Promo_ID='+promoID+(isMember()?pM:pV);
                        href+='Promo_ID='+promoID;
                        if(isMember()){
                                if(spfflag == 'true' || relonlyflag == 'true'){
                                        href +=pV;
                                }else{
                                        href +=pM;
                                }

                        }else{
                                href +=pV;
                        }
                }
if(showGSAlert=='false'){
                e.href=href;

}else{
tempHref=href;
var result = stateNoMatchAlert(e,pM,pV);
e.href="javascript:void(0)";
}

}

function applyNowExtSite(e){
e.href=e.href.replace('?','?Promo_ID='+promoID+'&');
}
function applyHE(e) {
        var cookie=document.cookie.split("; ")
        var sc=tv(cookie,'_mhe_sc');
        var p = '?Promo_ID='+promoID;
        if (sc!='')p+='&sc='+sc;
        if(e.href.indexOf('?')==-1)
                e.href+=p;
        else
                e.href=e.href.replace('?',p+'&');
}
function tv(l,t){
        for(var i=0;i<l.length;i++){
                var p=l[i].split('=');
                if(p[0]==t)
                        return p[1];
        }
        return '';
}
function captureSC() {
        var qs=location.search.substring(1,location.search.length).split('&');
        var sc=tv(qs,'sc');
        if (sc != '') {
                var s='_mhe_sc='+sc+'; path=/';
                document.cookie=s;
        }
}
function findLocations(f) {
  if (f.zip.value==''){
    alert('Please enter a ZIP code');
    return false;
  }
  window.open('about:blank','locations','toolbar=yes,status=yes,scrollbars=yes,location=yes,menubar=yes,directories=yes,resizable=yes,width=650,height=575');
  return true;
}
function srchLocations(f) {
        if((f.city.value ==''||f.city.value =='City') && f.state.selectedIndex==0 && (f.zip.value==''||f.zip.value=='Zip Code')) {
                alert('Please enter either city and state or a zip code');
                return false;
        } else if ((f.zip.value==''||f.zip.value=='Zip Code') && ((f.city.value ==''||f.city.value =='City') || f.state.selectedIndex==0)){
                alert('Please enter either city and state or a zip code');
                return false;
        }
        if(f.street.value=='Address') f.street.value='';
        if(f.city.value=='City') f.city.value='';
        if(f.zip.value=='Zip Code') f.zip.value='';
        window.open('about:blank','locations','toolbar=yes,status=yes,scrollbars=yes,location=yes,menubar=yes,directories=yes,resizable=yes,width=650,height=575');
        return true;
}
function setDefaultCheckingCompare() {
        var cookieString="ezcheck,true|citiaccount,true|everycounts,true|citi-gold,true|access-account,true|basicchecking,true";
        document.cookie = 'productString=' + cookieString + '; path=/';
}
function setDefaultSavingsCompare() {
        var cookieString="CitiUMA1,true|CitiUSA1,true|eSavings1,true|SvgD2DSavings1,true|CitiRAMMA1,true|CitiMMAPlus1,true";
        document.cookie = 'productString=' + cookieString + '; path=/';
}

function adServe(type, pid, divName) {
    if ((typeof pid == 'undefined') || (pid == "")) pid = _pid;
pid = pid.replace('JRSPRODSERV_','');
pid = pid.replace('JRSPLANNING_','');
        var pgi_f='NNNNNNNNNNNNNNNNNNNN';
var pgi_p='NNNNNNNNNNNNNNNNNN';
var pgi_v='';
var pgi_masterID='';
var pgi_lastLogin='';
var pgi_dateActivated='';
        var pgi_r = Math.floor(Math.random() * 1000000000);

        if(typeof _rsid == 'undefined') { var _rsid = ""; }

if (typeof(top.bv_profile) != 'undefined')
        pgi_f=top.bv_profile;
if (typeof(top.bv_products) != 'undefined')
        pgi_p=top.bv_products;
if (typeof(top.bv_masterID) != 'undefined')
        pgi_masterID=top.bv_masterID;
if (typeof(top.bv_lastLoginTime) != 'undefined')
        pgi_lastLogin=top.bv_lastLoginTime;
if (typeof(top.bv_dateActivated) != 'undefined')
        pgi_dateActivated=top.bv_dateActivated;
        if (typeof _locale == 'undefined') _locale = 'es_US_USPTL';
pgi_v=''+
'userType%3D'+_u+

'%26isSSOFromSB%3D'+pgi_f.substring(0,1)+
'%26isCitiGoldCore%3D'+pgi_f.substring(1,2)+
'%26isCitiGold%3D'+pgi_f.substring(2,3)+
'%26isIPB%3D'+pgi_f.substring(3,4)+
'%26isPBG%3D'+pgi_f.substring(4,5)+
'%26isGEB%3D'+pgi_f.substring(5,6)+
'%26isEnrolledInEquinox%3D'+pgi_f.substring(6,7)+
'%26isBPActivate%3D'+pgi_f.substring(7,8)+
'%26isNewUser%3D'+pgi_f.substring(8,9)+
'%26hasProductOwned%3D'+pgi_f.substring(9,10)+
'%26isBillPresentment%3D'+pgi_f.substring(10,11)+
'%26isPaperless%3D'+pgi_f.substring(11,12)+
'%26isIIT%3D'+pgi_f.substring(12,13)+
'%26isThankYou%3D'+pgi_f.substring(13,14)+
'%26isMBEligible%3D'+pgi_f.substring(14,15)+
'%26isMBEnrolled%3D'+pgi_f.substring(15,16)+
'%26isCheckingPlusEligible%3D'+pgi_f.substring(16,17)+
'%26isMyFi%3D'+pgi_f.substring(17,18)+
'%26isSB%3D'+pgi_f.substring(18,19)+
'%26isThankYouEnrolledInCC%3D'+pgi_f.substring(19,20)+
'%26checking%3D'+pgi_p.substring(0,1)+
'%26checkingPlus%3D'+pgi_p.substring(1,2)+
'%26brokerage%3D'+pgi_p.substring(2,3)+
'%26marginAcct%3D'+pgi_p.substring(3,4)+
'%26IRA%3D'+pgi_p.substring(4,5)+
'%26CD%3D'+pgi_p.substring(5,6)+
'%26CC%3D'+pgi_p.substring(6,7)+
'%26mortgage%3D'+pgi_p.substring(7,8)+
'%26savings%3D'+pgi_p.substring(8,9)+
'%26IMMA%3D'+pgi_p.substring(9,10)+
'%26otherRetmnt%3D'+pgi_p.substring(10,11)+
'%26unsecCrdt%3D'+pgi_p.substring(11,12)+
'%26secCrdt%3D'+pgi_p.substring(12,13)+
'%26unsecLoan%3D'+pgi_p.substring(13,14)+
'%26securedLoan%3D'+pgi_p.substring(14,15)+
'%26businessAcct%3D'+pgi_p.substring(15,16)+
'%26miscAcct%3D'+pgi_p.substring(16,17)+

'%26masterID%3D'+pgi_masterID+
'%26lastLogin%3D'+escape(pgi_lastLogin)+
'%26dateActivated%3D'+escape(pgi_dateActivated);


        if (typeof mboxBTvars != 'undefined' && mboxBTvars!='') {
                pgi_v = pgi_v + '%26' + escape(mboxBTvars);
        }

        var scriptSRC_URI, pidName;

        if (!isNaN(pid))
                pidName = '&BT_PID=' + pid;
        else
                pidName = '&PageID=' + pid;
        /*VA FIx||P300458 -Adding length check for the reported window.location.protocol 
         * *
         */
        var locationProtocol;
        if (window.location.protocol.length <= 6)
        locationProtocol = window.location.protocol;
        else
        locationProtocol = "https:";

        scriptSRC_URI =   locationProtocol + '//' + _pgi + '/a/s/?BT_CON=1' + pidName + '&adPlacement=' + type + '&r=' + pgi_r + '&masterID=' + pgi_masterID + '&rateSheetId=' + _rsid + '&_jfp=' + _j + '&BT_EXT=' + pgi_v ;

        if ((typeof divName != 'undefined') && (divName != ''))
                scriptSRC_URI += '&target=' + divName;

        BTScriptLoad(scriptSRC_URI);
}

// CREATE THE INNER-HTML CODE
function BTScriptLoad(srcURL) {
    if (srcURL.indexOf("&target=") >= 0) {
        var element;
        //if (element != null) { document.getElementById('BTScript').removeElement };
        element = document.createElement("script");
        element.src = srcURL;
        element.type = "text/javascript";
        element.id = "BTScript";
        document.getElementsByTagName("head")[0].appendChild(element);
    }
    else {
        document.write('' + '<scr' + 'ipt id=\"BTScript\" language=\"JavaScript1.1\" src=\"' + srcURL + '\"></scr' + 'ipt>');
    }
}

/**************************** START: OLD ADSERVING FUNCITONS FOR CLASSIC ****************************/

function adServeA() {
bt_ad_contentA=false;
adServe('A');
preAdserveA = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        alert('Onload function');
        preAdserveA();
        if (!bt_ad_contentA) {
                var e = document.getElementById('adServeA');
                var ee = document.getElementById('adServeA-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="343" height="259" src="/JRS/images/ads/no_adserve_A.jpg">';
                }
        }
}
}
function adServeA2() {
bt_ad_contentA2=false;
adServe('A2');
preAdserveA2 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveA2();
        if (!bt_ad_contentA2) {
                var e = document.getElementById('adServeA2');
                var ee = document.getElementById('adServeA2-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="343" height="178" src="/JRS/images/ads/no_adserve_A2_01.jpg">';
                }
        }
}
}
function adServeSB1() {
bt_ad_contentSB1=false;
adServe('SB1');
preAdserveSB1 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
 preAdserveSB1();
 if (!bt_ad_contentSB1) {
  var e = document.getElementById('adServeSB1');
  var ee = document.getElementById('adServeSB1-Evergreen');
  if(e){
   if(ee) e.innerHTML = ee.innerHTML;
   else e.innerHTML='<img width="688" height="153" src="/JRS/cm/img/smallbiz/hdr/overview.jpg">';
                }
        }
}
}
function adServeSB2() {
bt_ad_contentSB2=false;
adServe('SB2');
preAdserveSB2 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
 preAdserveSB2();
 if (!bt_ad_contentSB2) {
  var e = document.getElementById('adServeSB2');
  var ee = document.getElementById('adServeSB2-Evergreen');
  if(e){
   if(ee) e.innerHTML = ee.innerHTML;
   else e.innerHTML='<img width="675" height="122" src="/JRS/cm/img/smallbiz/hdr/overview.jpg">';
                }
        }
}
}
function adServeTopper() {
bt_ad_contentTopper=false;
adServe('Topper');
preAdserveTopper = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveTopper();
        if (!bt_ad_contentTopper) {
                var e = document.getElementById('adServeTopper');
                var ee = document.getElementById('adServeTopper-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="343" height="178" src="/JRS/images/ads/no_adserve_A2_01.jpg">';
                }
        }
}
}
function adServeB1() {
bt_ad_contentB1=false;
adServe('B1');
preAdserveB1 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB1();
        if (!bt_ad_contentB1) {
                var e = document.getElementById('adServeB1');
                var ee = document.getElementById('adServeB1-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B1placeholder.gif">';
                }
        }
}
}
function adServeB2() {
bt_ad_contentB2=false;
adServe('B2');
preAdserveB2 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB2();
        if (!bt_ad_contentB2) {
                var e = document.getElementById('adServeB2');
                var ee = document.getElementById('adServeB2-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B2placeholder.gif">';
                }
        }
}
}
function adServeB3() {
bt_ad_contentB3=false;
adServe('B3');
preAdserveB3 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB3();
        if (!bt_ad_contentB3) {
                var e = document.getElementById('adServeB3');
                var ee = document.getElementById('adServeB3-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B3placeholder.gif">';
                }
        }
}
}
function adServeB4() {
bt_ad_contentB4=false;
adServe('B4');
preAdserveB4 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB4();
        if (!bt_ad_contentB4) {
                var e = document.getElementById('adServeB4');
                var ee = document.getElementById('adServeB4-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B1placeholder.gif">';
                }
        }
}
}
function adServeB5() {
bt_ad_contentB5=false;
adServe('B5');
preAdserveB5 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB5();
        if (!bt_ad_contentB5) {
                var e = document.getElementById('adServeB5');
                var ee = document.getElementById('adServeB5-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B2placeholder.gif">';
                }
        }
}
}
function adServeB6() {
bt_ad_contentB6=false;
adServe('B6');
preAdserveB6 = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveB6();
        if (!bt_ad_contentB6) {
                var e = document.getElementById('adServeB6');
                var ee = document.getElementById('adServeB6-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B3placeholder.gif">';
                }
        }
}
}

function adServeMM() {
bt_ad_contentMM=false;
adServe('MM');
preAdserveMM = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveMM();
        if (!bt_ad_contentMM) {
                var e = document.getElementById('adServeMM');
                var ee = document.getElementById('adServeMM-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img width="218" height="88" src="/JRS/images/ads/B3placeholder.gif">';
                }
        }
}
}
function adServeSignon(pid) {
bt_ad_contentSignon=false;
adServe('Signon',pid);
preAdserveSignon = (window.onload) ? window.onload : function () {};
window.onload = function()
{
        preAdserveSignon();
        if (!bt_ad_contentSignon) {
                var e = document.getElementById('adServeSignon');
                var ee = document.getElementById('adServeSignon-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img src="/JRS/images/ads/SignonEvergreen.gif">';
                }
        }
}
}
function adServeSignoff(pid) {
bt_ad_contentSignoff=false;
adServe('Signoff',pid);
preAdserveSignoff = (window.onload) ? window.onload : function () {};
        window.onload = function(){
        preAdserveSignoff();
        if (!bt_ad_contentSignoff) {
                var e = document.getElementById('adServeSignoff');
                var ee = document.getElementById('adServeSignoff-Evergreen');
                if(e){
                        if(ee) e.innerHTML = ee.innerHTML;
                        else e.innerHTML='<img src="/JRS/images/ads/SignoffEvergreen.gif">';
                }
        }
}
}
/**************************** END: OLD ADSERVING FUNCITONS FOR CLASSIC ****************************/

function goPicker(e,lid,lpos){
if(typeof _hbLink != 'undefined') _hbLink('//' + lid + '//' + e.options[e.selectedIndex].text,lpos);
var espanol=null;
if (e.options[e.selectedIndex].value != '') {
        var _locationHref='#';
        var v = e.options[e.selectedIndex].value.split("|");
        if (v.length != 2) return;
        if (v[1]=='/espanol/')
                espanol=window.open(_portal+'l/l.do?lang=es&region=US','espanol','status,scrollbars,resizable,width=720,height=575');
        if (v[0]=='E'){
                if(lid=='sign-on')
                        _locationHref=v[1];
                else {
                        launchPopup(v[1],'','toolbar,location,status,menubar,scrollbars,resizable,width=700,height=575');
                        return false;
                }
        } else if (v[0]=='PGI') _locationHref='//'+_pgi+'/track/predir.asp?Tgt='+escape(v[1]); /* PGI redirect to pickup ProspectID */
        else if (v[0]=='S') _locationHref=_path+v[1]+'?BV_UseBVCookie=yes'; /* CBOL script path */
        else if (v[0]=='P') _locationHref=_portal+v[1]+'?BV_UseBVCookie=yes'; /* CBOL portal path */
        else if (v[0]=='PX') _locationHref=_portal+v[1]; /* CBOL portal path no BV_UseBVCookie=yes */
        else if (v[0]=='PS') _locationHref=_path+'prod_and_service/prod_serv_detail.jsp?BS_Id='+v[1]+'&BV_UseBVCookie=yes'; /* CBOL products & services */
        else if (v[0]=='C') _locationHref=_c+v[1]+_bc; /* citi.com */
        else if (v[0]=='JFP') _locationHref=_j+_jcontext+v[1]; /* JFP */
        if(e.selectedIndex>1&&_u!='visitor'){
                if(confirm('This action will end your session with Citibank Online. Do you want to continue?')) {
                        top.location.href = _locationHref;
                }
        } else location.href = _locationHref;
}
if(espanol)espanol.focus();
}



function stateNoMatchAlert(e, pM, pV){
if(cancelFlag){

cancelFlag= false;
}else{
tempe = e.href;
temppM = pM;
temppV =pV;
}
                 jQuery('#pands-SLP-GS_dialog').click();
         jQuery('#pands-SLP-GS_dialog').jfpwidget('open');
}

function  continueStateNoMatch(){
jQuery('#pands-SLP-GS_dialog').jfpwidget('close');
window.location.href=tempHref;
}

function  cancelStateNoMatch(){

cancelFlag = true;
 jQuery('#pands-SLP-GS_dialog').jfpwidget('close');

}
function cancelAOFunc()
{
    jQuery('#cancelAOConfirm').jfpwidget('open');
}
function clearCancelAO()
{
    jQuery('#cancelAOConfirm').jfpwidget('close');
}




