//Below lines of code moved from global_utils.js files
function tv(l,t){
	for(var i=0;i<l.length;i++){
		var p=l[i].split('=');
		if(p[0]==t)
			return p[1];
	}
	return '';
}

function format2Digits(inpt){
	if(inpt<10) inpt="0"+inpt;
	return inpt;
}
var qs=location.search.substring(1,location.search.length).split('&');
var qv=new Array(6);
qv[0]=tv(qs,'Prospect_ID')||'';
qv[1]=tv(qs,'Promo_ID')||'';
qv[2]=tv(qs,'Source')||'';
qv[3]=tv(qs,'Relationship')||'';
qv[4]=tv(qs,'Cross_Sell')||'';
qv[5]=tv(qs,'CollateralId')||'';
if(qv[0]+qv[1]+qv[2]+qv[3]+qv[4]+qv[5]!='') {
	var cookie=document.cookie.split("; ")
	var cs=tv(cookie,'CbolProspect');
	var cv=cs.split('|');
	while(cv.length<6){
		cv[cv.length]='';
	}
	if(qv[0]!='') cv[0]=qv[0];
	if(qv[1]!='') cv[1]=qv[1];
	if(qv[2]+qv[3]+qv[4]!=''){
		cv[2]=qv[2];
		cv[3]=qv[3];
		cv[4]=qv[4];
	}
	if(qv[5]!='') cv[5]=qv[5];
	var today=new Date();
	var d=new Date(today.getTime()+(30*24*60*60*1000));
	var prm='|'+cv[1]+'|'+cv[2]+'|'+cv[3]+'|'+cv[4]+'|'+cv[5]+'|';
	var s_cook='CbolProspect='+cv[0]+prm+format2Digits((today.getMonth()+1))+'/'+format2Digits(today.getDate())+'/'+today.getFullYear()+' '+format2Digits(today.getHours())+':'+format2Digits(today.getMinutes())+':'+format2Digits(today.getSeconds())+'; expires='+d.toGMTString()+'; path=/';
	document.cookie=s_cook;
}

//Declared Global variables for MBAR position ID tracking
var mbarpositions = ['01,02,03,04', '05,06,07,08', '09,10,11,12', '13,14,15,16'];
var currentMBPosition = mbarpositions[0]; //'01,02,03,04';
var currentMBOfferNames=[];

/*Below code of global_utils.js files
 *  are assumed not to be used 
 *  To be removed in a future release
 *  NO_REFERNECE_FOUND 11/21/2012
 * ******************
 * 
 * if(typeof cnfTxt == 'undefined')

var cnfTxt="";
if(_locale.indexOf('en_US_VIP') == 0){
	cnfTxt="The computer you're currently using may automatically save your online statement on its hard disk and in cache. This would allow others using this computer to see your account information.\nClick OK if you want to continue anyway. Otherwise, click CANCEL.";
} else if(_locale.indexOf('es_US') == 0){
	cnfTxt="La computadora que usas actualmente podría guardar tus estados de cuenta en línea de forma automática tanto en el disco duro como en la memoria caché; esto permitiría a quienes utilicen esta computadora ver la información de tu cuenta. Se puede consultar la información sobre cómo borrar la memoria caché en la sección Preguntas Frecuentes que se accede desde Ayuda en la parte superior de la página.\nHaz clic en Aceptar si aún deseas continuar. De lo contrario, haz clic en Cancelar.";
} else {
	cnfTxt="The computer you're currently using may automatically save your online statement on its hard disk and in cache. This would allow others using this computer to see your account information. Information on how to clear cache can be found in the Frequently Asked Questions located under Help at the top of the page.\nClick OK if you want to continue anyway. Otherwise, click CANCEL.";
}

function checkDisclaimer(url){
	if(typeof _site != 'undefined' && _site=='CA') {
		if(confirmGo()) {
			if(confirm(cnfTxt))location.href=url;
			else history.back();
		}
	} else {
		if(confirm(cnfTxt))location.href=url;
			else history.back();
	}
}
var base_url='';
var target_url='';
var cgi_param='';
var next_url='';
function openChildWin(base_url,target_url){ 
	next_url=base_url+target_url; 
	launchChildWin(next_url);
}
function openChildWinCgi(base_url,target_url,cgi_param){
	next_url=base_url+target_url+cgi_param;
	launchChildWin(next_url);
}
function launchChildWin(next_url){
	if(child_win!=null&&!child_win.closed) child_win.close(); child_win=window.open(next_url,'childWin','toolbar=yes,status=yes,scrollbars=yes,location=yes,menubar=yes,directories=yes,resizable=yes,width=650,height=525,screenX=10,screenY=10,left=10,top=10');
}
function newWindow(url,winName,winParams){
	var p=(screen.width<800)?',width=500,height=375':(screen.width<1024)?',width=600,height=400':',width=800,height=640';
	if(winName==null||winName=='') winName='childWin';
	if(child_win!=null&&!child_win.closed) child_win.close(); child_win=window.open(url,winName,winParams+p);
}
function onMessageClick(){
	if (_jfp) {
		lnk(location.href=lnkSendReceiveMessages);
	} else {
		var url=lnkNavigator+'&TYPE=DA&BSID=MSGtask&framing='+_f;
		if(_f=='NO') location.href=url;
		else if(_f=='DA') {
			location.href=lnkSimpleBranding+'&BS_Branding=Simple&FRAMESET=DA&BS_Id=MSGtask';
			parent.frames[1].location.href=url;
		}
		else parent.location.href=url;
	}
}

function go(el){
	var v=el.options[el.selectedIndex].value;
	if(v){
		v=v.split(":");
		var bsid=v[0];
		var type=v[1];
		if(type=='DA'&&bsid=='PBtask'&&(!confirm(cnfTxt))){
			el.selectedIndex=0;
			return false;
		}
		var f=(type=='Popup'||type=='Static')?'NO':type;
		var url=lnkNavigator+'&TYPE='+type+'&BSID='+bsid+'&framing='+_f;
		if(type=='Popup')
			launchPopup(url,'','scrollbars,resizable,width=575,height=450');
		else if(_f=='NO') location.href = url;
		else {
			if(_f==f && bsid!="MWTtask"){
				parent.frames[1].location.href=url;
				if(_f=='DA'){
					if(_ssid!=v[2])
						location.href = lnkSimpleBranding+'&BS_Branding=Simple&FRAMESET=DA&BS_Id='+bsid;
				}
			} else parent.location.href=url;
		}
	} else {
	el.selectedIndex=0;
	}

	return false;

}
 */
//Used from Dashboard --- Need to validate below
if(typeof _locale == 'undefined') 
	_locale = 'en_US_USPTL';
if(typeof cnfTxt == 'undefined')

	var cnfTxt="";
if(_locale.indexOf('en_US_VIP') == 0){
	cnfTxt="The computer you're currently using may automatically save your online statement on its hard disk and in cache. This would allow others using this computer to see your account information.\nClick OK if you want to continue anyway. Otherwise, click CANCEL.";
} else if(_locale.indexOf('es_US') == 0){
	cnfTxt="La computadora que usas actualmente podría guardar tus estados de cuenta en línea de forma automática tanto en el disco duro como en la memoria caché; esto permitiría a quienes utilicen esta computadora ver la información de tu cuenta. Se puede consultar la información sobre cómo borrar la memoria caché en la sección Preguntas Frecuentes que se accede desde Ayuda en la parte superior de la página.\nHaz clic en Aceptar si aún deseas continuar. De lo contrario, haz clic en Cancelar.";
} else {
	cnfTxt="The computer you're currently using may automatically save your online statement on its hard disk and in cache. This would allow others using this computer to see your account information. Information on how to clear cache can be found in the Frequently Asked Questions located under Help at the top of the page.\nClick OK if you want to continue anyway. Otherwise, click CANCEL.";
}
function stmtWarn(url) {
	if (confirm(cnfTxt))
		if (confirmGo())
			location.href=url;
}
function decypherProfile() 
{
	jQuery.ajax({
		type:'POST',
		url:'/US/JRS/misc/ShowDecypher.do', 
		success: function(profile){
		if(profile != "") alert(profile);
	}
	}); 
}
if(typeof _locale == 'undefined') _locale = 'en_US_USPTL';
if(typeof(kaURL)!='undefined' && kaURL != '' && typeof(kaInterval)!='undefined' && kaInterval != '' && typeof(fsTimeout)!='undefined' && fsTimeout != ''){
	KAstart(kaURL, kaInterval, fsTimeout);
}

var KAcookieName = "_JFPSCKABV_";	
var KAcookiePath = "/";			

var KAmsgInterval = 0;
var KAfsTimeout = 0;
var KAdestURL  = "";
var KAnow= 0;
var KAtimerId = 0;

function KAstart(kaURL, kaInterval, fsTimeout)	
{
	KAmsgInterval = kaInterval*1000;	
	KAfsTimeout = fsTimeout*1000;	
	KAdestURL = kaURL;
	KAnow= 0;



	KAsend();
}

function KAsend()
{

	var allCookies = document.cookie;
	var indx = allCookies.indexOf(KAcookieName);

	if( indx == -1)
	{	


		var expire = new Date();
		expire.setTime(expire.getTime()+(KAmsgInterval));

		if ( KAnow < KAfsTimeout)	
		{	
			var kal_img= new Image();
			kal_img.src= KAdestURL  + "&_TS="+ expire.getTime().toString();



			KAnow += KAmsgInterval;

			if ( KAnow < KAfsTimeout)	
			{ 
				var c = KAcookieName + "=" + escape(expire.getTime().toString());
				c +=    "; expires=" + expire.toGMTString();
				c +=    "; path=" + KAcookiePath;
				document.cookie=c;

				window.clearTimeout(KAtimerId); 
				KAtimerId = window.setTimeout("KAsend()",(KAmsgInterval));	
			}
			else
			{

			}
		}
	}
	else	
	{
		var start = indx + KAcookieName.length + 1;	
		var end = allCookies.indexOf(";",indx);	
		if (end == -1) end = allCookies.length;	
		var expire = new Date();
		var sleep = unescape(allCookies.substring(start,end)) - expire.getTime();

		KAnow += sleep;
		window.clearTimeout(KAtimerId); 
		KAtimerId = window.setTimeout("KAsend()",sleep);


	}
}
//Need to validate from migrationConfirmation from JSP
function bookmark(url,title){
	if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		window.external.AddFavorite(url,title);
	} else if (navigator.appName == "Netscape") {
		window.sidebar.addPanel(title,url,"");
	} else {
		alert("Press CTRL-D (Netscape) or CTRL-T (Opera) to bookmark");
	}
}


if(typeof $jq =='undefined'){$jq=jQuery}

function createJAMP(wsid, size, cid) {
	var jampsize = 'large';
	var jampbody = null;

	if(typeof wsid == 'undefined' || wsid.length < 2)
	{
		alert("You need to pass proper wrapperset id.");
		return null;
	}

	if(typeof size != 'undefined')
		jampsize = size;

	if(typeof cid != 'undefined')
	{
		// Get jamp message using CMS service
		$jq.ajax({
			url:"./testmessage.jsp",
			type:'post',
			data: { contentId: cid },
			dataType: 'html',
			async: false,
			success: function(data)	{
				jampbody = data;
			}
		});
	}

	// Create an element for spinner; if required
	if($jq(wsid).length == 0)
	{
		var spinnerbody = "<div id='" + wsid.substr(1) + "'>" + (jampbody || "&nbsp;") + "</div>";
		$jq(spinnerbody).appendTo('body');			
	}
	else if(jampbody != null)
	{
		$jq(wsid).html(jampbody);
	}

	// Create spinner
	$jq(wsid).jfpwidget(new CJW.jfp.widget.Spinner(
			{ wrapperSet: wsid },
			{ imageSize: jampsize }, {}));
}


//This is an example for using Spinner widgets. 
function loadContent(jamp, be, ae)
{
	$jq(ae).html("");
	$jq(jamp).jfpwidget('block', be);
	$jq.ajax({
		url:"./testcontent.jsp",
		type:'post',
		data: {},
		dataType: 'html',
		success: function(data)	{
			$jq(jamp).jfpwidget('unblock');
			$jq(ae).html(data);
		}
	});
}


//This function is for aligning the width of the header columns with that of the body columns in the table structures

//Function to adjust width of columns 
function adjustHeader($source, $target) {
	if ($source.length == 1 && $target.length == 1) {
		var widths = {};
		$source.find("tr:first").find("td").each(function(i) {
			widths[i] = $(this).width() || 0;
		});
		$target.find("tr:first").find("th").each(function(i) {
			if (widths[i]) { $(this).width(widths[i]); }
		});
	}
}

/** Rel IDC3 starts**/ 
var unlinkingmortgageInstanceId=''; 

function openOverlayForMortgageFunctionality(divId,mortgageInstanceId){ 
	if(divId=='UnlinkOverlay') 
	{ 
		unlinkingmortgageInstanceId=mortgageInstanceId; 
		jQuery('#'+divId).jfpwidget('open'); 
	}           
	if(divId=='mortgageOverlay') 
	{ 
		openQuotesSnapshotOverlay('12');//available in citiCommon.js 
	} 

}   

function closingOverlay(divId){ 
	jQuery('#'+divId).jfpwidget('close');   
}   

function forwardToUnlinkFromAccSum(){ 
	var URL = "${pageContext.request.contextPath}/REST/accountunlink/mortgageproducts.jws?instanceID="+unlinkingmortgageInstanceId; 
	fireJAXRSUnlinkFromAccSum(URL); 
	unlinkingmortgageInstanceId = ''; 
} 

function continueUnlinkConfirm(){ 
	jQuery('#confirmationModal').jfpwidget('close'); 
} 

function fireJAXRSUnlinkFromAccSum(URL){         
	$.ajax({ 
		url:URL,                 
		type:"POST", 
		dataType: "json",   
		global:false, 
		success:function(data, status, jqXHR){   
		if(jqXHR.status == '200'){ 
			closingOverlay('UnlinkOverlay'); 
			closingOverlay('mortgageOverlay'); 
			if(data.status=='success') { 
				jQuery('#accountName').html(data.mortgageID); 
				jQuery('#confirmationModal').jfpwidget('open'); 
			} else { 
				forwardToTempDelay(); 
			}         
		} 
	}, 
	error:function(jqXHR){     
		forwardToTempDelay();           
	} 
	});         
}   
/** Rel IDC3 ENDS**/ 


//Functions from the Account Summary Pages

function enableIcon(source,callBackFn){
	//$(source).unbind('click',callBackFn).bind('click',callBackFn);
	$(source).off('click',callBackFn).on('click',callBackFn);

	if($(source).hasClass("interactMinimizeButton")) {
		$("span#collapseAll").removeClass("interactMinimizeButtonDisabled").addClass("interactMinimizeButton");
		$("span.collapseAllDisabled").removeClass("collapseAllDisabled").addClass("collapseAll");
		$("span#collapseAll").removeClass("defaultCursor").addClass("sumHeading");
		expandAllDisabled = clickEvent("expandAllDisabledEvent");
		if(onClickOfAS == true){
			if (expandAllDisabled == true){
				$("span#expandAll").removeClass("interactMaximizeButton").addClass("interactMaximizeButtonDisabled");
				$("span.expandAll").removeClass("expandAll").addClass("expandAllDisabled");
				$("span#expandAll").removeClass("sumheading").addClass("defaultCursor");
			}
		}
	}
	if($(source).hasClass("interactMaximizeButton")) {
		$("span#expandAll").removeClass("interactMaximizeButtonDisabled").addClass("interactMaximizeButton");
		$("span.expandAllDisabled").removeClass("expandAllDisabled").addClass("expandAll");
		$("span#expandAll").removeClass("sumheading").addClass("defaultCursor");
		closeAllDisabled = clickEvent("closeAllDisabledEvent");
		if(onClickOfAS == true){
			if (closeAllDisabled == false){
				$("span#collapseAll").removeClass("interactMinimizeButton").addClass("interactMinimizeButtonDisabled");
				$("span.collapseAll").removeClass("collapseAll").addClass("collapseAllDisabled");
				$("span#collapseAll").removeClass("sumheading").addClass("defaultCursor");
			}
		} 
	}
	if($(source).hasClass('interactMaximizeButtonDisabled')) {
		$("span#expandAll").removeClass("interactMaximizeButtonDisabled").addClass("interactMaximizeButton");
		$("span.expandAllDisabled").removeClass("expandAllDisabled").addClass("expandAll");		
	}
	else if($(source).hasClass('interactMinimizeButtonDisabled')) {
		$("span#collapseAll").removeClass("interactMinimizeButtonDisabled").addClass("interactMinimizeButton");
		$("span.collapseAllDisabled").removeClass("collapseAllDisabled").addClass("collapseAll");		 
	}
}

function disableIcon(source,callBackFn){
	//$(source).unbind('click',callBackFn);
	$(source).off('click',callBackFn);
	if($(source).hasClass("interactMinimizeButton")) {
		$("span#collapseAll").removeClass("interactMinimizeButtonDisabled").addClass("interactMinimizeButton");
		$("span.collapseAllDisabled").removeClass("collapseAllDisabled").addClass("collapseAll");
		$("span#collapseAll").removeClass("defaultCursor").addClass("sumHeading");
		expandAllDisabled = clickEvent("0");
		if (expandAllDisabled == true){
			$("span#expandAll").removeClass("interactMaximizeButton").addClass("interactMaximizeButtonDisabled");
			$("span.expandAll").removeClass("expandAll").addClass("expandAllDisabled");
			$("span#expandAll").removeClass("sumheading").addClass("defaultCursor");
		}
	}
	if($(source).hasClass("interactMaximizeButton")) {
		$("span#expandAll").removeClass("interactMaximizeButtonDisabled").addClass("interactMaximizeButton");
		$("span.expandAllDisabled").removeClass("expandAllDisabled").addClass("expandAll");
		$("span#expandAll").removeClass("sumheading").addClass("defaultCursor");
		closeAllDisabled = clickEvent("0");
		if (closeAllDisabled == false){
			$("span#collapseAll").removeClass("interactMinimizeButton").addClass("interactMinimizeButtonDisabled");
			$("span.collapseAll").removeClass("collapseAll").addClass("collapseAllDisabled");
			$("span#collapseAll").removeClass("sumheading").addClass("defaultCursor");
		}
	}

	if($(source).hasClass('interactMaximizeButton')) {
		$("span#expandAll").removeClass("interactMaximizeButton").addClass("interactMaximizeButtonDisabled");
		$("span.expandAll").removeClass("expandAll").addClass("expandAllDisabled");
	}
	else if($(source).hasClass('interactMinimizeButton')) {
		$("span#collapseAll").removeClass("interactMinimizeButton").addClass("interactMinimizeButtonDisabled");
		$("span.collapseAll").removeClass("collapseAll").addClass("collapseAllDisabled");
	}

}


function clickEvent(sourceEvent){

	var checkIsHidden=0;
	var checkIsVisible=0;
	var checkLength=0;
	jQuery("tbody[id*='Body']").each(function() {
		if($(this).is(":hidden"))
			checkIsHidden+=1;
		else
			checkIsVisible+=1;





	});

	if(jQuery("div#AccountSummaryRewards thead.sumHeading").is(":visible"))
		checkLength=noOfTemplates+1;
	else
		checkLength=noOfTemplates;

	if(jQuery("thead#rewardsHead").is(":visible")){
		if(jQuery("span#extAcctsId").hasClass("interactMaximizeButton"))
			checkIsHidden+=1;
		else
			checkIsVisible+=1;
	}
	if(checkIsHidden==checkLength)
		return false;
	else if(checkIsVisible==checkLength)
		return true;
	else
	{
		if(sourceEvent=="expandAllDisabledEvent")
			return false;
		else if(sourceEvent=="closeAllDisabledEvent")
			return true;
	}
}



function showAll(){
	$("div#StructSummaryPanelContainer tbody").show();
	$(".toggleTDOnExpandAll").hide();
	enableIcon("span#collapseAll",collapseAll);
	disableIcon("span#expandAll",showAll);
	$(".expandAllToggle").removeClass("interactMaximizeButton").addClass("interactMinimizeButton");
	//Need to change css attr to grey.
}

function collapseAll(){
	$("div#StructSummaryPanelContainer tbody.sumContent").hide();
	$(".toggleTDOnExpandAll").show();
	$(".toggleTD").css('padding-bottom','0px');
	$(".toggleTD").css('padding-top','35px');
	$(".toggleTD1").css('padding-top','0px');
	$(".toggleChek").css('padding-bottom','2px');
	$(".toggleChek").css('padding-top','15px');
	disableIcon("span#collapseAll",collapseAll);
	enableIcon("span#expandAll",showAll);
	$(".expandAllToggle").removeClass("interactMinimizeButton").addClass("interactMaximizeButton");
	//Need to change css attr to grey.
}

//$.togglePanel = $.fn.
function togglePanel(source,panelBody,panelHeader,panelHeaderVal,flag,cardErrorNo){
	$(source).click(function(){
		if(panelBody  != null) $(panelBody).toggle();
		if(panelHeader != null) $(panelHeader).toggle();
		if(panelHeaderVal != null) $(panelHeaderVal).toggle();

		if(source != null){
			$(source).toggleClass("interactMinimizeButton interactMaximizeButton");
			if($(source).hasClass("interactMinimizeButton")) enableIcon("span#collapseAll",collapseAll);
			if($(source).hasClass("interactMaximizeButton")) enableIcon("span#expandAll",showAll);
		}
		if (cardErrorNo!= null && cardErrorNo == "2"){   jQuery('#sumheaderTableRow1').hide();   }
	});
	if(!flag){
		if(panelBody != null) $(panelBody).show();
		if(source != null) $(source).toggleClass("interactMinimizeButton interactMaximizeButton");
		if(panelHeader != null) $(panelHeader).hide(); 
		if(panelHeaderVal != null) $(panelHeaderVal).hide();
		return true;
	}
	else{
		if(panelBody != null) $(panelBody).hide();
		if(panelHeader != null) $(panelHeader).show(); 
		if(panelHeaderVal != null) $(panelHeaderVal).show();
		return flag;
	} 
}     



//The code below is taken from the mbar.js file

var isFlashSupported;
var fmnv=5;
var fmav=10;
var n=navigator;
var noOfItems = 0;
var totHyperLink  = "";
var tempcounter = 0;
var maincounter = 0;
var ss = "";

/** 
 * The function loads the carousel data using a JAX-RS call
 * @param backScroll
 * @return
 */

/* function loadCarouselData(backScroll) {
	var flashcheck = isflashsupported();
	 jQuery.ajax({
		  url: "/US/REST/manageoffers/getoffers.jws",
		  dataType: "json",
		  data: {
		 "locationID": "MBAR" , "isFlashSupported": flashcheck, "screenID": pageDef

		  },
		  contentType :'application/x-www-form-urlencoded',
		  type: 'POST',
		  complete: function(request, status) {
		  },
		  error: function(XMLHttpRequest, status, errorThrown) {
		  }, 
		  success: function(data, status, xhr) {
			  formatFieldsValue(data.categorizedOffers);

			   //This block is used to prevent miscalculation by jcarousel script.. This script make 5 block of li inside jcarousel ul even the size  
			   //of total item is 4.

			  try {
				  jQuery("#carouselMBar").jfpwidget('render', data.categorizedOffers);

				  resetCarouselButtons("#carouselMBar",false);
			  } catch(Error) {
				  resetCarouselButtons("#carouselMBar",true);
			  }
			  handleCMSDrivenScrollOption(backScroll);
			  handleDefaultOffers(data.categorizedOffers);			 
		  }
		});
} */

/**
 * updates SOM for clicked and extended event using a JAX-RS call.
 * AcceptanceLevel can be clicked or extended.
 * Parameters send using JAX-RS call are screenId,offerName,AcceptanceLevel.
 * @param screenId
 * @param offerName
 * @param AcceptanceLevel
 * @return
 */
/* 
function updateSOMForMBAR(screenId,offerName,waveId,campaignId,origin,AcceptanceLevel,copOfferStatus){
	if(offerName.startsWith("MBarOffer")!=true)
	{       
		jQuery.ajax({
			  url: "/US/REST/manageoffers/updateofferstatus.jws",
			  dataType: "json",
			  data: {
					"screenID":screenId, "offerName": offerName,"waveID":waveId,"origin":origin,"campaignId":campaignId,"copOfferStatus":copOfferStatus,"somOfferStatus":AcceptanceLevel

			  },
			  contentType :'application/x-www-form-urlencoded',
			  type: 'POST',
			  complete: function(request, status) {
			  },
			  error: function(XMLHttpRequest, status, errorThrown) { 
			  }, 
			  success: function(data, status, xhr) {  
			  }
		});
	}
}*/

function launchPopupHHonors()
{
	window.location.href=hiltonLandingURL;
}

/**
 * It routes the offer to the offer landing page when speedbump is 'NW'
 * @param url
 * @param winName
 * @param winParams
 * @return
 */
var chld_win=null;
var sendMsgChldWin=null;
function launchPopup(url,winName,winParams){
	if(url.indexOf("JFP_TOKEN") > 0)
	{
		url = url ;
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

	var Msgwin=	winName;
	if(winName=='_top'){top.location.href=url; return;}
	var cookie=document.cookie.split("; ");
	winName=tv(cookie,'BV_IDS');
	winName=winName.substring(38,48);
	/*
	 if(winName==null||winName=='')
	 winName='childWin';
	 if(chld_win!=null&&!chld_win.closed)
	 chld_win.close();
	 */
	if(Msgwin=='sendMsgWindow'){
		if((chld_win==null ||chld_win=='' || chld_win.closed)  || !(sendMsgChldWin==chld_win) ) {
			chld_win=window.open(url,winName,winParams);
			sendMsgChldWin=chld_win;
			sendMessageWindow=chld_win;
		}
	}
	else {
		chld_win=window.open(url,winName,winParams);
		sendMsgChldWin=null;
	}

}

/**
 * It checks whether the Browser supports FLASH.
 */
function isflashsupported()
{ 
	var flashVersion = fc();
	if (flashVersion >=fmnv)	{
		isFlashSupported ="true";
	} else {
		isFlashSupported = "false";
	}
	return isFlashSupported;
}


function fc(){
	try {
		return parseInt(n.plugins["Shockwave Flash"].description.replace(/\D*(\d+)\..*/,"$1"),10);
	} catch(e){}
	for(var i=fmav;i>=0;i--){
		try {
			if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i)) {
				return i;
			}
		}
		catch(e){}
	}
	return 0;
}

/**
 * Handles the routing of the offers to the proper landing page.
 * @param speedBump
 * @param name
 * @param accountIndex
 * @param linkUrl
 * @param locationId
 * @param fields
 * @return
 */
/*function launchPageForMBAR(speedBump,name,accountIndex,linkUrl,locationId,fields,waveId,campaignId,origin)

{	
	var screenId = pageDef;
	var aoOffersIndicator = 'Cards.do';
	var aoOfferParams = 'screenId:'+screenId+'|offerName:'+name+'|locID:'+locationId;
	var cbolOfferIndicator='&source=1';
	var cbolOfferIndicator1='?source=1';
	var isCBOLOffer=(linkUrl.indexOf(cbolOfferIndicator) != -1||linkUrl.indexOf(cbolOfferIndicator1) != -1)?true:false;
	if(linkUrl.indexOf(aoOffersIndicator) != -1){
	    aoOfferParams = aoOfferParams + fields;
		linkUrl = linkUrl+'&selectedCCIndex='+accountIndex+'&aoOfferParams='+aoOfferParams;
	}
	else if(isCBOLOffer){
		var cbolOfferParam='source';
		var valOfCbolOfferParam='cntx_offr';
		linkUrl=changeParamValueOfUrl(linkUrl,cbolOfferParam,valOfCbolOfferParam);
		linkUrl = linkUrl+'&screen='+screenId+'&offerName='+name+'&waveId='+waveId+'&campaignId='+campaignId+'&origin='+origin;
	}
	if( accountIndex != '')
	{
		if(speedBump == ''){
			lnk(linkUrl);
		}
		else if(speedBump != '') {
			if(speedBump == "NW" ){
				launchPopup(linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');	
			}
			if (speedBump != "NW" ) {
				launchPopup('/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&landingURL='+linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');		
			}
		}
	}
	if(accountIndex == '' )
	{
		if(speedBump == ''){	
			lnk(linkUrl);
		 }
		else if(speedBump != '') {
			if(speedBump == "NW" ) {
				launchPopup(linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');	
			}
			if (speedBump != "NW" ) {
				launchPopup('/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&landingURL='+linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');
			}
		}
	}
}*/

/**
 * Its replaces the url where url has param with newValueOfParam
 * @param url
 * @param param
 * @param newValueOfParam
 * @return
 */
function changeParamValueOfUrl(url,param,newValueOfParam){
	var value=newValueOfParam;
	var changedUrl;
	var pattern;
	if(url.indexOf('&'+param+'=')!=-1) pattern='&'+param+'=';
	else if(url.indexOf('?'+param+'=')!=-1) pattern='?'+param+'=';
	var splittedUrl=url.split(pattern);
	var tail;
	if(splittedUrl[1]==null){
		return url;
	}
	else{
		tail=(splittedUrl[1].indexOf('&')!=-1)?splittedUrl[1].substring(splittedUrl[1].indexOf('&')):null;
		changedUrl=tail!=null?splittedUrl[0]+pattern+value+tail:splittedUrl[0]+pattern+value;
		return changedUrl;
	}
}

/**
 * 
 * Calls the method to handle routing as well as calls the method to update SOM for CLICKED event.
 * @param speedbump
 * @param name
 * @param acctIndex
 * @param url
 * @param locID
 * @param fields
 * @return
 */
/*
 //RUSA P2R3 changes-additional parameters passed 
function handleOfferForMBAR(speedbump,name,acctIndex,url,locID,fields,waveId,campaignId,origin)
{

	launchPageForMBAR(speedbump,name,acctIndex,url,locID,fields,waveId,campaignId,origin);

	updateSOMForMBAR(pageDef,name,waveId,campaignId,origin,'Clicked','Interested');

}
 */

/**
 * Formats the fields key within the data and modifies the object to a | separated string. 
 * @param data
 * @return
 */
function formatFieldsValue(data) {
	jQuery.each(data.items, function(idx,item){
		var campId='';
		currentMBOfferNames.push(item.name);
		if(item.corOffer!=null){
			var forOffer=item.corOffer;
			campId=forOffer.campaignId;
			item['campId'] = campId;
		}
	});

	jQuery.each(data.items, function(idx,item){
		var modField = '';
		jQuery.each(item.fields, function(paramKey,paramValue){
			modField = modField+'|'+paramKey+':'+paramValue;
		});
		item.fields = modField;
	});
	return data; 
}

/**
 * Handles the display of the default offers. 
 * @param data
 * @return
 */
function handleDefaultOffers(data)
{
	jQuery.each(data.items, function(idx,item) {
		if (item.contentType == 'DEF') {
			var test= item.content;
			test = test.replace("&gt;",">").replace("&lt;","<");
			jQuery("#"+item.contentId).html(test);
		}
	});
}

//Added for MBAR PREV and NEXT positions
function nextMBPosition(entry) {
	return mbarpositions[($.inArray(entry, mbarpositions) + 1) % mbarpositions.length];
}

function prevMBPosition(entry) {
	return mbarpositions[($.inArray(entry, mbarpositions) - 1 + mbarpositions.length) % mbarpositions.length];
}


/**
 * Makes a Update SOM call for Extended event.
 * @param carousel
 * @param item
 * @param idx
 * @param state
 * @return
 */
function carouselMBar_itemVisibleInCallbackAfterAnimation(carousel, item, idx, state) 
{
	ss = item.getElementsByTagName('div');
	if(ss.length > 0)
	{
		if(maincounter==0){
			currentMBOfferNames = [];
		}
		var a = item.style.width;
		a = a.substring(0,a.length-2);
		if(parseInt(a) < getOffset(item).left && tempcounter == 0)
		{
			totHyperLink = $(".jcarousel-item-5")[0].getElementsByTagName('div')[0].getAttribute('id') +  ","+ totHyperLink;
			maincounter++;		
		}
		tempcounter++;
		totHyperLink = ss[0].getAttribute('id') + ',' + totHyperLink;
		currentMBOfferNames.push(ss[0].getAttribute('id'));
	}
	else
	{
		return;
	}
	if(maincounter==3)
	{
		//Fetching the current MB Positions while clicking on next or previous button in Profile & Settings and Account Management page
		if (state == "next") {
			currentMBPosition = nextMBPosition(currentMBPosition);
		} 
		if(state == "prev"){
			currentMBPosition = prevMBPosition(currentMBPosition);
		}
		maincounter=0;
		//Reversing current MB Position to match with correct offernames
		var finalMBPosition;
		finalMBPosition = reversePositionID(currentMBPosition);
		//Passing finalMBPosition in updateSOMForMBAR to update SOM 
		updateSOMForMBAR(pageDef, totHyperLink.substring(0,totHyperLink.length-1),"","","SOM","Extended","","",finalMBPosition);
		totHyperLink=""; 	
	}
	else
	{
		maincounter++;
	}
}
/**
 * Returns offset value
 * @param el
 * @return
 */
function getOffset( el ) {
	var _x = 0;
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.parentNode;
	}
	return { top: _y, left: _x };
}

/**
 * Enables or Disables the back-scroll button based on the param value coming from CMS.
 * @param backScroll
 * @return
 */
function handleCMSDrivenScrollOption(backScroll) {
	if (!backScroll) {
		jQuery("#carouselMBar").jfpwidget("disablePrevButton");
	} 
}

/**
 * Enables/disables Carousel scroll button depending on selector.
 * @param selector
 * @return
 */
function resetCarouselButton(selector) {
	var myvisible = jQuery(selector).jfpwidget().getProperty('visible');
	var mysize = 4;
	if(mysize == myvisible) {
		jQuery(selector).jfpwidget("disableButtons");
	}
}

/**
 * reset carousel scroll buttons.
 * @param selector
 * @param isError
 * @return
 */
function resetCarouselButtons(selector, isError) {
	if(isError) {
		resetCarouselButton(selector);
		return;
	}
	var myvisible = jQuery(selector).jfpwidget().getProperty('visible');
	var mysize = jQuery(selector).jfpwidget().getProperty('size');
	if(mysize == myvisible) {
		jQuery(selector).jfpwidget("disableButtons");
	}
}



//The Code Snippet below is from the JFPNav.js file

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
				displayPhrase="";
				return false;
			}
			else
			{
				displayPhrase="";
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
		if (focusField.type != "hidden")
			if( (document.getElementById(focusField.id+"Masked") ) ) {
				(document.getElementById(focusField.id+"Masked") ).focus();
			}
			else {
				focusField.focus();
			}
		alert(fields.join('\n'));
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
		if (focusField.type != "hidden")
			focusField.focus();
		alert(fields.join('\n'));
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
//isEmpty method renamed to avoid conflict with myCiti.js
function isEmptyString(s){ return ((s == null) || (s.length == 0)) }
function isWhitespace (s)
{
	var i;
	var whitespace = " \t\n\r";
	if (isEmptyString(s)) return true;
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
function OnClickHandler() {
	if (window.fnCustomerAktion)
		fnCustomerAktion();
	var el=null;
	var flag=true;
	if(event) {
		el=event.srcElement;
	}
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
	if(srcElement != null) {
		if (srcElement.tagName=="A") {
			if (lockType==LOCK && srcElement.onclick!=null && srcElement.onclick.toString().indexOf("confirmGo")==-1) {
				alert(displayPhrase);
				return false;
			}
		}
	}
	return true;
}
if (navigator.appName.indexOf("Netscape")!=-1  && document.getElementById  && navigator.userAgent.indexOf("Safari") == -1)
	document.onclick = NS6OnClickHandler;
if(window.location.protocol.indexOf("https") != -1)
	setCookie("JSESSIONID", getCookie("JSESSIONID"), null, "/", null, true);
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
	if(url.indexOf("JFP_TOKEN") > 0)
	{
		url = url ;
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
    
           url=url;
    }
    else
    {
           
           if (url.indexOf("?") > 0) {
                  url = url + "&JFP_TOKEN="+JFP_CSRF_TOKEN;
           } else {
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
	if(callJPSOnload)
		JPSOnload();
	if(callJBAOnload)
		JBAOnload();
	if(callJSOOnload)
		JSOOnload();
	loadCookie();
}
function doUnload()
{
	closeOpenWins();
	unloadCookie();
}

function unloadCookie() {
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
	if(url.indexOf("JFP_TOKEN") > 0)
	{
		url = url ;
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

//Code from locationform.js starts
var xmlhttp
var realHref = null;
var debug=0;
function editLocation(obj) {

	if(obj != null && obj.value.length>0) {
		realHref=window.location;
		showModalNoBorder(obj);
	}  
}

function saveLocation(state) {
	parent.window.document.getElementById("showAlert").value='Y';
	parent.showAlert();
	parent.grayOut(false);

}

//TR# 15395991 Fix starts 
function clearLocation() {
	parent.window.document.getElementById("home_address_state").selectedIndex=0;
	parent.clearPrevState();
	parent.grayOut(false);
}

//TR# 15395991 Fix Ends

function checkLocationInfo(hrefObj) {
	realHref = hrefObj.href;

	xmlhttp=GetXmlHttpObject();
	if (xmlhttp==null)
	{
		alert ("Your browser does not support XMLHTTP!");
		return;
	}

	var url="US/JRSAO/ao_online/editLocation.do";
	xmlhttp.onreadystatechange=stateChanged;
	sendAlert("Location:"+realHref);
	xmlhttp.open("GET",realHref,true);

	xmlhttp.send(null);
}

function showModalNoBorder(obj) {
	state = obj;
	var  url = "/US/JRSAO/ao_online/compareRegion.do?state="+state ;
	jQuery.ajax({ url:url,cache:false,async:false, success: function(showdata){
		regionChanged(showdata);
		prevState = state;
	}});

}

function saveLocationChanged(fimp, branchId, rateSheetId, regionDesc,govState,homeState) {

	var  url = "/US/JRSAO/ao_online/saveLocationChanged.do?fimp=" + fimp 
	+ "&branchId=" + branchId + "&rateSheetId=" + rateSheetId + "&regionDesc="+regionDesc+ "&governingState="+govState+ "&homeState="+homeState;
	jQuery.ajax({ url:url, cache:false,async:false, success: function(showdata){
	}});
}

function regionChanged(showdata) {
	setTimeout(function(){jQuery('#cdmalertoverlay').jfpwidget('close');
	}, overlayTimeOut);
	var responseStr =showdata;
	sendAlert('got content' + responseStr);

	if (findVariable('regionDesc = "', responseStr)=='cdmError') {
		parent.redirectToError();
	}else{
		if (findVariable('showModal = "', responseStr)=='T') {
			var state = findVariable('state = "', responseStr);
			var fimp = findVariable('fimp = "', responseStr);
			var branchId = findVariable('branchId = "', responseStr);
			var rateSheetId = findVariable('rateSheetId = "', responseStr);
			var regionDesc = findVariable('regionDesc = "', responseStr);
			var govState = findVariable('governingState = "', responseStr);
			sendAlert("fimp = " + fimp);
			sendAlert("branchId = " + branchId);
			sendAlert("rateSheetId = " + rateSheetId);
			sendAlert("regionDesc = " + regionDesc);
			sendAlert("governingState = " + govState);
			document.getElementById("fimp").value = fimp;
			document.getElementById("branchId").value = branchId;
			document.getElementById("rateSheetId").value = rateSheetId;
			document.getElementById("regionDesc").value = regionDesc;
			document.getElementById("governingState").value = govState;
			document.getElementById('alertWindowOuter').style.width ="525px";
			// document.getElementById('alertWindowContent').innerHTML = '<iframe frameborder=0 width="500" height="160" src="/US/JRSAO/ao_online/editLocationChanged.do?state="+state scrolling="no"></iframe>';
			//fix for defect #10982- R126 Regression-backlog-- starts

			document.getElementById('alertWindowContent').innerHTML = '<iframe id="locChangediF" frameborder=0 width="500" height="160" src="/US/JRSAO/ao_online/editLocationChanged.do?state="+state scrolling="no"></iframe>';
			jQuery('div#alertWindowContent').addClass('stateChangeOverlayStyle');
			jQuery('#locChangediF').bind('load', function(evt) {
				var self = $(this),
				frameDocument = (this.contentDocument)?this.contentDocument:this.contentWindow.document,
						frame = $(frameDocument),
						height = 0;

				frame.find('body').children().each(function() {
					height += $(this).height();
				});
				self.height(height);
			}); 

			//fix for defect #10982- R126 Regression-backlog-- ends

			grayOut(true);
		}else if(findVariable('updateRegion = "', responseStr)=='T'){
			var state = findVariable('state = "', responseStr);
			var fimp = findVariable('fimp = "', responseStr);
			var branchId = findVariable('branchId = "', responseStr);
			var rateSheetId = findVariable('rateSheetId = "', responseStr);
			var regionDesc = findVariable('regionDesc = "', responseStr);
			var govState = findVariable('governingState = "', responseStr);
			document.getElementById("fimp").value = fimp;
			document.getElementById("branchId").value = branchId;
			document.getElementById("rateSheetId").value = rateSheetId;
			document.getElementById("regionDesc").value = regionDesc;
			document.getElementById("governingState").value = govState;
			parent.updateRegion();
			document.getElementById("home_address_state").focus();
		}else if (findVariable('showModal = "', responseStr)=='F'){
			var fimp = findVariable('fimp = "', responseStr);
			var branchId = findVariable('branchId = "', responseStr);
			setRPCookie('FIMPBranch',fimp +"|"+branchId , 365*10);
			document.getElementById("home_address_state").focus();
		}
	}
}

function setRPCookie(c_name,value,expiredays) {
	var c_value = getCookie(c_name);
	if (c_value == null || c_value != value) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" +value+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) + ';path=/';
	} else if(c_value == value) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" +c_value+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) + ';path=/';
	}
}

function stateChanged() {
	if (xmlhttp && xmlhttp.readyState==4)
	{
		sendAlert ("Your browser!");
		var responseStr =xmlhttp.responseText;
		sendAlert('got content');
		if ((findVariable('_regionspecific = "', responseStr)=='T' || findVariable('_regionspecificAttr = "', responseStr)=='T')
				&& !getCookie('FIMPBranch')) {
			AJS.AEV(window, 'load', showModal());
		} else { 
			window.location.replace(realHref);
		}
	}
}

function findVariable(inStr, responseStr) {

	var outStr;
	var strLen = inStr.length;
	var locationIndxA = responseStr.indexOf(inStr);
	sendAlert('locationIndxA=' + locationIndxA);
	if (locationIndxA!=-1) {
		var locationIndxB = responseStr.indexOf('";', locationIndxA);
		sendAlert('locationIndxB =' + locationIndxB);
		sendAlert('locationIndxB - locationIndxA=' + (locationIndxB - strLen - locationIndxA));
		outStr = responseStr.substr(locationIndxA+strLen, (locationIndxB - strLen - locationIndxA));
		sendAlert(inStr+'=' + outStr);
	}
	return outStr;
}

function showModal() {
//	alert(encodeURIComponent(str));
	//GB_showCenter("", "/US/JRSAO/ao_online/editLocation.do?targetUrl="+encodeURIComponent(realHref), 280, 380);
	//jQuery.rppmo({type: 'iframe', urlPath: '/JRSAO/ao_online/editLocation.do?targetUrl='+encodeURIComponent(realHref), hSize: '290px', wSize: '400px', scrollBar: false});
	openModalWindow();
}

function GetXmlHttpObject()
{
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		return new XMLHttpRequest();
	}
	if (window.ActiveXObject)
	{
		// code for IE6, IE5
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}

function setModalHandlers() {

	var el;
	// Setting the Link event handlers
	for(i=0;i<document.links.length;i++){
		el = document.links[i];

		el.onclickp=el.onclick?el.onclick:function(){};
		//sendAlert("el.onclickp"+el.onclickp);
		el.onclick=function(){ realHref=window.location; showModal(); return false;};
	} 

}

function setAjaxHandlers() {
	sendAlert('Setting the Link event handlers');
	var el;
	// Setting the Link event handlers
	for(i=0;i<document.links.length;i++){
		el = document.links[i];
		if (!el.rel) {
			if (el.href.indexOf("javascript:lnk") >= 0 ) {
				//el.onclickp=el.onclick?el.onclick:function(){};
				//sendAlert("lnk el.onclickp"+el.onclickp);
				var hrefOld = el.href.replace('javascript:lnk(\'','');
				el.href = hrefOld.replace('\')','');
				el.onclick=function(){ checkLocationInfo(this); return false;};
			} else {  
				el.onclickp=el.onclick?el.onclick:function(){};
				//sendAlert("el.onclickp"+el.onclickp);
				el.onclick=function(){ this.onclickp(); checkLocationInfo(this); return false;};
				//el.onclick=function(){ checkLocationInfo(this); return false;};
			}
		}
	} 
}

function sendAlert(alertStr) { if (debug==1) { 	alert(alertStr); } }

function editLocationForm(){
//	GB_showCenter("", "/US/JRSAO/ao_online/editLocation.do?targetUrl="+encodeURIComponent(document.location), 280, 380);
	//jQuery.rppmo({type: 'iframe', urlPath: '/JRSAO/ao_online/editLocation.do?targetUrl='+encodeURIComponent(document.location), hSize: '290px', wSize: '400px', scrollBar: false});
}

function submitRPSelectStateForm() { 	
	type = "ao";
	var stateName = document.getElementsByName('stateSelected');
	if('undefined'!= stateName[0].value && stateName[0].value == 0) {
		//alert('error thrown');
		showError();

	} else {
		var ConfirmGoLockVar = true;
		ConfirmGoLockVar = ConfirmGoLock();
		if(ConfirmGoLockVar) {
			sfLock();
			//var i;
			/*for(i=0;i<document.forms.length;i++){
		 alert(document.forms[i].getAttribute('action'));
		 }*/
			document.LocationForm.submit();
		}
	}
	return false;
}


function GBhide() {
	//$("#GB_window,#GB_overlay").hide();
	parent.jQuery.close();
}

var isHeightOfRegionalPricingReset=false;
var locationErrorHeight = 0;

function showError() {
	//alert('in show error');
	//document.getElementById("home_address_state").style.color="#CC0000";
	document.getElementById("locationerror").style.display="block";
	var a = getHeightOfRegionalPricingDialogSnapshot();
	if(typeof(a) != 'undefined')
	{b = document.getElementById(a).style.top;
	b= b.substring(0,b.indexOf('px'));
	if(!isHeightOfRegionalPricingReset || (b==''||b=='NaN')) { 
		isHeightOfRegionalPricingReset= true; document.getElementById(a).style.top = getLocationErrorHeight() + "px"; 
	} 
	} 
	$jq("#RegionalPricingLocation-snapshot").jfpwidget("refresh");
}


/*function showError() {
	//alert('in show error');
	//document.getElementById("home_address_state").style.color="#CC0000";
	document.getElementById("locationerror").style.display="block";
	var a = getHeightOfRegionalPricingDialogSnapshot();
	if(typeof(a) != 'undefined')
	{b = document.getElementById(a).style.top;
	b= b.substring(0,b.indexOf('px'));
	if(!isHeightOfRegionalPricingReset || (b==''||b=='NaN')) { 
	isHeightOfRegionalPricingReset= true; document.getElementById(a).style.top = getLocationErrorHeight() + "px"; 
	} 
	} 
	$jq("#RegionalPricingLocation-snapshot").jfpwidget("refresh");
}*/

function getHeightOfRegionalPricingDialogSnapshot() {
	return jQuery("div[id^='big-c'] ul#RegionalPricingLocation-snapshot-menu").parent().attr('id');
}

function getLocationErrorHeight() {
	var location_error = document.getElementById('locationerror');
	var x = location_error.offsetHeight;
	if(x > locationErrorHeight)
		locationErrorHeight = x;
	return 	(location_error.style.display=='none')?0:x;

}

function openModalWindow() {
	(function(){var f = function(){jQuery(function($){

		document.getElementById("locationerror").style.display="none";
		if(isHeightOfRegionalPricingReset) {
			var a = getHeightOfRegionalPricingDialogSnapshot();
			b = document.getElementById(a).style.top;
			b= b.substring(0,b.indexOf('px'));
			isHeightOfRegionalPricingReset= false;
			document.getElementById(a).style.top = (parseInt(b) -  locationErrorHeight) + "px";

		}
		jQuery("#regionalpricing-dialog").jfpwidget('open');
		jQuery('.ui-dialog-titlebar-close').remove();
		jQuery('.ui-dialog.jfpw-dialog .ui-dialog-titlebar.ui-widget-header').add('colorTextDarkGray colorOverlayBackground');
		jQuery('#RegionalPricingLocation-snapshot-button').on('click', function() {
			jQuery("#RegionalPricingLocation-snapshot").jfpwidget().getProperty('open');
		});
	})};if (window.$RDY){alert(window.$RDY);}else{f();}})();

}

function clearLocationForm(){
	regionState= getCookie("GoverningState");
	if(parent.document.getElementById('regionalpricing-dialog')!=null && regionState != null){
		//parent.jQuery.close();
		document.getElementsByName('stateSelected')[0].selectedIndex =0 ;
		document.getElementById("locationerror").style.display="none";
		jQuery('.ui-selectmenu-status .ui-selectmenu-item-header').html('Select a State');
		jQuery("#regionalpricing-dialog").jfpwidget('close');
	} else {
		location.href ="/US/JPS/portal/Index.do";
		//window.focus();
		//jQuery("#regional-dialog").jfpwidget('close');
	}
}


//R121 SLP Changes To open the GovState overlay starts
function openModalWindowSLP() {

	var  url = "/US/JRSAO/ao_online/EditGovStateSLP.do" ;
	jQuery.ajax({ url:url, cache:false, success: function(showData){
		jQuery('#ChangeGS').html(showData);
		jQuery('#regionalpricing-SLP-dialog').jfpwidget('open');		
	}});

}

function showpdf(url){
	launchPopup(url,'','resizable,scrollbars,width=550,height=650');
}

function submitRPSelectStateFormSLP(stateName) { 	
	type = "ao";
	if('undefined'!= stateName && stateName.value == 0) {
		showError();
	} else {
		var  url = "/US/JRSAO/ao_online/saveLocationSLP.do?state="+stateName.value;
		jQuery.ajax({ url:url,cache:false, success: function(showData){
			jQuery('#regionalpricing-SLP-dialog').jfpwidget('close');
			window.location.reload();	
		}});
	}
	return false;
}

function openModalWindowSLPAda() {	
	(function(){var f = function(){jQuery(function($){		


		jQuery("#state-level-pricing-dialog").jfpwidget('open');
		jQuery('.ui-dialog.jfpw-dialog .ui-dialog-titlebar.ui-widget-header').add('colorTextDarkGray colorOverlayBackground');

	})};if (window.$RDY){alert(window.$RDY);}else{f();}})();

}
//R121 SLP Changes To open the GovState overlay ends
//Code from locationform.js ends


jQuery('document').ready(function() {
//	The functions below is for creating tooltips
	setTimeout(function(){
		jQuery.subscribe('/topic/minimumWarning', function(event, data) {
			// need to get the id for the link that got clicked
			var MinimumWarningEventID=event.target.id;
			var clickedEventID = MinimumWarningEventID.substr(15); // including the dash
			var clickedEventIDInfo = "#" + MinimumWarningEventID + "-info";
			var clickedEventIDToolTip = "#ui-tooltip-" + MinimumWarningEventID;
			var clickedEventIDTitle = "#" + MinimumWarningEventID + "-title"; 
			var clickedEventIDInfoInner = "#" + MinimumWarningEventID + "-info-inner";
			jQuery(clickedEventIDToolTip).css({ "max-width": "700px" });
			var mystyle= {"float" : "left", "position" : "relative", "width" : "360px", "height" : "200px"};
			jQuery(clickedEventIDInfoInner).css(mystyle);
			jQuery(clickedEventIDInfoInner).html('<br>');
			jQuery(clickedEventIDTitle).hide();
			jQuery("#"+MinimumWarningEventID).jfpwidget('reposition');

			if(jQuery("#minimumWarningSpinner").length == 0) 
			{
				// we replace the content of the div on each load... so we recreate the widget...
				jQuery('<div id="minimumWarningSpinner"></div>').appendTo('body');
				jQuery("#minimumWarningSpinner").jfpwidget(new CJW.jfp.widget.Spinner({ wrapperSet: "#minimumWarningSpinner" }, {}, {}));
			}

			jQuery('#minimumWarningSpinner').jfpwidget('block', clickedEventIDToolTip);
			jQuery.ajax({
				url:'/US/NCPS/minpayment/flow.action',
				type:'post',
				data: {selectedCCIndex: clickedEventID,toolTip : 'y'},
				cache:false,
				success:function(data)
				{
					jQuery("#minimumWarningSpinner").jfpwidget("unblock"); // Remove spinner here
					jQuery(clickedEventIDInfoInner).css({"height": "auto",  "width": "auto"});
					jQuery(clickedEventIDInfo).html(data);
					jQuery("#"+MinimumWarningEventID).jfpwidget('reposition');
					jQuery(clickedEventIDInfoInner).css({"height": "auto",  "width": "auto"});
					jQuery(clickedEventIDTitle).show();
				}

			});
		}, 2000);		
	});

	jQuery.subscribe('/topic/latePaymentWarning', function(event, data) {
		// need to get the id for the link that got clicked
		var LatePaymentWarningEventID=event.target.id;
		var clickedEventID = LatePaymentWarningEventID.substr(19); // including the dash
		var clickedEventIDInfo = "#" + LatePaymentWarningEventID + "-info";   
		var clickedEventIDTitle = "#" + LatePaymentWarningEventID + "-title"; 
		var clickedEventIDToolTipContent = "#" + "ui-tooltip-" + LatePaymentWarningEventID + "-content";
		jQuery(clickedEventIDToolTipContent).height(116);

		jQuery(clickedEventIDInfo).html("");
		//The title is hidden when the content is yet to be retrieved
		jQuery(clickedEventIDTitle).hide();

		if(jQuery("#latePaymentSpinner").jfpwidget() == undefined) {
			jQuery("#latePaymentSpinner").remove();
		}
		// Add element and create widget
		if(jQuery("#latePaymentSpinner").length == 0) {
			//we replace the content of the div on each load... so we recreate the widget...
			jQuery('<div id="latePaymentSpinner"></div>').appendTo('body');
			jQuery("#latePaymentSpinner").jfpwidget(new CJW.jfp.widget.Spinner({ wrapperSet: "#latePaymentSpinner" }, {}, {}));
		}

		jQuery('#latePaymentSpinner').jfpwidget('block', clickedEventIDToolTipContent);

		jQuery.ajax({
			url:'/US/NCPS/latepayment/flow.action',
			type:'post',
			data: {selectedCCIndex: clickedEventID,toolTip : 'y'},
			cache:false,
			success:function(data)
			{

				jQuery("#latePaymentSpinner").jfpwidget("unblock"); // Remove spinner here
				$(clickedEventIDInfo).html(data);
				var idinfo = jQuery(clickedEventIDInfo).height();  //Get the height of the Info
				jQuery(".LatePayWrapper").height(idinfo);          //Set it in the LatePaymentWrapper
				jQuery(clickedEventIDTitle).show();
			}

		});

	});
	if(typeof lpAddVars!= 'undefined'){
		if(typeof lpShowButton != 'undefined'){	
			if((typeof ewReferCode!= 'undefined') && (ewReferCode == "CJ"))
			{
				lpAddVars("page","QueueValue",crewQueueValue);
			}
		}
	}
	if (jQuery('#pageWrapper').length){
		jQuery('.ChatImage').appendTo('#pageWrapper');
	}
});


function loadToolTip(){  
	$("#bodyTableDiv").on("click","span.ToolTipLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';
			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(

							{wrapperSet:wrapper},
							{  
								show: { 
								solo: true,
								event: 'click'
							},
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: {
								button: true
							} 
							},
							position: { 
								at: 'top center',
								my: 'bottom center'
							}, 
							hide: { 
								event: 'unfocus'
							},
							style: {
								classes:'tooltip-static jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'bottom center',
								border: 3,
								width: 12,
								height: 8
							}
							}
							}
					)
			);
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle");
		}
	});

	$("#bodyTableDiv").on("click","span.ToolTipLatePaymentLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';

			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(

							{wrapperSet:wrapper},
							{  
								show: { 
								solo: true,
								event: 'click'
							},
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: {
								//text: '&nbsp;', - Avatar ph1 defect 13993 - Shelley Xie (sx22930) 
								button: true
							} 
							},
							position: {   
								at: 'right center',
								my: 'left center',
								adjust: { 

								x: 4  
							}
							}, 
							hide: { 
								event: 'unfocus'
							},   
							style: {
								classes:'tooltip-late jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'left center',
								border: 3,
								width: 8,
								height: 8
							}
							}
							},
							{ "/topic/latePaymentWarning" : [ "show" ]}
					)); 
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle");
		}
	});

	$("#bodyTableDiv").on("click","span.ToolTipMinimumLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';

			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(
							{wrapperSet:wrapper},
							{  
								show: { 
								solo: true,
								event: 'click'
							}, 
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: {			 	   
								button: true
							} 
							},
							position: {   
								at: 'bottom center',
								my: 'top center'

							}, 
							hide: { 
								event: 'unfocus'
							},   
							style: {
								classes:'tooltip-minimum jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'top center',
								border: 3,
								width: 12,
								height: 7
							}
							}
							},
							{ "/topic/minimumWarning" : [ "show"  ]}
					)
			); 
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle structAlignforMinPayInAS");
			$("span.WarningTitle").removeClass("tooltitle");
		}
	});
} 



function loadToolTipForAcctSummary(){  
	$("#sumbodyTable").on("click","span.ToolTipLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';

			var headerMsg = $(wrappertitle).html();
			if(headerMsg == null)
				headerMsg = '&nbsp;';

			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(

							{wrapperSet:wrapper},
							{  
								metadata: {
								type: 'title'
							},   
							showTitle : true,
							show: { 
								solo: true,
								event: 'click'
							},
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: { text: headerMsg, button: true }
							},
							position: { 
								at: 'top center',
								my: 'bottom center'
							}, 
							hide: { 
								event: 'unfocus'
							},
							style: {
								classes:'tooltip-static jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'bottom center',
								border: 3,
								width: 12,
								height: 8
							}
							}
							}
					)
			);
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle");
		}
	});

	$("#sumbodyTable").on("click","span.ToolTipLatePaymentLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';

			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(

							{wrapperSet:wrapper},
							{  
								show: { 
								solo: true,
								event: 'click'
							},
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: {
								//text: '&nbsp;', - Avatar ph1 defect 13993 - Shelley Xie (sx22930) 
								button: true
							} 
							},
							position: {   
								at: 'bottom center',
								my: 'top center',
								adjust: { 

								x: 4  
							}
							}, 
							hide: { 
								event: 'unfocus'
							},   
							style: {
								classes:'tooltip-late jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'top center',
								border: 3,
								width: 8,
								height: 8
							}
							}
							},
							{ "/topic/latePaymentWarning" : [ "show" ]}
					)); 
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle");
		}
	});

	$("#sumbodyTable").on("click","span.ToolTipMinimumLabel",  function() {
		if ($(this).jfpwidget() == undefined){
			var wrapper = '#' + $(this).attr('id');
			var wrappertitle='#' + $(this).attr('id')+'-title';
			$(this).jfpwidget(
					new CJW.jfp.widget.Tooltip(
							{wrapperSet:wrapper},
							{  
								show: { 
								solo: true,
								event: 'click'
							}, 
							events: { 
								show:function(event,api) 
								{ 
								$(wrapper).jfpwidget('reposition'); 
								} 
							}, 
							content: {
								title: {			 	   
								button: true
							} 
							},
							position: {   
								at: 'bottom center',
								my: 'top center'

							}, 
							hide: { 
								event: 'unfocus'
							},   
							style: {
								classes:'tooltip-minimum jfpw-tooltip ui-tooltip-shadow',
								tip: {
								corner: true,
								mimic: 'top center',
								border: 3,
								width: 12,
								height: 7
							}
							}
							},
							{ "/topic/minimumWarning" : [ "show"  ]}
					)
			); 
			//end widget creation code
			$(wrapper).jfpwidget('show');
			$(wrappertitle).addClass("showTooltitle structAlignforMinPayInAS");
			$("span.WarningTitle").removeClass("tooltitle");
		}
	});
} 




//The code snippet below is from truncate.js

(function(jQuery) {
	var trailing_whitespace = true;
	$.fn.truncate = function(options) {
		var opts = $.extend({}, $.fn.truncate.defaults, options);
		var content  =squeeze($(this).text());
		var content_length = content.length;
		if (content_length <= opts.max_length) {
			jQuery('div.StructGlobalAlertDiv').removeClass('appShowNone');
			jQuery('div.StructBroadcastAlertDiv').removeClass('appShowNone');
			return;  // bail early if not overlong
		}
		var actual_max_length = opts.max_length;  // 3 for " ()"
		//var actual_max_length = opts.max_length - (opts.more.length + 1 );
		if(content.substring(opts.max_length,opts.max_length+1)==' ') {
			actual_max_length = actual_max_length;
		} else {
			var tempcontent = content.substring(0,actual_max_length);
			tempcontent = tempcontent.substring(0,tempcontent.lastIndexOf(' '));
			actual_max_length = tempcontent.length;
		}
		var truncated_node = recursivelyTruncate(this, actual_max_length);
		var full_node = $(this).hide();
		truncated_node.insertAfter(full_node);
		truncated_node.append('&nbsp;<label id= "'+opts.id+'">'+ opts.more+'</label>');
		jQuery('div.StructGlobalAlertDiv').removeClass('appShowNone');
		jQuery('div.StructBroadcastAlertDiv').removeClass('appShowNone');
	};

	// Note that the " (…more)" bit counts towards the max length – so a max
	// length of 10 would truncate "1234567890" to "12 (…more)".
	$.fn.truncate.defaults = {
			max_length: 100,
			more: '.....',
			id:'alertwrapper'

	};

	function recursivelyTruncate(node, max_length) {
		return (node.nodeType == 3) ? truncateText(node, max_length) : truncateNode(node, max_length);
	}

	function truncateNode(node, max_length) {
		var node = $(node);
		var new_node = node.clone().empty();
		var truncatedChild;
		node.contents().each(function() {
			var remaining_length = max_length - new_node.text().length;
			if (remaining_length == 0 ) {
				return;  // breaks the loop
			}
			truncatedChild = recursivelyTruncate(this, remaining_length);
			new_node.append(truncatedChild);
		});
		return new_node;
	}

	function truncateText(node, max_length) {
		var text = squeeze(node.data);
		// if (trailing_whitespace)  // remove initial whitespace if last text
		//  text = text.replace(/^ /, '');  // node had trailing whitespace.
		// trailing_whitespace = !!text.match(/ $/);
		var text = text.slice(0, max_length);
		//text = text.substring(0, max);
		// Ensure HTML entities are encoded
		// http://debuggable.com/posts/encode-html-entities-with-jquery:480f4dd6-13cc-4ce9-8071-4710cbdd56cb
		text = $('<div/>').text(text).html();
		return text;

	}

	// Collapses a sequence of whitespace into a single space.
	function squeeze(string) {
		return string;//.replace(/\s+/g, ' ');
	}

	// Finds the last, innermost block-level element
	function findNodeForMore(node) {
		var $node = $(node);
		var last_child = $node.children(":last");
		if (!last_child) return node;
		var display = last_child.css('display');
		if (!display || display=='inline') return $node;
		return findNodeForMore(last_child);
	};
})(jQuery);

//Code from truncate.js ends

//copied the following functions from cssPref.js to resolve the error loadCookie() not defined
function loadCookie() {
	var cookie = readCookie("style");
	var title = cookie ? cookie : showPrefCSS();
	loadCSS(title);
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function showPrefCSS() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1
				&& a.getAttribute("rel").indexOf("alt") == -1
				&& a.getAttribute("title")
		) return a.getAttribute("title");
	}
	return null;
}

function loadCSS(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) a.disabled = false;
		}
	}
	createCookie("style", title, 400);  
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
//changes for resolving loadCookie not defined error end here

function loadPrefCSS() {
	var c, b;
	for (c = 0; (b = document.getElementsByTagName("link")[c]); c++) {
		if (b.getAttribute("rel").indexOf("style") != -1
				&& b.getAttribute("title") && !b.disabled) {
			return b.getAttribute("title")
		}
	}
	return null
}
//changes for resolving loadCookie not defined error end here

//Changes for Global Mbar Implementation Starts

function MBarLaunchPage(speedBump, name, acctIndex, linkURL, waveId, campaignId, origin, pageDef){
	var offername_index, current_mbarposition = currentMBPosition.split(","), currentmbaroffer = "";

	// If currentMBPosition and currentMBOfferNames are same length, and name exists, find name's corresponding offer 
	if (current_mbarposition.length === currentMBOfferNames.length) {
		offername_index = $.inArray(name,currentMBOfferNames);
		currentmbaroffer = (offername_index != -1) ? current_mbarposition[offername_index] : "";
	}

	if (linkURL.indexOf("/cards/credit/application/flow.action") != -1 && linkURL.indexOf("isInvitation") != -1) {
		populatePreQualParams(linkURL, speedBump);
	} else {
		fireOfferURL(linkURL, speedBump);
	}
	//Passing currentmbaroffer in updateSOMForMBAR to update in SOM
	updateSOMForMBAR(pageDef, name, waveId, campaignId,origin, 'Clicked', 'Interested', acctIndex, currentmbaroffer);
}



/**
 * Populates the preQual ph3 9params from regionHeadInclude.jsp
 * and creates temporary form and submit immediately 
 * @param linkURL
 * @param speedBump
 * @return
 */
function populatePreQualParams(linkURL, speedBump){
	var jsonObj;
	$.ajax({ 
		url:"/US/REST/prequaloffers/populatePrequalOffers.jws",
		type:"POST", 
		dataType: "json",
		global:false,
		success:function(data){
		jsonObj= eval(data);
		var target="_blank";
		var pq_form = '<form name="pqform" action="'+linkURL+'" id="pqform" method="POST" target="'+target+'">'+
		'<input type="hidden" name="FIRST_NAME" value="'+jsonObj.customerFirstName+'"></input>'+
		'<input type="hidden" name="MIDDLE_INITIAL" value="'+jsonObj.customerMiddleInitial+'"></input>'+
		'<input type="hidden" name="LAST_NAME" value="'+jsonObj.customerLastName+'"></input>'+
		'<input type="hidden" name="SUFFIX" value="'+jsonObj.customerNameSuffix+'"></input>'+
		'<input type="hidden" name="ADDRESS_LINE1" value="'+jsonObj.customerAddresLine1+'"></input>'+
		'<input type="hidden" name="ADDRESS_LINE2" value="'+jsonObj.customerAddresLine2+'"></input>'+
		'<input type="hidden" name="CITY" value="'+jsonObj.customerCity+'"></input>'+
		'<input type="hidden" name="STATE" value="'+jsonObj.customerState+'"></input>'+
		'<input type="hidden" name="ZIP" value="'+jsonObj.customerZipCode+'"></input>'+
		'</form>';
		$('body').append(pq_form);
		$('#pqform').submit();
		$('#pqform').remove();
	}
	});
}
function MBarLaunchPageCOR(speedBump, name, acctIndex, linkURL, waveId, campaignId, origin, pageDef,FBROfferID,FBRCat){
	var offername_index, current_mbarposition = currentMBPosition.split(","), currentmbaroffer = "";

    // If currentMBPosition and currentMBOfferNames are same length, and name exists, find name's corresponding offer 
    if (current_mbarposition.length === currentMBOfferNames.length) {
    	offername_index = $.inArray(name,currentMBOfferNames);
        currentmbaroffer = (offername_index != -1) ? current_mbarposition[offername_index] : "";
    }

	fireOfferURL(linkURL, speedBump);
	updateAOMCORForMBAR(pageDef,name,waveId,campaignId,origin,'Clicked',acctIndex,FBROfferID,FBRCat,currentmbaroffer);
}

function fireOfferURL(linkURL, speedBump){
	if(speedBump == ''){
		lnk(linkURL);
	}
	else if(speedBump != '') {
		if(speedBump == "NW" ){
			launchPopup(linkURL, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');	
		}else if (speedBump != "NW" ) {
			launchPopup(linkURL, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');		
		}
	}
}

//Changes for Global Mbar Implementation Ends
//Adding the code of leftPanel.js starts

//Global BAU Consumption Changes 7.8.1 - Incorporated the leftPanel.js changes as per new json structure -Starts

var dashboard = (function(window, $) {
	function createDashboard(onloaddata) {
		if(onloaddata.errorMessageViewObj==null) {
			var singleCountry=onloaddata.summaryViewBeanList;
			var singleCountryLen=singleCountry.length
			var countryViewBeanList=onloaddata.countryViewBeanList;
			var dashboardData=singleCountry[0];
			var multipleCategories = false;
			var multipleAccountWithinCategory = false;
			if (dashboardData.accountsSummaryViewObj.categoryList != null)
			{
				for(var x=0; x<dashboardData.accountsSummaryViewObj.categoryList.length; x++) {
					if((dashboardData.accountsSummaryViewObj.categoryList.length > 1) ||
							(dashboardData.accountsSummaryViewObj.categoryList.length>0 && dashboardData.rewardsDetailViewObj && dashboardData.rewardsDetailViewObj.rewardsList && dashboardData.rewardsDetailViewObj.rewardsList.length>0)) {
						multipleCategories = true;
					}
					if(dashboardData.accountsSummaryViewObj.categoryList[x].products
							&& dashboardData.accountsSummaryViewObj.categoryList[x].products.length > 1) {
						multipleAccountWithinCategory = true;
					}
				}
			}
			var numOfRewardsAccounts = 0;
			if(dashboardData.rewardsDetailViewObj 
					&& dashboardData.rewardsDetailViewObj.rewardsList 
					&& dashboardData.rewardsDetailViewObj.rewardsList.length>0) {
				for(var x=0; x<dashboardData.rewardsDetailViewObj.rewardsList.length; x++) {
					numOfRewardsAccounts += dashboardData.rewardsDetailViewObj.rewardsList[x].rewardsAccountList.length;
				}
			}
			if( numOfRewardsAccounts > 1 ) {
				multipleAccountWithinCategory = true;
			}
			if(dashboardData.countryViewBean.countryCode == "HOME") {
				if(multipleCategories && multipleAccountWithinCategory) {
					createDashboardWithCategories(dashboardData, onloaddata);
				} else {
					createDashboardWithOutCategories(dashboardData, onloaddata);
				}
			} else {
				$('#accountTypeRadioButtons').remove();
				if(multipleCategories && multipleAccountWithinCategory) {
					createGVADashboardWithCategories(dashboardData, onloaddata);
				} else {
					createGlobalDashboardWithOutCategories(dashboardData, onloaddata);
				}
			}
			$('.cT-labelValItem').each(function(){
				if($(this).children('.cT-labelItem').height()>20) {
					var valItemsDOMObject = $(this).children('.cT-labelItem').parent().children('.cT-valueItem');
					if(valItemsDOMObject.length<2) {
						valItemsDOMObject.css('marginTop', $(this).children('.cT-labelItem').height()-valItemsDOMObject.height() + 'px');
					}
				}
				var secondValueItem = false;
				if($(this).find('.cT-valueItem').length > 1){
					secondValueItem = $($(this).find('.cT-valueItem')[1]);
				}
				if(secondValueItem){
					if(secondValueItem.parent().parent().parent().parent().hasClass('cT-dualCurrencyAccount')) {
						secondValueItem.addClass('cT-dualCurrencyValue')
					}
					if(secondValueItem.parent().parent().parent().parent().hasClass('cT-dualCurrencyAccount')) {
						secondValueItem.addClass('cT-multiCurrencyValue')
					}
				}
			});
			if(!$('select#accountTypeSelect').html()) {
				if(dashboardData.accountsSummaryViewObj.accountDropdownFilter && dashboardData.accountsSummaryViewObj.accountDropdownFilter.dispFilterViewDropdown) {
					$('#accountTypeDropdown').remove();
					$('#accountTypeDropdownTemplate').tmpl(dashboardData.accountsSummaryViewObj).insertBefore('div.cT-openCloseAllButtons');
					$jq("#accountTypeSelect").jfpwidget(new CJW.jfp.widget.Select(
							{
								wrapperSet: "#accountTypeSelect"
							},
							{
								width: 225,
								menuWidth: 225,
								style: 'dropdown',
								maxHeight: 150,
								change: function () {filterAccountsBasedOnDropdownValue($(this).val(), true)}
							},
							{}));
					if(dashboardData.countryViewBean.countryCode == "HOME" && dashboardData.accountsSummaryViewObj.accountDropdownFilter.savedProdSegmentFilterVal) {
						$('#accountTypeSelect').jfpwidget("setProperty", "value", dashboardData.accountsSummaryViewObj.accountDropdownFilter.savedProdSegmentFilterVal);
					}
					filterAccountsBasedOnDropdownValue($('#accountTypeSelect').val(), false);
				}
			} else {
				$('#accountTypeRadioButtons').remove();
				if(dashboardData.accountsSummaryViewObj.accountDropdownFilter && dashboardData.accountsSummaryViewObj.accountDropdownFilter.dispFilterViewDropdown) {
					$('#accountTypeRadioTemplate').tmpl(dashboardData.accountsSummaryViewObj).insertBefore('div.cT-openCloseAllButtons');
					$('#accountTypeRadioButtons input').change(function(){
						if($(this).parent().find('input[name="CONSUMER"]').attr('checked') || $(this).parent().find('input[name="BUSINESS"]').attr('checked')) {
							if($(this).parent().find('input[name="CONSUMER"]').attr('checked') && $(this).parent().find('input[name="BUSINESS"]').attr('checked')) {
								filterAccountsBasedOnDropdownValue("ALLACCOUNTS", true);
							} else if($(this).parent().find('input[name="CONSUMER"]').attr('checked')) {
								filterAccountsBasedOnDropdownValue("CONSUMER" ,true);
							} else if($(this).parent().find('input[name="BUSINESS"]').attr('checked')) {
								filterAccountsBasedOnDropdownValue("BUSINESS" ,true);
							} else {
								filterAccountsBasedOnDropdownValue("SHOWNONE",true);
							}
						} else {
							$(this).attr('checked', true);
						}
					});
					if(dashboardData.countryViewBean.countryCode == "HOME" && dashboardData.accountsSummaryViewObj.accountDropdownFilter.savedProdSegmentFilterVal) {
						if(dashboardData.accountsSummaryViewObj.accountDropdownFilter.savedProdSegmentFilterVal == "BUSINESS") {
							$('#accountTypeRadioButtons input[name="CONSUMER"]').attr('checked', false);
							$('#accountTypeRadioButtons input[name="BUSINESS"]').attr('checked', true);
							filterAccountsBasedOnDropdownValue("BUSINESS", false);
						} else if(dashboardData.accountsSummaryViewObj.accountDropdownFilter.savedProdSegmentFilterVal == "CONSUMER") {
							$('#accountTypeRadioButtons input[name="CONSUMER"]').attr('checked', true);
							$('#accountTypeRadioButtons input[name="BUSINESS"]').attr('checked', false);
							filterAccountsBasedOnDropdownValue("CONSUMER", false);
						} else {
							$('#accountTypeRadioButtons input[name="CONSUMER"]').attr('checked', true);
							$('#accountTypeRadioButtons input[name="BUSINESS"]').attr('checked', true);

							filterAccountsBasedOnDropdownValue("ALLACCOUNTS", false);
						}
					}
				}
			}
		} else {
			dashboard.genericErrorState(onloaddata.errorMessageViewObj);
		}
	}
	function createRTUAccount(account,containerId){
		$("#rtuAccountSection").tmpl(account).appendTo(containerId);
	}
	function createDashboardWithCategories(dashboardData, onloaddata) {
		$('.cS-structAccountsPanelContainer .cT-openCloseAllButtons').show();
		var orderList = dashboardData.accountsSummaryViewObj.groupOrder;
		if(orderList !=null)
		{
			var numOfAccExpColl = 0;
			for(var x = 0; x < orderList.length; x++){
				if(orderList[x]=="RWD") {
					if(dashboardData.rewardsDetailViewObj!=null){
						var numberOfAccounts = 0;
						var createHead=false;
						for(var y=0; y<dashboardData.rewardsDetailViewObj.rewardsList.length; y++) {
							numberOfAccounts += dashboardData.rewardsDetailViewObj.rewardsList[y].rewardsAccountList.length;
							if(!createHead && dashboardData.rewardsDetailViewObj.rewardsList[y].sellStateInfo.length >0){
								createHead=true;
							}
						}
						numOfAccExpColl += numberOfAccounts;
						if(numberOfAccounts>0 ||createHead) {
							createCategoryRewardsHeader(dashboardData.rewardsDetailViewObj);
						}
						insertRewardsAccountData('account-display-REWARDS', dashboardData.rewardsDetailViewObj, "#categoryType-Rewards" + " > div.cT-tableAccountsPanelContainer > table");
					}
				} else if (orderList[x]=="CITI") {
					if(dashboardData.accountsSummaryViewObj!=null){
						var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
						for(var i=0;i<categoryListLength;i++){
							var prodCount = 0;
							if (dashboardData.accountsSummaryViewObj.categoryList[i].products != null){
								prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
								numOfAccExpColl += dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
							}
							var account=dashboardData.accountsSummaryViewObj.categoryList[i];
							if(account.groupType=="CITI") {
								if(prodCount > 0) {
									if(account.categoryType == checkingCatCode) {
										createCategoryHeader(account);
										insertAccountData('account-display-CHECKING', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table" );
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == cardsCatCode){
										createCategoryHeader(account);
										insertAccountData('account-display-CREDITCARDS', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == savingsCatCode){
										createCategoryHeader(account);
										insertAccountData('account-display-SAVINGS', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == investmentCatCode){
										createCategoryHeader(account);
										insertAccountData('account-display-INVESTMENTS', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == loansCatCode){
										createCategoryHeader(account);
										account.numOfCategories = categoryListLength;
										insertAccountData('account-display-LINESANDLOANS', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == retirementCatCode){
										createCategoryHeader(account);
										insertAccountData('account-display-RETIREMENT_PLANS', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									} else if(account.categoryType == salaryCatCode) {
										createCategoryHeader(account);
										insertAccountData('account-display-SALARY', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == insuranceCatCode) {
										createCategoryHeader(account);
										insertAccountData('account-display-INSURANCE', account, "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
										createCategoryDataFooter(account);
										createRTUAccount(account,"#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
									}
								}
								else {
									$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
								}
							}
						}
					}
				} else if (orderList[x]=="EXT") {
					if(dashboardData.accountsSummaryViewObj!=null){
						var numberOfAccounts = 0;
						var catViewObjHeader = "";
						for(var i=0;i<dashboardData.accountsSummaryViewObj.categoryList.length;i++) {
							if(dashboardData.accountsSummaryViewObj.categoryList[i].groupType=="EXT"){
								if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
									numberOfAccounts += dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
								}
								catViewObjHeader = dashboardData.accountsSummaryViewObj.categoryList[i].catHeaderLabel;
							}
						}
						numOfAccExpColl += numberOfAccounts;
						if(numberOfAccounts>0) {
							createExternalCategoryHeader(catViewObjHeader, numberOfAccounts);
						}
						var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
						for(var i=0;i<categoryListLength;i++){
							var account=dashboardData.accountsSummaryViewObj.categoryList[i];
							var prodCount = 0;
							if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
								prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
							}
							if(account.groupType=="EXT") {
								if (prodCount > 0){
									if(account.categoryType == checkingCatCode) {
										insertAccountData('extAccount-display-CHECKING', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == cardsCatCode){
										insertAccountData('extAccount-display-CREDIT', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == savingsCatCode){
										insertAccountData('extAccount-display-SAVINGS', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == investmentCatCode){
										insertAccountData('extAccount-display-INVESTMENTS', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == loansCatCode){
										insertAccountData('extAccount-display-LINESANDLOANS', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == salaryCatCode){
										insertAccountData('extAccount-display-SALARY', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == insuranceCatCode){
										insertAccountData('extAccount-display-INSURANCE', account, "#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"#categoryType-EXTERNAL > div.cT-tableAccountsPanelContainer");
									}
								}
								else {
									$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
								}
							}
						}
					}
				}
			}
		}
		for(var x=0; x<dashboardData.accountsSummaryViewObj.categoryList.length; x++){
			if(dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean &&
					dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean.disclosureText != null) {
				insertAccountData('disclosure-display', dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean, "#categoryType-" + dashboardData.accountsSummaryViewObj.categoryList[x].categoryType + " > div.cT-tableAccountsPanelContainer > table");
			}
		}
		if (dashboardData.accountsSummaryViewObj.nonCitiBalInfoErrorText != null) {
			$("#accountDisplayError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
			if(dashboardData.accountsSummaryViewObj.accBalInfoErrorText) {
				$('#accountsPanelInnerContainer table').css({"margin-top": "30px"});
				$('#accountsPanelInnerContainer table thead').hide();
			}
		}
		if (dashboardData.accountsSummaryViewObj.errorMessageText != null) {
			$("#missingAccountsError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
		}
		$('.cT-labelValItem > .cT-labelItem').each(function(){
			if($(this).height()>20) {
				var valItemsDOMObject = $(this).parent().children('.cT-valueItem');
				if(valItemsDOMObject.length<2) {
					valItemsDOMObject.css('marginTop', $(this).height()-valItemsDOMObject.height() + 'px');
				}
			}
		});
		dashboard.categoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		dashboard.openCategoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		if(numOfAccExpColl > 4){
			$.each($("#accountsPanelInnerContainer .cT-categoryType"), function(index) {
				if(index==0) {
					dashboard.showCategoryNoAnimation($(this));
				} else {
					dashboard.hideCategoryNoAnimation($(this));
				}
			});
		}
	}
	function createDashboardWithOutCategories(dashboardData, onloaddata){
		$('.cS-structAccountsPanelContainer .cT-openCloseAllButtons').hide();
		$("#accountDashboardNoCategories").tmpl().appendTo( "#accountsPanelInnerContainer" );
		var orderList = dashboardData.accountsSummaryViewObj.groupOrder;
		if(orderList !=null)
		{
			for( var x=0; x<orderList.length; x++) {
				if(orderList[x]=="RWD") {
					if(dashboardData.rewardsDetailViewObj!=null){
						insertRewardsAccountData('account-display-REWARDS', dashboardData.rewardsDetailViewObj, "div.cT-tableAccountsPanelContainer > table");
					}
				} else if (orderList[x]=="CITI") {
					if(dashboardData.accountsSummaryViewObj!=null){
						var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
						for(var i=0;i<categoryListLength;i++){
							if( dashboardData.accountsSummaryViewObj.categoryList[i].groupType=="CITI") {
								var account=dashboardData.accountsSummaryViewObj.categoryList[i];
								var prodCount = 0;
								if (account.errorMessageText) {
									insertAccountData('account-display-CATEGORY-ERROR', {"errorMessage":account.errorMessageText}, "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
								}
								if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
									prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
								}
								if (prodCount > 0){
									if(account.categoryType == checkingCatCode) {
										insertAccountData('account-display-CHECKING', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == cardsCatCode){
										insertAccountData('account-display-CREDITCARDS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == savingsCatCode){
										insertAccountData('account-display-SAVINGS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == investmentCatCode){
										insertAccountData('account-display-INVESTMENTS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == loansCatCode){
										account.numOfCategories = categoryListLength;
										insertAccountData('account-display-LINESANDLOANS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == retirementCatCode){
										insertAccountData('account-display-RETIREMENT_PLANS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									} else if(account.categoryType == salaryCatCode) {
										insertAccountData('account-display-SALARY', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == insuranceCatCode) {
										insertAccountData('account-display-INSURANCE', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
								}
								else {
									$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
								}
							}
						}
					}
				} else if (orderList[x]=="EXT") {
					if(dashboardData.accountsSummaryViewObj!=null){
						var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
						for(var i=0;i<categoryListLength;i++){
							if(dashboardData.accountsSummaryViewObj.categoryList[i].groupType=="EXT") {
								var account=dashboardData.accountsSummaryViewObj.categoryList[i];
								var prodCount = 0;
								if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
									prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
								}
								if(prodCount > 0){
									if(account.categoryType == checkingCatCode) {
										insertAccountData('extAccount-display-CHECKING', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == cardsCatCode){
										insertAccountData('extAccount-display-CREDIT', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == savingsCatCode){
										insertAccountData('extAccount-display-SAVINGS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == investmentCatCode){
										insertAccountData('extAccount-display-INVESTMENTS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == loansCatCode){
										insertAccountData('extAccount-display-LINESANDLOANS', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == salaryCatCode){
										insertAccountData('extAccount-display-SALARY', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
									else if(account.categoryType == insuranceCatCode){
										insertAccountData('extAccount-display-INSURANCE', account, "div.cT-tableAccountsPanelContainer > table");
										createRTUAccount(account,"div.cT-tableAccountsPanelContainer");
									}
								}
								else {
									$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
								}
							}
						}
					}
				}
			}
		}
		insertAccountData('nonCategoryDisclosure-display', dashboardData.accountsSummaryViewObj, "div.cT-tableAccountsPanelContainer > table");
		if (dashboardData.accountsSummaryViewObj.nonCitiBalInfoErrorText != null) {
			$("#accountDisplayError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
			if(dashboardData.accountsSummaryViewObj.accBalInfoErrorText) {
				$('#accountsPanelInnerContainer table').css({"margin-top": "30px"});
				$('#accountsPanelInnerContainer table thead').hide();
			}
		}
		if (dashboardData.accountsSummaryViewObj.errorMessageText != null) {
			$("#missingAccountsError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
		}
		$('.cT-labelValItem > .cT-labelItem').each(function(){
			if($(this).height()>20) {
				var valItemsDOMObject = $(this).parent().children('.cT-valueItem');
				if(valItemsDOMObject.length<2) {
					valItemsDOMObject.css('marginTop', $(this).height()-valItemsDOMObject.height() + 'px');
				}
			}
		});
	}
	function createGlobalDashboardWithOutCategories(dashboardData, onloaddata){
		$('.cS-structAccountsPanelContainer .cT-openCloseAllButtons').hide();
		$("#accountsPanelInnerContainer").empty();
		$("#accountDashboardNoCategories").tmpl().appendTo( "#accountsPanelInnerContainer" );
		if(dashboardData.accountsSummaryViewObj!=null){
			var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
			for(var i=0;i<categoryListLength;i++){
				var account=dashboardData.accountsSummaryViewObj.categoryList[i];
				if (account.errorMessageText) {
					insertAccountData('account-display-CATEGORY-ERROR', {"errorMessage":account.errorMessageText}, "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
				}
				var prodCount = 0;
				if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
					prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
				}
				if (prodCount > 0){
					for(var x=0; x<account.products.length; x++) {
						if (account.products[x].errorMessageText) {
							insertAccountData('account-display-GLOBAL-ERROR', account.products[x], "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
						}else{
							insertAccountData('account-display-GLOBAL', account.products[x], "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
						}
					}
					$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer");
				}
				else {
					$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
				}
			}
		}
		if(dashboardData.rewardsDetailViewObj!=null){
			insertRewardsAccountData('account-display-REWARDS', dashboardData.rewardsDetailViewObj, "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
		}
		insertAccountData('nonCategoryDisclosure-display', dashboardData.accountsSummaryViewObj, "#accountsPanelInnerContainer div.cT-tableAccountsPanelContainer > table");
		if (dashboardData.accountsSummaryViewObj.nonCitiBalInfoErrorText != null) {
			$("#accountDisplayError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
			if(dashboardData.accountsSummaryViewObj.accBalInfoErrorText) {
				$('#accountsPanelInnerContainer table').css({"margin-top": "30px"});
				$('#accountsPanelInnerContainer table thead').hide();
			}
		}
		if (dashboardData.accountsSummaryViewObj.errorMessageText != null) {
			$("#missingAccountsError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
		}
	}
	function createGVADashboardWithCategories(dashboardData, onloaddata) {
		$('.cS-structAccountsPanelContainer .cT-openCloseAllButtons').show();
		var numOfAccExpColl = 0;
		if(dashboardData.accountsSummaryViewObj!=null){
			var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
			for(var i=0;i<categoryListLength;i++){
				var prodCount = 0;
				var account=dashboardData.accountsSummaryViewObj.categoryList[i];
				if (account.errorMessageText) {
					createCategoryHeader(account);
					insertAccountData('account-display-CATEGORY-ERROR', {"errorMessage":account.errorMessageText}, "#categoryType-" + account.categoryType + " div.cT-tableAccountsPanelContainer > table");
					createCategoryDataFooter(account);
				}
				if (account.products){
					numOfAccExpColl += dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
					prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
				}
				var account=dashboardData.accountsSummaryViewObj.categoryList[i];
				account.categoryType = account.categoryType.replace(/ /g, '');
				account.categoryType = account.categoryType.replace(/&amp;/g,'and').replace(/&/g,'and');

				if (prodCount > 0) {
					createCategoryHeader(account);
					for(var z=0; z<account.products.length; z++) {
						if (account.products[z].errorMessageText) {
							insertAccountData('account-display-GLOBAL-ERROR', account.products[z], "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table");
						}else{
							insertAccountData('account-display-GLOBAL', account.products[z], "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer > table" );
						}
					}
					createCategoryDataFooter(account);
					$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + account.categoryType + " > div.cT-tableAccountsPanelContainer");
				}
				else {
					$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
				}
			}
		}
		if(dashboardData.rewardsDetailViewObj!=null){
			var numberOfAccounts = 0;
			if(dashboardData.rewardsDetailViewObj && dashboardData.rewardsDetailViewObj.rewardsList){
				for(var y=0; y<dashboardData.rewardsDetailViewObj.rewardsList.length; y++) {
					numberOfAccounts += dashboardData.rewardsDetailViewObj.rewardsList[y].rewardsAccountList.length;;
				}
			}
			numOfAccExpColl += numberOfAccounts;
			if(numberOfAccounts>0) {
				createCategoryRewardsHeader(dashboardData.rewardsDetailViewObj);
			}
			insertRewardsAccountData('account-display-REWARDS', dashboardData.rewardsDetailViewObj, "#categoryType-Rewards" + " > div.cT-tableAccountsPanelContainer > table");
		}
		for(var x=0; x<dashboardData.accountsSummaryViewObj.categoryList.length; x++){
			if(dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean &&
					dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean.disclosureText != null) {
				insertAccountData('disclosure-display', dashboardData.accountsSummaryViewObj.categoryList[x].disclosureViewBean, "#categoryType-" + dashboardData.accountsSummaryViewObj.categoryList[x].categoryType + " > div.cT-tableAccountsPanelContainer > table");
			}
		}
		if (dashboardData.accountsSummaryViewObj.nonCitiBalInfoErrorText != null) {
			$("#accountDisplayError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
			if(dashboardData.accountsSummaryViewObj.accBalInfoErrorText) {
				$('#accountsPanelInnerContainer table').css({"margin-top": "30px"});
				$('#accountsPanelInnerContainer table thead').hide();
			}
		}
		if (dashboardData.accountsSummaryViewObj.errorMessageText != null) {
			$("#missingAccountsError").tmpl(dashboardData.accountsSummaryViewObj).appendTo("#accountsPanelInnerContainer");
		}
		$('.cT-tableAccountsPanel .cT-labelValItem > .cT-labelItem').each(function(){
			if($(this).height()>20) {
				var valItemsDOMObject = $(this).parent().children('.cT-valueItem');
				if(valItemsDOMObject.length<2) {
					valItemsDOMObject.css('marginTop', $(this).height()-valItemsDOMObject.height() + 'px');
				}
			}
		});
		dashboard.categoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		dashboard.openCategoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		if(numOfAccExpColl > 4){
			$.each($("#accountsPanelInnerContainer .cT-categoryType"), function(index) {
				if(index==0) {
					dashboard.showCategoryNoAnimation($(this));
				} else {
					dashboard.hideCategoryNoAnimation($(this));
				}
			});
		}
	}
	function createCountryCategory(dashboardData, onloaddata, dropDownId) {
		$("#categoryType-" + dropDownId + " div.cT-tableAccountsPanelContainer > table").show();
		$("#categoryType-" + dropDownId + " .cA-countryLoading").hide();
		if(typeof onloaddata == "undefined" || onloaddata.errorMessageViewObj == null) {
			if(dashboardData.accountsSummaryViewObj!=null){
				var categoryListLength=dashboardData.accountsSummaryViewObj.categoryList.length;
				for(var i=0;i<categoryListLength;i++){
					var account=dashboardData.accountsSummaryViewObj.categoryList[i];
					if(dashboardData.countryViewBean.countryCode != "HOME") {
						if(account.errorMessageText){
							insertAccountData('account-display-CATEGORY-ERROR', {"errorMessage":account.errorMessageText}, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
							continue;
						}
						for(var x=0; x<account.products.length; x++) {
							var indivProducts = account.products[x];
							if (indivProducts.errorMessageText) {
								insertAccountData('account-display-GLOBAL-ERROR', indivProducts, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
							}
							else {
								insertAccountData('account-display-GLOBAL', account.products[x], "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
							}
						}
					} else {
						var prodCount = 0;
						if (dashboardData.accountsSummaryViewObj.categoryList[i].products){
							prodCount = dashboardData.accountsSummaryViewObj.categoryList[i].products.length;
						}
						if (prodCount > 0){
							if(account.categoryType == checkingCatCode) {
								insertAccountData('account-display-CHECKING', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							}
							else if(account.categoryType == cardsCatCode){
								insertAccountData('account-display-CREDITCARDS', account, "#categoryType-" + dashboardData.countryDetailViewObj.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryDetailViewObj.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							}
							else if(account.categoryType == savingsCatCode){
								insertAccountData('account-display-SAVINGS', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							}
							else if(account.categoryType == investmentCatCode){
								insertAccountData('account-display-INVESTMENTS', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							}
							else if(account.categoryType == loansCatCode){
								account.numOfCategories = categoryListLength;
								insertAccountData('account-display-LINESANDLOANS', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							} else if(account.categoryType == retirementCatCode){
								insertAccountData('account-display-RETIREMENT_PLANS', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							} else if(account.categoryType == salaryCatCode) {
								insertAccountData('account-display-SALARY', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							} else if(account.categoryType == insuranceCatCode) {
								insertAccountData('account-display-INSURANCE', account, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
								$("#rtuAccountSection").tmpl(account).appendTo( "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table").wrapAll('<tbody class="cT-rtuAccount"><tr><td colspan="3">');
							}
						}
						else {
							$("#rtuAccountSection").tmpl(account).appendTo( "#accountsPanelInnerContainer");
						}
					}
				}
			}
			if((dashboardData.rewardsDetailViewObj!=null)&&(dashboardData.accBalInfoErrorText)){
				insertRewardsAccountData('account-display-REWARDS', dashboardData.rewardsDetailViewObj, "#categoryType-" + dashboardData.countryViewBean.countryCode + " div.cT-tableAccountsPanelContainer > table");
			}
		} else {
			dashboard.categoryGenericErrorState('#categoryType-' + dropDownId, onloaddata.errorMessageViewObj);
		}
		dashboard.categoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		dashboard.openCategoryCount = $('#accountsPanelInnerContainer .cT-categoryType').length;
		$.each($('#accountsPanelInnerContainer .cT-categoryType'), function() {
			$.each($('tbody'), function() { 
				if($(this).html()=="") { 
					$(this).remove(); 
				} 
			}); 
			var nonRewardsAccts = $(this).find('table tbody:not(.cT-rewardsProgram):not(.cT-disclosureAccount):not(.cM-hide):not(.cT-rtuAccount)').length;
			var rewardsAccts = $(this).find('table tbody.cT-rewardsProgram .cT-firstRow .cT-accountName:not(.cM-hide)').length;
			$(this).find('.cT-categoryTypeHeader .cT-categoryTypeAmount').html('('+ (nonRewardsAccts + rewardsAccts) +')');
		});
	}
	function createCategoryHeader(categoryListObject) {
		var numberOfAccounts = 0;
		if(categoryListObject.products){numberOfAccounts += categoryListObject.products.length;};
		var categoryBalanceViewObjList = categoryListObject.categoryBalViewObjList;
		$("#accountDashboardCategoryTypes").tmpl({name: categoryListObject.catHeaderLabel, catCode: categoryListObject.categoryType, numOfAccounts: numberOfAccounts, catBalObjectList: categoryBalanceViewObjList }).appendTo( "#accountsPanelInnerContainer" );
	}
	function createExternalCategoryHeader(categoryTitle, numberOfAccounts) {
		$("#accountDashboardCategoryTypesExt").tmpl({name: categoryTitle, catCode: "EXTERNAL", numOfAccounts: numberOfAccounts }).appendTo( "#accountsPanelInnerContainer" );
	}
	function createCategoryRewardsHeader(rewardsObj) {
		var numberOfAccounts = 0;
		if(rewardsObj.rewardsList){
			for(var x=0; x<rewardsObj.rewardsList.length; x++) {
				numberOfAccounts += rewardsObj.rewardsList[x].rewardsAccountList.length;;
			}
		};
		$("#accountDashboardCategoryTypesRewards").tmpl({catCode: "Rewards", numOfAccounts: numberOfAccounts }).appendTo( "#accountsPanelInnerContainer" );
	}
	function insertAccountData(accountTemplateID, dashboardObject, tableSelector) {
		$( "#" + accountTemplateID).tmpl( dashboardObject ).appendTo( tableSelector );
	}
	function insertRewardsAccountData(accountTemplateID, rewardsObject, tableSelector) {
		$( "#" + accountTemplateID).tmpl( rewardsObject ).appendTo( tableSelector );
	}
	function createCategoryDataFooter(categoryListObject) {
		var categoryBalanceViewObjList = categoryListObject.categoryBalViewObjList;
		$("#categoryTypeFooter").tmpl({catBalObjectList: categoryBalanceViewObjList}).appendTo( "#categoryType-" + categoryListObject.categoryType + " > .cT-tableAccountsPanelContainer");
	}
	function attachEventHandlers() {
		$('.cT-openCloseAllButtons #expandAll').unbind('click');
		$('.cT-openCloseAllButtons #expandAll').click(function() {dashboard.expandAllEvent();});
		$('.cT-openCloseAllButtons #collapseAll').unbind('click');
		$('.cT-openCloseAllButtons #collapseAll').click(function() {dashboard.collapseAllEvent();});
		$('.cT-openCloseAllButtons').undelegate('#expandAll','keyup');
		$('.cT-openCloseAllButtons').delegate('#expandAll','keyup',function(e) {
			if(e.which == 13) {
				dashboard.expandAllEvent();
			}
		});
		$('.cT-openCloseAllButtons').undelegate('#collapseAll','keyup');
		$('.cT-openCloseAllButtons').delegate('#collapseAll','keyup',function(e) {
			if(e.which == 13) {
				dashboard.collapseAllEvent();
			}
		});
		$('#accountsPanelInnerContainer').undelegate('.cT-categoryTypeHeader', 'click');
		$('#accountsPanelInnerContainer').delegate('.cT-categoryTypeHeader', 'click', function() {dashboard.toggleExpandCollapseCategoryEvent($(this).find('.cM-spriteBase'));})
		$('#accountsPanelInnerContainer').undelegate('.cT-categoryTypeHeader .cM-spriteBase', 'keyup');
		$('#accountsPanelInnerContainer').delegate('.cT-categoryTypeHeader .cM-spriteBase', 'keyup', function(e) {
			if(e.which == 13) {
				dashboard.toggleExpandCollapseCategoryEvent($(this));
			}
		});
		//handleAccountLinkCall();
		handleRtuAccountCall();
	}
	function setStateOfExpandCollapseAllButtons() {
		var openCloseSelector = $('.cT-openCloseAllButtons');
		if(dashboard.areAllCategoryStatesOpen()) {
			openCloseSelector.find('.cM-maximizeButton').addClass('cM-maximizeButtonDisabled');
			openCloseSelector.find('.cM-maximizeButton').removeClass('cM-maximizeButton');
			openCloseSelector.find('.cM-minimizeButtonDisabled').addClass('cM-minimizeButton');
			openCloseSelector.find('.cM-minimizeButtonDisabled').removeClass('cM-minimizeButtonDisabled');
			openCloseSelector.find('#expandAll').addClass('cA-expandDisabled');
			openCloseSelector.find('#collapseAll').removeClass('cA-collapseDisabled');
		} else if(dashboard.areAllCategoryStatesClosed()) {
			openCloseSelector.find('.cM-minimizeButton').addClass('cM-minimizeButtonDisabled');
			openCloseSelector.find('.cM-minimizeButton').removeClass('cM-minimizeButton');
			openCloseSelector.find('.cM-maximizeButtonDisabled').addClass('cM-maximizeButton');
			openCloseSelector.find('.cM-maximizeButtonDisabled').removeClass('cM-maximizeButtonDisabled');
			openCloseSelector.find('#expandAll').removeClass('cA-expandDisabled');
			openCloseSelector.find('#collapseAll').addClass('cA-collapseDisabled');
		} else {
			openCloseSelector.find('.cM-maximizeButtonDisabled').addClass('cM-maximizeButton');
			openCloseSelector.find('.cM-minimizeButtonDisabled').addClass('cM-minimizeButton');
			openCloseSelector.find('.cM-maximizeButtonDisabled').removeClass('cM-maximizeButtonDisabled');
			openCloseSelector.find('.cM-minimizeButtonDisabled').removeClass('cM-minimizeButtonDisabled');
			openCloseSelector.find('#expandAll').removeClass('cA-expandDisabled');
			openCloseSelector.find('#collapseAll').removeClass('cA-collapseDisabled');
		}
	}
	function filterAccountsBasedOnDropdownValue(value, saveFilterStateFlag) {
		if(value=="BUSINESS") {
			dashboard.filterAccountsByProdSegment('cT-consumerProd');
		} else if(value=="CONSUMER"){
			dashboard.filterAccountsByProdSegment('cT-businessProd');
		} else {
			dashboard.filterAccountsByProdSegment('ShowAll');
		}
		if(saveFilterStateFlag) {
			saveFilterState(value);
		}
	}
	function saveFilterState(filterCriteria) {
		var URL = contextPath+'/REST/accountsPanel/saveFilteredView.jws?filterCriteria='+filterCriteria;
		$.ajax({
			url: URL,
			type:"POST",
			dataType: "json",
			global:false
		});
	}
	function resetDashboard() {
		dashboard.invalidParams = false;
		$('#accountsPanelInnerContainer').empty();
	}
	function handleMISCall(code){
		if (screenId == 'Dashboard'){
			URL = contextPath + '/REST/accountsPanel/invokeDBDExitMethod.jws';
			URL+= (code ? '?linkClicked='+code : '');
			$.ajax({
				url:URL,
				type:"POST",
				dataType: "json",
				global:false,
				success:function(data, status, jqXHR){
			},
			error:function(jqXHR){
			}
			});
		}
	}
	return {
		categoryCount: 0,
		openCategoryCount: 0,
		invalidParams: false,
		init : function (dashboardData, gvaFlag) {
		dashboard.showGVALinks();
		dashboard.removeLoadingState();
		resetDashboard();
		createDashboard(dashboardData);
		attachEventHandlers();
		setStateOfExpandCollapseAllButtons();
		tooltipInitializer.createTooltipListeners('span.cT-finanInstitution', 'div.cT-labelItem', 'right center', 'left center');
		tooltipInitializer.createTooltipListeners('span.cM-tooltip', '.cT-labelItem', 'top center', 'bottom center');
		tooltipInitializer.createTooltipListeners('.cT-staticMinWarning', '.cT-tableAccountsPanel>tbody>tr.cT-subRow', 'right center', 'left center');
		productLevelTooltip.attachDynamicContentListener('.cT-dynamicMinWarning', '.cT-tableAccountsPanel>tbody>tr.cT-subRow');
		tooltipInitializer.createTooltipListeners('span.cM-tooltip', '.cT-accountName', 'right center', 'left center');
		htmlTruncator.truncateCBOLAlert('.cT-mandatoryAlert', 76);
	},
	expandAllEvent : function() {
		var categories = $('#accountsPanelInnerContainer .cT-categoryType');
		for(var x=0; x<categories.length; x++) {
			dashboard.showCategory($(categories[x]));
		}
	},
	collapseAllEvent : function() {
		var categories = $('#accountsPanelInnerContainer .cT-categoryType');
		for(var x=0; x<categories.length; x++) {
			dashboard.hideCategory($(categories[x]));
		}
	},
	hideCategory : function(container) {
		var containerSelector = container.find('.cT-categoryTypeHeader > .cM-spriteBase');
		if(!containerSelector.hasClass('cM-maximizeButton')) {
			dashboard.openCategoryCount--;
			containerSelector.removeClass('cM-minimizeButton');
			containerSelector.addClass('cM-maximizeButton');
			if ($('html').hasClass('vIE7') || $('html').hasClass('vIE8')) {
				container.find('.cT-tableAccountsPanelContainer').hide();
				container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').show();
				setStateOfExpandCollapseAllButtons();
			} else {
				container.find('.cT-tableAccountsPanelContainer').slideUp(function(){
					setStateOfExpandCollapseAllButtons();
				});
				container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').show();
			}
			$('#accountTypeSelect').jfpwidget('refresh');
		}
	},
	showCategory : function(container) {
		var containerSelector = container.find('.cT-categoryTypeHeader > .cM-spriteBase');
		if(!containerSelector.hasClass('cM-minimizeButton')) {
			dashboard.openCategoryCount++;
			containerSelector.removeClass('cM-maximizeButton');
			containerSelector.addClass('cM-minimizeButton');
			if ($('html').hasClass('vIE7') || $('html').hasClass('vIE8')) {
				container.find('.cT-tableAccountsPanelContainer').show();
				container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').hide();
				setStateOfExpandCollapseAllButtons();
			} else {
				container.find('.cT-tableAccountsPanelContainer').slideDown(function(){
					setStateOfExpandCollapseAllButtons();
				});
				container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').hide();
			}
			$('#accountTypeSelect').jfpwidget('refresh');
		}
	},
	hideCategoryNoAnimation : function(container) {
		var containerSelector = container.find('.cT-categoryTypeHeader > .cM-spriteBase');
		if(!containerSelector.hasClass('cM-maximizeButton')) {
			dashboard.openCategoryCount--;
			containerSelector.removeClass('cM-minimizeButton');
			containerSelector.addClass('cM-maximizeButton');
			container.find('.cT-tableAccountsPanelContainer').hide();
			container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').show();
			setStateOfExpandCollapseAllButtons();
			$('#accountTypeSelect').jfpwidget('refresh');
		}
	},
	showCategoryNoAnimation : function(container) {
		var containerSelector = container.find('.cT-categoryTypeHeader > .cM-spriteBase');
		if(!containerSelector.hasClass('cM-minimizeButton')) {
			dashboard.openCategoryCount++;
			containerSelector.removeClass('cM-maximizeButton');
			containerSelector.addClass('cM-minimizeButton');
			container.find('.cT-tableAccountsPanelContainer').show();
			container.find('.cT-categoryTypeHeader > .cT-categoryTypeHeaderDetails').hide();
			setStateOfExpandCollapseAllButtons();
			$('#accountTypeSelect').jfpwidget('refresh');
		}
	},
	toggleExpandCollapseCategoryEvent : function(container) {
		if(container.hasClass('cM-maximizeButton')) {
			dashboard.showCategory(container.parent().parent());
		} else {
			dashboard.hideCategory(container.parent().parent());
		}
	},
	areAllCategoryStatesOpen : function() {
		if(dashboard.categoryCount - dashboard.openCategoryCount == 0) {
			return true;
		} else {
			return false;
		}
	},
	areAllCategoryStatesClosed : function() {
		if(dashboard.openCategoryCount == 0) {
			return true;
		} else {
			return false;
		}
	},
	loadingState : function() {
		resetDashboard();
		$('#accountTypeDropdown').addClass('cM-hide')
		jQuery("#accountTypeSelect").jfpwidget("disable");
		$('#accountsPanelInnerContainer').append('<div id="loading" style="background-image: url(\'/CBOL/common/images/loading.gif\'); margin-top: 130px; margin-left: 265px; width: 50px; height: 50px;"></div><div class="cT-jampMessages">'+$("#Dashboard-JAMP").html()+'</div>');
	},
	removeLoadingState : function() {
		$('#accountTypeDropdown').removeClass('cM-hide')
		$('#accountsPanelInnerContainer #loading').remove();
		jQuery("#accountTypeSelect").jfpwidget("enable");
	},
	filterAccountsByProdSegment : function(prodSegmentClass) {
		dashboard.showAllAccountsAndCategories();
		$.each($('#accountsPanelInnerContainer .cT-categoryType tbody'), function() {
			if($(this).html()=="") {
				$(this).remove();
			}
		});
		$('.' + prodSegmentClass).addClass('cM-hide');
		$.each($('#accountsPanelInnerContainer .cT-categoryType:not(#categoryType-EXTERNAL):not(#categoryType-Rewards)'), function() {
			if($(this).find('table tbody:not(.cM-hide):not(.cT-disclosureAccount)').length == 0) {
				if ($(this).find('#rtuAccountContainer').length > 0){
					var rtuContainer = $(this).find('#rtuAccountContainer').clone().addClass('cA-rtuProdSegmentFilter');
				}
				$(this).addClass('cM-hide');
				$(this).before(rtuContainer);
			}
			$(this).find('.cT-categoryTypeHeader .cT-categoryTypeAmount').html('('+$(this).find('table tbody:not(.cM-hide):not(.cT-disclosureAccount)').length+')');
		});
		$('#accountsPanelInnerContainer table tbody.cT-rewardsProgram .cT-firstRow:not(.cT-rewardsSupression) .cT-accountName.'+prodSegmentClass).addClass("cM-hide");
		$.each($('#accountsPanelInnerContainer tbody.cT-rewardsProgram .cT-firstRow:not(.cT-rewardsSupression)'), function(){
			if ($(this).find('.cT-accountName:not(.cM-hide)').length==0) {
				$(this).addClass('cM-hide');
				$(this).nextUntil('.cT-firstRow').addClass('cM-hide');
			}
		});
		$.each($('#accountsPanelInnerContainer tbody.cT-rewardsProgram'), function(){
			if($(this).find('.cT-firstRow:not(.cM-hide)').length==0) {
				$(this).addClass('cM-hide');
			}
		});
		$.each($('#accountsPanelInnerContainer #categoryType-Rewards table'), function(){
			if($(this).find('tbody:not(.cM-hide)').length==0) {
				$(this).addClass('cM-hide');
			}
		});
		if($('#accountsPanelInnerContainer #categoryType-Rewards table').hasClass('cM-hide')) {
			$('#accountsPanelInnerContainer #categoryType-Rewards').addClass("cM-hide");
		}
		$('#accountsPanelInnerContainer #categoryType-Rewards .cT-categoryTypeHeader .cT-categoryTypeAmount').html("("+ $('#accountsPanelInnerContainer #categoryType-Rewards tbody .cT-firstRow:not(.cM-hide):not(.cT-rewardsSupression)').length +")")
		$.each($('#accountsPanelInnerContainer tbody.cT-rewardsProgram'), function() {
			if($(this).find('.cT-firstRow:not(.cM-hide):not(.cT-rewardsSupression)').length==0){
				$(this).find('.cT-firstRow.cT-rewardsSupression > td').css('border-top', 'none');
			} else {
				$(this).find('.cT-firstRow.cT-rewardsSupression > td').css('border-top', '1px dotted #ccc');
			}
		});
		setStateOfExpandCollapseAllButtons();
	},
	showAllAccountsAndCategories : function() {
		$('#accountsPanelInnerContainer #rtuAccountContainer.cA-rtuProdSegmentFilter').remove();
		$('#accountsPanelInnerContainer .cT-categoryType').removeClass('cM-hide');
		$('#accountsPanelInnerContainer table tbody').removeClass('cM-hide');
		$('#accountsPanelInnerContainer #categoryType-Rewards').removeClass('cM-hide');
		$('#accountsPanelInnerContainer #categoryType-Rewards table').removeClass('cM-hide');
		$('#accountsPanelInnerContainer tbody.cT-rewardsProgram').removeClass('cM-hide');
		$('#accountsPanelInnerContainer tbody.cT-rewardsProgram tr').removeClass('cM-hide');
		$('#accountsPanelInnerContainer tbody.cT-rewardsProgram .cT-firstRow:not(.cT-rewardsSupression) .cT-accountName').removeClass('cM-hide');
	},
	countryDropdownChangeEvent : function() {
		var dropdownValue = $('#accountTypeSelect').jfpwidget('value');
		var dropDownId = $("#accountTypeSelect option:selected").attr('id');
		var homeURL = contextPath+"/REST/accountsPanel/getCustomerAccounts.jws?ttc="+dashboardTTC;
		var foreignURL = contextPath+"/REST/accountsPanel/getCustomerDomicileAccounts.jws?ttc="+dashboardTTC + "&countryCode=" + dropDownId;
		var homeResponse;
		var foreignResponse;
		var dataArray = new Array();
		if(dropDownId == "HOME") {
			dashboard.loadingState();
			homeResponse = $.ajax({
				url: homeURL,
				type:"POST",
				dataType: "json",
				global:false,
				success:function(data, status, jqXHR){
				if (data.invalidParamsMessage != null) {
					dashboard.removeLoadingState();
					dashboard.invalidParamsState();
				} else {

					dashboard.init(data);
				}
				offerService();
			},
			error:function(jqXHR){
				dashboard.JAXRSErrorState();
			}
			});
		} else if (dropDownId == "ALL"){
			resetDashboard();
			$('.cS-structAccountsPanelContainer .cT-openCloseAllButtons').show();
			$('#accountTypeRadioButtons').remove();
			var dropdownSelector = $('#accountTypeSelect').find('option');
			var invalidParams = false;
			dashboard.showGVALinks();
			var foreignCountryErrFlag = false;
			var requests = [];
			var dashBoardErrorData = [];
			for(var x=0; x<dropdownSelector.length; x++) {
				if(dropdownSelector[x].id=="HOME") {
					jQuery("#accountTypeSelect").jfpwidget("disable");
					var countryHeader = {countryLabel: dropdownSelector[x].text, countryCode: dropdownSelector[x].id,countryType:dropdownSelector[x].value};
					$("#accountDashboardCountryCategory").tmpl(countryHeader).appendTo( "#accountsPanelInnerContainer" );
					homeResponse = $.ajax({
						url: homeURL,
						type:"POST",
						dataType: "json",
						global:false,
						success:function(data, status, jqXHR){
						if(data.invalidParamsMessage != null && !dashboard.invalidParams) {
							dashboard.invalidParamsState();
							dashboard.invalidParams = true;
						} else if(!dashboard.invalidParams) {
							var dashboardDataForiegn = data.summaryViewBeanList[0];
										var dropDoId = dashboardDataForiegn.countryViewBean.countryCode
										/*creates the country accountlist*/
										createCountryCategory(dashboardDataForiegn, data, dropDoId);
										/* Display disclosures in appropriate categories */
										insertAccountData('nonCategoryDisclosure-display', data.accountsSummaryViewObj, "#categoryType-" + dropDoId + " > div.cT-tableAccountsPanelContainer > table");
										setStateOfExpandCollapseAllButtons();
									
						}
						tooltipInitializer.createTooltipListeners('span.cM-tooltip', '.cT-labelItem', 'top center', 'bottom center');
						offerService();
						jQuery("#accountTypeSelect").jfpwidget("enable");
					},
					error:function(jqXHR){
						dashboard.countryJAXRSErrorState('HOME');
					}
					});
					requests.push(homeResponse);
				} else if(dropdownSelector[x].id != "ALL"){
					jQuery("#accountTypeSelect").jfpwidget("disable");
					foreignURL = contextPath+"/REST/accountsPanel/getCustomerDomicileAccounts.jws?ttc="+dashboardTTC + "&countryCode=" + dropdownSelector[x].id;
					var countryHeader = {countryLabel: dropdownSelector[x].text, countryCode: dropdownSelector[x].id,countryType:dropdownSelector[x].value};
					$("#accountDashboardCountryCategory").tmpl(countryHeader).appendTo( "#accountsPanelInnerContainer" );
					(function() {
						var savedX = x;
						var foreignResponse =  $.ajax({
							url: foreignURL,
							type:"POST",
							dataType: "json",
							global:false,
							success:function(data, status, jqXHR){
							if(!data.errorMessageViewObj){
								foreignCountryErrFlag = true;
								if(data.invalidParamsMessage != null && !dashboard.invalidParams) {
									dashboard.invalidParamsState();
									dashboard.invalidParams = true;
								} else if(!dashboard.invalidParams) {
									var dashboardDataForiegn = data.summaryViewBeanList[0];
										var dropDoId = dashboardDataForiegn.countryViewBean.countryCode
										/*creates the country accountlist*/
										createCountryCategory(dashboardDataForiegn, data, dropDoId);
										/* Display disclosures in appropriate categories */
										insertAccountData('nonCategoryDisclosure-display', data.accountsSummaryViewObj, "#categoryType-" + dropDoId + " > div.cT-tableAccountsPanelContainer > table");
										setStateOfExpandCollapseAllButtons();
									
								}
							}
							else {
								dashBoardErrorData.push(data);
							}
							jQuery("#accountTypeSelect").jfpwidget("enable");
						},
						error:function(jqXHR){
							dashboard.countryJAXRSErrorState(dropdownSelector[savedX].value);
						}
						});
						requests.push(foreignResponse);
					}());
				}
			}
			$.when.apply($, requests).done(function(){
				if (!foreignCountryErrFlag){
					var gvaAllCountriesError = $('#foreignCountryGenericError').html();
					for(var x=0; x<dropdownSelector.length; x++) {
						if(dropdownSelector[x].id !="HOME"
							&& dropdownSelector[x].id != "ALL") {
							$('#categoryType-' + dropdownSelector[x].value).remove();
						}
					}
					$('#account-error-genericError-GVA').tmpl({"errorMessage": gvaAllCountriesError}).appendTo('#accountsPanelInnerContainer');
				}
				else{
					for (var y = 0 ;y<dashBoardErrorData.length;y++){
						createCountryCategory(dashBoardErrorData[y]);
					}
				}
			});
		} else {
			dashboard.loadingState();
			foreignResponse = $.ajax({
				url: foreignURL,
				type:"POST",
				dataType: "json",
				global:false,
				success:function(data, status, jqXHR){
				if(data.invalidParamsMessage != null) {
					dashboard.removeLoadingState();
					dashboard.invalidParamsState();
				} else {
					dashboard.init(data);
				}
			},
			error:function(jqXHR){
				dashboard.JAXRSErrorState();
			}
			});
		}
	},
	showGVALinks : function (){
		var countryCode = $('#accountTypeSelect').val();
		$('.cH-dashboardLinks').addClass('cM-hide');
		if (countryCode) {
			$('.cH-dashboardLinks.cA-'+countryCode).removeClass('cM-hide');
		} else {
			$('.cH-dashboardLinks.cA-HOME').removeClass('cM-hide');
		}
	},
	refresh : function (){
		dashboard.countryDropdownChangeEvent();
	},
	categoryGenericErrorState : function (categorySelector, errorMessage){
		$(categorySelector + ' .cT-tableAccountsPanelContainer').empty();
		$('#account-error-genericError-GVA').tmpl({"errorMessage": errorMessage}).appendTo(categorySelector + ' .cT-tableAccountsPanelContainer');
	},
	invalidParamsState : function (){
		$('#accountsPanelInnerContainer').empty();
		$('.cT-openCloseAllButtons').hide();
		$('#account-error-invalidParams').tmpl().appendTo('#accountsPanelInnerContainer');
	},
	JAXRSErrorState : function (){
		$('#accountsPanelInnerContainer').empty();
		$('.cT-openCloseAllButtons').hide();
		$('#account-error-errorJAXRS').tmpl().appendTo('#accountsPanelInnerContainer');
	},
	countryJAXRSErrorState : function (countryCode){
		$("#categoryType-" + countryCode + " .cA-countryLoading").hide();
		$('#account-error-errorJAXRS').tmpl().appendTo('#countryType-' + countryCode);
	},
	genericErrorState : function (errorMessage){
		$('#accountsPanelInnerContainer').empty();
		$('.cT-openCloseAllButtons').hide();
		$('#account-error-genericError-GVA').tmpl({"errorMessage": errorMessage}).appendTo('#accountsPanelInnerContainer');
	},
	openRtuDialog : function(obj) {
		$('#rtuAlertDialogBox').jfpwidget('open');
	},
	confirmRtuDialog : function(url){
		var prodTypeCode = $('#currentProductTypecode').html();
		var URL = contextPath + '/REST/accountsPanel/updateUserSelection.jws?userSelection=1&productTypeCode='+prodTypeCode;
		$.ajax({
			url:URL,
			type:"POST",
			dataType: "json",
			global:false,
			success:function(data, status, jqXHR){
		},
		error:function(jqXHR){
		}
		});
		$('#rtuAlertDialogBox').jfpwidget('close');
		$('#rtuAccountContainer').addClass('cM-hide');
	},
	cancelRtuDialog :  function(){
		$('#rtuAlertDialogBox').jfpwidget('close');
	},
	handleMISDashboard : function (){
		$('.cH-dashboardLinks').click(function(){
			handleMISCall($(this).find('a').text());
		});
	}
	};
}(window, window.jQuery));
var alertHTML = $(this).find('.cT-genericMandatoryAlertStyles').html();
function handleAccountLinkCall(){
	$("table").delegate("div.cT-accountName", "click",
			function(){
		URL = contextPath + '/REST/accountsPanel/handleAccountLinkClick.jws';
		$.ajax({
			url:URL,
			type:"POST",
			dataType: "json",
			global:false,
			success:function(data, status, jqXHR){
		},
		error:function(jqXHR){
		}
		});
	}
	);
}
function handleRtuAccountCall(){
	$('.cA-rtuLinks').find('.cN-primaryNav a').each(function (){
		$(this).click(function(){
			$('#currentProductTypecode').html($(this).parent().parent().attr('name'));
		});
	});
}
$(document).ready(function($) {
});
function fireJAXRS(URL) {
	$.ajax({
		url: URL,
		type: "POST",
		dataType: "json",
		global: false,
		success: function (data, status, jqXHR) {
		var applicationStatus = data.actionCode;
		errorMessage = data.invalidParamsMessage;
		if (errorMessage != null) {
			dashboard.removeLoadingState();
			dashboard.invalidParamsState();
		} else {
			switch (applicationStatus) {
			case "RELOAD":
				fireJAXRS();
				break;
			default:
				var dropDownList=data.countryViewBeanList;
			var dropDownListlength=dropDownList.length;
			dashboard.countryViewBeanList=data.countryViewBeanList;
			dashboard.homeCountryViewBeanList=[];
			dashboard.foreignCountryViewBeanList=[];
			for(var b=0;b<dashboard.countryViewBeanList.length;b++)
			{
			if((dashboard.countryViewBeanList[b].countryType=="HOME")&&(dashboard.countryViewBeanList[b].countryCode!="ALL_HOME"))
			{
			dashboard.homeCountryViewBeanList.push(dashboard.countryViewBeanList[b]);

			}

			else if((dashboard.countryViewBeanList[b].countryType=="FOREIGN")&&(dashboard.countryViewBeanList[b].countryCode!="ALL_FOREIGN"))
			{
			dashboard.foreignCountryViewBeanList.push(dashboard.countryViewBeanList[b]);
			}
			}
			if(dropDownListlength>1)
			{
			populateDropdown(data);

			}

			else
			{
			$('#accountTypeDropdown').remove();
			}

				dashboard.init(data);
			if(middlePanelCheck != "F"){
				engagementMeter.fireEMPanelJAXRS(contextPath + "/REST/emPanel/getServices.jws");
			}
			}
		}
		offerService();
	},
	error: function (jqXHR) {
		dashboard.JAXRSErrorState();
	}
	});
}
function offerService() {
	var flashcheck = isflashsupported();
	var offerType = "CONTEXTUAL,MARKETING,DIGITAL_ONBOARDING";
	if(pageDef==null || pageDef=='')
	{
		pageDef="jcbol_common_Dashboard";
	}
	if((pageDef=="jcbol_common_Dashboard" && isBKDMPDeleted != 'Y')||(pageDef!="jcbol_common_Dashboard" )){
		var offferURL = contextPath + "/REST/offers/getOffers.jws?ttc=" + dashboardTTC + "&isFlashSupported=" + flashcheck + "&offerType=" + offerType + "&screenId=" + pageDef;
		if (pageDef_MBAR == 'T') {
			$("#mbarWidget").show();
			$("#mbarWidget").jfpwidget('render', {
				"items": [
				          {
				        	  "innerHTML": "<div></div>"
				          },
				          {
				        	  "innerHTML": "<div style=\"float:right\" id=\"mBarLoadingImgDiv\">" +
				        	  "<img src=\"/CBOL/common/images/loading.gif\"/>" +
				        	  "<p style=\"color:#999999\">"+$("#Dashboard-JAMP").html()+"</p></div>"
				          }]
			});
		}
		resetWidgetButton("#mbarWidget");
		fireOffersJAXRS(offferURL);
	}
}
function processJSONDataForDashboardOffers(data, status, jqXHR) {
	var offerJSON = data;
	var counter = 0;
	if (jqXHR.status == '200') {
		var offerListLength = $(offerJSON.offersViewObj.offerViewBeanList).length;
		for (var i = 0; i < offerListLength; i++) {
			var offer = offerJSON.offersViewObj.offerViewBeanList[i];
			if (offer.offerType == 'CONTEXTUAL') {
				counter++;
				if(counter > 16) {
					break;
				}
				var offerMessage = offer.offerDetailedMessage;
				var ctnxLocID = "#offer-" + offer.accountIndex;
				eval(offer.offerContentId + "=offer.offerLinkUrl");
				var offerNavigation = (offer.offerName).split("?")[1];
				$(offerNavigation).appendTo(ctnxLocID);
				$("#cntxOffers-display").tmpl(offer).appendTo(ctnxLocID);
				$("#offerSeeMore-display").tmpl(offer).appendTo("#offerSeeMore");
			}
		}
		$('.cT-accountsPanelSlider').jfpwidget('refresh');
		if(counter < 5) {
			$(".jcarousel-next").hide();
			$(".jcarousel-prev").hide();
		}else{
			$(".jcarousel-next").show();
		    $(".jcarousel-prev").show();
		    }
		var mbarlistlength = $(offerJSON.offersViewObj.offerViewBeanList).length;
		 

		if(mbarlistlength > 4){

		$(".jcarousel-next").show();
		$(".jcarousel-prev").show();

		}else{

		$(".jcarousel-next").hide();
		$(".jcarousel-prev").hide();

		}

	} else {}
	htmlTruncator.truncateCBOLAlert('.cT-mandatoryAlert', 76);
	htmlTruncator.truncateCBOLConOff('.cT-contextAlert', 120);
}
function adjustHeader($source, $target) {
	if ($source.length == 1 && $target.length == 1) {
		var widths = {};
		$source.find("tr:first").find("th,td").each(function (i) {
			widths[i] = $(this).width() || 0;
		});
		$target.find("tr:first").find("th,td").each(function (i) {
			if (widths[i]) {
				$(this).width(widths[i]);
			}
		});
	}
}
function openOverlay() {
	$('#TnfrsFundsOverlay').jfpwidget("open");
}
function openOverlayForOfferSeeMore(acctInstanceID) {
	var seeMoreLocID = "#seeMore-" + acctInstanceID;
	jQuery(seeMoreLocID).removeClass("appHidden");
	jQuery("#offerSeeMore").jfpwidget('open');
}
function openQuotesSnapshotOverlay() {
	$('#mortgageOverlay').load('/US/nccmi/home/homelanding/dashboardRateQuote.action', function (response, status, xhr) {
		if (status == "success") {
			$('#mortgageOverlay').jfpwidget("open");
			renderMortgageTable();
		} else {
			window.location = "nccmi.homelanding.tempDelay";
		}
	});
}




function openUnlinkRequestMortagageOverlay() {
	$('#UnlinkOverlay').jfpwidget("open");
} 
function openUnlinkAccountMortgageOverlay(accountInstanceId){
	continueUnlink(accountInstanceId);
	$('#UnlinkOverlay').jfpwidget("open");
}
function openApplicationMortgage(accountInstanceId){
	location.href= contextPath +"/nccmi/home/application/flow.action?selectedIndex="+accountInstanceId;
}
function openViewDetails(accountInstanceId){
	location.href= contextPath +"/nccmi/home/record/flow.action?selectedIndex="+accountInstanceId;
}
function openContinueRequest(){
	location.href=contextPath +"/nccmishared/mortenroll/flow.action";
}
function continueUnlink(accountInstanceId) {
	$('#accountToUnlink').val(accountInstanceId);
}


function openQuotesSnapshotOverlay(ttc) {
	$('#mortgageOverlay').load('/US/nccmi/home/homelanding/dashboardRateQuote.action?TTC='+ttc, function(response, status, xhr) {
		if (status == "success") {
			$('#mortgageOverlay').jfpwidget("open");
			$jq('#cT-yourQuotesTableSlider').jfpwidget("refresh");
			setTimeout(function() {
				renderMortgageTable();
			}, 300);
		} else {
			window.location="nccmi.homelanding.tempDelay";
		}
	});
}





function checkStatus(event, ui) {
	jQuery("#offerSeeMore div[id^='seeMore-']").addClass('appHidden');
	var closeWidget = closeIconClick();
	return closeWidget;
}
function closeIconClick() {
	return true;
}
function link(url) {
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
	location.href = url;
}
function link(url, instanceId, countrycode) {
	if(typeof instanceId == 'undefined')
	instanceId="";

	if(typeof countrycode == 'undefined')
	countrycode="";


		url = url+instanceId+countrycode;
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
		location.href = url;
}
function showClosedAccountOverlay() {
	$('#ClosedAccountOverlay').jfpwidget("open");
}
var tooltipInitializer = (function (window, jQuery, parent) {
	function showTooltip(jqWidgetSelector, at, my) {
		if (!jqWidgetSelector.jfpwidget()) {
			var wrapper = '#' + jqWidgetSelector.attr('id');
			jqWidgetSelector.jfpwidget(new CJW.jfp.widget.Tooltip({
				wrapperSet: wrapper
			}, {
				content: {
				title: {
				button: true
			}
			},
			show: {
				solo: true,
				event: false
			},
			position: {
				at: at,
				my: my
			},
			hide: {
				event: 'unfocus'
			},
			style: {
				classes: 'jfpw-tooltip ui-tooltip-shadow cT-addMinWidth',
				tip: {
				corner: true,
				mimic: my,
				border: 2,
				width: 12,
				height: 8
			}
			}
			}, {
				"/topic/snail": ["tooltipshow", "tooltiphide"]
			}));
			function slidedrop(event, ui) {
				switch (event.type) {
				case 'change':
					jqWidgetSelector.jfpwidget('hide');
				}
			}
			jqWidgetSelector.subscribe('/topic/closeOnSlide', slidedrop);
		}
		jqWidgetSelector.jfpwidget('show');
		jqWidgetSelector.jfpwidget('reposition');
	}
	parent.createTooltipListeners = function (toolTipSelector, toolTipParentSelector, at, my) {
		$(toolTipParentSelector).delegate(toolTipSelector, 'click', function () {
			showTooltip($(this), at, my)
		});
	}
	return parent;
}(window, window.jQuery, window.tooltipInitializer || {}));
function acctPanelToolTip() {
	tooltipInitializer.createTooltipListeners('span.cM-tooltip', '.cT-labelItem', 'top center', 'bottom center');
	tooltipInitializer.createTooltipListeners('.cT-staticMinWarning', '.cT-tableAccountsPanel>div>table>tbody>tr.cT-subRow', 'right center', 'left center');
	productLevelTooltip.attachDynamicContentListener('.cT-dynamicMinWarning', '.cT-tableAccountsPanel>div>table>tbody>tr.cT-subRow');
	tooltipInitializer.createTooltipListeners('span.cM-tooltip', '.cT-accountName', 'right center', 'left center');
}
var productLevelTooltip = (function (window, jQuery, parent) {
	function fireAJAXandShowTooltip(jqWidgetSelector) {
		if (!jqWidgetSelector.jfpwidget()) {
			var wrapper = '#' + jqWidgetSelector.attr('id');
			jqWidgetSelector.jfpwidget(new CJW.jfp.widget.Tooltip({
				wrapperSet: wrapper
			}, {
				content: {
				title: {
				button: true
			}
			},
			show: {
				solo: true,
				event: false
			},
			position: {
				at: 'right center',
				my: 'left center'
			},
			hide: {
				event: 'unfocus'
			},
			style: {
				classes: 'jfpw-tooltip ui-tooltip-shadow cT-removeMaxWidth cT-addMinWidth',
				tip: {
				corner: true,
				mimic: 'left center',
				border: 2,
				width: 12,
				height: 8
			}
			}
			}, {
				"/topic/snail": ["tooltipshow", "tooltiphide"]
			}));
			jqWidgetSelector.jfpwidget('show');
			var actionURL = "";
			var toolTipType = wrapper.substring(52);
			if (toolTipType = "ToolTip1") {
				actionURL = toolTip1InfoURL;
			}
			jQuery.ajax({
				url: actionURL + 'selectedCCIndex=' + wrapper.substring(15, 51),
				type: 'post',
				cache: false,
				success: function (data) {
				$('#' + jqWidgetSelector.attr('id') + '-info').html(data);
				jqWidgetSelector.jfpwidget('hide');
				jqWidgetSelector.jfpwidget('show');
				jqWidgetSelector.jfpwidget('reposition');
			}
			});
		} else {
			jqWidgetSelector.jfpwidget('show');
			jqWidgetSelector.jfpwidget('reposition');
		}
	}
	parent.attachDynamicContentListener = function (toolTipSelector, toolTipParentSelector) {
		$(toolTipParentSelector).delegate(toolTipSelector, 'click', function () {
			fireAJAXandShowTooltip($(this))
		});
	}
	return parent;
}(window, window.jQuery, window.tooltipInitializer || {}));
function alertSeeMoreOverlay(index, instanceID) {
	$("#alertSeeMore").jfpwidget("open");
}
function closeAcctAlertOverlay() {
	$("#cT-regAlertOverlayWrapper").jfpwidget('close');
}
var htmlTruncator = (function (window, jQuery, parent) {
	var tags = new Array();
	var text = new Array();
	var maxChars = 0;
	function splitHTMLOnTagsAndText(html) {
		var parseStack = new Array();
		if (html.length > 0) {
			if (html.charAt(0) == '<') {
				for (var x = 0; x < tags.length || x < text.length; x++) {
					if (tags[x]) {
						var splitTags = tags[x].match(/<[^>]+>/g);
						for (var y = 0; y < splitTags.length; y++) {
							var contentType;
							if (splitTags[y].charAt(1) == '/') {
								contentType = "closingTag";
							} else {
								contentType = "openingTag";
							}
							parseStack.push({
								contentType: contentType,
								content: splitTags[y]
							});
						}
					}
					if (text[x]) {
						parseStack.push({
							contentType: "text",
							content: text[x]
						});
					}
				}
			} else {
				for (var x = 0; x < tags.length || x < text.length; x++) {
					if (text[x]) {
						parseStack.push({
							contentType: "text",
							content: text[x]
						});
					}
					if (tags[x]) {
						var splitTags = tags[x].match(/<[^>]+>/g);
						for (var y = 0; y < splitTags.length; y++) {
							var contentType;
							if (splitTags[y].charAt(1) == '/') {
								contentType = "closingTag";
							} else {
								contentType = "openingTag";
							}
							parseStack.push({
								contentType: contentType,
								content: splitTags[y]
							});
						}
					}
				}
			}
		}
		return parseStack;
	}
	function reconstructHTML(tagTextArray) {
		var truncatedHTML = "";
		var charCount = 0;
		var openingTagCount = 0;
		var openingTagCountWithinTruncation = 0;
		for (var x = 0; x < tagTextArray.length; x++) {
			if (tagTextArray[x].contentType == 'openingTag') {
				if (charCount < maxChars) {
					openingTagCountWithinTruncation++;
					truncatedHTML += tagTextArray[x].content;
				}
				openingTagCount++;
			} else if (tagTextArray[x].contentType == 'closingTag') {
				if (openingTagCountWithinTruncation == openingTagCount) {
					openingTagCountWithinTruncation--;
					truncatedHTML += tagTextArray[x].content;
				}
				openingTagCount--;
			} else if (tagTextArray[x].contentType == 'text') {
				if (tagTextArray[x].content.length < maxChars - charCount) {
					truncatedHTML += tagTextArray[x].content;
					charCount += tagTextArray[x].content.length;
				} else {
					truncatedHTML += tagTextArray[x].content.substring(0, maxChars - charCount).substring(0, maxChars - charCount).substring(0, tagTextArray[x].content.substring(0, maxChars - charCount).lastIndexOf(' '));
					charCount += tagTextArray[x].content.substring(0, maxChars - charCount).substring(0, maxChars - charCount).substring(0, tagTextArray[x].content.substring(0, maxChars - charCount).lastIndexOf(' ')).length;
				}
			}
		}
		return truncatedHTML;
	}
	parent.truncateHTML = function (html, max) {
		tags = html.match(/(<[^>]+>)+/g) || [];
		text = html.split(/<[^>]+>+/) || [];
		maxChars = max;
		for (var x = 0; x < text.length; x++) {
			if (text[x] == "") {
				text.splice(x, 1);
				x--;
			}
		}
		return reconstructHTML(splitHTMLOnTagsAndText(html));
	}
	parent.truncateCBOLAlert = function (alertSelector, maxChars) {
		$.each($(alertSelector), function () {
			var storeLinks = $(this).children('a, span.cT-alertLink').remove();
			var alertHTML = $(this).find('.cT-genericMandatoryAlertStyles').html();
			alertHTML = $.trim(alertHTML);
			var alertMsg = alertHTML;
			var alertMsgLength = alertHTML.length;
			if (alertHTML.length > maxChars) {
				$(this).html(htmlTruncator.truncateHTML(alertHTML, maxChars));
			}
			$(this).append(storeLinks);
			var alertDetMsgID = $(this).children('span#cT-alertDetMsg');
			var alertDetMsg = $(alertDetMsgID).html();
			alertDetMsg = $.trim(alertDetMsg);
			var alertDetMsgLength = alertDetMsg.length;
			var displaySeeMore = false;
			if (alertDetMsgLength > alertMsgLength || alertDetMsg != alertMsg) {
				if (alertDetMsgLength > maxChars || alertDetMsg != alertMsg) {
					displaySeeMore = true;
				}
			}
			if (alertHTML.length > maxChars || displaySeeMore == true) {
				$(this).children('.cT-alertLink').children('.cT-seeMoreLink').removeClass('cT-seeMoreLink');
			}
		});
	}
	parent.truncateCBOLConOff	= function (conOffSelector, maxChars) {
		$.each($(conOffSelector), function () {
			var storeLinks = $(this).children('a, span.cT-alertLink').remove();
			var offerHTML = $(this).html();
			offerHTML = $.trim(offerHTML);
			var offerDetMsg = $.trim($(this).find('#cT-offersDetMsg').html());
			if (offerHTML.length > maxChars) {
				$(this).html(htmlTruncator.truncateHTML(offerHTML, maxChars));
			}
			$(this).append(storeLinks);
			if (!((offerDetMsg && offerDetMsg != null && offerDetMsg != ""))) {
				$(this).find('.cT-alertLink').remove();
			}
		});
	}
	return parent;
}(window, window.jQuery, window.htmlTruncator || {}));

//Global BAU Consumption Changes 7.8.1 - Incorporated the leftPanel.js changes as per new json structure -Starts

//Adding the code of leftPanel.js ends
//Adding the code of relationshipSummaryConfig.js starts

var checkingCatCode = 'BNKCHK';
var savingsCatCode = 'BNKSVN';
var investmentCatCode = 'INV';
var loansCatCode = 'LN';
var cardsCatCode = 'CRD';
var retirementCatCode = 'RET';
var dashboardTTC = 742;
var acctInfoTTC = 12;
var adaTTC = 1;
//Adding the code of relationshipSummaryConfig.js ends
//Adding the code of Offers.js starts
var count = 0;
//Dtaccs phase 4 changes
// Invoke ajaxCallStarted() before the getoffers.jws call starts. This will increase the counter of activeAjaxCalls
// Invoke ajaxCallCompleted() after the getoffers.jws call completed. This will decrease the counter of activeAjaxCalls
function fireOffersJAXRS(URL){
	if(dtacssPh4FallbackVal == 'false'){
		somTrackingObj.ajaxCallStarted();
	}
	$.ajax({ 
		url:URL,
		type:"POST", 
		dataType: "json",
		global:false,
		success:function(data, status, jqXHR){

		if(null!=data){
			var offerJSON=data.offersViewObj;
			var offerListLength=$(offerJSON.offerViewBeanList).length;
			for(var itr=0;itr<offerListLength;itr++){
				var offerObj = offerJSON.offerViewBeanList[itr];
				if(offerObj.offerType == 'DIGITAL_ONBOARDING'){					
					processJSONDataForDEOBOffer();
				}
			}
			processJSONDataForDashboardOffers(data, status, jqXHR);
			if(pageDef_MBAR == 'T'){
				processJSONDataForMBarOffers(data.offersViewObj, status, jqXHR, backScroll);
			}
		}else{
			$("#mbarWidget").hide();
		}
	},
	error:function(jqXHR){
		$("#mbarWidget").hide();
	},
	complete:function() {
		if(dtacssPh4FallbackVal == 'false'){
			somTrackingObj.ajaxCallCompleted();
		}
	}
	});	
}
function mBarWidget_itemVisibleInCallbackAfterAnimation(carousel, offerMbar, idx, state, backScroll) 
{
	ss = offerMbar.getElementsByTagName('div');
	if(ss.length > 0)
	{
		if(maincounter==0){
			currentMBOfferNames = [];
		}
		var a = offerMbar.style.width;
		a = a.substring(0,a.length-2);
		if(parseInt(a) < getOffset(offerMbar).left && tempcounter == 0)
		{
			totHyperLink = $(".jcarousel-item-5")[0].getElementsByTagName('div')[0].getAttribute('id') +  ","+ totHyperLink;
			maincounter++;		
		}
		tempcounter++;
		totHyperLink = ss[0].getAttribute('id') + ',' + totHyperLink;
		currentMBOfferNames.push(ss[0].getAttribute('id'));
	}
	else
	{
		return;
	}
	if(maincounter==3)
	{
		maincounter=0;
		var curPageDef;
		var finalMBPosition;
		
		if(initialPageDef == 'jcbol_common_Dashboard')
			curPageDef =initialPageDef;
		else
			curPageDef =pageDef;

		//Fetching the current MB Positions while clicking on next or previous button in Dashboard
		if (state == "next") {
			currentMBPosition = nextMBPosition(currentMBPosition);
		} 
		if(state == "prev"){
			currentMBPosition = prevMBPosition(currentMBPosition);
		}
		//Reversing current MB Position to match with correct offernames as BAU
		finalMBPosition = reversePositionID(currentMBPosition);
		//Passing finalMBPosition in updateSOMForMBAR to update SOM
		updateSOMForMBAR(curPageDef, totHyperLink.substring(0,totHyperLink.length-1),"","","SOM","Extended","","",finalMBPosition);

		totHyperLink=""; 	
	}
	else
	{
		maincounter++;
	}
}

function mBarWidget_itemVisibleAfterAnimation(carousel, offerMbar, idx, state, backScroll) 
{
	ss = offerMbar.getElementsByTagName('div');
	if(ss.length > 0)
	{
		var a = offerMbar.style.width;
		a = a.substring(0,a.length-2);
		if(parseInt(a) < getOffset(offerMbar).left && tempcounter == 0)
		{
			totHyperLink = $(".jcarousel-item-5")[0].getElementsByTagName('div')[0].getAttribute('id') +  ","+ totHyperLink;
			maincounter++;		
		}
		tempcounter++;
		totHyperLink = ss[0].getAttribute('id') + ',' + totHyperLink;
		handleBackScrollOption(backScroll);
	}
	else
	{
		return;
	}
}

function getOffset( el ) {
	var _x = 0;
	var _y = 0;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.parentNode;
	}
	return { top: _y, left: _x };
}

function processJSONDataForMBarOffers(offerJSON, status, jqXHR, backScroll){
	var str = '';
	var offerListLength=$(offerJSON.offerViewBeanList).length;
	var marketingOffers = 0;
	currentMBOfferNames = [];
	for(var itr=0;itr<offerListLength;itr++){
		var offerObj = offerJSON.offerViewBeanList[itr];
		if(offerObj.offerType == 'MARKETING'){
			var offerDOM = formOfferDom(offerObj);
			str = str + '{'+
			'"innerHTML":"'+offerDOM+'"'
			+'},';
			   if(marketingOffers<4){
			        currentMBOfferNames.push(offerObj.offerName);
			        marketingOffers++;
			   }
		}
	}
	var len = str.length;
	str = str.substring(0, len-1);
	var data ='{'
		+'"items":['+ str + ']'
		+ '}';

	var offerMbar = jQuery.parseJSON(data);
	offerMbarLenth = $(offerMbar.items).length;
	if(offerMbarLenth>0){		

		$("#mbarWidget").jfpwidget('render', offerMbar);
		resetWidgetButton("#mbarWidget");
		handleBackScrollOption(backScroll);
		var marketBarWidth = (225*offerMbarLenth);
		$("#mbarWidget ul:first-child").css({"width" :marketBarWidth});
		$("#mbarWidget").show();
	}else{
		$("#mbarWidget").hide();
	}

}

function handleBackScrollOption(backScroll) {
	if (!backScroll) {
		$("#mbarWidget").jfpwidget("disablePrevButton");
	} 
}

function resetWidgetButton(selector) { 

	if($(selector).jfpwidget()){
		var myvisible = $(selector).jfpwidget().getProperty('visible');
		var mysize = $(selector).jfpwidget().getProperty('size'); 
		if(mysize == myvisible || myvisible>mysize) { 
			$(selector).jfpwidget("disableButtons"); 
		}
	}

}

function formOfferDom(offer){
	var offerDom = null;
	var offerName = null;
	var offerMessage = null;
	if(null!=offer.offerName){
		offerName = '\'' + offer.offerName + '\'';
	}
	if(null!=offer.offerMessage){
		offerMessage = '\'' + offer.offerMessage + '\'';
	}
	if(offer.offerContentType != 'FLASH'){
		offerDom = '<div class=\\"jcarousel-skin-avatar jcarousel-item\\" id='+offerName+' onclick=\\"'+offer.offerDetailedMessage+'\\">'
		+'<img src='+offerMessage+' />'
		+'</div>';
	}
	else if(offer.offerContentType == 'FLASH'){
		offerDom = '<div class=\\"jcarousel-skin-avatar jcarousel-item\\" id ='+offerName+' onmousedown=\\"'+offer.offerDetailedMessage+'\\">'
		+'<OBJECT classid=\\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\\" codebase=\\"https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=3,0,0,0\\" ID=FLASH_AD width=\\"218\\" height=\\"88\\">'
		+'<PARAM NAME=movie VALUE='+offerMessage+'>'
		+'<PARAM NAME=quality VALUE=autohigh>'
		+'<param name=\\"allowscriptaccess\\" value=\\"sameDomain\\"/>'
		+'<param name=\\"wmode\\" value=\\"transparent\\" />'
		+'<EMBED id='+offerName+' src='+offerMessage+' quality=autohigh wmode=transparent allowScriptAccess=sameDomain swLiveConnect=TRUE TYPE=\\"application/x-shockwave-flash\\" PLUGINSPAGE=\\"https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\\" width=\\"218\\" height=\\"88\\" ></EMBED>'
		+'</OBJECT>'
		+'</div>';
	}
	return offerDom;
}
//Adding the code of Offers.js ends
//Adding the code of myCiti.js starts
//Start alertToggle.js

var alertToggle = new function() {
	var copy = 
		typeof _locale=='undefined'||_locale.substring(0,2)=="en" ? {
		SHOW: "Show",
		HIDE: "Hide"
	} : {
		SHOW: "Mostrar",
		HIDE: "Ocultar"
	}
	this.init = function() {
		jQuery.each(jQuery(".alertToggle"), function(i, v) { 
			jQuery(v).append("<span class=\"alertToggleDivider\">|<"+"/span>&nbsp;<a href=\"javascript:void(0);\" class=\"alertToggleLink\">"+copy.HIDE+"<"+"/a>");
			var a = jQuery(v).find("a").last();
			a.bind('click', function(){alertToggle.toggle(a);});
		});
	}
	this.toggle = function(e) {
		var ele = jQuery(e).parent().find("span").first();
		if (jQuery(e).html() == copy.HIDE) {
			jQuery(e).html(copy.SHOW);
			jQuery(e).parent().find(".alertToggleDivider").css({display: "none"});
			hide(ele);
		} else {
			jQuery(e).html(copy.HIDE);
			jQuery(e).parent().find(".alertToggleDivider").css({display: "inline"});
			show(ele);
		}
	}
	var show = function(ele) {
		ele.css({display: "inline"});
		ele.html(ele.attr("sl_store"));
	}
	var hide = function(ele) {
		if (ele.attr("sl_store") == null) ele.attr("sl_store", ele.html());
		ele.html("");
		ele.css({display: "none"});
	}
}
jQuery(function() {alertToggle.init();});

//End alertToggle.js


//Start accountsPanel.js 

function inc(filename) 
{ 
	var body = document.getElementsByTagName('head').item(0); 
	script = document.createElement('script'); 
	script.src = filename; 
	script.type = 'text/javascript'; 
	body.appendChild(script); 
}
function tv(a,t)
{
	var u = /[<>"';%]/;
	var p = new Array(2);
	for(i=0;i<a.length;i++) {
		p[0] = a[i].substring(0,a[i].indexOf('='));
		p[1] = a[i].substring(a[i].indexOf('=')+1);
		if(p[0] == t && p[1] != ''){
			var p1 = p[1];
			p1 = unescape(p1);
			var r = u.test(p1);
			if (r) p1 = '';
			return p1;
		}
	}
	return '';
}

function showRecentActivityInDialog(selectedIndex, targetApp){	
	jQuery('#accountSnap').html('');
	var url = "/jba/rs/ShowTargetAppFromAvatarMyCitiAccountPanel.do?selectedIndex="+selectedIndex+"&targetSubApp="+targetApp+"&TTC=742";
	jQuery.ajax({ url:url, success: function(showData){
		jQuery('#accountSnap').html(showData);
		jQuery('#accountSnap').jfpwidget('open');
	}});
}


/*function  showAccountPanelAppInDialog(selectedIndex, targetApp){
var  url = "/jba/rs/ShowTargetAppFromAvatarMyCitiAccountPanel.do?selectedIndex=" +selectedIndex+ "&targetSubApp=" +targetApp+ "&TTC=742" ;
//jQuery('a').css('color','red');
jQuery.mo({type: 'ajax' , urlPath:url, wSize: '550px'  }); 
jQuery( 'div#mo' ).css( 'backgroundColor' , '#fff' );
jQuery( "body" ).css( "overflow" , "auto" );
}*/

//Global Avatar 1.0 Regional Integration changes for cross links : isShareDataAvailable param included
function showAccountPanelAppInDialog(selectedIndex, targetApp, isShareDataAvailable){	
	var  riskurl =  "/US/jba/mt/InitializeSubApp.do?TTC=7&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	if(machTagfirstHit){
		machTagfirstHit = false;
		jQuery.ajax({
			url:riskurl,
			type:"POST",
			data : {isAjaxCall:"true",isCitiFastOverlay:"true",overlayDivName:"TnfrsFundsOverlay"},
			success: function(showData,status, jqXHR){
				if(jqXHR.status == '200'){
					machTagfirstHit=true;
					if(showData.indexOf("true")== 0){
						showCSQOverlay(riskurl);
					}
					else if(showData.indexOf("accept")==0){
						jQuery('#TnfrsFundsOverlay').jfpwidget('open');
						var actualContent=jsVarTransfer();
						jQuery('#TnfrsFundsOverlay').html(actualContent);
						var  url = "/US/jba/rs/ShowTargetAppFromAvatarMyCitiAccountPanel.do?selectedIndex=" +selectedIndex+ "&targetSubApp=" +targetApp+ "&TTC=742&parentOverlay=AP&isShareDataAvailable="+isShareDataAvailable;
						jQuery.ajax({ url:url, success: function(showData){
							jQuery('#TnfrsFundsOverlay').html(showData);

						}});
					}
					else if(showData.indexOf("error")== 0){
						document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
						document.forms["ajaxform"].submit();
					}
					else{
						checkKBA(riskurl,showData);
						//document.forms["ajaxform"].action = _jcontext+ showData;
						//document.forms["ajaxform"].method = "POST";
						//document.forms["ajaxform"].submit();
					}
				}else {
					/* 
				Error handled in the action, reponse status would always be 200
					 */
					document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
					document.forms["ajaxform"].submit();
				}
			}});
	}



}

function getSelectedCreditCardAccountForTrans(selectedIndex){

	var url ="/US/NCPS/cardsacctactivity/flow.action?&selectedCCIndex="+selectedIndex;
	jQuery.mo({type: 'ajax', urlPath:url, wSize:'550px' }); 	
	jQuery("body").css("overflow", "auto");	
}

//Global Avatar 1.0 Regional Integration changes for cross links : isShareDataAvailable param included
function showMTApp(selectedIndex, isShareDataAvailable){
	var  riskurl =  "/US/jba/mt/InitializeSubApp.do?TTC=7&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	if(machTagfirstHit){
		machTagfirstHit = false;		
		jQuery.ajax({
			url:riskurl,
			type:"POST",
			data : {isAjaxCall:"true",isCitiFastOverlay:"true",overlayDivName:"TnfrsFundsOverlay"},
			success: function(showData,status, jqXHR){
				if(jqXHR.status == '200'){
					machTagfirstHit=true;
					if(showData.indexOf("true")== 0){
						showCSQOverlay(riskurl);
					}
					else if(showData.indexOf("accept")==0){
						jQuery('#TnfrsFundsOverlay').jfpwidget('open');
						var actualContent=jsVarTransfer();
						jQuery('#TnfrsFundsOverlay').html(actualContent);
						var url = "/US/jba/rs/ShowTargetMyCCAppFromAccountPanelMyCitiOverlay.do?selectedCCIndex="+selectedIndex+"&parentOverlay=AP&isShareDataAvailable="+isShareDataAvailable;	
						jQuery.ajax({ url:url, success: function(showData){
							jQuery('#TnfrsFundsOverlay').html(showData);

						}});
					}
					else if(showData.indexOf("error")== 0){
						document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
						document.forms["ajaxform"].submit();
					}
					else{
						checkKBA(riskurl,showData);
						//document.forms["ajaxform"].action = _jcontext+ showData;
						//document.forms["ajaxform"].method = "POST";
						//document.forms["ajaxform"].submit();
					}
				}else {
					/* 
				Error handled in the action, reponse status would always be 200
					 */
					document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
					document.forms["ajaxform"].submit();
				}
			}});
	}
}

function getFormattedText(accountAlertD)
{
	return accountAlertD.replace("&amp;gt;",">").replace("&amp;lt;","<");
}

function isNegativeBalance(balance)
{
	if(balance != null && balance != '' && balance.indexOf("-") != -1)
		return true;
	else
		return false;
}

/*Avatar - Sprint5 - To display Lost stolen and Auto Upgrade alerts */
function unlinkAccount(selectedIndex){
	//location.href="/US/jrs/am/linkac/unLinkCCAcctFromDashboard.do?selectedCCIndex="+selectedIndex;
	if("Y" == isSPFMigrated){
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=editacctpref";
	}else{
		checkKBAInterdictionOverlay("/US/jrs/am/linkac/unLinkCCAcctFromDashboard.do?selectedCCIndex="+selectedIndex);
	}

}

function linkAccount(){
	//location.href="/US/jrs/am/linkac/linkUnlinkCreditCardAccounts.do";
	checkKBAInterdictionOverlay("/US/jrs/am/linkac/linkUnlinkCreditCardAccounts.do");

}


//End accountsPanel.js 

//Start closedAccountOverlay.js 

var instanceID ="";
function showClosedAccountDialog(acctInstanceID) {
	instanceID = acctInstanceID;
	jQuery("#AlertHeaderclosed").html(jQuery("#closed-alert-header").tmpl(accJSON) ); 
	$("#closedAccountOverlay").jfpwidget('open'); 
}

function cancelClosedAccnt()
{
	var foundFlag = false;
	for(var catInd = 0; catInd < $(accJSON.formattedCategoryList).length; catInd++){
		var category = accJSON.formattedCategoryList[catInd];
		// Check if the category is Credit Card
		if(5 == category.categoryCode){
			// Check if the account belongs to Credit Card category
			if(null != category.accounts){
				for(var acctInd = 0; acctInd < category.accounts.length; acctInd++){
					var account = category.accounts[acctInd];
					if(account.accountInstanceId == instanceID){
						document.forms["ClosedAcctForm"].action = "/US/JSO/SSO/Cards.do?selectedCCIndex="+instanceID+"&targetAOApp=accountactivity";
						foundFlag = true;
						break;
					}
				}
			}
		}
	}
	if(!foundFlag){
		// If the account does not belong to Credit Card, then it must be either Savings or Current
		document.forms["ClosedAcctForm"].action = "/jba/rs/ShowTargetAppFromPortlet.do?selectedIndex="+instanceID+"&targetSubApp=ADA&TTC=742&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	}
	document.forms["ClosedAcctForm"].submit();
}

function unlinkClosedAccnt()
{

	var foundFlag = false;
	var businessFlag = accJSON.businessUser;	
	for(var catInd = 0; catInd < $(accJSON.formattedCategoryList).length; catInd++){
		var category = accJSON.formattedCategoryList[catInd];


		// Check if the category is Credit Card
		if(5 == category.categoryCode){
			// Check if the account belongs to Credit Card category
			if(null != category.accounts){
				for(var acctInd = 0; acctInd < category.accounts.length; acctInd++){
					var account = category.accounts[acctInd];
					if(account.accountInstanceId == instanceID){
						if("Y" == isSPFMigrated){
							document.forms["ClosedAcctForm"].action = "/US/JSO/SSO/Cards.do?targetAOApp=editacctpref";
						}else{
							document.forms["ClosedAcctForm"].action = "/US/jrs/am/linkac/linkUnlinkCreditCardAccounts.do";
						}
						foundFlag = true;
						break;
					}
				}
			}
		}
	}	

	if(!foundFlag){
		if(businessFlag)
		{
			document.forms["ClosedAcctForm"].action = "/US/NCSC/association/flow.action?entryPoint=true";
		}
		else
		{
			// If the account does not belong to Credit Card, then it must be either Savings or Current
			document.forms["ClosedAcctForm"].action = "/US/jrs/am/linkac/linkUnlinkOtherAccounts.do";
		}
	}
	document.forms["ClosedAcctForm"].submit();
}

//End closedAccountOverlay.js 

//Start accountAlertOverlay.js 

var instanceID ="";
var alertIndex="";
var alertMessage="";
var __timerAlert="";
function showAlertDialog(index,acctInstanceID,url,functionId,label,ctaType,alertNormalCount)
{
	clearTimeout(__timerAlert);
	var v = function(){
		showAlertDialogOverlay(index,acctInstanceID,url,functionId,label,ctaType,alertNormalCount);
	}
	__timerAlert = setTimeout(v, 100);
} 

function showAlertDialogOverlay(index,acctInstanceID,url,functionId,label,ctaType,alertNormalCount) {

	if (functionId!="") { 
		if(typeof isChatTagged != 'undefined' && isChatTagged == 'true')
			lpAddVars("page","AlertType",'account'); 
		jQuery('#alertButtonID').removeClass('appHide');
	}
	if(functionId=="") {
		if(typeof isChatTagged != 'undefined' && isChatTagged == 'true')
			lpAddVars("page","AlertType",'account');
		jQuery('#alertButtonID').addClass('appHide');
		jQuery('#alertButtonID').removeClass('StructAlertActivateWrapper interactOverlaySprite');
	}
	instanceID = acctInstanceID;
	alertIndex=index;
	jQuery("#alertButtonID a").attr('href',url);
	jQuery("#alertButtonID a").html(label);
	jQuery("#acctAlertOverlayWrapper").jfpwidget('open'); 
	jQuery("#AlertHeader").html(jQuery("#account-alert-header").tmpl(accJSON) ); 
	jQuery('#vertSliderNew').jfpwidget('refresh');
	jQuery('.StructAlertsOverlayFooterWrapper #contactUsOptions span.LiveChatSpan').attr('id','alertsParent');
	var alertParentDivObj = document.getElementById('alertsParent');
	if(typeof isChatTagged != 'undefined' && isChatTagged == 'true'){
		if(typeof alertParentDivObj != 'undefined'&& alertParentDivObj!=null && typeof lpShowButton != 'undefined')
			lpShowButton('alertsParent', 'lpButtonAlertsOverlay');
	}
	alertMessage = jQuery('#alertDetailMessage').html();

	if(typeof isChatTagged != 'undefined' && isChatTagged == 'true'){
		lpAddVars("page","unit","alerts-card");
		lpAddVars("page","AccountsAlertsAvailable",alertNormalCount);
		lpAddVars("page","AccountAlertSubject",alertMessage);
		lpAddVars("page","OverlayName",'account alerts');
	}	
}


function closeOverlay(){
	jQuery("#acctAlertOverlayWrapper").jfpwidget('close');
}

//End accountAlertOverlay.js 

//Start mtOverlay.js 

var TERM_OPTION_FINAL_DATE = "1";	
var TERM_OPTION_NO_OF_TFRS = "2";
var TERM_OPTION_TOTAL_AMT = "3";
var TERM_OPTION_UNTIL_CANCELLED = "4";
var TERM_OPTION_EXPIRY_DATE = "5";
var FREQ_ONE_TIME = "8";

function sfBack(backActionName) {
	var ConfirmGoLockVar = true; 
	if (!mobile) {ConfirmGoLockVar = ConfirmGoLock()}
	if(ConfirmGoLockVar) {
		document.forms[subAppContextName].action = backActionName;	
		document.forms[subAppContextName].submit();
	}
}

function sfAfterCheck() {
	var ConfirmGoLockVar = true; 
	if (!mobile) {ConfirmGoLockVar = ConfirmGoLock()}
	if(ConfirmGoLockVar) {
		popUpRecapCheck();
		disableNonSelected();
		// Disable SRT fields only if they are present
		if(isSRTFieldPresent())	disableOptionalFields()	//For SRT related fields

		//if there is set of amounts to be entered and one radio button is selected and it's correspondig text box is blank then set focus into it.
		setFocusOnAmountField()

		if (validateFields(document.forms[subAppContextName]) == true) {
			sfLock();
			document.forms[subAppContextName].submit();
		}
		else {
			enableNonSelected();
		}
	}
//	Enable SRT fields only if they are present
	if(isSRTFieldPresent())	enableAllFields();	//For SRT releated enabling.
}

function setFocusOnAmountField(){
	if(!isEmpty(document.forms[subAppContextName].elements["transferAmount"]) && document.forms[subAppContextName].elements["transferAmount"].type == 'hidden')
	{
		//find out if other amout radio buttons are supported.
		isAnyRadioChecked = false;

		if(document.forms[subAppContextName].elements["selectedAmtOption"].length!=undefined && !isEmpty(document.forms[subAppContextName].elements["selectedAmtOption"])){
			for (i=0 ; i < document.forms[subAppContextName].elements["selectedAmtOption"].length ; i++ )
			{
				opt = document.forms[subAppContextName].elements["selectedAmtOption"][i];
				if(opt.checked){
					isAnyRadioChecked = true;
					amountRadioClicked(opt);
				}
			}
			//If none of the options were selected then need to set focus on the first "Other Amount" text box.
			if (isAnyRadioChecked == false)
			{
				// Check if "transferAmountDummy" is a control array, if "transferAmountDummy" is controll array then set focus on 0 the element.
				if (!isEmpty(document.forms[subAppContextName].elements["transferAmountDummy"][0]))
				{
					document.forms[subAppContextName].elements["transferAmountDummy"][0].focus();
				}// "transferAmountDummy" is not a control array, set focus on it.
				else if (!isEmpty(document.forms[subAppContextName].elements["transferAmountDummy"]))
				{
					document.forms[subAppContextName].elements["transferAmountDummy"].focus();
				}
			}
		}
	}
}

function ConfirmGoLock() {
	var subappBusy = isSubappBusy();
	if (subappBusy)	{
		if (lockType == LOCK)
		{
			if(typeof mobile == 'undefined')
				eval("mobile = false;");
			if (!mobile)
				alert (displayPhrase);
			return false;
		} 
	}
	return true;
}

/* 
finds out if an object is valid or not.
 */
function isEmpty(object) {
	return String(object) == "" || object == null || typeof(object) == "undefined";
}

function isSRTFieldPresent(){
	return isEmpty(document.forms[subAppContextName].elements["selectedFrequencyIndex"]) && isEmpty(document.forms[subAppContextName].elements["selectedTerminationOption"]) ? false : true;
}

//Make transfer js


function loader(isVIP) {
	if(document.forms[subAppContextName].selectedAmtOption) {
		for(var i=0; i<document.forms[subAppContextName].selectedAmtOption.length; i++) {
			if(document.forms[subAppContextName].selectedAmtOption[i].checked)
				amountRadioClicked(document.forms[subAppContextName].selectedAmtOption[i]);
		}
	}

	if(!isEmpty(document.forms[subAppContextName].todayFutureSelection)) {
		for(var i=0; i<document.forms[subAppContextName].todayFutureSelection.length; i++) {
			if(document.forms[subAppContextName].todayFutureSelection[i].checked &&(document.forms[subAppContextName].transferDate.value == ""))
				dateRadioClicked(document.forms[subAppContextName].todayFutureSelection[i]);
		}
	}
}

function amountRadioClicked(field)
{
	if(field && field.checked == true) {
		var obj = null;
		var index = field.value;
		var radioLen = document.forms[subAppContextName].selectedAmtOption.length;
		var textLen = document.forms[subAppContextName].transferAmountDummy.length;
		var sel = radioLen - index;
		var txtindex = textLen - sel;
		if(txtindex >=0){
			for(var i=0; i < document.forms[subAppContextName].transferAmountDummy.length; i++) {
				if(txtindex != i) {
					obj = document.forms[subAppContextName].transferAmountDummy[i];
					obj.value = "";
				}
			}
			if (document.forms[subAppContextName].transferAmountDummy[txtindex].value == "" )
				document.forms[subAppContextName].transferAmountDummy[txtindex].focus();
			else {
				populateTransferAmount(document.forms[subAppContextName].transferAmountDummy[txtindex]);
			}
		}

		if(document.forms[subAppContextName].transferAmountDummy.value == "" )
			document.forms[subAppContextName].transferAmountDummy.focus();
	}
}

function dateRadioClicked(field) {
	if(field) {
		if (field.value=='F') {
			enableNonSelected();
			document.forms[subAppContextName].transferDate.focus();
		}
		else if (field.value=='T')	{
			document.forms[subAppContextName].transferDate.value = "";
		}
	}
}

//called at onfocus
function selectAmountInput(field) {
	for(var i=0; i < document.forms[subAppContextName].transferAmountDummy.length; i++)	{
		obj = document.forms[subAppContextName].transferAmountDummy[i];
		if(obj == field) {
			document.forms[subAppContextName].selectedAmtOption[i].checked = true;
		}
		else {
			obj.value = "";
		}
	}
}

//called at onfocus
function selectAmountOption(field, fieldName) {
	if(document.forms[subAppContextName].radioAmountOptionWithText) {
		document.forms[subAppContextName].radioAmountOptionWithText.value="true";}
	var obj = eval("document.forms[subAppContextName]."+fieldName);
	var len = obj.length;
	var radioOptLen = document.forms[subAppContextName].selectedAmtOption.length;

	if ( isNaN(len) ) {
		if (isNaN(radioOptLen))	{
			document.forms[subAppContextName].selectedAmtOption.checked = true;
		}
		else {
			document.forms[subAppContextName].selectedAmtOption[radioOptLen-1].checked = true;
		}
	}
	else
	{
		var offset = radioOptLen - len;
		selInpInd = getSelectedIndex(field, obj);
		document.forms[subAppContextName].selectedAmtOption[offset+selInpInd].checked = true;
		setOthersToBlank(obj, selInpInd)
	}
}

function setOthersToBlank(obj, selInpInd) {
	for(var i=0; i< obj.length; i++) {
		if(obj[i] != obj[selInpInd])
			obj[i].value = "";
	}
}

function getSelectedIndex(field, obj) {
	var i = 0;
	for(; i< obj.length; i++) {
		if(field == obj[i])
			break;
	}
	return i;
}

function radioAmountOptionWOText(field, fieldName) {
	if(document.forms[subAppContextName].radioAmountOptionWithText) {
		document.forms[subAppContextName].radioAmountOptionWithText.value="false";}
	if(field && field.checked == true) {
		var obj = eval("document.forms[subAppContextName]."+fieldName);

		if ( null != obj ) {
			var len = obj.length;

			if ( isNaN(len) ) {
				obj.value = "";
			}
			else {
				for(var i=0; i < obj.length; i++) {
					obj[i].value = "";
				}
			}
		}
	}
}

function radioAmountOptionWText(field, fieldName) {
	if(document.forms[subAppContextName].radioAmountOptionWithText) {
		document.forms[subAppContextName].radioAmountOptionWithText.value="true";}
	if(field && field.checked == true) {
		var obj = eval("document.forms[subAppContextName]."+fieldName);
		var len = obj.length;
		if ( isNaN(len) ) {
			obj.focus();
		}
		else {
			var index = document.forms[subAppContextName].selectedAmtOption.length - field.value;
			obj[len - index].focus();
			populateTransferAmount(obj[len - index]);
			setOthersToBlank(obj, (len - index));
		}// end of else : 2 option for amount entry
	}
}

function populateTransferAmount(field) {
	document.forms[subAppContextName].transferAmount.value = field.value;
}

function populateEmptyTransferAmount() {
	document.forms[subAppContextName].transferAmount.value = "";
}

function selectDateInput() {
	if(!isEmpty(document.forms[subAppContextName].todayFutureSelection)) {
		document.forms[subAppContextName].todayFutureSelection[1].checked = true;
		dateRadioClicked(document.forms[subAppContextName].todayFutureSelection[1]);	
	}
}

function disableNonSelected() {

	if(!isEmpty(document.forms[subAppContextName].todayFutureSelection) && document.forms[subAppContextName].todayFutureSelection[0].checked)
		document.forms[subAppContextName].transferDate.disabled = true;

	if(document.forms[subAppContextName].changedTransactionAmount && document.forms[subAppContextName].selectedAmtOption 
			&& !document.forms[subAppContextName].selectedAmtOption[document.forms[subAppContextName].selectedAmtOption.length - 1].checked)
		document.forms[subAppContextName].changedTransactionAmount.disabled = true;

	if((!(document.forms[subAppContextName].transferAmountDummy) && document.forms[subAppContextName].selectedAmtOption)){       if(document.forms[subAppContextName].transferAmount)
		document.forms[subAppContextName].transferAmount.disabled = true;
	}

	if(document.forms[subAppContextName].selectedLimitOption) {
		var selectedLimitValue;
		for(var i=0; i<document.forms[subAppContextName].selectedLimitOption.length; i++) {
			if(document.forms[subAppContextName].selectedLimitOption[i].checked) {
				selectedLimitValue = document.forms[subAppContextName].selectedLimitOption[i].value;
				break;
			}
		}
		if(selectedLimitValue == "3") {
			if(document.forms[subAppContextName].changedTfrsRemaining)
				document.forms[subAppContextName].changedTfrsRemaining.disabled = true;
			if(document.forms[subAppContextName].changedFinalTfrDate)
				document.forms[subAppContextName].changedFinalTfrDate.disabled = true;
		}
		else if(selectedLimitValue == "2") {
			if(document.forms[subAppContextName].changedRemTfrAmount)
				document.forms[subAppContextName].changedRemTfrAmount.disabled = true;
			if(document.forms[subAppContextName].changedFinalTfrDate)
				document.forms[subAppContextName].changedFinalTfrDate.disabled = true;
		}
		else if(selectedLimitValue == "1" || selectedLimitValue == "5") {
			if(document.forms[subAppContextName].changedRemTfrAmount)
				document.forms[subAppContextName].changedRemTfrAmount.disabled = true;
			if(document.forms[subAppContextName].changedTfrsRemaining)
				document.forms[subAppContextName].changedTfrsRemaining.disabled = true;
		}
		else if(selectedLimitValue == "4") {
			if(document.forms[subAppContextName].changedRemTfrAmount)
				document.forms[subAppContextName].changedRemTfrAmount.disabled = true;
			if(document.forms[subAppContextName].changedTfrsRemaining)
				document.forms[subAppContextName].changedTfrsRemaining.disabled = true;
			if(document.forms[subAppContextName].changedFinalTfrDate)
				document.forms[subAppContextName].changedFinalTfrDate.disabled = true;
		}
	}
}

function enableNonSelected() {		
	if(!isEmpty(document.forms[subAppContextName].transferDate))
		document.forms[subAppContextName].transferDate.disabled = false;

	if(document.forms[subAppContextName].changedTransactionAmount)
		document.forms[subAppContextName].changedTransactionAmount.disabled = false;

	if(document.forms[subAppContextName].transferAmountDummy)
		document.forms[subAppContextName].transferAmount.disabled = false;

	if(document.forms[subAppContextName].selectedLimitOption) {
		if(document.forms[subAppContextName].changedRemTfrAmount)
			document.forms[subAppContextName].changedRemTfrAmount.disabled = false;
		if(document.forms[subAppContextName].changedTfrsRemaining)
			document.forms[subAppContextName].changedTfrsRemaining.disabled = false;
		if(document.forms[subAppContextName].changedFinalTfrDate)
			document.forms[subAppContextName].changedFinalTfrDate.disabled = false;
	}
}

function focusAndSelect(obj) {
	obj.focus();
	obj.select();
}

function disableOptionalFields(){
	var selectedOption = null;
	var frm = document.forms[subAppContextName];
//	All this is to be done only if SRT related fields are present on the form
	if(!isEmpty(frm.elements["selectedFrequencyIndex"]))
	{
//		Trim all the fields before performing the validations
		trimAllFields(frm);
		radioButtonsCount = isEmpty(frm.elements["selectedTerminationOption"]) ? 0  :frm.elements["selectedTerminationOption"].length;
//		If OneTime frequency is selected then no need to validate the termination options
		if(frm.elements["selectedFrequencyIndex"].value != FREQ_ONE_TIME){			
			//find out which option is checked
			for(i = 0 ; i < radioButtonsCount ; i++){
				if(frm.elements["selectedTerminationOption"][i].checked){
					selectedOption = frm.elements["selectedTerminationOption"][i];
					break;
				}
			}
			//Disable the controls which are not to be validate since their corresponding option was not selected.
			if(null != selectedOption){
				if(selectedOption.value == TERM_OPTION_TOTAL_AMT){
					if(!isEmpty(frm.elements["untilNoOfTfrs"]))	{frm.elements["untilNoOfTfrs"].disabled = true;}
					if(!isEmpty(frm.elements["untilDate"]))		{frm.elements["untilDate"].disabled = true;}
				}
				else if(selectedOption.value == TERM_OPTION_NO_OF_TFRS){
					if(!isEmpty(frm.elements["untilTfrAmount"]))	{frm.elements["untilTfrAmount"].disabled = true;}
					if(!isEmpty(frm.elements["untilDate"]))		{frm.elements["untilDate"].disabled = true;}
				}
				else if(selectedOption.value == TERM_OPTION_EXPIRY_DATE || selectedOption.value == TERM_OPTION_FINAL_DATE){
					if(!isEmpty(frm.elements["untilTfrAmount"]))	{frm.elements["untilTfrAmount"].disabled = true;}
					if(!isEmpty(frm.elements["untilNoOfTfrs"]))	{frm.elements["untilNoOfTfrs"].disabled = true;}
				}
				else if(selectedOption.value == TERM_OPTION_UNTIL_CANCELLED){
					if(!isEmpty(frm.elements["untilTfrAmount"]))	{frm.elements["untilTfrAmount"].disabled = true;}
					if(!isEmpty(frm.elements["untilNoOfTfrs"]))	{frm.elements["untilNoOfTfrs"].disabled = true;}
					if(!isEmpty(frm.elements["untilDate"]))		{frm.elements["untilDate"].disabled = true;}
				}
			}
		}
		else{
			//Not to validate, so disable EveryThing.
			if(!isEmpty(frm.elements["untilTfrAmount"]))	{frm.elements["untilTfrAmount"].disabled = true;}
			if(!isEmpty(frm.elements["untilNoOfTfrs"]))	{frm.elements["untilNoOfTfrs"].disabled = true;}
			if(!isEmpty(frm.elements["untilDate"]))		{frm.elements["untilDate"].disabled = true;}
			for(i = 0 ; i < radioButtonsCount ; i++){
				frm.elements["selectedTerminationOption"][i].disabled = true;
			}
		}
	}
}

function enableAllFields(){
	frm = document.forms[subAppContextName]; // Changes for STR 262494
//	Enable every thing now
	if(!isEmpty(frm.elements["untilTfrAmount"]))	{frm.elements["untilTfrAmount"].disabled = false;}
	if(!isEmpty(frm.elements["untilNoOfTfrs"]))	{frm.elements["untilNoOfTfrs"].disabled = false;}
	if(!isEmpty(frm.elements["untilDate"]))		{frm.elements["untilDate"].disabled = false;}
	if(!isEmpty(frm.elements["selectedTerminationOption"])){
		for(i = 0 ; i < radioButtonsCount ; i++){
			frm.elements["selectedTerminationOption"][i].disabled = false;
		}
	}
}

///////////////////////////////////////////////////////////////////////////////
/*
 * Removes all whitespaces on the left side
 * Parameters:
 *     string: The string
 * Returns: The new string
 */
function ltrim(string) {
	var string = String(string);
	var pos = 0;
	while (string.charAt(pos) == " ") {
		pos++;
	}
	return string.substr(pos);
}

///////////////////////////////////////////////////////////////////////////////
/*
 * Removes all whitespaces on the right side
 * Parameters:
 *     string: The string
 * Returns: The new string
 */
function rtrim(string) {
	var string = String(string);
	var pos = string.length - 1;
	while (string.charAt(pos) == " ") {
		pos--;
	}
	return string.substring(0, pos + 1);
}

///////////////////////////////////////////////////////////////////////////////
/*
 * Removes all whitespaces on both left and right sides
 * Parameters:
 *     string: The string
 * Returns: The new string
 */
//Method name renamed to avoid conflict with citiCommon.js
function trimForOverlays(string) {
	return ltrim(rtrim(string));
}

function FormatAmt(amt,currcode,precision,DecimalChar,DescriptorPos,allowThousandsSeperator,thousandsSeperatorChar)
{ 
	var sign="";

	if (currcode=="")
		return ""
		if(amt.charAt(0) == "-")
		{
			sign="-";
		}
	amt = FormatAmtWithoutCurrCode(amt,precision,DecimalChar,DescriptorPos,allowThousandsSeperator,thousandsSeperatorChar,'true');

	if(amt == ""){
		return "";
	}

	if (DescriptorPos == "true")
		amt = currcode + " " + sign + amt;
	else
		amt = sign + amt + " " + currcode;

	return amt;
}

function FormatAmtWithoutCurrCode(amt,precision,DecimalChar,DescriptorPos,allowThousandsSeperator,thousandsSeperatorChar,allowNegativeSign){
	var numbers=false;
	var currThousandSepIndex=-1;
	var prevThousandSepIndex=-1;
	var decimalCharIndex = -1;
	var numberCount = 0;

	if (amt=="" || precision==null || DescriptorPos=="")
		return ""

		if(amt.length==1 && amt.charAt(0) == "-")
			return "";

	if(amt.charAt(0) == "-")
	{
		if(allowNegativeSign == 'true')
			amt=amt.substring(1,amt.length);
		else
			return "";
	}

	for(var i=0;i<amt.length;i++)
	{
		c=amt.substring(i,i+1)

		if (c<"0" || c>"9")
		{
			if (c==DecimalChar)
			{
				if (precision==0)
					return ""
					else
					{
						remain = amt.substring(i+1,amt.length)
						if (remain.indexOf(DecimalChar) != -1)
							return ""

							if (remain.length > precision)
								return ""
					}
				decimalCharIndex = i;
			}

			else if(allowThousandsSeperator=='true' && c==thousandsSeperatorChar){

				currThousandSepIndex = i;	
				numberCount=0;
				if(prevThousandSepIndex == -1){

					if(currThousandSepIndex == 0 || currThousandSepIndex >3){

						return "";
					}
					prevThousandSepIndex = currThousandSepIndex;					
				}
				else {

					if(currThousandSepIndex-prevThousandSepIndex != 4){
						return "";
					}
					else {
						prevThousandSepIndex = currThousandSepIndex;						
					}
				}
			}else {
				return ""
			}
		}
		else {
			numbers = true;
			numberCount++;			
		}
	}
	if (!numbers)
		return ""
		if(allowThousandsSeperator == 'true' && currThousandSepIndex != -1) {
			if(decimalCharIndex != -1){
				if(decimalCharIndex-currThousandSepIndex != 4) {
					return "";
				}
			}else {
				if(numberCount !=3){
					return "";
				}
			}
		}
	if (precision > 0)
	{
		decimalpos = amt.indexOf(DecimalChar)
		amt = removeLeadingZero( amt, decimalpos);
		decimalpos = amt.indexOf(DecimalChar);

		if (decimalpos == -1) {
			amt = amt + DecimalChar;
			decimal = "";
		}else {
			decimal = amt.substring(decimalpos+1,amt.length)
		}
		if (decimal.length < precision)
			for(var j=decimal.length+1;j<=precision;j++)
				amt = amt + "0";
		if (decimalpos == 0)
			amt = "0" + amt;
	}
	if(allowThousandsSeperator == 'true' && currThousandSepIndex == -1){
		amt = appendThousandSeperator(amt,thousandsSeperatorChar,DecimalChar);
	}
	return amt;
}

function appendThousandSeperator(amt,thousandsSeperatorChar,DecimalChar) {
	var formatField="";
	var decimalpos = amt.indexOf(DecimalChar);

	if(decimalpos == -1) 
		formatField= amt
		else
			formatField = amt.substring(0,decimalpos);

	var amtLength = formatField.length;
	if(amtLength <= 3) return amt;
	var formattedAmt="";
	var counter=0;

	for(var i=amtLength ;i>0;i--){
		counter++;
		c=amt.substring(i,i-1);
		formattedAmt = c+formattedAmt;
		if(counter != amtLength && counter%3 == 0){ 
			formattedAmt = thousandsSeperatorChar+formattedAmt;			
		}
	}
	return formattedAmt+amt.substring(decimalpos);
}

function removeLeadingZero(amt, decimalPos) {
	if ( decimalPos == -1 )	{
		for(var i=0;i<amt.length;i++) {
			c=amt.substring(i,i+1);
			if (c != "0")
				return amt.substring(i,amt.length);
		}
		return amt;
	}else {
		amtBfrDec = amt.substring(0, decimalPos);
		for(var i=0;i<amtBfrDec.length;i++)	{
			c=amtBfrDec.substring(i,i+1);
			if (c != "0")	{
				amtBfrDec =  amtBfrDec.substring(i,amtBfrDec.length);
				break;
			}
		}
		return amtBfrDec + amt.substring(decimalPos, amt.length);
	}
}

function replace(Phrase,Tkn2Repl,ReplVal) {
	if (Phrase.length==0 || Tkn2Repl.length==0 || ReplVal.length==0) {
		return ""
	} 
	first=Phrase.indexOf(Tkn2Repl,0)
	if (first==-1) 	{
		return ""
	}
	return Phrase.substring(0,first)+ReplVal+Phrase.substring(first+Tkn2Repl.length,Phrase.length)
}




//End mtOverlay.js 


//Start of transferFunds.js
//Given below function is taken from the confirm.jsp

//From selectAccountsOnMyCiti.jsp
var firstError_selectAccts = false;
var selectFromLabel_selectAccts = false;
var selectToLabel_selectAccts = false;

function processSrcAcct_selectAccts(){
	if(selectFromLabel_selectAccts == true){
		processInfoBubble_selectAccts("#selectFromLabel");
	}else if(selectToLabel_selectAccts !=true ){
		processInfoBubble_selectAccts("");
		selectFromLabel_selectAccts = false;
		selectFieldToggleRemove();
	}
	return;
}

function processToAcct_selectAccts(){
	if(selectToLabel_selectAccts == true && selectFromLabel_selectAccts == false){
		processInfoBubble_selectAccts("#selectToLabel");
	}else if (selectFromLabel_selectAccts !=true ){
		processInfoBubble_selectAccts("");
		selectToLabel_selectAccts = false;
		selectToFieldToggleRemove();
	}
	return;
}

function processInfoBubble_selectAccts(id)
{
	switch(id){
	case'#selectFromLabel':
		jQuery('#selectFromLabel').jfpwidget('show');
		jQuery('#selectToLabel').jfpwidget('hide');
		break;
	case'#selectToLabel':
		jQuery('#selectFromLabel').jfpwidget('hide');
		jQuery('#selectToLabel').jfpwidget('show');
		break;
	default:
		jQuery('#selectFromLabel').jfpwidget('hide');
	jQuery('#selectToLabel').jfpwidget('hide');

	}
	return;
}
var selectFormatForTo = function(text) {
	var arr = text.split("$");

	var newText = '<span class="ui-selectmenu-item-header structFontFamilyTrf">' + arr[0] + '</span>';

	if(arr.length > 1) {
		newText = newText + '<br><span class="ColorChangeOnHover">$' + arr[1] + '</span>';	
	}

	return newText;
};
var selectFormat = function(text) {
	var arr = text.split("$");

	var newText = '<span class="ui-selectmenu-item-header structFontFamilyTrf">' + arr[0] + '</span>';

	if(arr.length > 1) {
		newText = newText + '<br><span class="ColorChangeOnHover">$' + arr[1] + '</span>';	
	}

	return newText;
};
function submitTransferDetailsOnChange(obj){
	//resetPageTimeout();

	jQuery('#loadImageProcess').removeClass('appHidden').addClass('showDiv');

	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mt/SubmitAccountSelectionOnMyCiti.do', 
		success: function(data){ 
		$('#selectedSrceAcct').jfpwidget('destroy');
		$('#selDestinationToLabel').jfpwidget('destroy'); 
		executeOnSuccess(data);
		if( $('#selectedSrceAcct').jfpwidget('value') != "-1" && $('#selDestinationToLabel').jfpwidget('value') != "-1"){
			jQuery('ul.appNav li.appNavNext').disableLinks();
		}
	}
	});
}

var ccAccount;
function submitTransferDetails(ind,obj)  
{	  
	//resetPageTimeout();
	if(ind==1 && srcCopsCheck()){		
		ccAccount=document.forms['/jba/jbaMTContext'].selectedSourceAccount.value;
	}
	if(ind==0 && destCopsCheck()){		
		ccAccount=document.forms['/jba/jbaMTContext'].selectedDestinationAccount.value;
	}
	var sourceAccountValue;
	var destinationAccontValue;

	if(document.getElementById('selectedSrceAcct') != null){
		sourceAccountValue = document.forms['/jba/jbaMTContext'].selectedSourceAccount.value;
	}
	if(document.getElementById('selDestinationToLabel') != null){
		destinationAccontValue = document.forms['/jba/jbaMTContext'].selectedDestinationAccount.value;
	}		

	if(srcCopsCheck()|| destCopsCheck())
	{	
		if(destCopsCheck()){
			jQuery('#copsDestAcctMessage').removeClass('appHidden').addClass('showDiv');
			jQuery('#loadImageProcess').removeClass('showDiv').addClass('appHidden');
		}
		else
			jQuery('#copsDestAcctMessage').removeClass('showDiv').addClass('appHidden');
		if(srcCopsCheck()){
			jQuery('#copsSrcAcctMessage').removeClass('appHidden').addClass('showDiv');
			jQuery('#loadImageProcess').removeClass('showDiv').addClass('appHidden');
		}
		else
			jQuery('#copsSrcAcctMessage').removeClass('showDiv').addClass('appHidden');
		jQuery('ul.appNav li.appNavNext').disableLinks();	
		return false;	
	}
	else{					
		if(!destCopsCheck())
			jQuery('#copsDestAcctMessage').removeClass('showDiv').addClass('appHidden');
		if(!srcCopsCheck())
			jQuery('#copsSrcAcctMessage').removeClass('showDiv').addClass('appHidden');
		jQuery('#showerrordynamic').html('');
		jQuery('#jbaPopUp').html('');		
		if(sourceAccountValue == "-1" || destinationAccontValue == "-1"){
			//Panama - Phase 3 Changes - Client Side Validation for Make Transfer Overlay

			if(sourceAccountValue == "-1"){
				jQuery( 'div#selectAccountForOverlayCheck1' ).validateFields( { flg: false} );

				if(firstError_selectAccts == false){
					firstError_selectAccts = true;
					selectFromLabel_selectAccts = true;
					processInfoBubble_selectAccts('#selectFromLabel');
					selectFieldToggleAdd();					
				}else{
					processInfoBubble_selectAccts('#selectFromLabel'); 
					selectFromLabel_selectAccts = true;	
					selectFieldToggleAdd(); 
				}

			}else{
				firstError_selectAccts = false; 
				jQuery( 'div#selectAccountForOverlayCheck1' ).validateFields( { flg: true} );
				selectFieldToggleRemove();
			}

			if(destinationAccontValue == "-1"){

				jQuery( 'div#selectAccountForOverlayCheck2' ).validateFields( { flg: false} );
				if(firstError_selectAccts == false){
					firstError_selectAccts = true;
					selectToLabel_selectAccts = true;
					processInfoBubble_selectAccts('#selectToLabel');
					selectToFieldToggleAdd();
				}else{
					selectToFieldToggleAdd();
					selectToLabel_selectAccts = true;
				}

			}else{
				selectToFieldToggleRemove();
				jQuery( 'div#selectAccountForOverlayCheck2' ).validateFields( { flg: true} );
			}
		}
		else{			
			submitTransferDetailsOnChange(document.getElementById('selSrcAcct'));
			jQuery('ul.appNav li.appNavNext').disableLinks();
		}
	} 
}

//From enterAmountForMyCiti.jsp


function checkTransfer(ind)  
{			
	if(ind==1 && srcCopsCheck()){			
		ccAccount=document.forms['/jba/jbaMTContext'].selectedSourceAccount.value;
	}
	if(ind==0 && destCopsCheck()){			
		ccAccount=document.forms['/jba/jbaMTContext'].selectedDestinationAccount.value;
	}

	var sourceAccountValue;
	var destinationAccontValue;

	if(document.getElementById('selectedSrceAcct') != null){
		sourceAccountValue = document.forms['/jba/jbaMTContext'].selectedSourceAccount.value;
	}
	if(document.getElementById('selDestinationToLabel') != null){
		destinationAccontValue = document.forms['/jba/jbaMTContext'].selectedDestinationAccount.value;
	}

	if(srcCopsCheck()|| destCopsCheck())
	{		
		if(destCopsCheck()){
			jQuery('#copsDestAcctMessage').removeClass('appHidden').addClass('showDiv');
			jQuery('#enterAmountCheck').removeClass('showDiv').addClass('appHidden');
			jQuery('#enterDateCheck').removeClass('showDiv').addClass('appHidden');
			jQuery('#loadImageProcess').removeClass('showDiv').addClass('appHidden');
		}
		else
			jQuery('#copsDestAcctMessage').removeClass('showDiv').addClass('appHidden');
		if(srcCopsCheck()){
			jQuery('#copsSrcAcctMessage').removeClass('appHidden').addClass('showDiv');
			jQuery('#enterAmountCheck').removeClass('showDiv').addClass('appHidden');
			jQuery('#enterDateCheck').removeClass('showDiv').addClass('appHidden');
			jQuery('#loadImageProcess').removeClass('showDiv').addClass('appHidden');
		}	
		else
			jQuery('#copsSrcAcctMessage').removeClass('showDiv').addClass('appHidden');		
		return false;		
	}
	else{
		if(ind==0)
			jQuery('#copsDestAcctMessage').removeClass('showDiv').addClass('appHidden');
		if(ind==1)
			jQuery('#copsSrcAcctMessage').removeClass('showDiv').addClass('appHidden');		
		if(sourceAccountValue == "-1" || destinationAccontValue == "-1"){
		}else{
			jQuery('#loadImageProcess').removeClass('appHidden').addClass('showDiv'); 
			jQuery('#enterAmountCheck').removeClass('showDiv').addClass('appHidden');
			jQuery('#enterDateCheck').removeClass('showDiv').addClass('appHidden');	
			jQuery('#NoteMessageTF').removeClass('showDiv').addClass('appHidden');	
			var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
			jQuery.ajax({
				type:'POST',
				data:formdata,
				url:'/US/jba/mt/SubmitAccountSelectionOnMyCiti.do', 
				success: function(data){ 
				executeOnSuccess(data);
			}
			});	   		

		}
	}
}

function dateEnteredByCalendarHook() {
	selectDateInput();
	if(typeof(table) != 'undefined' && table && document.forms[subAppContextName].untilDate && document.forms[subAppContextName].untilDate.value != "")
		table.setFocus(5);
}



function executeForShowConfirmation(data){
	//resetPageTimeout();
	jQuery('#moTemp_id').html(data); 
}

function submitTransferDetailsCall()   
{	
	jQuery('#loadImage').removeClass('appHidden').addClass('showDiv'); 		
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mt/SubmitAmountEntryForMyCitiRecap.do', 
		success: function(data){ 		
		executeOnSuccess(data);
	}
	});

}  

function amountEntryOverlayRecap() {
	if(fieldValidationForOverlay1() == true){
		if (validateFields(document.forms[subAppContextName]) == true) {
			submitTransferDetailsCall();  
		}else{ 	// For STR# 218975, while client side validation in case validating fields returns false termination options and other optional fields on the page needs to be enabled
			enableNonSelected(); // transfer date, transfer amount are enabled
			if(isSRTFieldPresent())	{
				enableAllFields();	
			}
		}
	}
}

toggleInfoBubble('false');

function toggleInfoBubble(flag)
{
	if (flag == "true")
	{
		jQuery('#selectFromLabel-info').css('display', 'inline-block');
		jQuery('#selectToLabel-info').css('display', 'inline-block');
		jQuery('#labelAmount-info').css('display', 'inline-block');
		jQuery('#dateLabel-info').css('display', 'inline-block');
		jQuery('#invalidAmountMessage-info').css('display', 'inline-block');
	} 
	else 
	{
		jQuery('#selectFromLabel-info').css('display', 'none');
		jQuery('#selectToLabel-info').css('display', 'none');
		jQuery('#labelAmount-info').css('display', 'none');
		jQuery('#dateLabel-info').css('display', 'none');
		jQuery('#invalidAmountMessage-info').css('display', 'none');
	}	
}

function showHelpForProduct(cID){
	var winname;
	if (!winname)
		winname = "Help" + (new Date()).getTime();

	openHelpWin(cID, winname, 'toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=780,height=585');
}
function openHelpWin(arg, wn, winprop)
{
	var url = getHelpURL() + "?contentId=" + arg; 
	var winHandle = showPopup(url, wn, winprop);
	addWinToList(winHandle);
	return winHandle;
}
//From verifyDetails.jsp

//Common Methods for all Jsps.
var selectFormatMT = function(text) {
	var arr = text.split("$");
	var lineOne;		
	var newText = '<div class="selectAcctBackground selectAcctReference"><span class="ui-selectmenu-item-header structFontFamilyTrf ">' + arr[0] + '</span></div>';

	if(arr.length > 1) {
		if (arr[0]!= null && arr[0] != "" && arr[0].length > 64){
			if(arr[0].indexOf(":")!= -1){
				var temp = arr[0].split(":");
				lineOne = showTruncatedValueOnTFR(temp[0],54);
				lineOne = lineOne + " : " + trimForOverlays(temp[1]);
			}
			else{
				lineOne = showTruncatedValueOnTFR(arr[0],61);
			}
		}else{
			lineOne = arr[0];
		}
		newText = '<div class="selectAcctBackground selectAcctReference"><span class="selectLineOne lineOne">' + lineOne + '</span>';
		newText = newText + '<br><span class="selectLineTwo">$' + arr[1] + '</span></div>';		
	}

	return newText;
};
//Function for enterAmountForMyCiti.jsp
var selectFormatMTEnterAmount = function(text) {
	var arr = text.split("$");
	var lineOne;		
	var newText = '<div class="selectAcctBackground selectAcctReference"><span class="ui-selectmenu-item-header structFontFamilyTrf ">' + arr[0] + '</span></div>';

	if(arr.length > 1) {
		if (arr[0]!= null && arr[0] != "" && arr[0].length > 64){
			if(arr[0].indexOf(":")!= -1){
				var temp = arr[0].split(":");
				lineOne = showTruncatedValueOnTFR(temp[0],54);
				lineOne = lineOne + " : " + trimForOverlays(temp[1]);
			}
			else{
				lineOne = showTruncatedValueOnTFR(arr[0],61);
			}
		}else{
			lineOne = arr[0];
		}
		newText = '<div class="selectAcctBackground selectAcctReference"><span class="selectLineOne lineOne">' + lineOne + '$' + arr[1] + '</span></div>';		
	}

	return newText;
};

function showTruncatedValueOnTFR(text, indx){
	trimForOverlays(text);
	text = text.substring(0,indx) + "...";
	return text;
}
function toggleErrorBubble()
{
	jQuery('#enterDateCheck').jfpwidget('hide');
	jQuery('#enterAmountCheck').jfpwidget('hide');
	jQuery('#selectAccountForOverlayCheck1').jfpwidget('hide');
	jQuery('#selectAccountForOverlayCheck2').jfpwidget('hide');
}


function srcCopsCheck(){
	var ccAccount=document.forms['/jba/jbaMTContext'].selectedSourceAccount.value;	
	return copsCheck(ccAccount);
}

function destCopsCheck(){
	var ccAccount=document.forms['/jba/jbaMTContext'].selectedDestinationAccount.value;	
	return copsCheck(ccAccount);
}
function executeOnSuccess(data){
	//resetPageTimeout();
	$("div[id*='scroll-']").empty().remove(); 
	$(".ui-tooltip-shadow").css('display','none');  
	jQuery('#TnfrsFundsOverlay').html(data);  
}
//End of transferFunds.js
//Start of Payments.js
//This Section is from the payments.js file which has not been added to source control yet. As soon as it is added 
//the section will be moved to that file. The code below resides here temporarily.
//**************************************************************************************************************** //

//JS file for payment jsps


//1. From confirm.jsp
function payAnotherBill(){
	//resetPageTimeout();
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mp4/InitializeSubAppForMyCiti.do?TTC=23&restart=true', 
		success: function(data){ 
		executeOnSuccessBP(data);
	}
	});

}

//2. From recap.jsp

function submitConfirmation(){
	//resetPageTimeout();
	jQuery('.confirmPayBill').attr('href', '#');
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mp4/ProcessInputForMyCiti.do', 
		success: function(data){ 
		executeOnPaymentConfirm(data);
	}
	});

}    

function executeOnPaymentConfirm(data){ 
	jQuery('#billpayoverlay').html(data);    
}

function back(){
	//resetPageTimeout();
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mp4/SubmitPayeeSelectionForMyCiti.do', 
		success: function(data){ 
		executeBackActionOnSuccess(data);
	}
	});

}

function executeBackActionOnSuccess(data){  

	jQuery('#billpayoverlay').html(data);

}

//3. From selectPaymentAccountPayeeForMyCiti.jsp

function submitPayeeSelection(obj){
	//resetPageTimeout();
	var flag=copsCheck();
	var objId =obj.id;
	if(flag)
	{

		var ccAccount=document.forms['/jba/jbaMP4Context'].selectedSourceAccount.value;
		document.forms['/jba/jbaMP4Context'].action = "/US/JSO/SSO/Cards.do?targetAOApp=payment&selectedCCIndex="+ccAccount;
		document.forms['/jba/jbaMP4Context'].submit();
	}
	if(isMemberAccountCheck())
	{
		jQuery('#NextButton').addClass('appHidden');
		jQuery('#ContinueButton').removeClass('appHidden');
		jQuery('.structTYPts').removeClass('appHidden');
	}
	else{
		jQuery('#NextButton').removeClass('appHidden');
		jQuery('#ContinueButton').addClass('appHidden');
		jQuery('.structTYPts').addClass('appHidden');
		jQuery('#jbaPopUp').html('');
		if(optionCheckForMPOverlay()==true){
			jQuery('#jbaPopUp').html('');
			jQuery('#loadImage').removeClass('appHidden').addClass('showDiv');
			var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
			jQuery.ajax({
				type:'POST',
				data:formdata,
				url:'/US/jba/mp4/SubmitPayeeSelectionForMyCiti.do', 
				success: function(data){ 
				executeOnSuccessBP(data);
			}
			});
		}	
	}
}

//4. mp4OTInputForMyCiti.jsp


function memoOptional(){
	jQuery('.memo').val("");
}

function submitPayeeDetails(){
	//resetPageTimeout();
	if( document.forms['/jba/jbaMP4Context'].selectedPayeeIndex.value == "-1"){
		processToAccnt();
	}else{
		jQuery('#forBPLoader').addClass('appHidden');
		jQuery('#loadImage').removeClass('appHidden');
		var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
		jQuery.ajax({
			type:'POST',
			data:formdata,
			url:'/US/jba/mp4/SubmitPayeeSelectionForMyCiti.do', 
			success: function(data){ 
			executeOnSuccessBP(data);
		}
		});

	}
}

function submitPaymentToRecap(){
	//resetPageTimeout();
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mp4/SubmitPaymentDetailsForMyCitiRecap.do', 
		success: function(data){ 
		executeOnSuccessBP(data);
	}
	});

}

function summary(){
	var formdata = jQuery('form[name="'+subAppContextName+'"]').serialize(true);
	jQuery.ajax({
		type:'POST',
		data:formdata,
		url:'/US/jba/mp4/SubmitEbillIconSelectionForMyCiti.do', 
		success: function(data){ 
		executeOnSuccessSummary(data);	  
	}
	});
}

function executeOnSuccessSummary(data){
	jQuery("#eBillIcon-label-info").html(data);  	
	jQuery('#eBillIcon-label-info').addClass('eBillTooltipBP');
}

function cancelReEnrollment(){

}

function continueReEnrollment(){
	btn_continue();	
}

//5. From myCitiWarnLock.jsp



//6. Common
function executeOnSuccessBP(data){
	//resetPageTimeout();
	$("div[id*='scroll-']").empty().remove(); 
	$(".ui-tooltip-shadow").css('display','none');  
	jQuery('#billpayoverlay').html(data);
}
//Commented as its causing issue in IE7
//jQuery("body").css("overflow", "auto");


//End of payments.js

//Start pfm.js
function getOverlay(){
	if (swfobject.hasFlashPlayerVersion("10.1")) {
		// has Flash
		jQuery("#IFrame").html('<iframe id="samliframe" name="samliframe" style="width:0px; height:0px;" src="/US/NCSS/pfm/preparesso/flow.action?fromFinApp=true&JFP_TOKEN='+JFP_CSRF_TOKEN+'"></iframe>');
		jQuery("#FlashObject").html('');
		jQuery('#PfmOverlay').jfpwidget('open');
		//resetPageTimeout();
		loadFlash();
	}
	else {
		jQuery('#PfmOverlay').jfpwidget('open');
	}
}
function loadFlash() {
	var link = cobrandCDNDomainURL()+"/apps/bridgetFlash."+cobrandNameURL()+".do?bridgetAppId=10003130";
	//Fix for Expense Analysis Overlay
	jQuery("#FlashObject").html('<object id="mySwf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"  height="400" width="317"> <param name="src" value="'+link+'" /><param name="flashVars" value= "access_secret=&access_token=&request_token=&request_secret=&location=dashboard&grant=true&oauth_consumer_key=ac18faa1c44d45f69d38b858850105c7&debug=false&state=small"/><param value="always" name="allowScriptAccess"/><param value="all" name="allowNetworking"/><param value="opaque" name="wmode"/><embed  pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowNetworking="all" allowScriptAccess="always" name="mySwf" src="'+link+'" pluginspage="https://www.adobe.com/go/getflashplayer" FlashVars="access_secret=&access_token=&request_token=&request_secret=&location=dashboard&grant=true&oauth_consumer_key=ac18faa1c44d45f69d38b858850105c7&debug=false&state=small" height="390" width="317"/></object>');
}
var initializeFinapp = function() {
	var portal_config = eval({"portalConfiguration":{"rsession":"",
		"uid":"yodTest",
		"defaultLocale":"en_US",
		"availableProps":[{"path":cobrandCDNDomainURL()+"/apps/cobrands/citipfm/widgets/properties/citiprop_properties.swf","key":"citiprop"}, {"path":cobrandCDNDomainURL()+"/apps/properties/co_BR_Properties.swf","key":"co_BR"}],
		"appRestUrl":cobrandDomainURL()+"/apps/srest/"+cobrandNameURL(),
		"applicationId":"65632F75FE158EE4FF82B92FC53EC200",
		"i18n":{"currencyCode":"USD","currencySymbol":"$","currencyNotation":"SYMBOL","groupSize":3,"timeZone":"PST","dateFormat":"MM/dd/yyyy","groupingSeparator":",","decimalSeparator":".","groupPattern":"###,##0.##"},
		"availableCSS":[{"path":cobrandCDNDomainURL()+"/apps/cobrands/citipfm/widgets/properties/FlexFinAppsStyler.swf","key":"citicss"}],
		"env":"/apps",
		"availableLocales":[{"path":cobrandCDNDomainURL()+"/apps/cobrands/citipfm/widgets/properties/citi_en_US_Strings.swf","key":"citi_en_US"},{"path":cobrandCDNDomainURL()+"/apps/properties/en_US_Strings.swf","key":"en_US"},{"path":cobrandCDNDomainURL()+"/apps/cobrands/citipfm/widgets/properties/citi_en_US_Strings.swf","key":"citi_en_US"},{"path":cobrandCDNDomainURL()+"/apps/properties/en_US_Strings.swf","key":"en_US"}],
		"cobrandId":10006164,
		"appRootUrl":cobrandDomainURL()+"/apps",
		"defaultProp":"co_BR"}});
	if(portal_config){
		portal_config.portalConfiguration.appRootUrl=cobrandDomainURL() + portal_config.portalConfiguration.env;
		return portal_config.portalConfiguration;
	}
	return null;	
}
function makePFMAjaxCall() {
	jQuery.ajax({ 
		url:'/US/NCSS/pfm/toolspaneltest/flow.action',			
		type:'POST',
		success:function(data) {
		jQuery(document).ready(function(){jQuery('#pfmResponseData').html(data);});
	},
	error:function(data){
		jQuery('#pfmResponseData').html('<div class="StructPFMWrapper"><div class="PFMTools"><span class="StructAppFloat StructPFMHeader "><h2 class="margin0 colorTextBlack">CITI VIEW</h2></span><span class="StructToolsView fontSize10px"><span class="StructRightLiSpan interactGoToPFM"></span><a href="/US/NCSS/pfm/preparesso/flow.action?pfmtarget=PFMDASHBOARD" id="cmlink_PFMViewTools">Go to FINANCIAL TOOLS</a></span></div><div class="appCLear Height35px"></div><p class="fontSize11px "><span style="font-weight: bold;">Expense Analysis</span><div class="appPFMSpacer"></div><table class="fontSize13px "><thead><tr><th class="PFMVSToolsLink fontSize10px PFMTableHeader PFMTableHeader"><b><a class="interactIconSprite interactSnapShot StructSnapshotLink" name="&amp;lid=ViewDetailsForPFM" href="javascript:getOverlay();">View Details</a></b></th><th class="fontSize11px PFMTableHeader colorTextLightGray PFMPercentPadding PFMTableHeader">Percent</th><th class="fontSize11px PFMTableHeader colorTextLightGray PFMTableHeader">Amount</th></tr></thead><tbody><tr class="StructToolsRow"><td id="PFMResponseBeanErrorMessage" colspan="3" class="StructToolsName fontSize11px toolsPanelTdWdth"><strong>Feature temporarily unavailable</strong>.<br>Please try again later. If you continue to see this message, please call 1-800-374-9700 (TTY: 800-788-0002) for further assistance.<br>FM001</td></tr></tbody></table></div>');
	}
	});
}
//End of pfm.js

// NPS Payments Redesign Phase 1 
var editFormField = false;
function goToPaymentsLanding()
{
	if ($('input:radio:checked').length > 0) {
		editFormField = true;
	}
	if (!editFormField) {
		if (isCinlessUser=='N')
		{
			location.href="/US/CBOL/pnt/activity/flow.action";
		}
		else if(isCinlessUser=="Y")
		{
			location.href="/US/CBOL/pnt/crecarpay/flow.action";
		}
	} 
}

function cancelOverlayLanding()
{
	citiUniversal.forms.unbindLeaveConfirmation();
	if (isCinlessUser=='N')
	{
		location.href="/US/CBOL/pnt/activity/flow.action";
	}
	else if(isCinlessUser=="Y")
	{
		location.href="/US/CBOL/pnt/crecarpay/flow.action";
	}	
}

function redirectWithInstanceId(instanceID)
{
	if(isNPSMakePymtInFallback)
	{
		location.href="/US/JSO/SSO/Cards.do?selectedCCIndex="+instanceID+"&targetAOApp=paymenthistory";
	}
	else
	{
		location.href="/US/CBOL/pnt/schpayhis/flow.action?showLanding=true";
	}
}

function redirectWithoutInstanceId()
{
	if(isNPSMakePymtInFallback)
	{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=paymenthistory";
	}
	else
	{
		location.href="/US/CBOL/pnt/schpayhis/flow.action?showLanding=true";
	}
}

function redirectPastWithoutInstanceId()
{
	if(isNPSMakePymtInFallback)
	{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=paymenthistory";
	}
	else
	{
		location.href="/US/CBOL/pnt/schpayhis/flow.action";
	}
}


//Sprint 7 - function of accountAlertOverlay.jsp
function detailedNRIActivate()
{
	var accountInstance = instanceID;
	document.forms["accountOverlayForm"].action ="/US/JSO/SSO/Cards.do?selectedCCIndex="+accountInstance+"&targetAOApp=nriinside";
	document.forms["accountOverlayForm"].submit();
}

//Global Avatar 1.0 Regional Integration changes for cross links - STARTS
function makePaymentCreditCard(accountInstanceId, isDelinquent) {

	if (isCinlessUser=='N') {

		if (isDelinquent == "true") {
			location.href="/US/JSO/SSO/Cards.do?selectedCCIndex="+ accountInstanceId +"&targetAOApp=payment";
		} else if (isDelinquent == "false") {
			showMTApp(accountInstanceId, 'false');
		}
	} else if (isCinlessUser=='Y') { 

		if (isDelinquent == "true") {
			location.href="/US/JSO/SSO/Cards.do?selectedCCIndex="+ accountInstanceId +"&targetAOApp=payment";
		}
		else if (isDelinquent == "false") {
			ctpMakePayment(accountInstanceId);	
		}
	}	
}

function rewardsLogoLink(sponserAcctInstanceId, rewardsType){
	if(rewardsType == 'ThankYou'){
		launchPopupForTY("/US/JRS/portlet/thankyou/PrepareForSSOToTY.do?selectId=1&selectedAccountID="+sponserAcctInstanceId+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"","_tyWinID","resizable,status,scrollbars,menubar,location,toolbar,width=650,height=450");
	}else
	{
		location.href="#";
	}
}

//Global Avatar 1.0 Regional Integration changes for cross links - ENDS
//Adding code of myCiti.js Ends
//code for mortgage overlay
function renderMortgageTable(){
	$('.cS-overlayMortgage').show();

	jQuery('table.stripe').each(function(i,v){
		jQuery(this).find('tbody tr:odd').addClass('stripe');		
	}).find('tr').each(function(i,v){
		jQuery(this).find('td').last().addClass('last').end().first().addClass('first').end().end().find('th').last().addClass('last');
	});
	refreshSliders();
}


function refreshSliders() {	
	$('.cT-yourQuotesTableSlider').jfpwidget("refresh");
}

function forwardToTempDelay(){
	window.location = contextPath +"/nccmishared/tempdelay/flow.action"
}

function openMortgageURL(url){
	window.location = "https://"+url;
}

//COPB 1  changes for 	MRC landing page - STARTS
function getCreditCardLinks() {
	var links=jQuery("div#cclinks a"); 
	var linkID=""; 
	for(i=0;i<links.size();i++){ 
		linkID=jQuery("#cc_"+links[i].id); 
		if(linkID.length !=0){ 
			linkID.prepend(links[i]); 
			linkID.removeClass("cM-hide");

		}
	}
}

function hideServiceCCHeading () {
	if(jQuery("#cc_cmlink_AddAuthUser a").size() ==0 && jQuery("#cc_cmlink_MngAuthUser a").size() ==0 ){

		$("#authorizedUserBlock").addClass("cM-hide"); 
		jQuery("#authorizedUserBlock").parent("a").removeClass('toggler'); 
	}
	else {
		$("#authorizedUserBlock").addClass("ctpDisplayBlock");
	}
	if(jQuery("#cc_cmlink_ReqBalTransfer a").size() ==0 && jQuery("#cc_cmlink_ViewBalTransfer a").size() ==0 ){

		$("#balanceTransferBlock").addClass("cM-hide"); 
		jQuery("#balanceTransferBlock").parent("a").removeClass('toggler'); 
	}
	else {
		$("#balanceTransferBlock").addClass("ctpDisplayBlock");
	}
	if(jQuery("#cc_cmlink_ReqLOYC a").size() ==0 && jQuery("#cc_cmlink_LoycStatus a").size() ==0 ){

		$("#loanOnCardBlock").addClass("cM-hide"); 
		jQuery("#loanOnCardBlock").parent("a").removeClass('toggler'); 
	}
	else {
		$("#loanOnCardBlock").addClass("ctpDisplayBlock");
	}

}

function getCardsPaymentLinks() {
	var links=jQuery("div#cclinks a"); 
	var linkID=""; 
	for(i=0;i<links.size();i++){ 
		linkID=jQuery("#cc_"+links[i].id); 
		if(linkID.length !=0){ 
			linkID.append(links[i]); 
			linkID.removeClass("cM-hide");
			linkID.parent("span").removeClass('citiGlobalImgSprite');
			linkID.parent("span").removeClass('structLinkleftArrow');
		} 
	}
}
function hidePaymentsCCHeading () {
	if(jQuery("#cc_cmlink_RecurringBillPayDynamic a").size() ==0 ){
		$("#billCentralblock").addClass("cM-hide");
	}
	else {
		$("#billCentralblock").addClass("ctpDisplayBlock");
	}
}	
//COPB 1  changes for 	MRC landing page - ENDS
//Adding code of RegionalClosedAccountOverlay.js starts
function showClosedAcctOverlayDialog(acctInstanceID,categoryCode,accountName) {
	
	var brand="";
	var brandConverted = false;
	brand=document.getElementById("BrandConvertedAccount").value;
	
	
	if(null != brand){
		       if(brand=="Y"){
		               brandConverted = true;
		                   }
		}
	
	
	instanceID = acctInstanceID;
	CategoryCode = categoryCode;
	jQuery("#ClosedAccountOverlay").html("");
	jQuery("#AlertHeaderclosed").html(accountName);
	jQuery("#ClosedAccountOverlay").html(jQuery("#closedAccountOverlay").html());
	if(!brandConverted)
	{
	  $('#ClosedAccountOverlay').jfpwidget("open");
	}
	else
	{
		cancelClosedAccntOverlay();
	}
}

function cancelClosedAccntOverlay()
{
	var foundFlag = false;
	if(CategoryCode == cardsCatCode){
		// Check if the account belongs to Credit Card category
		//document.forms["ClosedAcctForm"].action = "/US/JSO/SSO/Cards.do?selectedCCIndex="+instanceID+"&targetAOApp=accountactivity";
		document.forms["ClosedAcctForm"].action = "/US/NCPS/accountdetailactivity/flow.action?targetApp=accountactivity&accountInstanceId="+instanceID+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
		foundFlag = true;

	}
	if(!foundFlag){
		// If the account does not belong to Credit Card, then it must be either Savings or Current
		document.forms["ClosedAcctForm"].action = "/US/jba/rs/ShowTargetAppFromPortlet.do?selectedIndex="+instanceID+"&targetSubApp=ADA&TTC=742&isShareDataAvailable=false";
	}
	document.forms["ClosedAcctForm"].submit();
}

function unlinkClosedAccntOverlay()
{

	var foundFlag = false;
	if (isCinlessUser=='N') {

		// Check if the category is Credit Card
		if(CategoryCode == cardsCatCode){
			document.forms["ClosedAcctForm"].action = "/US/jrs/am/linkac/linkUnlinkCreditCardAccounts.do";
			foundFlag = true;
		}	

		if(!foundFlag)
		{
			// If the account does not belong to Credit Card, then it must be either Savings or Current
			document.forms["ClosedAcctForm"].action = "/US/jrs/am/linkac/linkUnlinkOtherAccounts.do";
		}

	} else {
		document.forms["ClosedAcctForm"].action = "/US/JSO/SSO/Cards.do?targetAOApp=editacctpref";
	}	


	document.forms["ClosedAcctForm"].submit();
}
//Adding code of RegionalClosedAccountOverlay.js ends
//Adding code of statements.js starts
Statements = function() {

	this.accountIndex ="";
	this.openStatementsOverlay = function(data)
	{

		$('#stmtBodyMainContainer').html(data);
	};

	//COPB Site Catalyst Change starts: Added to track "See All Statements" Link
	this.reportSC = function(elmnt,linkName)
	{
		s.tl(elmnt, 'o',linkName);
		s.eVar20= linkName;
		s.t();	
	};
	//COPB Site Catalyst Change ends

};

Statements.prototype.launchStatementsOverlayStmt = function(acctIndx)
{
	$('#cM-statementsOverlay').jfpwidget('open');
	$('#stmtBodyMainContainer').removeClass('stmtBodyMainContainer').addClass('stmtBodyMainContainerWithoutBorder');

	var riskurl  = "/US/NCSC/statements/statements.action" ;
	var that = this;
	if(machTagfirstHit){
		machTagfirstHit=false;
		//Ajax call to display the statements overlay with the required data and chat button in the ContactUs footer.
		$.ajax({
			url:riskurl,
			type:"POST",
			data : {isAjaxCall:"true",isCitiFastOverlay:"true",accountIndex:acctIndx,overlayDivName:"cM-statementsOverlay"}, 
			success: function(sdata,status, jqXHR) {
				if(jqXHR.status == '200'){
					machTagfirstHit=true;
					if(sdata.indexOf("true")== 0) {
						showCSQOverlay(riskurl);
					} else if(sdata.indexOf("accept")==0) {
						$.ajax({
							url:riskurl, 
							data : {accountIndex:acctIndx}, 
							success: function(data) {
								that.openStatementsOverlay(data);
							},
							statusCode:{
								404:function(){
								document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
								document.forms["ajaxform"].submit();
							},500:function(){
								document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
								document.forms["ajaxform"].submit();
							}
							},
							error: function(){
								document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
								document.forms["ajaxform"].submit();
							}
						});
					} else if(sdata.indexOf("error")== 0) {
						document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
						document.forms["ajaxform"].submit();
					}else if(sdata.indexOf("globalOTP")==0) {
						showOTPOverlay(riskurl);
					} else {
						lnk(riskurl);
					}
				} else {
					document.forms["ajaxform"].action = "/JRS/portal/DefaultError.do";
					document.forms["ajaxform"].submit();
				}
			}
		});
	}


};
Statements.prototype.getStatementsForAnAcccount =function (index)
{
	var  url = "/US/NCSC/statements/flow.action" ;
	var that= this;
	$.ajax({ 
		url:url, 
		type : 'POST',
		data : {"accountIndex" : index },
		success: function(data) {
			that.accountIndex = index;
			$('#stmtBlock').html(data);
			$('.StructOverlayCardWrapperDiv').addClass('appShowNone');
			$('.StructOverlayWrapperDiv').removeClass('appShowNone').addClass('appShow');
		}
	});	
};

Statements.prototype.getStatementsForCardAcccount= function(index)
{
	var  url = "/US/NCSC/statements/flow.action" ;
	var that=this;
	$.ajax({ 
		url:url, 
		type : 'POST',
		data : {"accountIndex" : index },
		success: function(data) {
			that.accountIndex = index;
			$('#recentStatementsList').html(data);
			$('.StructOverlayCardWrapperDiv').addClass('appShowNone');
			$('.StructOverlayWrapperDiv').removeClass('appShowNone').addClass('appShow');
		}
	});	
};

Statements.prototype.seeAllStatementsLink = function(accountInsId)
{
	//COPB Site Catalyst Change starts: Added to track "See All Statements" Link
	this.reportSC(this,'SeeAllStmtsLink');
	//COPB Site Catalyst Change ends
	var isSPF = isCinlessUser;
	var url="";
	if (isSPF=='true'|| isSPF=='Y'){
		if('N'==StatementFallback){
			if(accountInsId!=undefined){
				url ="/US/NCSC/doccenterspf/flow.action?accountID="+accountInsId+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
			}
			else{
				url ="/US/NCSC/doccenterspf/flow.action?JFP_TOKEN="+JFP_CSRF_TOKEN+"";
			}
		}
		else{
			url="/US/JSO/SSO/Cards.do?targetAOApp=statements&selectedCCIndex="+accountInsId;
		}
	}
	else{
		url ="/US/NCSC/doccenter/flow.action?TTC=1079&accountID="+accountInsId;
	}
	location.href = url ;
};

Statements.prototype.getPDF = function(docNo)
{
	var downloadURI  = "/US/REST/doccenterresource/downloaddocument.jws?documentNumber="+docNo+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	var form = document.createElement("form");
	form.setAttribute("method", "POST");
	form.setAttribute("action", downloadURI );
	document.body.appendChild(form);
	form.submit(); 	
};
//Sprint1 Changes Chat Starts: Send LpServer value of selected statement date.
Statements.prototype.sendStatementDate = function(lpDate,stmtMonths)
{   
	if (typeof lpMTagConfig !='undefined'){
		if(typeof lpMTagConfig.vars.push != 'undefined' && lpDate!=null)
			lpAddVars('page','Statement_DateOpened',lpDate);
	}

	//Sprint2 Site Catalyst Changes Starts:Ppulating sProp29
	s.prop29="ImmedAvailStmnt"+"|"+"CARDS"+stmtMonths+"-PDF";
	s.t();
	//Sprint2 Site Catalyst Changes Ends
};
//Adding code of statements.js ends
//Adding code of myCitiSomOffer.js starts
var isTYCall;
//var locationId='';
if(typeof selectedAccountIndex == 'undefined'){
	var selectedAccountIndex= '';
}

if(typeof selectedDestinationAccountIndex == 'undefined'){
	var selectedDestinationAccountIndex = '';
}
function loadSomOfferData(){

	var isDashboardAcctSummaryCall =((pageDef == 'jJPSINFRA_MyCitiHome') || (pageDef == 'jJRSWORKAREA_AccountSummary'))?'Y':'N';
	isTYCall = (pageDef == 'jJRSRREWARDS_UpgradeToDebitCardConfirm'||pageDef == 'jJRSRREWARDS_ThankYouRewardsEnrolled' || pageDef == 'jJRSRREWARDS_ThankYouAccountList' )?'Y':'N';
	var flashcheck = isflashsupported();
	jQuery("#cmlink_SvcLimitedTimeOffer").show();
	jQuery.ajax({
		url: "/US/REST/manageoffers/getoffers.jws",
		dataType: "json",
		data: {
		"isflashsupported": flashcheck, "pageDef": pageDef ,selectedAccountIndex : selectedAccountIndex, 
		selectedDestinationAccountIndex: selectedDestinationAccountIndex,LocationID : "CNTX1", isDashboardCall : isDashboardAcctSummaryCall, isTYCall : isTYCall 
	},
	contentType :'application/x-www-form-urlencoded',
	type: 'POST',
	complete: function(request, status) {
	},
	error: function(XMLHttpRequest, status, errorThrown) {
	}, 
	success: function(data, status, xhr) {
		displaySomOffer(data, status, xhr);
		}
	});

}


function displaySomOffer(data, status, request){
	if(data == null)
		return;
	displayDealOffers(data,status,request);
	if(pageDef == 'jJPSINFRA_MyCitiHome'){
		displayBTSpotOffers(data, status, request);
	}
	if((OfferPageContent.indexOf(pageDef) > -1 || OfferPageCode.indexOf(pageDef) > -1) && _locale.indexOf('VIP') == -1)
	{
		displayContextualOffer(data, status, request);
	}
	if(pageDef_MBAR=='T')
	{
		displayMBAROffers(data.categorizedOffers, status, request,backScroll);

	}


}

function displayDealOffers(data,status,request)
{
	var jsonData = data;
	var screenId = jsonData.screenId;
	jQuery("#cmlink_SvcLimitedTimeOffer").show();
	if (null !=jsonData.categorizedOffers && null !=jsonData.categorizedOffers.DEALOffer ){
		jQuery.each(jsonData.categorizedOffers.DEALOffer, function(idx,dealOffer){
			if(dealOffer != null)
			{
				jQuery("#cmlink_SvcLimitedTimeOffer").show();
				ltoOfferAccountInstanceId = dealOffer.accountIndex;

			}

		});
	}
}

function displayContextualOffer(data, status, request) {
	var jsonData = data;
	var screenId = jsonData.screenId;
	var isCinlessUser = cinLessUser;
	var invalidAOOfferParams='CustomerFirstName|tyPoints|openToBuy|creditLine|productName';
		if((jsonData.screenId=='jJPSINFRA_MyCitiHome') || (jsonData.screenId=='jJRSWORKAREA_AccountSummary')){
			jQuery.each(jsonData.categorizedOffers.ContextualOffers, function(idx,coOffer){
				var locId = '';
				var containerId = '';

				//There will be no Rewards related offer
				locId = 'cntxoffer_'+coOffer.accountIndex;
				containerId = coOffer.locationId+'_'+coOffer.accountIndex;

				var linkURL = coOffer.linkUrl;
				var aoOffersIndicator = 'Cards.do';
				var aoOfferParams = 'screenId:'+screenId+'|offerName:'+coOffer.name+'|locID:'+coOffer.locationId+'|origin:'+coOffer.offerSource;
				if('COR' == coOffer.offerSource){
					aoOfferParams = aoOfferParams + '|offerID:'+coOffer.campaignID+'|offerCat:'+coOffer.category;
				}
				var cbolOfferIndicator='&source=1';
				var cbolOfferIndicator1='?source=1';
				var isCBOLOffer=(linkURL.indexOf(cbolOfferIndicator) != -1||linkURL.indexOf(cbolOfferIndicator1) != -1)
				?true:false;

				if(linkURL.indexOf(aoOffersIndicator) != -1){
					jQuery.each(coOffer.fields, function(paramKey, paramValue){
						aoOfferParams = aoOfferParams+'|'+paramKey+':'+paramValue;
					});
					linkURL = linkURL+'&selectedCCIndex='+coOffer.accountIndex+'&aoOfferParams='+aoOfferParams;
				}
				else if(isCBOLOffer){
					var cbolOfferParam='source';
					var valOfCbolOfferParam='cntx_offr';
					linkURL=changeParamValueOfUrl(linkURL,cbolOfferParam,valOfCbolOfferParam);
					linkURL = linkURL+'&screen='+screenId+'&placementID='+coOffer.locationId+'&offerName='+coOffer.name+'&waveId='+coOffer.waveID+'&campaignId='+coOffer.campaignID+'&origin='+coOffer.offerSource+'&selectedAccountIndex='+coOffer.accountIndex;
					if('COR' == coOffer.offerSource){
						linkURL= linkURL +'&campaignId='+coOffer.campaignID+'&origin='+coOffer.offerSource+'&offerCat='+coOffer.category;	
					}
				}

				jQuery("#"+locId).removeClass('appHidden');
				var dataId = 'data_'+coOffer.accountIndex;

				if(coOffer.contentType=="CMS"){
					var contentId = coOffer.contentId;
					var extraParams = contentId+"_params"; 
					jQuery("#"+locId).after('<div id="'+containerId+'" class="CO_container"><span  class="StructAlertImg contextualAlert" /><table><tr><td>'+coOffer.content+'</td></tr></table><span id="'+extraParams+'" class="appHidden">"'+coOffer.name+'"||"'+ coOffer.locationId +'"||"'+coOffer.accountIndex+'"||"'+ coOffer.waveID +'"||"'+ coOffer.campaignID +'"||"'+ coOffer.offerSource +'"</span></div>');
					eval(coOffer.contentId+"=linkURL");
				}
				else if(coOffer.contentType=="JS"){
					if(idx == 0 && coOffer.content != ''){
						if(linkURL != ''){
							if (isCinlessUser=='true') {
								if (coOffer.speedBump == ''){
									jQuery("#"+locId).after('<div id="'+containerId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+dataId+'"></span></td></tr></table></div>');
									jQuery("#"+dataId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+coOffer.accountIndex+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");></a>');
									jQuery("#link_"+coOffer.accountIndex).append(jQuery("#sapient_"+coOffer.accountIndex)[0].innerHTML);
								} else {
									if(coOffer.speedBump == 'NW'){
										jQuery("#"+locId).after('<div id="'+containerId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+dataId+'"></span></td></tr></table></div>');
										jQuery("#"+dataId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+coOffer.accountIndex+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										jQuery("#link_"+coOffer.accountIndex).append(jQuery("#sapient_"+coOffer.accountIndex)[0].innerHTML);
									}else{
										var speedBumpURL = '/US/JRS/portal/template.do?ID='+coOffer.speedBump+'&sourceID=1&landingURL='+linkURL;
										jQuery("#"+locId).after('<div id="'+containerId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+dataId+'"></span></td></tr></table></div>');
										jQuery("#"+dataId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+coOffer.accountIndex+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+speedBumpURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										jQuery("#link_"+coOffer.accountIndex).append(jQuery("#sapient_"+coOffer.accountIndex)[0].innerHTML);
									}
								}
							}else {
								if(coOffer.speedBump == 'NW'){
									jQuery("#"+locId).after('<div id="'+containerId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+dataId+'"></span></td></tr></table></div>');
									jQuery("#"+dataId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+coOffer.accountIndex+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
									jQuery("#link_"+coOffer.accountIndex).append(jQuery("#sapient_"+coOffer.accountIndex)[0].innerHTML);
								}
								else{
									jQuery("#"+locId).after('<div id="'+containerId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+dataId+'"></span></td></tr></table></div>');
									jQuery("#"+dataId).after('<span class="interactIconSprite interactButtonCarat"><a id="link_'+coOffer.accountIndex+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");></a>');
									jQuery("#link_"+coOffer.accountIndex).append(jQuery("#sapient_"+coOffer.accountIndex)[0].innerHTML);

								}
							}
						}else{
							jQuery("#"+locId).after('<div id="'+containerId+'"><span class="StructAlertImg contextualAlert"></span><span id="'+dataId+'"></span></div>');
						}
						jQuery('head').append('<scr'+'ipt src="'+coOffer.content+'&location='+dataId+'"></scr'+'ipt>');
					}
				}
				else{
					jQuery('#'+locId).html(coOffer.content);
				}
			});
		}
		else if(jsonData.screenId=='jJRSOCDT_OCDTConfirmation' || jsonData.screenId=='jJRSOCDT_OCDTOrderDepositTicketsConfirmation' ){
			jQuery.each(jsonData.categorizedOffers.Offers, function(idx,coOffer){
				var locId = 'cntxoffer_'+coOffer.locationId;

				var linkURL = coOffer.linkUrl;
				var aoOffersIndicator = 'Cards.do';
				var aoOfferParams = 'screenId:'+screenId+'|offerName:'+coOffer.name+'|locID:'+coOffer.locationId +'|origin:'+coOffer.offerSource;
				if('COR' == coOffer.offerSource){
					aoOfferParams = aoOfferParams + '|offerID:'+ coOffer.campaignID + '|offerCat:'+coOffer.category
				}
				var cbolOfferIndicator='&source=1';
				var cbolOfferIndicator1='?source=1';
				var isCBOLOffer=(linkURL.indexOf(cbolOfferIndicator) != -1||linkURL.indexOf(cbolOfferIndicator1) != -1)
				?true:false;
				if(linkURL.indexOf(aoOffersIndicator) != -1){
					jQuery.each(coOffer.fields, function(paramKey, paramValue){

						aoOfferParams = aoOfferParams+'|'+paramKey+':'+paramValue;

					});
					linkURL = linkURL+'&selectedCCIndex='+coOffer.accountIndex+'&aoOfferParams='+aoOfferParams;
				}
				else if(isCBOLOffer){
					var cbolOfferParam='source';
					var valOfCbolOfferParam='cntx_offr';
					linkURL=changeParamValueOfUrl(linkURL,cbolOfferParam,valOfCbolOfferParam);
					linkURL = linkURL+'&screen='+screenId+'&placementID='+coOffer.locationId+'&offerName='+coOffer.name+'&waveId='+coOffer.waveID+'&campaignId='+coOffer.campaignID+'&origin='+coOffer.offerSource+'&selectedAccountIndex='+coOffer.accountIndex;
					if('COR' == coOffer.offerSource){
						linkURL= linkURL +'&campaignId='+coOffer.campaignID+'&origin='+coOffer.offerSource+'&offerCat='+coOffer.category;	
					}
				}

				jQuery("#cbrOffers").removeClass('appHidden');
				if(coOffer.contentType=="CMS"){
					var contentId = coOffer.contentId;
					var extraParams = contentId+"_params"; 
					var divId = "#ctnxOffer"+idx;

					var divContentToRepalce = '<div id="'+locId+'">'+coOffer.content+'<span id="'+extraParams+'" class="appHidden">"'+coOffer.name+'"||"'+ coOffer.locationId +'"||"'+ coOffer.waveID +'"||"'+ coOffer.campaignID +'"||"'+ coOffer.accountIndex +'"||"'+ coOffer.offerSource +'"</span></div>';

					jQuery(divId).html(divContentToRepalce);
					eval(coOffer.contentId+"=linkURL");
				}

				else{
					jQuery("#ctnxOffers1").after('<div id="'+locId+'"></div>');
					jQuery('#'+locId).html(coOffer.content);
				}
			});
		}
		else if(jsonData.screenId=='jJRSLINKACCTS_LinkCardStatus' || jsonData.screenId=='jJRSLINKACCTS_LinkStatus'){
			jQuery.each(jsonData.categorizedOffers.OverlayOffers, function(idx,coOffer){
				var locId = 'somDeobOffer_'+coOffer.locationId;
				jQuery('#'+locId).html('<a id="'+locId+'_banner" href=javascript:SvcHubFireUrl("'+coOffer.linkUrl+'","'+coOffer.speedBump+'","'+jsonData.screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'");  alt=""><img src="'+coOffer.content+'" ></img></a>');
			});
			jQuery("#somDeobOffer_CONF").removeClass('appHidden');
		}
		else{
			jQuery.each(jsonData.categorizedOffers.ContextualOffers, function(idx,coOffer){
				var locId = 'cntxoffer_'+coOffer.locationId;
				var linkURL = coOffer.linkUrl;
				var aoOffersIndicator = 'Cards.do';
				var aoOfferParams = 'screenId:'+screenId+'|offerName:'+coOffer.name+'|locID:'+coOffer.locationId +'|origin:'+coOffer.offerSource;
				if('COR' == coOffer.offerSource){
					aoOfferParams = aoOfferParams +'|offerID:'+coOffer.campaignID+'|offerCat:'+coOffer.category;
				}
				var cbolOfferIndicator='&source=1';
				var cbolOfferIndicator1='?source=1';
				var isCBOLOffer=(linkURL.indexOf(cbolOfferIndicator) != -1||linkURL.indexOf(cbolOfferIndicator1) != -1)
				?true:false;
				if(linkURL.indexOf(aoOffersIndicator) != -1){
					jQuery.each(coOffer.fields, function(paramKey, paramValue){
						if(invalidAOOfferParams.indexOf(paramKey) == -1){
							aoOfferParams = aoOfferParams+'|'+paramKey+':'+paramValue;
						}
					});
					linkURL = linkURL+'&selectedCCIndex='+coOffer.accountIndex+'&aoOfferParams='+aoOfferParams;
				}
				else if(isCBOLOffer){
					var cbolOfferParam='source';
					var valOfCbolOfferParam='cntx_offr';
					linkURL=changeParamValueOfUrl(linkURL,cbolOfferParam,valOfCbolOfferParam);
					linkURL = linkURL+'&screen='+screenId+'&placementID='+coOffer.locationId+'&offerName='+coOffer.name;
					if('COR' == coOffer.offerSource){
						linkURL= linkURL +'&campaignId='+coOffer.campaignID+'&origin='+coOffer.offerSource+'&offerCat='+coOffer.category;
					}	
				}

				jQuery("#ctnxOffers1").removeClass('appHidden');
				if(coOffer.contentType=="IMAGE"){
					if(coOffer.speedBump=="NW"){
						jQuery("#ctnxOffers1").after('<div id="'+locId+'"><a href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");><img src="'+coOffer.content+'" alt=""></a></div>');
					}
					else{
						jQuery("#ctnxOffers1").after('<div id="'+locId+'"><a href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");><img src="'+coOffer.content+'" alt=""></a></div>');
					}
				}
				else if(coOffer.contentType=="CMS"){
					var contentId = coOffer.contentId;
					var extraParams = contentId+"_params";
					var content = coOffer.content;
					// added for 1301015 TY Suite value prop
					//TPR TPR1109014 COR Changes

					if( coOffer.offerSource=="COR"){
						if(null != coOffer.corOffer){
							jQuery.each(coOffer.corOffer.offerFields, function(paramKey, paramValue){ 
								if('E'==coOffer.offerStatus){ 
									if('OfferEndDt'==paramKey){ 
										paramValue = coOffer.corOffer.offerFields['OfferRespondByDate']; 
									} 
								} 
								content = content.replace('${'+paramKey+'}',paramValue); 
							});
							//content	= content+"<span class=\"interactIconSprite interactButtonCarat\"><\/span> <span class=colorViewOfferBlueText> <a href=\"javascript:updateAOMCORImgForSPFCO('"+screenId+"','"+coOffer.name+"','"+locId+"','"+coOffer.accountIndex+"','"+coOffer.offerSource+"','"+coOffer.corOffer.campaignId+"','"+coOffer.corOffer.offerCategory+"');lnk('"+linkURL+"')\">"+BTlink+"</a> </span>";
						}
					}
					else{
						jQuery.each(coOffer.fields, function(paramKey, paramValue){
							if(paramKey=="Dynamic"){					
								if(paramValue != null && paramValue != ""){
									var dynamicValueArray = paramValue.split(",");						
									jQuery.each(dynamicValueArray, function(index, value){					
										if(value.indexOf("/")==-1){
											value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
										}
										content = content.replace("placeHolder"+(index+1),value );
									});
								}									
							}
							return (paramKey != "Dynamic");
						});
					}

					// added for Avatar Sprint 4 Payment
					if(screenId=="jJRSMENU_Payments" || screenId=="jJRSMENU_Transfers" || screenId=="jJRSMENU_PaymentsCardsOnly" || screenId=="jJRSMENU_BenefitsAndServices" || screenId=="jJRSMENU_MyProfile"){
						//	var linkURL = coOffer.linkUrl;
						var paperlessUpdateOfferParam ='offerScreenId:'+screenId+'|offerName:'+coOffer.name+'|locID:'+coOffer.locationId+'|offerID:'+coOffer.campaignID+'|origin:'+coOffer.offerSource+'|FBROfferID:'+coOffer.campaignID+'|FBRCat:'+coOffer.category+'|accountIndex:'+coOffer.accountIndex;
						if(linkURL.indexOf("/NCSC/paperless/flow.action") != -1 && linkURL.indexOf("?") == -1 ){
							linkURL = linkURL+'?paperlessUpdateOfferParam='+paperlessUpdateOfferParam;
						} 
						if(null !=coOffer.fields.CustomerFirstName){
							content= content.replace('${LoginName}',coOffer.fields.CustomerFirstName);

						}
						if("TYContextualOffer"==coOffer.contentId){ 
							if(null !=coOffer.fields.tyPoints){ 
								content= content.replace('${tyPoints}',coOffer.fields.tyPoints); 
							}       
						}
						if("CLContextualOffer"==coOffer.contentId){ 

							content= content.replace('${openToBuy}',coOffer.fields.openToBuy);      
							content= content.replace('${creditLine}',coOffer.fields.creditLine);
							content= content.replace('${productName}',coOffer.fields.productName);
						}



						content= content.replace('CONTX_DEOB_OVLY_ACCT_INST',coOffer.accountIndex);
						if (coOffer.speedBump != '' && coOffer.speedBump != null && coOffer.speedBump != 'NW'){
							linkURL ='/US/JRS/portal/template.do?ID='+coOffer.speedBump+'&sourceID=1&landingURL='+linkURL+'&offerName='+coOffer.name+'&acctIndex='+coOffer.accountIndex+ '&offerScreenId='+screenId;
						}
						jQuery("#ctnxOffers1").after('<div id="'+locId+'"><table class="StructContextualtext" ><tr><td style="vertical-align:top;"><span  class="StructAlertImg contextualAlert marginTop0px"/></td><td>'+content+'</td></tr></table><span id="'+extraParams+'" class="appHidden">"'+coOffer.name+'"||"'+ coOffer.locationId +'"||"'+coOffer.accountIndex+'"||"'+ coOffer.waveID +'"||"'+ coOffer.campaignID +'"||"'+ coOffer.offerSource +'"||"'+ coOffer.category +'"</span></div>');
					}else{
						jQuery("#ctnxOffers1").after('<div id="'+locId+'" class="CO_container"><div class="CO_top"></div><div class="CO_box">'+content+'<span id="'+extraParams+'" class="appHidden">"'+coOffer.name+'"||"'+ coOffer.locationId +'"||"'+coOffer.accountIndex+'"||"'+ coOffer.waveID +'"||"'+ coOffer.campaignID +'"||"'+ coOffer.offerSource +'"||"'+ coOffer.category +'"</span></div><div class="CO_bottom"></div></div>');
					}
					eval(coOffer.contentId+"=linkURL");
				}

				else if(coOffer.contentType=="JS"){
					if(idx == 0 && coOffer.content != '')
						jQuery('head').append('<scr'+'ipt src="'+coOffer.content+'&location='+locId+'"></scr'+'ipt>');
					if(screenId=="jJRSMENU_Payments" || screenId=="jJRSMENU_Transfers" || screenId=="jJRSMENU_PaymentsCardsOnly" || screenId=="jJRSMENU_BenefitsAndServices" || screenId=="jJRSMENU_MyProfile"){
						var dataId = 'data_'+locId;
						if(linkURL != ''){
							if (isCinlessUser=='true') {
								if (coOffer.speedBump == ''){
									jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+locId+'"></span></td></tr></table></div>');
									if(coOffer.offerSource=='COR'){
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:lnk("'+linkURL+'");></a>');
									}
									else{
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");></a>');
									}
									jQuery("#link_"+locId).append(jQuery("#sapient_"+locId)[0].innerHTML);
								}
								else {
									if(coOffer.speedBump == 'NW'){
										jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+locId+'"></span></td></tr></table></div>');
										if(coOffer.offerSource=='COR'){
											jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										}
										else{
											jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										}
										jQuery("#link_"+locId).append(jQuery("#sapient_"+locId)[0].innerHTML);
									}
									else{
										var speedBumpURL = '/US/JRS/portal/template.do?ID='+coOffer.speedBump+'&sourceID=1&landingURL='+linkURL;
										jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+locId+'"></span></td></tr></table></div>');
										if(coOffer.offerSource=='COR'){
											jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:launchPopup("'+speedBumpURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										}
										else{
											jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+speedBumpURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
										}
										jQuery("#link_"+locId).append(jQuery("#sapient_"+locId)[0].innerHTML);
									}
								}
							}
							else {
								if(coOffer.speedBump == 'NW'){
									jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+locId+'"></span></td></tr></table></div>');
									if(coOffer.offerSource=='COR'){
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
									}
									else{
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"></span><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");></a>');
									}
									jQuery("#link_"+locId).append(jQuery("#sapient_"+locId)[0].innerHTML);
								}
								else{
									jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><table class="StructContextualtext"><tr><td valign="top" style="vertical-align:top;"><span class="StructAlertImg contextualAlert marginTop0px"></span></td><td><span id="'+locId+'"></span></td></tr></table></div>');
									if(coOffer.offerSource=='COR'){
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:lnk("'+linkURL+'");></a>');
									}
									else{
										jQuery("#"+locId).after('<span class="interactIconSprite interactButtonCarat"><a id="link_'+locId+'" class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");></a>');
									}
									jQuery("#link_"+locId).append(jQuery("#sapient_"+locId)[0].innerHTML);
								}
							}
						}else{
							jQuery("#ctnxOffers1").after('<div id="'+dataId+'"><span class="StructAlertImg contextualAlert contextualImgMargin "></span><span id="'+locId+'"></span></div>');
						}

					}else{
						if(linkURL != ''){
							if(coOffer.speedBump == 'NW'){
								if(coOffer.offerSource=='COR'){
									jQuery("#ctnxOffers1").after('<a class="CO_noTextDecoration" href=javascript:updateAOMCORImgForSPFCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.accountIndex+'","'+coOffer.offerSource+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.campaignID+'","'+coOffer.category+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");><div id="'+locId+'"></div></a>');
								}
								else{
									jQuery("#ctnxOffers1").after('<a class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:launchPopup("'+linkURL+'","","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");><div id="'+locId+'"></div></a>');
								}
							}
							else
								jQuery("#ctnxOffers1").after('<a class="CO_noTextDecoration" href=javascript:updateSOMImgForCO("'+screenId+'","'+coOffer.name+'","'+coOffer.locationId+'","'+coOffer.waveID+'","'+coOffer.campaignID+'","'+coOffer.offerSource+'");javascript:lnk("'+linkURL+'");><div id="'+locId+'"></div></a>');
						}else
							jQuery("#ctnxOffers1").after('<div id="'+locId+'"></div>');
					}
				}
				else{
					jQuery("#ctnxOffers1").after('<div id="'+locId+'"></div>');
					jQuery('#'+locId).html(coOffer.content);
				}
			});
		}
}
/*  
	function updateSOMImgForSPFCO(screenID,offerName,locID,accountIndex){

			jQuery.ajax({
	    		 url: '/JRS/som/UpdateContextualOfferDetails.do',
	    		 data : { screenID: screenID, placementID: locID, offerName: offerName, accountIndex: accountIndex}
	    	   }); 
		}
 */

function updateSOMImgForSPFCO(screenID,offerName,locID,accountIndex,waveId,campaignId,origin){
	var corOfferStatus='';
	if((offerName.indexOf("mBarLoadingImgDiv")==-1)){
		if(isRainbowOffersFallback){
			jQuery.ajax({
				url: "/US/REST/manageoffers/updateofferstatus.jws",
				dataType: "json",
				async:false,
				data : { "screenID": screenID, "placementID": locID, "offerName": offerName, "accountIndex": accountIndex,
				"JFP_TOKEN":JFP_CSRF_TOKEN},
				contentType :'application/x-www-form-urlencoded',
				type: 'POST',
				complete: function(request, status) {
				},
				error: function(XMLHttpRequest, status, errorThrown) { 
				}, 
				success: function(data, status, xhr) {  
				}
			});
		}
		else
		{
			if(pageDef.indexOf("jcbol_deb_servicehub")<=-1){
				screenID=pageDef;
			}
			if ('COR'==origin){
				corOfferStatus = "Clicked";
			}
			jQuery.ajax({
				url: "/US/REST/manageoffers/updateofferstatus.jws",
				dataType: "json",
				async:false,
				data : { "screenID": screenID, "placementID": locID, "offerName": offerName, "accountIndex": accountIndex, "waveID":waveId,"origin":origin,"campaignId":campaignId,"copOfferStatus":"Interested","somOfferStatus":"Clicked","corOfferStatus":corOfferStatus,"FBROfferID":campaignId,
				"JFP_TOKEN":JFP_CSRF_TOKEN},
				contentType :'application/x-www-form-urlencoded',
				type: 'POST',
				complete: function(request, status) {
				},
				error: function(XMLHttpRequest, status, errorThrown) { 
				}, 
				success: function(data, status, xhr) {  
				}
			});


		}
	}
}




function displayBTSpotOffers(data, status, request){
	var jsonData = data;
	if(jsonData == null){
		return;
	}
	var screenId = jsonData.screenId;
	if((jsonData.screenId=='jJPSINFRA_MyCitiHome')){
		jQuery.each(jsonData.categorizedOffers.BalconSpot, function(idx,coOffer){			

			var locId 			= 'spot_'+coOffer.accountIndex;
			var containerId 	= coOffer.locationId+'_'+coOffer.accountIndex;
			var aoOfferParams 	= 'screenId:'+screenId+'|offerName:'+coOffer.name+'|locID:'+coOffer.locationId+'|origin:'+coOffer.offerSource;
			if('COR' == coOffer.offerSource){
				aoOfferParams = aoOfferParams + '|offerID:'+coOffer.campaignID+'|offerCat:'+coOffer.category;
			}
			var linkURL 		= coOffer.linkUrl+'&selectedCCIndex='+coOffer.accountIndex+'&aoOfferParams='+aoOfferParams;
			//TPR TPR1109014 COR Changes
			var	content= null;
			if( coOffer.offerSource=="COR"){
				var dynamicContent = coOffer.content;
				jQuery.each(coOffer.corOffer.offerFields, function(paramKey, paramValue){
					dynamicContent = dynamicContent.replace('${'+paramKey+'}',paramValue);
				});
				content	= dynamicContent+"<span class=\"interactIconSprite interactButtonCarat\"><\/span> <span class=colorViewOfferBlueText> <a href=\"javascript:updateAOMCORImgForSPFCO('"+screenId+"','"+coOffer.name+"','"+coOffer.locationId+"','"+coOffer.accountIndex+"','"+coOffer.offerSource+"','"+coOffer.waveID+"','"+coOffer.campaignID+"','"+coOffer.campaignID+"','"+coOffer.category+"');lnk('"+linkURL+"')\">"+BTlink+"</a> </span>";
				//COR Changes End
			} else{
				content= coOffer.content+"<span class=\"interactIconSprite interactButtonCarat\"><\/span> <span class=colorViewOfferBlueText> <a href=\"javascript:updateSOMImgForSPFCO('"+screenId+"','"+coOffer.name+"','"+locId+"','"+coOffer.accountIndex+"');lnk('"+linkURL+"')\">"+BTlink+"</a> </span>";
			}
			jQuery("#"+locId).after('<div id="'+containerId+'" class="CO_container"><span  class="interactIconSprite interactBTCardStar interactBTCardStarPad" /><table><tr><td>'+content+'</td></tr></table></div>');
			eval(coOffer.contentId+"=linkURL");			

		});
	} 
}


function displayMBAROffers(data, status, request ,backScroll){

	formatFieldsValue(data);
	/* This block is used to prevent miscalculation by jcarousel script.. This script make 5 block of li inside jcarousel ul even the size  
	 * of total item is 4.
	 */
	try {
		jQuery("#carouselMBar").jfpwidget('render', data);
		resetCarouselButtons("#carouselMBar",false);
	} catch(Error) {
		resetCarouselButtons("#carouselMBar",true);
	}
	handleCMSDrivenScrollOption(backScroll);
	handleDefaultOffers(data);
}

/**
 * updates SOM for clicked and extended event using a JAX-RS call.
 * AcceptanceLevel can be clicked or extended.
 * Parameters send using JAX-RS call are screenId,offerName,AcceptanceLevel,locationId.
 * @param screenId
 * @param offerName
 * @param AcceptanceLevel
 * @param locationId
 * @return
 */ 
function updateSOMForMBAR(screenId,offerName,waveId,campaignId,origin,AcceptanceLevel,copOfferStatus,accountIndex,currentMBPosition){
	//Sending currentMBPosition in locationId parameter in jws call to update position IDs in SOM
	if((offerName.indexOf("MBarOffer")==-1) && (offerName.indexOf("mBarLoadingImgDiv")==-1)){
		jQuery.ajax({
			url: "/US/REST/manageoffers/updateofferstatus.jws",
			dataType: "json",
			data: {
			"screenID":screenId,"locationId":currentMBPosition,"offerName":offerName,"waveID":waveId,"origin":origin,"campaignId":campaignId,"copOfferStatus":copOfferStatus,"somOfferStatus":AcceptanceLevel,"accountIndex":accountIndex,
			"JFP_TOKEN":JFP_CSRF_TOKEN
		},
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
		});
	}
}


/*function updateSOMForCO(obj,contentId){
		aIndex = contentId.indexOf('_');
		oContent = contentId.substring(aIndex+1,contentId.length);

		var span_id = "#" + oContent + "_params";
		var splitContent = trim(jQuery(span_id).html()).split('||');
		var placementID = splitContent[1].replace(/"/g,'');
		var offerName= splitContent[0].replace(/"/g,'');
		var accountIndex = splitContent[2].replace(/"/g,'');

		jQuery.ajax({
			 url: '/JRS/som/UpdateContextualOfferDetails.do',
			 data : { screenID: pageDef, placementID: placementID, offerName: offerName, accountIndex: accountIndex}
		   });


	}
 */
function updateSOMForCO(obj,contentId){
	var curPageDef;
	if(initialPageDef == 'jcbol_common_Dashboard')
		curPageDef =initialPageDef;
	else
		curPageDef =pageDef;

	aIndex = contentId.indexOf('_');
	oContent = contentId.substring(aIndex+1,contentId.length);

	var span_id = "#" + oContent + "_params";
	var splitContent = trim(jQuery(span_id).html()).split('||');	
	var offerName= splitContent[0].replace(/"/g,'');
	var placementID = splitContent[1].replace(/"/g,'');
	var accountIndex = splitContent[2].replace(/"/g,'');

	if (!isRainbowOffersFallback) {
		var waveId = splitContent[3].replace(/"/g,'');
		var campaignId = splitContent[4].replace(/"/g,'');

	}
	var origin = splitContent[5].replace(/"/g,'');
	if('COR'==origin){
		var category=splitContent[6].replace(/"/g,'');	
	}
	if ('COR'==origin){
		jQuery.ajax({
			url: "/US/REST/manageoffers/updateofferstatus.jws",
			dataType: "json",
			async:false,
			data: {
			"screenID":curPageDef, "offerName": offerName,"waveID":waveId,"origin":origin,"campaignId":campaignId,"corOfferStatus":"Clicked","accountIndex":accountIndex,"FBROfferID":campaignId,"FBRCat":category,
			"JFP_TOKEN":JFP_CSRF_TOKEN
		},
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
		});
	}
	else if(isRainbowOffersFallback){
		jQuery.ajax({
			url: '/US/REST/manageoffers/updateofferstatus.jws',
			dataType: "json",
			async:false,
			data : { "screenID": curPageDef, "placementID": placementID, "offerName": offerName, "accountIndex": accountIndex,
			"JFP_TOKEN":JFP_CSRF_TOKEN},
			contentType :'application/x-www-form-urlencoded',
			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {  
			}
		}); 

	}
	else{

		jQuery.ajax({
			url: '/US/REST/manageoffers/updateofferstatus.jws',
			dataType: "json",
			async:false,
			data : { "screenID": curPageDef, "placementID": placementID, "offerName": offerName,"accountIndex": accountIndex, "waveID":waveId,"origin":origin,"campaignId":campaignId,"copOfferStatus":"Interested","somOfferStatus":"Clicked",
			"JFP_TOKEN":JFP_CSRF_TOKEN },
			contentType :'application/x-www-form-urlencoded',
			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {  
			}
		}); 
	}

}
/*
	function updateSOMImgForCO(screenID,offerName,locID){
	    jQuery.ajax({
			 url: '/JRS/som/UpdateContextualOfferDetails.do',
			 data : { screenID: screenID, placementID: locID, offerName: offerName }
		   });


	}
 */
function updateSOMImgForCO(screenID,offerName,locID,waveId,campaignId,origin){

	var curPageDef;
	if(initialPageDef == 'jcbol_common_Dashboard')
		curPageDef =initialPageDef;
	else
		curPageDef =pageDef;

	if(isRainbowOffersFallback){
		jQuery.ajax({
			url: "/US/REST/manageoffers/updateofferstatus.jws",
			dataType: "json",
			async:false,
			data : { "screenID": curPageDef, "placementID": locID, "offerName": offerName,
			"JFP_TOKEN":JFP_CSRF_TOKEN},

			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {  
			}
		});

	}
	else 
	{
		if(pageDef.indexOf("jcbol_deb_servicehub")<=-1){
			screenID=pageDef;
		}
		jQuery.ajax({
			url: "/US/REST/manageoffers/updateofferstatus.jws",
			dataType: "json",
			async:false,
			data : { "screenID": screenID, "placementID": locID, "offerName": offerName,"waveID":waveId,"origin":origin,"campaignId":campaignId,"copOfferStatus":"Interested","somOfferStatus":"Clicked",
			"JFP_TOKEN":JFP_CSRF_TOKEN },
			contentType :'application/x-www-form-urlencoded',
			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {  
			}
		});
	}
}

/*Added this to implement SpeedBumps to the MBar Offer*/
/**
 * 
 * Calls the method to handle routing as well as calls the method to update SOM for CLICKED event.
 * @param speedbump
 * @param name
 * @param acctIndex
 * @param url
 * @param locID
 * @param fields
 * @return
 */
function handleOfferForMBAR(speedbump,name,acctIndex,url,locID,fields,waveId,campaignId,origin,FBROfferID,FBRCat)
{
	if(currentMBOfferNames.length >=5){
		currentMBOfferNames.length=4;
		}
	var offername_index, current_mbarposition = currentMBPosition.split(","), currentmbaroffer = "";
	// If currentMBPosition and currentMBOfferNames are same length, and name exists, find name's corresponding offer 
	if (current_mbarposition.length === currentMBOfferNames.length) {
		offername_index = $.inArray(name,currentMBOfferNames);
		currentmbaroffer = (offername_index != -1) ? current_mbarposition[offername_index] : "";
	}
	
	if(url.indexOf("OnboardingOverlayAction")>-1){
		openOverlayForOnboardingOfferSeeMore(acctIndex);
	}else if(url.indexOf("/cards/credit/application/flow.action")>-1 && url.indexOf("isInvitation")>-1){
		modifyPreQualUrl(speedbump,url);
	}else{
		launchPageForMBAR(speedbump,name,acctIndex,url,locID,fields,waveId,campaignId,origin,campaignId,FBROfferID,FBRCat);
	}
	//TPR TPR1109014 COR Changes
	if(origin=='COR'){
		updateAOMCORForMBAR(pageDef,name,waveId,campaignId,origin,'Clicked',acctIndex,FBROfferID,FBRCat,currentmbaroffer);
	}else{
		updateSOMForMBAR(pageDef,name,waveId,campaignId,origin,'Clicked','Interested',acctIndex,currentmbaroffer);//As a part of the SPF development the acctIndex has been added
	}
}


/**
 * Modifies the Prequal Url for the benefits and services page
 * @param speedbump
 * @param url
 * @return
 */
function modifyPreQualUrl(speedbump,url)
{
	var linkURL=aOstartURL+url;
	populatePreQualParams(linkURL, speedbump);
}



/**
 * Handles the routing of the offers to the proper landing page.
 * @param speedBump
 * @param name
 * @param accountIndex
 * @param linkUrl
 * @param locationId
 * @param fields
 * @return
 */
function launchPageForMBAR(speedBump,name,accountIndex,linkUrl, locationId,fields,waveId,campaignId,origin,campaignId,FBROfferID,FBRCat)
{	
	var screenId = pageDef;
	var aoOffersIndicator = 'Cards.do';
	var aoOfferParams = 'screenId:'+screenId+'|offerName:'+name+'|locID:'+locationId +'|origin:'+origin;
	if('COR' == origin){
		aoOfferParams = aoOfferParams +'|offerID:'+campaignId+'|offerCat:'+FBRCat;
	}
	var cbolOfferIndicator='&source=1';
	var cbolOfferIndicator1='?source=1';
	var isCBOLOffer=(linkUrl.indexOf(cbolOfferIndicator) != -1||linkUrl.indexOf(cbolOfferIndicator1) != -1)?true:false;
	var paperlessUpdateOfferParam ='offerScreenId:'+screenId+'|offerName:'+name+'|locID:'+locationId+'|offerID:'+campaignId+'|origin:'+origin+'|FBROfferID:'+FBROfferID+'|FBRCat:'+FBRCat+'|accountIndex:'+accountIndex;
	if(linkUrl.indexOf("/NCSC/paperless/flow.action") != -1 && linkUrl.indexOf("?") == -1 ){
		linkUrl = linkUrl+'?paperlessUpdateOfferParam='+paperlessUpdateOfferParam;
	} 
	else if(linkUrl.indexOf(aoOffersIndicator) != -1){
		aoOfferParams = aoOfferParams + fields;
		linkUrl = linkUrl+'&selectedCCIndex='+accountIndex+'&aoOfferParams='+aoOfferParams;
	}
	else if(isCBOLOffer){
		var cbolOfferParam='source';
		var valOfCbolOfferParam='cntx_offr';
		linkUrl=changeParamValueOfUrl(linkUrl,cbolOfferParam,valOfCbolOfferParam);
		linkUrl = linkUrl+'&screen='+screenId+'&offerName='+name+'&waveId='+waveId+'&campaignId='+campaignId+'&origin='+origin;
	}
	if( accountIndex != '')
	{
		if(speedBump == ''){
			lnk(linkUrl);
		}
		else if(speedBump != '') {
			if(speedBump == "NW" ){
				launchPopup(linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');	
			}
			if (speedBump != "NW" ) {
				launchPopup('/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&landingURL='+linkUrl+'&offerName='+name+'&acctIndex='+accountIndex+ '&offerScreenId='+screenId, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');		
			}
		}
	}
	if(accountIndex == '' )
	{
		if(speedBump == ''){	
			lnk(linkUrl);
		}
		else if(speedBump != '') {
			if(speedBump == "NW" ) {
				launchPopup(linkUrl, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');	
			}
			if (speedBump != "NW" ) {
				launchPopup('/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&landingURL='+linkUrl+'&offerName='+name+ '&offerScreenId='+screenId, '','resizable,status,scrollbars,menubar,location,toolbar,width=715,height=600');
			}
		}
	}
}
//Adding code of myCitiSomOffer.js ends
//Adding code of ClickToPay.js starts
Click_To_Pay = function() {

	var baseurl = '/US/NCPT/ctp/flow.action';
	var firsttime = false;
	this.isNextClicked = false;
	this.isclickedOnce = true;

	this.getRequestUrl_E_F = function(eventid, fek) {
		return baseurl + '?_eventId=' + eventid + '&_flowExecutionKey=' + fek;
	};
	this.getDropdownValue_I = function(id) {
		id = '#' + id;
		try {
			return $(id).jfpwidget('value');
		} catch (Error) {
			return undefined;
		}
	};
	this.enableRadio_I_FL = function(id, flag) {
		document.getElementById(id).checked = flag;
	};
	this.validateAmountField = function(amount) {
		var amountCTP = $('#ctpPaymentAmount').val();
		if (amountCTP != "") {
			var validCharsCTP = "0123456789.";
			var isNumberCTP = true;
			var charCTP;
			for (i = 0; i < amountCTP.length && isNumberCTP == true; i++) {
				charCTP = amountCTP.charAt(i);
				if (validCharsCTP.indexOf(charCTP) == -1) {
					isNumberCTP = false;
				}
			}
			return isNumberCTP;
		}
	};
	this.hideOtherAmountError = function() {
		this.hideToolTip();
		$('#ctpPaymentAmount').removeClass('StructCTPSelectBG').addClass('ctpStructBGColorWhite');
	};
	this.hideDateError = function() {
		this.hideToolTip();
		$('#ctpPaymentDate').removeClass('StructCTPSelectBG').addClass('ctpStructBGColorWhite');
	};
	this.validateDate = function(value) {
		if (value == "" || value == null)
			return false;
		return true;
	};
	this.validateFormatDate = function(date) {
		var matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(date);
		if (matches == null)
			return false;
		var d = matches[2];
		var m = matches[1] - 1;
		var y = matches[3];
		var composedDate = new Date(y, m, d);
		return composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y;
	};
	this.setFirsttime = function(ft) {
		firsttime = ft;
	};
	this.getFirsttime = function() {
		return firsttime;
	};
	this.getBaseurl = function() {
		return baseurl;
	};
	this.ifxErrorCheck = function(ifxStatusCode) {
		if (ifxStatusCode == "0") {
			$('#disableNext').remove();
			$('#enableNext').removeClass('appShowNone');
		}
	};
	this.pageInfo = function(stepCounter) {

		$('#ctpStepCounter').html(stepCounter);
	};
};

/*
 * Make A Payment GetFundingAccount Call to fetch funding accounts from IFX
 */
Click_To_Pay.prototype.getFundingAccount_E_F_L = function(submit, fek, disableloader) {
	$('#ctpcontent-Spinner').attr('style', '');
	this.isNextClicked = false;
	this.hideToolTip();
	var payTo = this.getDropdownValue_I("ctpPayTo");
	if (payTo != undefined && payTo == 'TO_DEFAULT_VALUE') {
		var  url = "/US/NCPT/ctp/flow.action" ;
		$.ajax({ 
			url:url, 
			success: function(data){
			$('#ctpBodyMainContainer').html(data);
		}
		});	
		return false;
	}
	var temp = "";
	$('ul#fundingAccountDiv li:lt(4)').each(function(index) {
		temp += '<li id="' + $(this).attr('id') + '"';
		temp += ' class="' + $(this).attr('class') + '">';
		temp += $(this).html();
		temp += "</li>";

	});

	$('ul#fundingAccountDiv').html(temp);
	$("<div id='ctpcontent-Spinner'></div>").appendTo("ul#fundingAccountDiv");
	$("div#ctpcontent-Spinner").html($("div#ctpcontent-Spinner-Text").html());

	var url = this.getRequestUrl_E_F(submit, fek);

	$.ajax({
		url : url,
		type : 'POST',
		data : {"selectedCreditCardIndex" : payTo },
		success : function(data) {

			$('#disableNext').remove();
			$('#enableNext').removeClass('appShowNone');
			$('#fundingAccountDiv').html(data);
			//$("#ctp_slider").jfpwidget().refreshWithNoTrg();
			$("#ctp_slider").jfpwidget("refresh");
			$('#ctpcontent-Spinner').addClass('appShowNone');
		}
	}); 

	return false;
};
/*
 * Make A Payment Validation Call
 */
Click_To_Pay.prototype.postPaymentFormData_E_F = function(eventid, fek) {
	//$("#ctp_slider").jfpwidget().setProperty({value:100});
	var formdata = $('form[id="clickToPayform"]').serialize(true);
	var url = this.getRequestUrl_E_F(eventid, fek);
	this.isNextClicked = false;
	$.ajax( {
		type : 'POST',
		data : formdata,
		url : url,
		success : function(data) {
		this.isClickedOnce = false;
		$('#fundingAccountDiv').html(data);
		//$("#ctp_slider").jfpwidget().refreshWithNoTrg();
		$("#ctp_slider").jfpwidget("refresh");
	}
	});
};

/*
 * Make A Payment Make Changes Flow
 */
Click_To_Pay.prototype.editMakeChangesCTP_E_F = function(eventid, fek) {
	var CTPurl = this.getRequestUrl_E_F(eventid, fek);
	this.isNextClicked = false;
	if(!this.isClickedOnce) {	
		this.isClickedOnce = true;
		$.ajax({
			url:CTPurl,
			type:'POST',
			success: function(data) {
			CTPoverlayRefresh = false;
			this.isClickedOnce = false;
			$('#ctpBodyMainContainer').html(data);
		}});
	} else {
		;
	}
};
/*
 * Validate the CTP Payment Form
 */
Click_To_Pay.prototype.validateForm = function() {
	if(!this.isNextClicked)
		return false;

	this.hideToolTip();
	var showtooltip = false;
	var errorfree = true;
	var payFrom = "";
	var payTo = "";
	var paymentDate = "";
	var paymentOption = "";
	var paymentAmount = "";

	payFrom = this.getDropdownValue_I("ctpPayFrom");

	payTo = this.getDropdownValue_I("ctpPayTo");

	paymentOption = $("input[name='ctpPaymentOption']:checked").val();

	paymentDate = document.getElementById('ctpPaymentDate');

	paymentAmount = "0";

	if (payFrom == 'FROM_DEFAULT_VALUE') {
		if (!showtooltip) {
			$('#fundingaccountnotselected').jfpwidget('show');
			$('#fundingaccountnotselected').jfpwidget('reposition');
			$('#fundingaccountnotselected-info').addClass('ctpStructDispBlock');
			showtooltip = true;
		}
		$('#ctpPayFrom-button .ui-selectmenu-status').attr('style','background-color:#FFFAA1 !important');

		$('#ctpPayFrom').jfpwidget('widget').newelement.css( {'background' : 'none repeat scroll 0 0 #FFFAA1'});
		errorfree = false;
	}
	if (paymentOption == undefined) {
		if (!showtooltip) {
			$('#invalidAmntMessage').jfpwidget('show');
			$('#invalidAmntMessage').jfpwidget('reposition');
			$('#invalidAmntMessage-info').addClass('ctpStructDispBlock');
			showtooltip = true;
		}
		$('#ctpPaymentAmount').addClass('StructCTPSelectBG');
		errorfree = false;

	} else {
		if (paymentOption == 'OTHER_PAYMENT_OPTION') {
			paymentAmount = $('#ctpPaymentAmount').val();
			if (!this.validateAmountField(paymentAmount)) {
				if (!showtooltip) {
					$('#alphaNumericError').jfpwidget('show');
					$('#alphaNumericError').jfpwidget('reposition');
					$('#alphaNumericError-info').addClass('ctpStructDispBlock');
					showtooltip = true;
				}
				$('#ctpPaymentAmount').addClass('StructCTPSelectBG');
				errorfree = false;
			} 
			if(paymentAmount.length >10) {
				if (!showtooltip) {
					$('#invalidAmntMessage').jfpwidget('show');
					$('#invalidAmntMessage').jfpwidget('reposition');
					$('#invalidAmntMessage-info').addClass('ctpStructDispBlock');
					showtooltip = true;
				}
				$('#ctpPaymentAmount').addClass('StructCTPSelectBG');
				errorfree = false;
				return;
			}
			//Restricting entering an amount more than 9 numerics without decimal in other amount field
			if(paymentAmount.length==10) {
				if(!(paymentAmount.indexOf(".") != -1)) {
					if (!showtooltip) {
						$('#invalidAmntMessage').jfpwidget('show');
						$('#invalidAmntMessage').jfpwidget('reposition');
						$('#invalidAmntMessage-info').addClass('ctpStructDispBlock');
						showtooltip = true;
					}
					$('#ctpPaymentAmount').addClass('StructCTPSelectBG');
					errorfree = false;
					return;
				}
			}
		}
	}
	if (paymentDate != undefined) {
		if (!this.validateDate(paymentDate.value)) {
			if (!showtooltip) {
				$('#ctpDateError').jfpwidget('show');
				$('#ctpDateError').jfpwidget('reposition');
				$('#ctpDateError-info').addClass('ctpStructDispBlock');
				$('#ctpPaymentDate').addClass('StructCTPSelectBG');
				showtooltip = true;
			} else {
				$('#ctpPaymentDate').addClass('StructCTPSelectBG');
			}
			errorfree = false;

		} else if (!this.validateFormatDate(paymentDate.value)) {
			if (!showtooltip) {
				$('#ctpDateError').jfpwidget('show');
				$('#ctpDateError').jfpwidget('reposition');
				$('#ctpDateError-info').addClass('ctpStructDispBlock');
				$('#ctpPaymentDate').addClass('StructCTPSelectBG');
				showtooltip = true;
			} else {
				$('#ctpPaymentDate').addClass('StructCTPSelectBG');
			}
			errorfree = false;
		}
	}
	if(errorfree == false)
		this.isClickedOnce = false;

	return errorfree;
};

/*
 * Validate Payment Form and Make Make A Payment Validation Call to IFX 
 */
Click_To_Pay.prototype.validateFormAndSubmit_E_F = function(eventid, fek) {

	this.isNextClicked = true;
	if(!this.isClickedOnce) {	
		this.isClickedOnce = true;
		var errorfree = this.validateForm();
		if (errorfree) {
			this.postPaymentFormData_E_F(eventid, fek);
		}
	} else {
		;
	}
};

/*
 * Make A Payment Confirmation Call to post Payment Data at IFX end
 */
Click_To_Pay.prototype.confirmPaymentData_E_F = function(eventid, fek,
		ctpPayTo, ctpPayFrom, ctpPaymentAmount, ctpPaymentDate) {
	var url = this.getRequestUrl_E_F(eventid, fek);
	this.isNextClicked = false;

	if(!this.isClickedOnce) {	
		this.isClickedOnce = true;
		$.ajax( {
			type : 'POST',
			url : url,
			success : function(data) {
			$('#fundingAccountDiv').html(data);
			//$("#ctp_slider").jfpwidget().refresh();//WithNoTrg();
			$("#ctp_slider").jfpwidget("refresh");
		}
		});
	} else {
		;
	}
};
/*
 * Change Calendar Date based on Payment Option Selected
 */
Click_To_Pay.prototype.changeCTPCalendarDate_I = function(selectIdCTP) {
	var customizedEndDateToggle = "N";
	if (selectIdCTP == "Y") {
		customizedEndDateToggle = customizedEndDate;
	} else if (selectIdCTP == "N") {
		customizedEndDateToggle = maxDate;
	}
	$("#ctpPaymentDate").jfpwidget('destroy'); 
	$("#ctpPaymentDate").jfpwidget(new CJW.jfp.widget.TipDatepicker({ 
		wrapperSet : "#ctpPaymentDate"
	}, 
	{
		// Removes extra space in header
		metadata : {
		type : 'notitle'
	},
	// For the close button
	content : {
		title : {
		text : 'x',
		button : true
	}
	},
	position : {
		adjust : {
		x : 5,
		y : 2
	}
	},
	appendText : '(MM/DD/YYYY)',
	buttonImage : '/JFP/images/widgets/jfpw.datepicker.png',
	datepickerConfig : {
		dayNamesMin : [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
		minDate : minDate,
		maxDate : customizedEndDateToggle,
		dateFormat : 'mm/dd/yy',
		showOn : "both",
		highlightedDate : highlightedDate,
		disableWeekend : disableWeekend,
		selectPastDate : false
	}
	}, {}));
	if(zeroOrNegativeCurrBalFlag == 'true') {
		$("#ctpPaymentDate").val(futureCycleStartDateForPresentation);
	} else {
		$("#ctpPaymentDate").val(formatttedStartDate);
	}
};
/*
 * Enable Other Payment Option when Current Balance is $0
 */
Click_To_Pay.prototype.enableOtherButton_CF = function(calendarFlag) {
	this.hideAmtErrChangeCalendar_CF(calendarFlag);
};
/*
 * Hide Amount Error Tooltip and Change Calendar Date base on Payment Option Selected
 */
Click_To_Pay.prototype.hideAmtErrChangeCalendar_CF = function(calendarFlag) {
	this.hideOtherAmountError();
	this.changeCTPCalendarDate_I(calendarFlag);
	this.clientValidationCTP();
};
/*
 * Make Clientside Validation
 */
Click_To_Pay.prototype.clientValidationCTP = function() {
	if (this.isNextClicked) {
		this.validateForm();
	}
};
/*
 * Hides "From" Field error
 */
Click_To_Pay.prototype.hideAppError = function() {
	this.hideToolTip();
	$('#ctpPayFrom-button').addClass('ctpStructBGColorWhite');
	$('#ctpPayFrom-button .ui-selectmenu-status').attr('style','background-color:#FFFFFF !important');
	$('#ctpPayFrom').jfpwidget('widget').newelement.css( {'background-color' : '#FFFFFF'});
};
/*
 * Hides "To" Field error
 */
Click_To_Pay.prototype.hideAppToError = function() {
	this.hideToolTip();
	$('#ctpPayTo-button').addClass('ctpStructBGColorWhite');
	$('#ctpPayTo-button .ui-selectmenu-status').removeClass('StructCTPSelectBG');
	$('#ctpPayTo').jfpwidget('widget').newelement.css( {'background-color' : '#FFFFFF'});
};
/*
 * Hides Tooltip
 */
Click_To_Pay.prototype.hideToolTip = function() {
	$('div[id^="ui-tooltip-"]').each(function(index) {
		var ctpTooltipClose = '#' + $(this).attr('id');
		$('#' + ctpTooltipClose.substring('ui-tooltip-'.length + 1, ctpTooltipClose.length)).jfpwidget("hide");
	});
};
/*
 * Opens Make A Payment Print Popup
 */
Click_To_Pay.prototype.ctpPrintPage= function(formname,targetname){

	$('#'+formname).attr('target',targetname);
	var myPopup = window.open("",targetname,'width=750,height=600,resizable=no,location=yes');
	if (!myPopup.opener)
		myPopup.opener = self; 
	$('#'+formname).submit();

}; 
/*
 * Opens Current Balance Tooltip on click of Current Balance label
 */
Click_To_Pay.prototype.showCurrBalToolTip = function() {
	$('#CTPCurrBalTooltip').jfpwidget('show');
	$('#CTPCurrBalTooltip').jfpwidget('reposition');
	$('#CTPCurrBalTooltip-info').removeClass('appShowNone').addClass('ctpStructDispBlock');
};
/*
 * Opens Date Tooltip on click of Date label
 */
Click_To_Pay.prototype.showDateToolTip = function() {
	$('#CTPDateTooltip').jfpwidget('show');
	$('#CTPDateTooltip').jfpwidget('reposition');
	$('#CTPDateTooltip-info').removeClass('appShowNone').addClass('ctpStructDispBlock');
};
/*
 * Opens tooltip and highlight corresponding field
 */
Click_To_Pay.prototype.showTooltipHighlightFieldCTP = function(ctperrmessage) {
	var ctperrormessage = $('#'+ctperrmessage);
	$(ctperrormessage).jfpwidget('show');
	$(ctperrormessage).jfpwidget('reposition');
	$('#'+ctperrmessage+'-info').removeClass('appShowNone').addClass('ctpStructDispBlock');
	if (ctperrmessage == 'ctpAmtMaxError' || ctperrmessage == 'alphaNumericError' || ctperrmessage == 'ctpAmtEqExceedError') {
		$('#ctpPaymentAmount').addClass('StructCTPSelectBG');
	} else if (ctperrmessage == 'ctpPayDateError' || ctperrmessage == 'ctpDateAlreadyUsedError') {
		$('#ctpPaymentDate').addClass('StructCTPSelectBG');
	}
};
Click_To_Pay.prototype.ctpReqdformatting = function(c) {
	var b = '<span class="ui-selectmenu-item-header">' + c + "</span>";
	return b;
};
/*
 * Make A Payment Error Scenario Footer
 */
Click_To_Pay.prototype.ctpErrScenario = function(ctpErrCode,ctpSelectedCCIndex,ctpErrMsg) {
	$('#CTPfooter').addClass('appShowNone');
	$('#ctpverification').addClass('appShowNone');
	$('#ctpMultiCCFooterError').removeClass('appShowNone');
	if(ctpErrCode == '9038' ) {
		if ($('#ctpErrorBtnContainer').hasClass('appShowNone')) {
			$('#ctpErrorBtnContainer').removeClass('appShowNone');
		}
		$('#ctpCloseBtnContainer').addClass('appShowNone');
		$("#cmlink_CTPSignupAddPymtBtn").attr("href", "/US/JSO/SSO/Cards.do?targetAOApp=ctpadd&selectedCCIndex="+ctpSelectedCCIndex);
	} else if (ctpErrMsg == 'CTPErrCopsMultiAcctStatus') {
		$('#ctpMultiCCFooterError').addClass('appShowNone');
		$('#CTPfooter').removeClass('appShowNone');
	} else {
		$('#ctpErrorBtnContainer').addClass('appShowNone');
		$('#ctpCloseBtnContainer').removeClass('appShowNone');
	}
	$("#ctp_slider").jfpwidget("refresh");
};
/*
 * Open Terms and Conditions Pop-up on Click of "Terms and Conditions" link
 * in Make a Payment Overlay Step 1
 */
Click_To_Pay.prototype.openTandCPopUp = function(weekendValidPID) {
	$('#ctptandC').attr('target','TandC');
	$('#isWeekendValidPID').val(weekendValidPID);
	var myPopup = window.open("",'TandC','width=750,height=600,resizable=no,scrollbars=1,location=yes');
	if (!myPopup.opener)
		myPopup.opener = self; 
	$('#ctptandC').submit();
};
/*
 * Disable Payment options When Current Balance is Zero
 */
Click_To_Pay.prototype.disablePaymentOptions = function(zeroOrNegativeCurrBalFlag) {
	if(zeroOrNegativeCurrBalFlag == 'true') {
		$('input[id="ctpPaymentOption_L"]').attr('disabled', 'disabled');
		$('input[id="ctpPaymentOption_M"]').attr('disabled', 'disabled');
		$('input[id="ctpPaymentOption_C"]').attr('disabled', 'disabled');
		$('.ctpColorText').addClass('ctpColorTextGrey');
	}
};
/*
 * Opens Are You Sure Overlay
 */
Click_To_Pay.prototype.showAreYouSureOverlay = function() {
	$('#ctpBodyMainContainer').removeClass('appShow').addClass('appShowNone');
	$('#ctp_cancel').removeClass('appShowNone').addClass('appShow');
	CTPoverlayRefresh = true;
};
/*
 * Returns the previous step of Make A Payment Overlay from Are You Sure Overlay
 * on click of "No" link
 */
Click_To_Pay.prototype.noAreYouSureCTP = function() {
	$('#ctp_cancel').removeClass('appShow').addClass('appShowNone');
	$('#ctpBodyMainContainer').removeClass('appShowNone').addClass('appShow');
	$('#ctpStepCounter').removeClass('appShowNone').addClass('appShow');
	CTPoverlayClose =false;
	CTPoverlayRefresh = false;
};
/*
 * Loads Make A Payment Overlay on click of "Make A Payment" Link
 */
Click_To_Pay.prototype.loadCTPOverlayData = function(selectedCCIndex) {
	this.isNextClicked = false;
	CTPoverlayClose =true;
	CTPoverlayRefresh = false;
	$('#ctp_cancel').removeClass('appShow').addClass('appShowNone');
	$('#ctpBodyMainContainer').removeClass('appShowNone').addClass('appShow');
	$('#ctpStepCounter').html("");
	$('#ctpoverlay').jfpwidget('open');
	$('#ctpBodyMainContainer').html($('#ctpSpinner').html());
	var  url = "/US/NCPT/ctp/flow.action" ;
	//Sprint 5 -CTP Overlay - Chat changes **starts
	jQuery('.StructCTPOverlayFooterWrapper #contactUsOptions span.LiveChatSpan').attr('id','clickToPayParent');
	var clickToPayParentObj = document.getElementById('clickToPayParent');
	var headElem = jQuery('head').html();
	var bodyElem = jQuery('body').html();
	if (headElem.indexOf("mtagconfig") > -1 || bodyElem.indexOf("mtagconfig") > -1){
		if(typeof clickToPayParentObj != 'undefined'&& clickToPayParentObj!=null && typeof lpShowButton != 'undefined')
			lpShowButton('clickToPayParent', 'lpClickToPayOverlay');

	}
	//Sprint 5 -CTP Overlay - Chat changes **ends
	if(selectedCCIndex == 'undefined' || selectedCCIndex == '' ) {
		$.ajax({ 
			url:url, 
			success: function(data){
			$('#ctpBodyMainContainer').html(data);
		}
		});	
	} else {
		$.ajax({ 
			url:url, 
			data: {"selectedCreditCardIndex": selectedCCIndex },
			success: function(data){
				$('#ctpBodyMainContainer').html(data);
			}
		});
	}
};
/*
 * Close Are You Sure Overlay on Click of "Yes" Link
 */
Click_To_Pay.prototype.yesAreYouSureCTP = function() {

	//FDT2 Chat changes Sprint 5
	var bodyElem = jQuery('body').html();
	var headElem = jQuery('head').html();
	if (headElem.indexOf("mtagconfig") > -1 || bodyElem.indexOf("mtagconfig") > -1){
		jQuery('body').append('<scr'+'ipt>lpAddVars("page","AO_BillPayCancel","yes");</scr'+'ipt>');
	}
	//Chat changes end here

	CTPoverlayClose = true;
	$('#ctp_cancel').removeClass('appShow').addClass('appShowNone');
	$('#ctpoverlay').jfpwidget('close');
	this.isClickedOnce = false;
};
/*
 * Cancel Make A Payment Overlay
 */
Click_To_Pay.prototype.ctpCancel = function() {
	this.isNextClicked = false;
	if(!CTPoverlayClose) {
		$('#ctpStepCounter').addClass('appShowNone');
		this.hideToolTip();
		this.showAreYouSureOverlay();
	} else {
		$('#ctpoverlay').jfpwidget('close');
	}
	this.isClickedOnce = false;
};
//Adding code of ClickToPay.js ends
//DEOB Related changes	
function SvcHubFireUrl(url,speedBump,screenID,offerName,locID,accountIndex,origin){

	if(locID != 'MOBP' && locID != 'TABP' && locID != 'CTMB'){
		updateSOMSubmitEvent(url,speedBump,screenID,offerName,locID,accountIndex,origin);
		var isSPF = isCinlessUser;
		if (isSPF=='true'|| isSPF=='Y') {
			updateSOMImgForSPFCO(screenID,offerName,locID,accountIndex,'','',origin);
		}else{
			updateSOMImgForCO(screenID,offerName,locID,'','',origin);
		}
	}
	if(speedBump =="NW"){
		launchPopup(url,'','resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600');
	}else{
		lnk(url);
	}
} 
function SvcGlobalAppFireURL(url,speedBump,screenID,offerName,locID,accountIndex,origin){


	var isSPF = isCinlessUser;
	if (isSPF=='true'|| isSPF=='Y') {
		updateSOMImgForSPFCO(screenID,offerName,locID,accountIndex,'','',origin);
	}else{
		updateSOMImgForCO(screenID,offerName,locID,'','',origin);
	}

	if(speedBump =="NW"){
		launchPopup(url,'','resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600');
	}else{
		lnk(url);
	}
} 


var xmlhttpSOMAcceptance;
function updateSOMOfferAccept(screen, locid, offer, source)
{			
	if(source!=null && source==1)
	{
		xmlhttpSOMAcceptance = createAjaxObject();
		var url = "/US/JRS/som/UpdateOfferDetails.do?screenID="+screen+"&placementID="+locid+"&offerName="+offer+"&source="+source;
		if (xmlhttpSOMAcceptance!=null){
			xmlhttpSOMAcceptance.onreadystatechange=processStateChange;	  
			xmlhttpSOMAcceptance.open("POST",url,true);
			xmlhttpSOMAcceptance.send(null);
		}
	}

}	

function updateOfferStatus(screen,locid,offerName,waveId,campaignId,origin,selectedAccountIndex,copOfferStatus,somOfferStatus) 
{
	xmlhttpSOMAcceptance = createAjaxObject();

	var url = "/US/REST/manageoffers/updateofferstatus.jws?screenID="+screen+"&placementID="+locid+"&offerName="+offerName+"&waveID="+waveId+"&campaignId="+campaignId+"&origin="+origin+"&selectedAccountIndex="+selectedAccountIndex+"&copOfferStatus="+copOfferStatus+"&somOfferStatus="+somOfferStatus+""+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	if (xmlhttpSOMAcceptance!=null)
	{
		xmlhttpSOMAcceptance.open("POST",url,true);
		xmlhttpSOMAcceptance.send(null);
	}
}


function updateSOMForCOPostSubmit(source, screenID,offerName,locID)
{	
	if(source!=null && source!="" && source =='cntx_offr')
	{	
		jQuery.ajax({
			url: '/JRS/som/UpdateContextualOfferDetails.do',
			data : { source : source, screenID : screenID ,placementID:locID ,offerName:offerName }
		});
	}
} 


function updateSOMSubmitEvent(url,speedBump,screenID,offerName,locID,accountIndex,origin){
	jQuery.ajax({
		url: "/US/REST/manageoffers/sendSOMSubmitEventParameterToAo.jws",
		dataType: "json",
		data : { "screenID": screenID, "locId": locID, "offerName": offerName, "accountIndex": accountIndex,"origin":origin},
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
	});
}

//R131 Extra cash SSO
function launchPopupForDR(url,winName,winParams){
	if(url.indexOf("JFP_TOKEN") > 0)
	{
		url = url ;
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

	if(winName=='_top'){top.location.href=url; return;}
	if(winName==null||winName=='')
		winName='childWin';
	if(child_win!=null&&!child_win.closed)
		child_win.close();
	child_win=window.open(url,winName,winParams);

}

function submitForSSOToDR(acctInstanceID)
{
	if(!isExtracashFallback){
		launchPopupForDR('/US/JRS/portlet/extracash/PrepareForSSOToDR.do?selectedAccountID='+acctInstanceID+"&JFP_TOKEN="+JFP_CSRF_TOKEN+"",'_drWinID','resizable,status,scrollbars,menubar,location,toolbar,width=650,height=450');
	}else{	
		lnk('/US/JSO/SSO/Cards.do?targetAOApp=rewards&selectedCCIndex='+acctInstanceID);
	}

}

//This used for DashboardLink MIS Tracking
function LinkMisLog(ttc) {
	$jq.ajax({
		global:false,
		url:"/US/REST/dashboardlinkmislog/handleDashboardLinkClick.jws?ttc="+ttc,
		type:'post',
		dataType: 'html',
		async: false,
		success: function(data)	{

	}
	});
}
//for callus option in pnt overlay
function overlaycallus(){
	if (isCinlessUser=='N') {
		location.href ="/US/JRS/portal/contactus.do?ID=ContactUsBanking&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	}
	else{
		location.href ="/US/JRS/portal/contactus.do?ID=ContactUsCards&JFP_TOKEN="+JFP_CSRF_TOKEN+"";
	}
}
//Added for Offer Overlay
function displayQTOOffer(linkurl,speedbump,offername,accountIndex,screenId,filedString,locationID,aoOffersIndicator,aoOfferParams)
{
	if(linkurl.indexOf(aoOffersIndicator) != -1){
		if (filedString != null && filedString != ""){
			aoOfferParams = aoOfferParams + filedString;
		}
		linkurl = linkurl+'&selectedCCIndex='+accountIndex+'&aoOfferParams='+aoOfferParams;
	}
	if (speedbump==""){
		lnk(linkurl);
	}
	else if (speedbump=="NW"){
		launchPopup(linkurl,'popUpWindow','height=600,width=715,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	}
	else{
		var isQTPOOffer="Y";
		launchPopup('/US/JRS/portal/template.do?ID='+speedbump+'&sourceID=1&landingURL='+linkurl+'&isQTPO='+isQTPOOffer, 'popUpWindow','height=600,width=715,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');	
	}
} 

function alertSeeMoreOverlayLink(index, acctInstanceID, alertCount){
	instanceID = acctInstanceID;
	var idSpan = "span#alert-" + index + "-" + acctInstanceID;
	var mainString = document.getElementById("alert-" + index + "-" + acctInstanceID).innerHTML;
	var accountnametag="cT-alertAcctName-"+index+">";
	var accountNameLength = accountnametag.length;
	var alertAcctNameID = idSpan + " > span#cT-alertAcctName-"+index;
	var alertAcctnamevalue= $(alertAcctNameID).html();
	var alertDetailedMsg = "";

	//introduced for IE issue
	if(alertAcctnamevalue==null||alertAcctnamevalue=='')
		alertAcctnamevalue=mainString.substring(mainString.indexOf('cT-alertAcctName-'+index+'>')+accountNameLength,mainString.indexOf('</SPAN>'));

	//-------------------


	$("#cT-regAlertOverlayWrapper").jfpwidget("open");
	$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-acctAlertOverlayCnt > div#cT-regAlertAcctName").html($(alertAcctNameID).html());

	var alertDetMsgID = idSpan + " > span#cT-alertDetailedMsg-"+index;
	$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-acctAlertOverlayCnt > div#cT-regAlertDetailedMsg").html($(alertDetMsgID).html());
	alertDetailedMsg=$(alertDetMsgID).text();

	var funcIDSpan = idSpan + " > span#cT-alertFunctionID-"+index;
	var functionID = $(funcIDSpan).html();
	if(functionID == null || functionID==''){

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper").addClass('cN-alertOverlayNonBGLink');

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-alertCloseBtn").removeClass('cN-alertCloseNonBGLink');

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper > a#cT-regAlertLink").removeClass('cM-spriteBase cN-alertOverlayBGBlueButton');

	} else {

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper").removeClass('cN-alertOverlayNonBGLink');

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-alertCloseBtn").addClass('cN-alertCloseNonBGLink');

		$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper > a#cT-regAlertLink").addClass('cM-spriteBase cN-alertOverlayBGBlueButton');

	}
	$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper > a#cT-regAlertLink").attr("href", $(idSpan + " > span#cT-alertLinkURL-"+index).text());
	$("div#cT-regAlertOverlayWrapper > div.cS-overlayAlert > div.cS-overlayContent > div#cT-regAlertOverlayLinks > div > span#cT-regAlertLinkWrapper > a#cT-regAlertLink").html($(idSpan + " > span#cT-alertLinkLabel-"+index).html());


	/*

	 * Implementation of LiveChat. The Live Chat will be

	 * dynamically included in the div "lpButtonAlertsOverlay"

	 * which will be placed under the div "acctAlertsParent".

	 */


	if(typeof lpAddVars!= 'undefined'){


		lpAddVars("page","AlertType",'account'); 


		if(typeof lpShowButton != 'undefined'){

			lpShowButton('acctAlertsParent', 'lpButtonAlertsOverlay');

		}
		if((typeof ewReferCode!= 'undefined') && (ewReferCode == "CJ"))
		{
			lpAddVars("page","QueueValue",crewQueueValue);
		}
		lpAddVars("page","unit","alerts-card");
		lpAddVars("page","AccountsAlertsAvailable",alertCount);
		lpAddVars("page","AccountAlertSubject",alertDetailedMsg);
		lpAddVars("page","OverlayName",'account alerts');
	}
	jQuery('#cT-alertOverlaySlider').jfpwidget('refresh');
}


function SubmitForECSSO(){
	if(!isExtracashFallback){
		launchPopupForDR('/JRS/portlet/extracash/getECEnrolledCards.do','_drWinID','resizable,status,scrollbars,menubar,location,toolbar,width=650,height=450');
	}else{	
		lnk('/US/JSO/SSO/Cards.do?targetAOApp=rewards');
	}
}



function refreshingDashboard() {
	var URL = contextPath+'/REST/accountsPanel/getCustomerAccounts.jws?ttc='+dashboardTTC;
	dashboard.invalidParams = false; 
	$('#accountsPanelInnerContainer').empty(); 
	$('#accountsPanelInnerContainer').html('<div id="loading" class="spinnergif"></div>'); 

	fireJAXRS(URL); 
}

//Added for USDC Sprint1 TJ Modifications
function submitForCheckImage(tjIndex){
	var now = new Date();
	var childWindowName = null;
	if (childWindowName==null) {childWindowName = "DA" + now.getTime();}
	var rWin = showPopup('/US/jba/ada/ViewCheckImageOverlayFromGlobalDashboard.do?selectedTJIndex='+tjIndex+'&searchScreen=false&requestFromGlobalDashboard=true',childWindowName,'width=647,height=510,resizable=yes,scrollbars=yes,menubar=yes,toolbar=yes,location=yes,directories=no,status=no');
	addWinToList(rWin);
	rWin.focus(); 
}
//Added for closing AmexSpeedbump pop up windows
function closeAmexSpeedBumpWindow(){
	window.close();
}
//Added for USDC Sprint2 TJ PrinterFriendly Modifications
function openADAPrintWindow(){
	var url= "/US/CBOL/ain/adaprint/flow.action?jfp.layout=PrintRecord"; 
	openPrintWin(url,'ADAPrint','width=680, resizable=yes, height=700,toolbar=0,location=0,menubar=0,scrollbars=1'); 
}

//Added for SOM update event tracking
function updateUserEvent(accountInstanceId,screenId,offerName,eventName) {
	var updateUrl = "/US/REST/offerupdate/updateUserEvent.jws?accountInstanceId=" + accountInstanceId + "&screenId="+screenId + "&offerName=" + offerName + "&eventName="+eventName;
	$.ajax({
		url:updateUrl,
		type:"POST",
		global:false,
		async:false,
		success:function(data, status, jqXHR){
	},
	error:function(jqXHR){
	}
	});
	return false;
}

//siteCatalyst tracking for clicked event
function reportSC(elmnt, event) {
	s.tl(elmnt, 'o',event);
	s.eVar20= event;
	s.t();
	return false;
}

function doMakePaymentFromADA(){
	var destAccountInstanceID = accountInstanceID;	
	var url= "/US/jba/mt/InitializeSubApp.do?TTC=7&selectedDestinationAccount="+destAccountInstanceID+"&JFP_TOKEN="+JFP_CSRF_TOKEN+""; 
	window.location=url;

}

//CitiWalletChanges for CCSindex removal

function goToCitiWallet(url)
{
	location.href = url;
}

//SOM SignOff Overlay Changes
function processOfferClicked(){

	//Updating AOM for Clicked event 
	offerClicked='Clicked';	
	if('COR'==origin){
		var corOfferStatus = 'Clicked';
	}
	jQuery.ajax({
		url: "/US/REST/manageoffers/updateofferstatus.jws",
		dataType: "json",
		async:false,
		data: {
		"screenID":pageDef, "offerName":offerName, "origin":origin,"corOfferStatus":corOfferStatus,"somOfferStatus":offerClicked, "accountIndex":accountInstanceId,"FBROfferID":campaignId,"FBRCat":category,"JFP_TOKEN":JFP_CSRF_TOKEN
	},
	contentType :'application/x-www-form-urlencoded',
	type: 'POST',
	complete: function(request, status) {
	},
	error: function(XMLHttpRequest, status, errorThrown) { 
	}, 
	success: function(data, status, xhr) {  
	}
	});

	if(speedBump== undefined || speedBump == null || speedBump=='')	{
		parent.location.href=targetURL;
	}
	else if(speedBump == 'NW'){
		try{
			parent.launchPopup(targetURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}catch(errorMessage){
			window.open(targetURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}       
	}
	else if(speedBump != 'NW' && speedBump.length>0){
		var speedBumpURL = '/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&isSignOffOVLY=Y&landingURL='+targetURL;
		try{
			parent.launchPopup(speedBumpURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}catch(errorMessage){
			window.open(speedBumpURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}
	}	
}

function processOfferDeclined(){
	//Check if the offer is not default offer. Also check if offer shown(any offer) is not yet clicked on
	if( (defaultOffer== undefined || defaultOffer == '' || defaultOffer.length==0) && (offerClicked== undefined || offerClicked == '' || offerClicked.length==0))
	{ 
		offerClicked='Declined';
		if ('COR'==origin){
			jQuery.ajax({
				url: "/US/REST/manageoffers/updateofferstatus.jws",
				dataType: "json",
				async:false,
				data: {
				"screenID":pageDef, "offerName":offerName, "origin":origin,"corOfferStatus":offerClicked, "accountIndex":accountInstanceId,"FBROfferID":campaignId,"FBRCat":category,"JFP_TOKEN":JFP_CSRF_TOKEN
			},
			contentType :'application/x-www-form-urlencoded',
			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {
			}
			}); 
		}
		else{
			jQuery.ajax({
				url: "/US/REST/manageoffers/updateofferstatus.jws",
				dataType: "json",
				async:false,
				data: {
				"screenID":pageDef, "offerName":offerName, "origin":"SOM","somOfferStatus":offerClicked, "accountIndex":accountInstanceId,"JFP_TOKEN":JFP_CSRF_TOKEN
			},
			contentType :'application/x-www-form-urlencoded',
			type: 'POST',
			complete: function(request, status) {
			},
			error: function(XMLHttpRequest, status, errorThrown) { 
			}, 
			success: function(data, status, xhr) {
			}
			});
		}
	}
	setTimeout("parent.sof()",500);
}
function processDefaultOfferClicked(targetURL,speedBump){
	if(speedBump== undefined || speedBump == null || speedBump==''){
		parent.location.href=targetURL;
	}
	else if(speedBump == 'NW'){
		try{
			parent.launchPopup(targetURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}catch(errorMessage){
			window.open(targetURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}       
	}
	else if(speedBump != 'NW' && speedBump.length>0){
		var speedBumpURL = '/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&isSignOffOVLY=Y&landingURL='+targetURL;
		try{
			parent.launchPopup(speedBumpURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}catch(errorMessage){
			window.open(speedBumpURL,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}
	}	
}

function pageReload(){
	window.location.reload();
}

function goToICTFR(payeeInstanceID, payeeType) { 
	var ictfrUlr ='/US/jba/ic/ICTFR.do?payeeType='+payeeType+'&payeeInstanceId='+payeeInstanceID+'&JFP_TOKEN='+JFP_CSRF_TOKEN+'';
	window.location=ictfrUlr;

}

function launchOWTOffer(offerName,accountIndex,actionUrl,origin,screenId,speedBump) {
	if(dtacssPh4FallbackVal == 'false'){
		somTrackingObj.trackCampaignCodeWithUrl(actionUrl);
	}	
	updateSOMForOWT(screenId,offerName,"","",origin,"Clicked","",accountIndex);
	if(speedBump != "" && speedBump != null && speedBump != undefined) {
		if(speedBump == "NW"){
			launchPopup(actionUrl,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}
		else 
		{
			var speedBumpUrl = '/US/JRS/portal/template.do?ID='+speedBump+'&sourceID=1&landingURL='+actionUrl;
			launchPopup(speedBumpUrl,"","resizable=yes,status=yes,scrollbars=yes,menubar=yes,location=yes,toolbar=yes,width=715,height=600");
		}
	} else {
		lnk(actionUrl);
	}

}

function fraudLink(){
	location.href =contextPath +"/JSO/signon/jsp/PftPage.do";
}



function updateSOMForOWT(screenId,offerName,waveId,campaignId,origin,AcceptanceLevel,copOfferStatus,accountIndex){
	jQuery.ajax({
		url: "/US/REST/manageoffers/updateofferstatus.jws",
		dataType: "json",
		//async:false,
		data: {
		"screenID":screenId, "offerName":offerName, "waveID":waveId, "origin":origin, "campaignId":campaignId, "copOfferStatus":copOfferStatus, "somOfferStatus":AcceptanceLevel, "accountIndex":accountIndex, "placementID":"OWTR","JFP_TOKEN":JFP_CSRF_TOKEN
	},
	contentType :'application/x-www-form-urlencoded',
	type: 'POST',
	complete: function(request, status) {
	},
	error: function(XMLHttpRequest, status, errorThrown) { 
	}, 
	success: function(data, status, xhr) {  
	}
	});
}

//TPR TPR1109014 COR Changes
function updateEventForLTO(screenId,offerName,origin,AcceptanceLevel,accountInstanceId,CampId,Category){ 
	var corOfferStatus=''; 
	var somOfferStatus=''; 
	if("COR"==origin){ 
		corOfferStatus=AcceptanceLevel; 

	} 
	else if("SOM"==origin){ 
		somOfferStatus=AcceptanceLevel; 
	} 
	jQuery.ajax({ 
		url: "/US/REST/manageoffers/updateofferstatus.jws", 
		dataType: "json",
		async:false,
		data: { 
		"screenID":screenId, "offerName":offerName,  "corOfferStatus":corOfferStatus, "somOfferStatus":somOfferStatus, "accountIndex":accountInstanceId, "FBROfferID":CampId,"FBRCat":Category,"origin":origin,"JFP_TOKEN":JFP_CSRF_TOKEN 
	}, 
	contentType :'application/x-www-form-urlencoded', 
	type: 'POST', 
	complete: function(request, status) { 
	}, 
	error: function(XMLHttpRequest, status, errorThrown) { 
	}, 
	success: function(data, status, xhr) {   
	} 
	}); 

} 
//TPR TPR1109014 COR Changes
function updateAOMCORForMBAR(screenId,offerName,waveId,campaignId,origin,AcceptanceLevel,accountIndex,FBROfferID,FBRCat,currentMBPosition){
	if((offerName.indexOf("MBarOffer")==-1) && (offerName.indexOf("mBarLoadingImgDiv")==-1)){
		jQuery.ajax({
			url: "/US/REST/manageoffers/updateofferstatus.jws",
			dataType: "json",
			data: {
			"screenID":screenId, "offerName": offerName,"locationId":currentMBPosition,"waveID":waveId,"origin":origin,"campaignId":campaignId,"corOfferStatus":AcceptanceLevel,"accountIndex":accountIndex,"FBROfferID":FBROfferID,"FBRCat":FBRCat,"JFP_TOKEN":JFP_CSRF_TOKEN
		},
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
		});
	}
}
function updateAOMCORImgForCO(screenID,offerName,locID,waveId,campaignId,origin,FBROfferID,FBRCat){

	jQuery.ajax({
		url: "/US/REST/manageoffers/updateofferstatus.jws",
		dataType: "json",
		async:false,
		data : { "screenID": screenID, "placementID": locID, "offerName": offerName,"waveID":waveId,"origin":origin,"campaignId":campaignId,"corOfferStatus":"Clicked","FBROfferID":FBROfferID,"FBRCat":FBRCat,"JFP_TOKEN":JFP_CSRF_TOKEN},
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
	});

}

function updateAOMCORImgForSPFCO(screenID,offerName,locID,accountIndex,origin,waveId,campaignId,FBROfferID,FBRCat){
	jQuery.ajax({
		url: "/US/REST/manageoffers/updateofferstatus.jws",
		dataType: "json",
		async:false,
		data : { "screenID": screenID, "placementID": locID, "offerName": offerName,"waveID":waveId,"campaignId":campaignId,"accountIndex": accountIndex,"origin":origin,"corOfferStatus":"Clicked","FBROfferID":FBROfferID,"FBRCat":FBRCat,"JFP_TOKEN":JFP_CSRF_TOKEN },
		contentType :'application/x-www-form-urlencoded',
		type: 'POST',
		complete: function(request, status) {
		},
		error: function(XMLHttpRequest, status, errorThrown) { 
		}, 
		success: function(data, status, xhr) {  
		}
	});
}

//ADA Changes for CARDS Make a Payment Link
function makePaymentCreditCardForADA()
{
	if(isNPSMakePymtInFallback)
	{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=payment&selectedCCIndex="+accountInstanceID;
	}
	else
	{
		location.href="/US/CBOL/pnt/crecarpay/flow.action?destinationAccountIndex="+accountInstanceID;
	}
}
function makePaymentCreditCardForSTMT()
{
	if(isNPSMakePymtInFallback)
	{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=payment&selectedCCIndex="+selectedCCIndex;
	}
	else{
		if(selectedCCIndex==''){
			location.href="/US/CBOL/pnt/crecarpay/flow.action";
		}
		else{
			location.href="/US/CBOL/pnt/crecarpay/flow.action?destinationAccountIndex="+selectedCCIndex;
		}
	}
}
function seeAllStatementsNew(accountInstanceId){
	new Statements().seeAllStatementsLink(accountInstanceId);
}  


function getYodleefastLinkOverlay(){

	jQuery("#IFrameFastLink").html('<iframe id="samliframe" name="samliframe" style="width:765px; height:520px;" src="/US/NCSS/pfm/preparesso/flow.action?pfmtarget=PFMADDEXT&JFP_TOKEN='+JFP_CSRF_TOKEN+'"></iframe>');
	jQuery('#AddAnExternalAccount').jfpwidget('open');
}
// Cops redirect
function copsredirect()
{
	location.href="/US/JSO/SSO/Cards.do?targetAOApp=payment&selectedCCIndex="+accInstanceId;
}
function aoCopsRedirect()
{
	location.href="/US/JSO/SSO/Cards.do?targetAOApp=payment&selectedCCIndex="+globalSelectedInstanceId;
}
//Contact Info Redirect

function updatecontactinforedirecteditatpay(){
	location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceIdEdit;

}
function updatecontactinforedirectdelatpay(){
	location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceId;

}
function updatecontactinfoForSeedrw(){
	var accInstanceIdForDel = accInstanceIdDelDrw;
	if(accInstanceIdForDel.split("_")!=-1){
		var accInstanceIdSplit = accInstanceIdForDel.split("_");
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceIdSplit[0];
	}
	else{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceIdForDel; 
	}

}
function updatecontactinfoForAdddra(){    	
	var accInstanceId = accInstanceIdAddDrw;
	if(accInstanceId.split("_")!=-1){
		var accInstanceIdForAdd = accInstanceId.split("_");
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceIdForAdd[0];
	}
	else{
		location.href="/US/JSO/SSO/Cards.do?targetAOApp=namechange&selectedCCIndex="+accInstanceId; 
	}  		 

}

function REWDBarLaunchPage(speedBump, name, acctIndex, linkURL, waveId, campaignId, origin, pageDef){

	fireOfferURL(linkURL, speedBump);
	updateEventForLTO(pageDef,name,origin,'Clicked',acctIndex,campaignId,waveId);
}





function redirectTraNotSPF(){		 
	if(isTravelFallback == "false"){
		var instId = document.getElementById("cmlink_SvcTravelManage").getAttribute("href").split("selectedCCIndex=");
		if(null != instId[1]) {		 		 
			location.href="/US/CBOL/amt/tranotlan/flow.action?selectedInstanceId="+instId[1]+"_"+instId[1];
		} else {
			location.href="/US/CBOL/amt/tranotlan/flow.action";
		}
	} else {
		location.href = document.getElementById("cmlink_SvcTravelManage").getAttribute("href");
	}
}

function redirectTraNotMRC(){
	if(isTravelFallback == "false"){
		var instId = document.getElementById("cmlink_ManageTravelNotifications").getAttribute("href").split("selectedCCIndex=");

		if(null != instId[1]) {		 		 
			location.href="/US/CBOL/amt/tranotlan/flow.action?selectedInstanceId="+instId[1]+"_"+instId[1];
		} else {
			location.href="/US/CBOL/amt/tranotlan/flow.action";
		}
	} else {
		location.href = document.getElementById("cmlink_ManageTravelNotifications").getAttribute("href");
	}
}

function activateNRIblockedCard(){
	lnk("/US/CBOL/cam/carposactdea/flow.action?cardType=credit&intc=2~2~51~1~070115~7~LoggedInCardActivation~MenuItem");
	
}

function reversePositionID(currentPositionId){
	var newposition = currentPositionId.split(",");
	var finalposition = "";
	var newpositionlength = newposition.length;

	for(var i=0;i<newpositionlength;i++){
		finalposition=finalposition+newposition[newpositionlength-(i+1)]+',';
	}

	finalposition=finalposition.substring(0,finalposition.length-1);
	return finalposition ;
}
