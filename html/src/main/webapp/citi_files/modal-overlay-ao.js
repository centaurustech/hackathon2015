var moPageTimer=null;
var _motimeout =420;
var _serverSession = 1;
//jQuery("head").append('<link rel="stylesheet" type="text/css" href="/JFP/css/jquery/plugins/modal-overlay-ao.css"/'+'>');

jQuery.rppmo = jQuery.fn.rppmo = function(options) {
			var defaults = {
							hide: true,
							overlay: true,
							urlPath: 'none',
							closeIcon: false,
							scrollBar: true,
							hSize: '250px',
							wSize: '450px',
							xLoc: 'none',     /* center the overlay */
							yLoc: 'none',     /* center the overlay */
							clientSession :'0',
							serverSession :'0'
							}
	       var opts = jQuery.extend(defaults, options);
		   var scrollbar = 'no';
		   if(opts.serverSession > 0)
		   {
				_serverSession = opts.serverSession;
		   }
		   else
		   {
				_serverSession = 1;
		   } 
		
			if(((jQuery('#moAO').html())!=null) || (typeof jQuery('#moAO').html() !='undefined')){
				jQuery('#moAO').empty().remove();
				jQuery('div#moAO_id').empty().remove();
			}
		
			if(opts.scrollBar){
				scrollbar='yes';
			}


						jQuery('div#moAO_id').empty().remove();
						jQuery("<div id='moAO_id' ></div>").appendTo('body'); 

						
						var moAO=jQuery('#moAO').html();
						var moAOClose=jQuery('#moAOClose').html();
						var hIframe = parseInt(opts.hSize); // + 50 + "px";
						
							
						if(opts.overlay){
							if(!moAO) {
								jQuery('#moAO_id').wrap('<div id="moAO"><div class="moAORow" id="moAOCtr"></div></div>');
								jQuery('#moAOCtr').before('<div class="moAORow" id="moAOTop"></div>');
								jQuery('#moAOCtr').after('<div class="moAORow" id="moAOBtm"></div>');
								jQuery('#moAO_id').css({backgroundColor: '#FFF'});  
							} 

							if(opts.clientSession > 0){ 
									_motimeout = opts.clientSession;
									moSessionTimeout(); 
								} 
								else{
								_motimeout = 420;
								}
						}
						if(opts.closeIcon && !moAOClose){
							jQuery('#moAOTop').prepend('<div id="moAOClose"><a href="#" class="moAOClose" ><img src="/JRS/greybox/w_close.gif" border="0" /></a></div>');
							if (jQuery.browser.msie) jQuery('div#moAOClose').css({left: '35px',top: '-1px'});
																
					}
						if (typeof document.body.style.maxHeight === "undefined") {//if IE 
							jQuery("body","html").css({height: "100%", width: "100%"});
							jQuery("html").css("overflow","hidden");
							if (jQuery("#moAOHideSelect").html() === null) {//iframe to hide select elements in ie6
								if(opts.overlay){
								jQuery("body").append("<iframe id='moAOHideSelect'></iframe><div id='moAOOverlay'></div><div id='moAOWindow'></div>");
								}
						
							}
						}else{
								if(opts.hide){
									jQuery("body").append("<div id='moAOOverlay'></div><div id='moAOWindow'></div>");
									jQuery("#moAOOverlay").addClass("moAOOverlayBG");
								}
						}
					//Display Content

							if(opts.overlay){
	 							  if(opts.hide){
									jQuery("#moAOOverlay").addClass("moAOOverlayBG");//use background and opacity
									}
									jQuery('#moAO_id').html('');
									if(opts.scrollBar){	
										jQuery('#moAO_id').append("<iframe frameborder='0' border='0' hspace='2'  src='"+opts.urlPath+"' id='moAOIframeContent' name='moAOIframeContent"+Math.round(Math.random()*1000)+"' class='iFrameInlineIEAO' width='98%' height='94%' scrolling='"+scrollbar+"'  ></iframe>");
									}
									else{
									jQuery('#moAO_id').append("<iframe  frameborder='0' border='0' hspace='2'  src='"+opts.urlPath+"' id='moAOIframeContent' name='moAOIframeContent"+Math.round(Math.random()*1000)+"' class='iFrameInlineIEAO' width='95%' height='95%'  scrolling='"+scrollbar+"'  ></iframe>");
									}
							
									if (jQuery.browser.msie){
									
										jQuery('#moAO').css({height: opts.hSize, width: opts.wSize});
										jQuery('#moAO_id').css({height: opts.hSize, width: 'auto'});
										//jQuery('#moAO').css({backgroundColor: '#FFF'});
										jQuery('#moAOClose').css({left: '10px'});
									}
									else
									{
										jQuery("#moAO").css({height: hIframe, width: opts.wSize});
									}
							} 
							else{
								jQuery('#moAO_id').html('');
								jQuery('#moAO_id').append("<iframe  frameborder='0' border='none' hspace='2' src='"+opts.urlPath+"' id='moAOIframeContent' name='moAOIframeContent"+Math.round(Math.random()*1000)+"' class='iFrameInlineIEAO' scrolling='no' width='"+opts.wSize+"' ></iframe>");
								jQuery('#moAOIframeContent').contents().find('body').css({"min-height": "100", "overflow" : "hidden","min-width":"100"}); 
								setInterval( "jQuery('#moAOIframeContent').height(jQuery('#moAOIframeContent').contents().find('body').height()+20);", 1); 
							}

						

						    	 /* Center the Overlay */ 
							if(opts.xLoc.toLowerCase() == 'none' && opts.yLoc.toLowerCase() == 'none')
									jQuery('#moAO').center(); 
							else if(opts.xLoc.toLowerCase() == 'none' && opts.yLoc.toLowerCase() != 'none')
							    {
									jQuery('#moAO_id').css({left: opts.yLoc});
								    jQuery("#moAO").css({left: opts.yLoc});
								}
							else if(opts.xLoc.toLowerCase() != 'none' && opts.yLoc.toLowerCase() == 'none')
								{
									jQuery('#moAO_id').css({top: opts.xLoc});
								    jQuery("#moAO").css({top: opts.xLoc});
								}
							else
								{
								    jQuery('#moAO_id').css({top: opts.xLoc, left: opts.yLoc});
								    jQuery("#moAO").css({top: opts.xLoc, left: opts.yLoc});
								}
							/* center the overlay ends Here */
							if (opts.xLoc.toLowerCase() != 'none' || opts.yLoc.toLowerCase() != 'none' || opts.hide == false) { 
							if (opts.overlay) jQuery('body').animate({ scrollTop: jQuery("#moAO").offset().top }, 100); 
							else jQuery('body').animate({ scrollTop: jQuery("#moAO_id").offset().top }, 100); 
							}
							// jQuery('#moAO').slideDown('500');
							jQuery('#moAO').fadeIn('slow');
							jQuery("body").css("overflow", "hidden");
							
							jQuery('.moAOClose').click(function(e){
							e.preventDefault();
 							jQuery.close();
 							
						}); 

				
	};	


	

var moSessionCount=0;
function moSessionRecovery(){
	jQuery("<iframe id='myAOTimeout' src='/SC.do?FS_ID=WIRES&SC-EVENT=KEEPALIVE' frameborder='0' border='0'  width='0' height='0'></iframe>").appendTo('body');
	if(moSessionCount >= _serverSession)
	{
	clear();
	}
	else{
	moSessionCount=moSessionCount+1;
	moSessionTimeout();
	}
}


function moSessionTimeout(){

if(moPageTimer) clearTimeout(moPageTimer);
setMoSessionTimeout();
}
function setMoSessionTimeout(){

if(typeof _motimeout != 'undefined'){
moPageTimer = setTimeout("moSessionRecovery()",_motimeout*1000);
jQuery("#myAOTimeout").empty().remove();
} 
}
function clear(){
if(moPageTimer) clearTimeout(moPageTimer);
jQuery("#myAOTimeout").empty().remove();
}


jQuery.fn.center = function () { 
    this.css("position","absolute"); 
	if (jQuery.browser.msie)  this.css("top", ( (jQuery(window).height() - this.height() ) / 2+(jQuery(window).scrollTop()))  + "px"); 
    else this.css("top", ( (jQuery(window).height() - this.height() ) / 3+(jQuery(window).scrollTop()) -8)  + "px"); 
    this.css("left", ( jQuery(window).width() - this.width() ) / 2+jQuery(window).scrollLeft() + "px"); 
   return this; 
}; 

jQuery.close = jQuery.fn.close = function(){ 
	jQuery("body").css("overflow", "auto");
	jQuery('#moAO').empty().remove();
	jQuery('#moAO_id').empty().remove();
	jQuery("#moAOHideSelect").remove();
	jQuery("#myAOTimeout").remove();
	clear();
	jQuery("#moAOOverlay").remove();
	jQuery("#moAOClose").remove();
}; 

function GB_hide() { jQuery.close();}