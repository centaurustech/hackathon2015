var __address,__zipcode,__city,__state,__st,__cszipmsg,__ekw,__ekwmsg,lpinterval=10000,lpWait=3000,sendMessageWindow,isBrandingSessionMapped;


if(typeof _u == 'undefined') _u = 'visitor';
if(typeof _site == 'undefined') _site = 'FEDERATED';
if(typeof _pgi == 'undefined') _pgi = 'citi.bridgetrack.com';
if(typeof isCitibank == 'undefined') isCitibank=false;
if(typeof _f == 'undefined') _f= "NO";
if(typeof _jfp == 'undefined') _jfp= false;

function lpAvailabilityCheckInit() {
	if (typeof lpMTagConfig != "undefined" && typeof lpMTagConfig.pluginCode != "undefined") {
		lpAvailabilityCheck(lpinterval);
	} else {
		setTimeout("lpAvailabilityCheckInit()",lpWait);
	}
}

/***

	Flyout plugin
	
	Create animated flyouts that will not crash against each other.
	You can set it so that a flyout will always close before any other flyouts open.
	
	Date   : 6/6/2011
	
***/
if(typeof $jq=="undefined"){$jq=jQuery}
(function($) {

	function findInArray (array, value, start) {
		var i, start = start || 0;
		for ( i = start; i < array.length; i++ ) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	}
	
	/* flyout controller object */
	var flyoutCtrl = (function(){
		var cache = null;
		var ready = true;
		
		var getCache = function() {
			return cache;
		};
		var hasInCache = function(flyoutObj) {
			return (flyoutObj === cache.flyout) ? true : false;
		};
		var isCacheEmpty = function() {
			return (cache === null) ? true : false;
		};
		var setCache = function(flyout) {
			return cache = flyout;
		};
		
		return {
			openFlyout : function (flyoutObj, direction, speed, remainOpen, openBtn) {
				if (ready && !flyoutObj.data('open')){
					ready = false;
					flyoutObj.data('open', true);
					
					if (isCacheEmpty()) {
						if (!remainOpen) {
							// Because if it's NOT set to remain open it should close before the next flyout opens
							setCache({
								flyout : flyoutObj, 
								direction : direction,
								speed : speed,
								initiator : openBtn });
						}
						openBtn.addClass('active');
						flyoutObj.triggerHandler('async.flyout.open', [direction, speed, function(){
							ready = true;
						}]);
					} else {
						// close flyout stored in cache and then remove it from the cache
						var cacheFlyout = getCache();

						cacheFlyout.flyout.triggerHandler('async.flyout.close', [cacheFlyout.direction, cacheFlyout.speed, function(){
							cacheFlyout.initiator.removeClass('active');
							cacheFlyout.flyout.data('open', false);
							setCache( null );	// Empty cache
							if (!remainOpen) {
								// Because if it's NOT set to remain open it should close before the next flyout opens
								setCache({
									flyout : flyoutObj, 
									direction : direction,
									speed : speed,
									initiator : openBtn	});
							}
							openBtn.addClass('active');
							flyoutObj.triggerHandler('async.flyout.open', [direction, speed, function(){
								ready = true;
							}]);
						}]);
					}
					return 'flyout.open';
				}
				return false;
			},
			closeFlyout : function (flyoutObj, direction, speed, remainOpen, closeBtn) {
				if (ready && flyoutObj.data('open')){
					ready = false;
					flyoutObj.data('open', false);
					
					if (isCacheEmpty()) {
						flyoutObj.triggerHandler('async.flyout.close', [direction, speed, function(){
							ready = true;
						}]);
					} else {
						if (hasInCache(flyoutObj)) {
							var cacheFlyout = getCache();
							// close the flyout object and empty the cache
							flyoutObj.triggerHandler('async.flyout.close', [direction, speed, function(){
								cacheFlyout.initiator.removeClass('active');
								setCache( null );	// Empty cache
								ready = true;
							}]);
						} else {
							var cacheFlyout = getCache();
							// close flyout stored in cache, remove it from the cache and then close the current flyout
							cacheFlyout.flyout.triggerHandler('async.flyout.close', [cacheFlyout.direction, cacheFlyout.speed, function(){
								cacheFlyout.initiator.removeClass('active');
								cacheFlyout.flyout.data('open', false);
								setCache( null );	// Empty cache
								flyoutObj.triggerHandler('async.flyout.close', [direction, speed, function(){
									ready = true;
								}]);
							}]);
						}
					}
					return 'flyout.close';
				}
				return false;
			}	
		}
	})();
	
	$.fn.flyout = function(options) {
	
		var opts = $.extend({}, $.fn.flyout.defaults, options);
		
		var setOpenHandlers = function(flyoutObj, opts) {
			var selectorArray = opts.openSelectors;
			
			for(var i = 0; i < selectorArray.length; i++) {
				$(selectorArray[i]).
					bind('click.flyout.open', function(e) {
						if (e.target === this || $.contains(this, e.target)) {
							flyoutCtrl.openFlyout(flyoutObj, opts.direction, opts.openSpeed, opts.remainOpen, $(this));
						}
					});
			}
		};
		
		var setCloseHandlers = function(flyoutObj, opts) {
			var selectorArray = opts.closeSelectors,
				flyoutDOM = flyoutObj.get(0),
				htmlDOM = document.getElementsByTagName('html')[0];

			if (!opts.remainOpen) {
				// Add the html selector to the selectorArray so the flyout is always closed
				if ( findInArray(selectorArray, 'html') < 0) {
					selectorArray.push('html');
				}
			}
			for(var i = 0; i < selectorArray.length; i++) {
				$(selectorArray[i]).
					live('click.flyout.close', function(e) {
						var target = e.target;
						// Ignore all events triggered by DOM elements inside the flyout unless they're one of the selectors in the array
						// or one of its descendants
						if ((target === this || (this != htmlDOM && $.contains(this, target))) || 
							 (target !== flyoutDOM && !$.contains(flyoutDOM, target))) {
							flyoutCtrl.closeFlyout(flyoutObj, opts.direction, opts.closeSpeed, opts.remainOpen, $(this));
						}
					});
			}
		};
		
		return this.each(function() {
		
			// console.log('constructing flyout ...');
			// console.log(opts);
			
			var $this = $(this);
			$this.data('open', opts.openByDefault);
						
			$.fn.flyoutSetup($this, opts);

			$this.bind('async.flyout.open', function (event, direction, speed, callback) {
				opts.openAnimation.call( $this, direction, speed, opts.openData, callback );
			});
			$this.bind('async.flyout.close', function (event, direction, speed, callback) {
				opts.closeAnimation.call( $this, direction, speed, opts.closeData, callback );
			});
			setOpenHandlers($this, opts);
			setCloseHandlers($this, opts);
		});
	}
	
	$.fn.flyoutSetup = function (flyout, options) {
		if ( options.direction == 'vertical' ) {
			flyout.data('dimension', flyout.css('height'));
			if (!options.openByDefault) {
				flyout.css({ 'display' : 'none',
							'visibility' : 'hidden',
							'height' : 0}).
					children().css('opacity', 0);
			}
		} else {
			// horizontal flyout
			flyout.data('dimension', flyout.css('width'));
			if (!options.openByDefault) {
				flyout.css({ 'display' : 'none',
							'visibility' : 'hidden',
							'width' : 0}).
					children().css('opacity', 0);				
			}
		}
	};
	
	$.fn.flyoutOpenAnimation = function ( direction, speed, data, callback ) {
		return this.each( function(i) {
			
			var $this = $(this);
			var dimension = $this.data('dimension'),
				speedFade = speed/2;
				
			
			
			$this.css({ 'display' : 'block',
						'visibility' : 'hidden',
						'height' : 'auto' });
						
				dimension = $this.height();
				
			$this.css({ 'display' : 'block',
						'visibility' : 'visible',
						'height' : '0' });
						
						
						
			if ( direction == 'vertical' ) {
				$this.animate({ 'height' : dimension }, speed, function() {
				
					// console.log('opened flyout');
					$(this).children().animate({opacity: 1.0}, speedFade);
					if (typeof callback == 'function') {
						callback();
					}
				});
			} else {
				$this.animate({ 'width' : dimension }, speed, function() {
				
					// console.log('opened flyout');
					$(this).children().animate({opacity: 1.0}, speedFade);
					if (typeof callback == 'function') {
						callback();
					}
				});
			}
		});
	};
	
	$.fn.flyoutCloseAnimation = function ( direction, speed, data, callback ) {
		
		return this.each( function(i) {
			
			var $this = $(this);
			var dimension = $this.data('dimension'),
				speedFade = speed/2,
				runOnce = true;
			
			$this.children().animate({opacity: 0}, speedFade, function(){
				if (runOnce) {
					runOnce = false;
				  
					if ( direction == 'vertical' ) {
						$this.animate({ 'height' : 0 }, speed, function(){
						
							$this.css({ 'display' : 'none',
										'visibility' : 'hidden' });
							// console.log('closed flyout');
							if (typeof callback == 'function') {
								callback();
							}
						});
					} else {
						$this.animate({ 'width' : 0 }, speed, function(){
						
							$this.css({ 'display' : 'none',
										'visibility' : 'hidden' });
							// console.log('closed flyout');
							if (typeof callback == 'function') {
								callback();
							}
						});
					}
				}
			});
		});
	};
	
	$.fn.flyout.defaults = {
		openSelectors: [],		// eg. 'a.open'
		closeSelectors: [],		// eg. 'a.close'
		openAnimation: $.fn.flyoutOpenAnimation,
		openSpeed : 600, 		// animation speed (in milliseconds) at which the flyouts open
		openData : {},			// additional data you may need for custom animations
		closeAnimation: $.fn.flyoutCloseAnimation,
		closeSpeed : 600,		 // animation speed (in milliseconds) at which the flyouts close
		closeData : {},			// additional data you may need for custom animations
		remainOpen : false,		// only close the flyout if one of the close selectors is clicked
		direction : 'vertical', // 'vertical' or 'horizontal'
		openByDefault : false	// the default state of the flyout is closed by default
	};
})($jq);

(function($) {
	/* Override functions */
	if ($.browser.msie && parseFloat($.browser.version) < 9) {
		
		$.fn.flyoutSetup = function (flyout, options) {
			
			function string_inject(sSource, aValues) {  
				var i = 0;  
				if (aValues && aValues.length) {  
					return sSource.replace(/\{\d+\}/g, function(substr) {  
						var sValue = aValues[i];  
	   
						if (sValue) {  
							i += 1;  
							return sValue;  
						}  
						else {  
							return substr;  
						}  
					})  
				}  
				return sSource;  
			};
			
			if ( options.direction == 'vertical' ) {
				var flyoutTemplate = '<div class="l"></div>' +
							 '<div class="c">{1}</div>' +
							 '<div class="r"></div>' +
							 '<div class="bl"></div>' +
							 '<div class="b"></div>' +
							 '<div class="br"></div>';
				var height = flyout.css('height');
				var contents = [];
				
				flyout.data('dimension', height);
				contents = flyout.html();
				contents = string_inject(flyoutTemplate, [ contents ]);
				flyout.html(contents);
				
				if (!options.openByDefault) {
					flyout.css({ 'display' : 'none',
								'visibility' : 'hidden',
								'height' : 0});
				}
			} 
	
		};
	$.fn.flyoutOpenAnimation = function ( direction, speed, data, callback ) {

			return this.each( function(i) {
				
				var $this = $(this);
				var dimension = $this.data('dimension');
				
			$this.css({ 'display' : 'block',
						'visibility' : 'hidden',
						'height' : 'auto' });
						
				dimension = $this.height();
				
			$this.css({ 'display' : 'block',
						'visibility' : 'visible',
						'height' : '0' });
							
				if ( direction == 'vertical' ) {
					$this.animate({ 'height' : dimension }, speed, function() {
					
						// console.log('opened flyout');
						if (typeof callback == 'function') {
							callback();
						}
					});
				}
			});
		};
		
		$.fn.flyoutCloseAnimation = function ( direction, speed, data, callback ) {
		
			return this.each( function(i) {
				
				var $this = $(this);
				var dimension = $this.data('dimension'),
					speedFade = speed/2,
					runOnce = true;
				
				if ( direction == 'vertical' ) {
					$this.animate({ 'height' : 0 }, speed, function(){
					
						$this.css({ 'display' : 'none',
									'visibility' : 'hidden' });
						// console.log('closed flyout');
						if (typeof callback == 'function') {
							callback();
						}
					});
				} 
			});
		};
	}
})($jq);



(function($) {

	$.fn.defaultText = function(className) {
		var it = $(this);
		// Init travel contact default values
		it.each(function(){
		  var $this = $(this),
			  thisVal = $this.val(); 
		  
		  if (!thisVal || thisVal == $this[0].title) {
		  // Only initialize if a value hasn't already been set
			$this.addClass(className);
			$this.val($this[0].title);
		  }
		});

		it.focus(function() {
		  if ($(this).val() == $(this)[0].title) {
			$(this).removeClass(className);
			$(this).val("");
		  }
		});

		it.blur(function() {
		  if ($(this).val() == "") {
			$(this).addClass(className);
			$(this).val($(this)[0].title);
		  }
		});
	}
function _lpContactUsVar() {
if (typeof lpMTagConfig != "undefined" && typeof lpMTagConfig.pluginCode != "undefined") {
if(lpMTagConfig.dynButton0.buttonState=="online"){
lpSendData('page','needHelpShown','true');
} 	} }

$(document).ready(function() {
	if($('#brandingData_yodlee').length > 0){
		var yodleeUrls = $('#brandingData_yodlee').html().split(',');
		var yodleeSectionUrl = location.protocol+'//'+location.hostname+location.pathname;
		for(var i=0; i < yodleeUrls.length; i++){
			var urlMatched = yodleeUrls[i].toLowerCase();
			if(yodleeSectionUrl.toLowerCase() == urlMatched){
				delayPageTimeout(10000);
			}
		}
	}
if ($.browser.msie) {
	switch ($.browser.version) {
	case '7.0':
		var browserIE = 'vIE7';
		break;
	case '8.0':
		var browserIE = 'vIE8';
		break;
	case '9.0':
		var browserIE = 'vIE9';
		break;		
	default:
		break;
	}
	
	if(!($('#citilmHeader').hasClass(browserIE))){
			$('#citilmHeader').addClass(browserIE).addClass('bIE');			
		}
	
}

var year=$jq("#br_year, .br_year");
if(year.length >0 && year.html()=="") 
year.html((new Date()).getFullYear());

var isSignOn=false;
var elm_SendMsg = document.getElementById("SendAMessage"),
classname = elm_SendMsg ? elm_SendMsg.className.toString() : "";
var classname1="message ";
 if(classname == classname1) {
 isSignOn=true;
 }
 else {
 isSignOn=false;
 }  

		var isDroPDownCondition;
		if(isSignOn){
			isDroPDownCondition=$("#contactFlyout li").not(".hidden").length > 1;
		}
		else{
			isDroPDownCondition=$jq("#lpButtonNeedHelp a").length >0;
		}

		if(isSignOn) {
				if ($("#contactFlyout li").not(".hidden").length >1) {  
					$('#contactTool a.flyoutBtn').addClass('dropdownTool');
				} 
		}
		else {	
			try{		
				$('#contactTool_off a.flyoutBtn').parent().attr('id', 'contactTool');
			}
			catch(e){console.log(e)};
		}
		
		var bindparam="#contactTool a.flyoutBtn";

		$(bindparam).bind("click", function() {
				if(_u !='visitor' && !$('#contactTool a.flyoutBtn').hasClass('active')  ){
				_lpContactUsVar();
				}

		if(isSignOn) {
			if ($jq("#lpButtonNeedHelp a").length >0)  { 
				$('#contactUsFlyout-LPBucket').removeClass('hidden');
				$('#lpContentDrop').removeClass('hidden');
				} 
				else {
				$('#contactUsFlyout-LPBucket').addClass('hidden');
				$('#lpContentDrop').addClass('hidden');
				}
		}
		else {
				if ($jq("#lpButtonNeedHelp a").length >0)  {
						$('#contactUsFlyout-LPBucket').removeClass('hidden');
						$('#lpContentDrop').removeClass('hidden');
				} 
				
				else {
						$('#contactUsFlyout-LPBucket').addClass('hidden');
						$('#lpContentDrop').addClass('hidden');
						var a = $("#contactFlyout li").not(".hidden").find("a"); 
						location.href=a.attr("href");
						try{		
							$('#contactFlyout').css({left: -2000});
							$('#contactTool a.flyoutBtn').addClass('inactive');
						}
						catch(e){console.log(e)};
				}
			}
		});

		var contactparam='#contactTool a.flyoutBtn';
				$("input.defaultText").defaultText("defaultTextActive");
				$("#finderFlyout").flyout({
					openSelectors : ['#finderTool a.flyoutBtn'],
					openAnimation: $.fn.flyoutOpenAnimation,
					closeSelectors : ['#finderTool a.flyoutBtn', '#finderFlyout a'],
					closeAnimation: $.fn.flyoutCloseAnimation
				});
				$("body").append("<a href='#' tabindex='-1' class='hiddenSkipNav' aria-hidden='true' id='contactToolFlyoutHandler'></a>");
				
			   if(isSignOn) {	
					if ($("#contactFlyout li").not(".hidden").length > 1){
						contactparam='#contactTool a.flyoutBtn';
					}
			   }			   
				$("#contactFlyout").flyout({

					openSelectors : [contactparam],
					openAnimation: $.fn.flyoutOpenAnimation,
					closeSelectors : ['#contactTool a.flyoutBtn', '#SendAMessage a', '#contactUsFlyout-LPBucket', '#contactFlyout li.contact'],
					closeAnimation: $.fn.flyoutCloseAnimation
				});
				$("#signOnFlyout").flyout({
					openSelectors : ['#signOnTool a.flyoutBtn'],
					openAnimation: $.fn.flyoutOpenAnimation,
					closeSelectors : ['#signOnTool a.flyoutBtn', '#signOnFlyout a'],
					closeAnimation: $.fn.flyoutCloseAnimation
				});
				
				$("#messageflyout").flyout({
					openSelectors : ['#user_messages > a'],
					openAnimation: $.fn.flyoutOpenAnimation,
					closeSelectors : ['#user_messages > a'],
					closeAnimation: $.fn.flyoutCloseAnimation
				});
				$('#user_messages > a').click(function() {
					var $content = $("#messageflyout").find('.c');
					if($content.is('div')) 
					{
						var $list = $content.find('#flyoutmsglist');
						var $msg = $content.find('#flyoutallmsg');
						var $l = $("#messageflyout").find('.l');
						var $r = $("#messageflyout").find('.r');
						
						$l.height(
							$list.outerHeight() + $msg.outerHeight()
						);
						$r.height(
							$list.outerHeight() + $msg.outerHeight()
						);
					}
				});
				$("#ratesFlyout").flyout({
					openSelectors : ['#ratesTool a.flyoutBtn'],
					openAnimation: $.fn.flyoutOpenAnimation,
					closeSelectors : ['#ratesTool a.flyoutBtn', '#ratesFlyout a'],
					closeAnimation: $.fn.flyoutCloseAnimation
				});
				
	});
	
	$(document).ready(function() {
		lpAvailabilityCheckInit();
   		$("input.defaultText").defaultText("defaultTextActive");
		//$("input.defaultText").removeClass('defaultTextActive');
		//$("input.defaultText").addClass('ac_input');
	});
	
	
	$(document).ready(function() {
	__address = $("input#street").val();
	__zipcode =  $("input#zip").val();
	__city =  $("input#city").val();
	__state =  $("input#state").val();
	__st =  $("input#state").val();
	__ekw =  $("input#search").val();
	//convert to ES
	__cszipmsg='Please enter either city and state or a ZIP code';
	__ekwmsg='Enter keywords for search';
    
    initMLC()
	
	
	});
	
})($jq);


if(typeof _u == 'undefined') _u = 'visitor';
if(typeof _site == 'undefined') _site = 'CBOL';
if(typeof _pgi == 'undefined') _pgi = 'citi.bridgetrack.com';
if(typeof isCitibank == 'undefined') isCitibank=false;

function footer(){}

function displayOverlay() {                                          
	$('#advanceSearch-overlay').jfpwidget('open');
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
var child_win=null;
function launchPopup(url,winName,winParams){
	url = getFinalURL(url, true);
	if(winName=='_top'){top.location.href=url; return;}

	var cookie=document.cookie.split("; ")

	if(tv(cookie,'BV_IDS')!=''){
		winName=tv(cookie,'BV_IDS');
		winName=winName.substring(38,48);
	}	

	if(winName==null||winName=='')
		winName='childWin';

	if (winParams != null && winParams != '') {
		if (winParams.indexOf('location') == -1) {
			winParams += ',location=1';
		}
		if (winParams.indexOf('toolbar') == -1) {
			winParams += ',toolbar=1';
		}
		if (winParams.indexOf(',persist=T') != -1) {
			winParams = winParams.replace(',persist=T','');
			var myWindow = window.open(url,winName,winParams);
			myWindow.focus();
			return;
		}
	}
		
	if(child_win!=null&&!child_win.closed)
		child_win.close();
	child_win=window.open(url,winName,winParams);
	child_win.focus();
}

function sof(p) {
	lnkSignOff = getBrandingData("lnkSignOff");
	var v = typeof(p)!='undefined'?p:'';
	if (_site != 'CBOL'){
		lnk(lnkSignOff);
	}else {
		if(typeof(top.child_win)!='undefined'&&top.child_win!=null&&!top.child_win.closed)
				top.child_win.close();
		if((v=="")&&(typeof(top.soffer)!='undefined'&&top.soffer=="Y"))
			lnk(lnkSignOff);
		else {
			top.logoff="LOGOFF_ONLY";
			top.location.href=lnkThanks+v+"&rand="+Math.random();
		}
	}
}

function getBrandingData(data) {
	return $jq("#brandingData_"+data+" a").length > 0 ? $jq("#brandingData_"+data+" a").html() : $jq("#brandingData_"+data).html();
}

function getFinalURL(url, webServer) {
	var pathnamePrefix = new RegExp(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''), "g");
	url = url.replace(pathnamePrefix, "");
	if (url.toLowerCase().substring(0, 4) != "http") {
		var sPath = getBrandingData("serverPath").toLowerCase();
		var webServer = typeof(webServer)!='undefined' && webServer;
		if (!webServer && url.toLowerCase().substring(0, sPath.length) != sPath) {
			url = getBrandingData("appPath") + url;
		} else {
			url = getBrandingData("serverDomain") + url;
		}
	}
	if ($jq("#locale_lang").length > 0 && url.indexOf("Welcome.c") == -1  && url.indexOf("locale=") == -1) {
		if (url.indexOf("?") > 0) {
			url = url + "&locale="+$jq("#locale_lang").val()+"_US";
		} else {
			url = url + "?locale="+$jq("#locale_lang").val()+"_US";
		}
	}
	
	return url;
}

function lnk(url, webServer){
	url = getFinalURL(url, webServer);
	//R152 QonCSRF Impl
	if(url.indexOf("JFP_TOKEN") > 0){
       		url=url;
       }
       else {             
          if (url.indexOf("?") > 0) {
            url = url + "&JFP_TOKEN="+JFP_CSRF_TOKEN;
          } else {
            url = url + "?JFP_TOKEN="+JFP_CSRF_TOKEN;
          }
       }
	if(_site=='CA'||_site=='JFP'){
		if(confirmGo()){
			if(_f=='NO') location.href=url;
			else top.frames[0].location.href=url;
		}
	}else{
		if(_f=='NO') location.href=url;
		else if(_jfp)top.location.href=url;
		else top.frames[0].location.href=url;
	}
}
function citiSearch(t){
	var f = document.getElementById(t);
	if (f.qt.value=='' || f.qt.value==__ekw) {
	alert(__ekwmsg);
		f.qt.focus();
		return false;
	}
	if(_site=='CA') {
		if(confirmGo()) {
			f.submit();
			return true;
		}
	} else {
		if(_f=='DA') f.target='_parent';
		f.submit();
		return true;
	}
}
var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
function checkForEnter(oEvent,f) {
	if ( oEvent.keyCode == 13 ) {
		if ( is_ie && isWin ) oEvent.returnValue=false;
		else oEvent.preventDefault();
		return searchLocations(f.id);
	}
}
function searchLocations(t) {
var f = document.getElementById(t);
	if((f.city.value ==''||f.city.value==__city) && (f.state.value==''||f.state.value==__state||f.state.value==__st) && (f.zip.value==''||f.zip.value==__zipcode)) {
		alert(__cszipmsg);
		return false;
	} else if ((f.zip.value==''||f.zip.value==__zipcode) && ((f.city.value==''||f.city.value==__city) || (f.state.value==''||f.state.value==__state||f.state.value==__st))){
		alert(__cszipmsg);
		return false;
	}
	if (f.street.value==__address) f.street.value='';
	if (f.zip.value==__zipcode) f.zip.value='';
	if (f.city.value==__city) f.city.value='';
	if (f.state.value==__state||f.state.value==__st) f.state.value=''; else f.state.value = f.state.value.toUpperCase();
	f.target='_parent';
	f.submit();
	restoreSearchLocationsDefaults(f)
	return true;
}
function moreSrchLocations(t) {
	var f = document.getElementById(t);
	f.state.value='';
	f.street.value='';
	f.zip.value='';
	f.city.value='';
	f.state.value='';
	f.target='_parent';
	f.submit();
	restoreSearchLocationsDefaults(f)
	return true;
}
function restoreSearchLocationsDefaults(f) {
	f.zip.value=__zipcode;
	f.street.value=__address;
	f.city.value=__city;
	f.state.value=__state;
	$jq.flyout.hideAll();
}
function lnkCiti(url) {
	return url + (url.indexOf('?') == -1 ? _bc : '&'+_bc.substring(1));
}
function lnkChat(url) {
	var _bc="?_u="+_u+"&_uid="+_uid+"&BVE="+_d+"&BVP=/cgi-bin/"+_a+"/scripts/&BV_UseBVCookie=yes";
	return url + (url.indexOf('?') == -1 ? _bc : '&'+_bc.substring(1));
}
function psdetail(id) {
	return _j+_jcontext+"/JRS/pands/detail.do?ID="+id;
}
function trackdetail(id) {
	return _j+_jcontext+"/JRS/pands/detail.do?ID="+id;
}
function uidTrim(u) {
	if(u.length<=16)
		return u;
	return u.substring(0,16)+'&#133;';
}
function onMessageClick(){
	lnk(lnkSendReceiveMessages);
}

function topV(v) {
	if(typeof(eval('self.'+v))!='undefined')
		return eval('self.'+v);
	else if(typeof(eval("top."+v))!='undefined')
		return eval('top.'+v);
	else
		return null;
}
if (typeof(isAO)=='undefined') isAO=false;

var PRODUCTS = 'NNNNNNNNNNNNNNNNNN';
var PROFILE =	 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN';
//                        1111111111
//              01234567890123456789
if(_site == 'CBOL' || _site == 'JFP') {
PROFILE=topV('bv_profile')||PROFILE;
PRODUCTS=topV('bv_products')||PRODUCTS;
} else {
PROFILE=topV('_profile')||PROFILE;
PRODUCTS=topV('_products')||PRODUCTS;
}
if(typeof _isCitiGold!='undefined' && _isCitiGold) PROFILE=PROFILE.substring(0,2)+'Y'+PROFILE.substring(3);
function isSSOFromSB() {	return PROFILE.substring(0,1)=='Y'; }
function isCitiGoldCore() {	return PROFILE.substring(1,2)=='Y'; }
function isCitiGold() {
	//For TRF20072504 IPB should show blue in Branding
	if (isIPB()||isGEB()){
		return false;
	}
	return (PROFILE.substring(2,3)=='Y'|| ( (typeof _pid != 'undefined') && (_pid=='LoginGold'||_pid=='MyCitiVisitorGold')));
}
function isIPB() {	return PROFILE.substring(3,4)=='Y'; }

function isPBG() {

	//CM|SA: additional parameter driven triggers

	return PROFILE.substring(4,5)=='Y' || (PROFILE == "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN" && (qstrparam("Promo_ID") == "SPBL" || qstrparam("Promo_ID") == "SPBS"));

}

//CM|SA: param read method

function qstrparam(name) {

	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

	var regexS = "[\\?&]"+name+"=([^&#]*)";

	var regex = new RegExp(regexS);

	var results = regex.exec(window.location.href);

	if(results == null) {

		return "";

	} else {

		return results[1];

	}

}

function isGEB() {	return PROFILE.substring(5,6)=='Y'; }
function isCPC() {	return PROFILE.substring(6,7)=='Y'; }
function isEnrolledInEquinox() {	return PROFILE.substring(7,8)=='Y'; }
function isBPActivate() {	return PROFILE.substring(8,9)=='Y'; }
function isNewUser() {	return PROFILE.substring(9,10)=='Y'; }
function hasProductOwned() {	return PROFILE.substring(10,11)=='Y'; }
function isBillPresentment() {	return PROFILE.substring(11,12)=='Y'; }
function isPaperless() {	return PROFILE.substring(12,13)=='Y'; }
function isIIT() {	return PROFILE.substring(13,14)=='Y'; }
function isThankYou() {	return PROFILE.substring(14,15)=='Y'; }
function isMBEligible() {	return PROFILE.substring(15,16)=='Y'; }
function isMBEnrolled() {	return PROFILE.substring(16,17)=='Y'; }
function isCheckingPlusEligible() {	return PROFILE.substring(17,18)=='Y'; }
function isMyFi() {	return PROFILE.substring(18,19)=='Y'; }
function isSB() {	return PROFILE.substring(19,20)=='Y'; }
function isCCinTY() {return PROFILE.substring(20,21)=='Y'; }
function isAMEXselect() {return PROFILE.substring(21,22)=='Y'; }
function isAMEXatm() {	return PROFILE.substring(22,23)=='Y'; }
function isAMEXtravel() {	return PROFILE.substring(23,24)=='Y'; }
function isAMEXtktAccess() {	return PROFILE.substring(24,25)=='Y'; }
function AOpromo() {	return PROFILE.substring(25,29)=='Y'; }
function isCCinTY() {	return PROFILE.substring(29,30)=='Y'; }
function isVANelig() {	return PROFILE.substring(30,31)=='Y'; }
function isTSCBOLEI() {	return PROFILE.substring(31,32)=='Y'; }
function isHiltonCC() {	return PROFILE.substring(32,33)=='Y'; }
function isCashbackCC() {	return PROFILE.substring(33,34)=='Y'; }
function isRIAMigrated() {	return PROFILE.substring(34,35)=='Y'; }
function hasChecking() {	return PRODUCTS.substring(0,1)=='Y'; }
function hasCheckingPlus() {	return PRODUCTS.substring(1,2)=='Y'; }
function hasBrokerage() {	return PRODUCTS.substring(2,3)=='Y'; }
function hasMarginAcct() {	return PRODUCTS.substring(3,4)=='Y'; }
function hasIRA() {	return PRODUCTS.substring(4,5)=='Y'; }
function hasCD() {	return PRODUCTS.substring(5,6)=='Y'; }
function hasCC() {	return PRODUCTS.substring(6,7)=='Y'; }
function hasMortgage() {	return PRODUCTS.substring(7,8)=='Y'; }
function hasSavings() {	return PRODUCTS.substring(8,9)=='Y'; }
function hasIMMA() {	return PRODUCTS.substring(9,10)=='Y'; }
function hasOtherRetmnt() {	return PRODUCTS.substring(10,11)=='Y'; }
function hasUnsecCrdt() {	return PRODUCTS.substring(11,12)=='Y'; }
function hasSecCrdt() {	return PRODUCTS.substring(12,13)=='Y'; }
function hasUnsecLoan() {	return PRODUCTS.substring(13,14)=='Y'; }
function hasSecuredLoan() {	return PRODUCTS.substring(14,15)=='Y'; }
function hasBusinessAcct() {	return PRODUCTS.substring(15,16)=='Y'; }
function hasMiscAcct() {	return PRODUCTS.substring(16,17)=='Y'; }
function isCitigold() { return isCitiGold(); }
function isCustomer() { return (_u == 'customer'); }
function isBanker() { return (_u == 'banker'); }
function isInvestor() { return (_u == 'investor'); }
function isFriend() { return (_u == 'friend' || _u == 'registered_user'); }
function isRegisteredUser() { return (_u == 'registered_user'); }
function isVisitor() { return (_u == 'visitor'); }
function isMember() { return (isBanker() || isInvestor() || isCustomer()); }
if(typeof _locale == 'undefined') _locale = 'en_US_USPTL';
var cntMessages=0;
var _uid='';
var _dta='';
var _ll='';
var _mid='';

// _jfp: true=converted; false=not converted;
// this variable is expected to be defined as a client-side javascript variable on each page sporting full navigational branding.
if(typeof _jfp == 'undefined')
	var _jfp = false;
else {
	if (_jfp == true || _jfp == 'true') _jfp = true;
	else _jfp = false;
}
var _j = typeof _j == 'undefined'?getBrandingData("appPath"):_j;
var _jcontext= typeof _jcontext != 'undefined'?_jcontext:'/US';
if(typeof _dh == 'undefined') {
	if(_site != 'CITI') _dh = _j + '/JRS';
	else _dh = _d;
}



// PBG customer
var _pbg = isPBG()?"_pbg":"";
if(isPBG()) {
	__sonimg="signon_pbg.gif";
	__soffimg="signoff_pbg.gif";
}
if(typeof(_f)=='undefined') _f='NO';
var classIE="", mainnavFlyoutIE="";
 {
	var useragent = navigator.userAgent;
	if((useragent.indexOf("MSIE 6") != -1 || useragent.indexOf("MSIE 5.5") != -1)){
		classIE = "-ie";
		mainnavFlyoutIE = " mainnav-flyout-ie";
 }
}

//OnLoad
//s.hier1
function initMLC(){
	var mlc=document.getElementById('cbol-footer-mlc');
	if(mlc!=null){
		if(!isTestDomain())
			mlc.style.color="#ffffff";
		if(typeof s != 'undefined' && typeof s.hier1 != 'undefined' && s.hier1 != ''){
			mlc.innerHTML=s.hier1+'/'+s.pageName.replace(/\+/g,' ');
		}
		if(typeof _server != 'undefined') document.getElementById('cbol-footer-server').innerHTML = _server;
	}
	if (_site == 'CBOL' && top != self) top.pageload=true;
}
function isTestDomain(){
	v = /\.citicorp.com$|\.citicorp.com:[0-9]{4}$|\.citigroup.net$|\.citibankonlineqa.com$|\.nam.nsroot.net$|\localhost$|\localhost:[0-9]{4}$/;
	return v.test(document.domain);
}

$jq(document).ready(function() { 
	setPageTimeout();
});


//Open or close msgToolTip
function msgToolTip(state){
	document.getElementById("tip-flyout").style.left = (document.getElementById("message-indicator").offsetWidth + 31) + "px";
	if(state){
		document.getElementById("tip-flyout").style.display = "block";
	}else{
		document.getElementById("tip-flyout").style.display = "none";
	}
}
var num_of_display = 10; //window.location.search.replace('?links=','') || 10;


// to store globally available utility functions
var helpers = {
	getElementsByClazzName : function(strClass, strTag, objContElm) {
		strTag = strTag || "*";
		objContElm = objContElm || document;
		var objColl = (strTag == '*' && document.all) ? document.all : objContElm.getElementsByTagName(strTag);
		var arr = new Array();
		var delim = strClass.indexOf('|') != -1  ? '|' : ' ';
		var arrClass = strClass.split(delim);
		for (var i = 0, j = objColl.length; i < j; i++) {
			var arrObjClass = objColl[i].className.split(' ');
			if (delim == ' ' && arrClass.length > arrObjClass.length) continue;
			var c = 0;
    comparisonLoop:
    for (var k = 0, l = arrObjClass.length; k < l; k++) {
      for (var m = 0, n = arrClass.length; m < n; m++) {
        if (arrClass[m] == arrObjClass[k]) c++;
        if (( delim == '|' && c == 1) || (delim == ' ' && c == arrClass.length)) {
          arr.push(objColl[i]);
          break comparisonLoop;
        }
      }
    }
		}
	  	return arr;
	},
	cssjs : function (a,o,c1,c2) {
		switch (a){
			case 'swap':
				o.className=!this.cssjs('check',o,c1)?o.className.replace(c2,c1):o.className.replace(c1,c2);
			break;
			case 'add':
				if(!this.cssjs('check',o,c1)){o.className+=o.className?' '+c1:c1;}
			break;
			case 'remove':
				var rep=o.className.match(' '+c1)?' '+c1:c1;
				o.className=o.className.replace(rep,'');
			break;
			case 'check':
				return new RegExp('\\b'+c1+'\\b').test(o.className)
			break;
		}
	},
	checkParent: function(theNode,theParent) {
		var e = document.getElementById(theParent);
		if (e==null) return false;
		while(theNode.parentNode) {
			if(theNode==e) {
				return false;
			}
			theNode=theNode.parentNode;
		}
		return true;
	}
}
function signonHover(el){
	var src,ftype,newsrc;
	src = el.src;
	ftype = src.substring(src.lastIndexOf('.'),src.length);
	swapIndicator = "_on"
	theExp = new RegExp(swapIndicator);
	if(theExp.test(src)){
		newsrc = src.replace(swapIndicator,'');
	}else{
		newsrc = src.replace(ftype,swapIndicator+ftype);
	}
	el.src=newsrc;
}

var pageTimer=null;
function setPageTimeout(){
if(typeof _timeout != 'undefined' && _timeout != ''){
var val=parseInt(_timeout)+25;
pageTimer = setTimeout("callSessionCheck()",(val*1000));
}
} 

var delayTimer=null;
function delayPageTimeout(delay){
	if(pageTimer) clearTimeout(pageTimer);
	callSessionCheck();
	if(parseInt(delay) > 0){
		var val=parseInt(delay)-60;
		delayTimer = setTimeout("delayPageTimeout("+val+")",Math.min(60000, 1000*parseInt(delay)));
	}else{
		setPageTimeout();
	}
}

function resetPageTimeout(){
if(pageTimer) clearTimeout(pageTimer);
setPageTimeout();
}

var branding_sc_p3;
function sessionRecovery() {
	if(typeof sendMessageWindow != 'undefined') {
		if(!sendMessageWindow.closed) {
			sendMessageWindow.close();
		}
	} else {
		var w = window.open('', 'sndMsgWindow','width=1, height=1, toolbar=no, scrollbar=no, menubar=no, status=0, top=5000, left=5000');
		if (w != null) w.close();
	}
	if (branding_sc_p3=="BBUILDER"){
		location.href=getBrandingData("appPath") + '/JSO/signon/CBOLSessionRecovery.do?userType=BB';		
	}else{
		location.href=getBrandingData("appPath") + '/JSO/signon/CBOLSessionRecovery.do';
	}
}


function callSessionCheck(){

var path=getBrandingData("appPath")+ '/JRS/misc/CBOLServerAlive.do';

$jq("<script id='sessionTimeout' src='"+path+"'></script>").appendTo('body');
}

function sessionCheckReturn(banker){

	if(typeof banker!='undefined'){
		var checkReturnValue=banker;
		if(checkReturnValue == false){
			setPageTimeout();
		}
		else{
			sessionRecovery();
		}
			
	}
}

function beforeYouGo() {
	lnkSignOff = getBrandingData("lnkSignOff");
	if(typeof _byg == 'undefined' || _byg == null){
		FSR.run();
	}else{
		if(_byg == "true") { 
			document.getElementById('alertWindowOuter').style.width ="775px";
			document.getElementById('alertWindowContent').innerHTML = '<iframe frameborder=0 width="750" height="320" src="/US/JSO/signoff/GetSignOffAd.do" scrolling="no"></iframe>';
			grayOut(true);
			setTimeout("sof()", 2*60*1000); 
	   }else { 
			FSR.run();
		} 
	}
}

// Dupliccated the JS function to get rid of race condition happening in the dashboard page.
function lpShowButtonBranding(parentDIV, chatButtonDivID){
	document.getElementById(parentDIV).style.display = 'inline';
	document.getElementById(parentDIV).innerHTML = "<div id='"+chatButtonDivID+"'></div>";
	lpMTagConfig.pluginCode.deployDynButton.deployDynamicButton(chatButtonDivID);
}

function lpAvailabilityCheck(lpinterval){ 
	var needHelpParentObj = document.getElementById('needHelpParent'); 
	if(typeof needHelpParentObj != 'undefined'&& needHelpParentObj!=null){
		if(typeof lpShowButtonBranding != 'undefined'){ 
			setTimeout("lpShowButtonBranding('needHelpParent','lpButtonNeedHelp')",1000); 
			setTimeout("lpAvailabilityCheck(lpinterval)",lpinterval); 
		} 
	} 
}

function constructPFMURL(){ 
	
if(isCustomerInvestor=='Y' && isPWMInvesterOverlay =='Y'  && isBrandingSessionMapped ==undefined ) 
 { 
	$jq('#pfmOverlay').css({'display':'block'});

 }
	else{
		lnk('/NCSS/pfm/preparesso/flow.action?pfmtarget=PFMDASHBOARD')
	}

}


//Fix for messageFlyout
// >IE
/*$jq(window).load(function() {
	if ($jq.browser.msie && $jq.browser.version < 9) {
		var msgFlyout = $jq("#messageflyout").css({'display':'block','height':'auto'});
		msgFlyout.data('dimension', msgFlyout.css('height'));
	}
	
	
});

if($("#search").length){
	function selectItem(li) {
		document.forms["search-form"].submit();
	};

	var url ="/JRS/globalsearch/SearchAutoCompleteJsonP.do";
	$jq("#search").autocomplete(url,{maxItemsToShow:9,onItemSelect:selectItem});
}*/


//Site Search Platform Update CMS





(function() {
	
	var cx = '009695499870347544712:e3dyicpbrwu';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		'//www.google.com/cse/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();

/*document.write('<link href="/views/css/gss.css" rel="stylesheet" type="text/css">');*/

var gssCallback = function() {
  if (document.readyState == 'complete') {
    
    // Document is ready when CSE element is initialized.		 
	renderSearchControls();	
  } else {
  	google.setOnLoadCallback(renderSearchControls, false);
  
  }
};
var requestURL = new String(window.location);
var params = requestURL.split("/");
for(var i = 0; i < params.length; i++){
  if (params[i].search('Search.do') != -1) {
  	$('#body').empty();
  	var element = document.getElementById("body");

  	var h1Element = document.createElement("h1");
	h1Element.setAttribute("id","labelSearch");
	h1Element.innerHTML = "Search Results";

	element.appendChild(h1Element);

	var newElement = document.createElement("div");
	newElement.setAttribute("id", "resultsDiv");
	
	element.appendChild(newElement);
} 
}


//Had to redo this search
var gsearch2 = function(customSearchControl) {
	//var searchControl = google.search.cse.element.getElement('hkgcbSearch');	
  if(document.getElementById('gsc-i-id2').value != "") {
      //searchControl.execute(document.getElementById('gsc-i-id2').value);
      customSearchControl.execute(document.getElementById('gsc-i-id2').value);
  } else {
    alert("Enter keywords for search");
  }
};

var scEventL = function() {
var searchText=document.getElementById('gsc-i-id2').value;
if (typeof s!== 'undefined') {
	s.linkTrackVars="eVar5,eVar38,events";
	s.linkTrackEvents="event70";
	s.events="event70";
	s.eVar5=searchText;//Keyword
	s.eVar38=s.pageName;//Current page name
	s.tl(this,'o',"Search Term");
	}
};


var scEvent= function() {
var searchText=document.getElementById('gsc-i-id1').value;
if (typeof s!== 'undefined') {
	s.linkTrackVars="eVar5,eVar38,events";
s.linkTrackEvents="event70";
s.events="event70";
s.eVar5=searchText;//Keyword
s.eVar38=s.pageName;//Current page name
s.tl(this,'o',"Global Search Term");
}
};


var gsearch = function() {
	var searchControl = google.search.cse.element.getElement('hkgcbSearch');	
  if(document.getElementById('gsc-i-id1').value != "") {
      searchControl.execute(document.getElementById('gsc-i-id1').value);
      // searchBox.execute(document.getElementById('gsc-i-id1').value);
  } else {
    alert("Enter keywords for search");
  }
};

var searchComplete = function() {
	//Checks if there is no result by searching for no result div
   if($("div").hasClass("gs-no-results-result")){
		// alert("no result")
		if (typeof s!== 'undefined')
			s.linkTrackVars = "eVar5,eVar38,events";
		var searchText = jQuery('#gsc-i-id2').val();
		s.events="event71";
		s.eVar38=s.pageName;
		s.eVar5=searchText;
		s.t(this, 'o', 'Search Term');

	}
	//Otherwise there is a result
	else {
		// alert("There's a result!");
		if (typeof s!== 'undefined')
			s.linkTrackVars = "eVar5,eVar38";
		s.events = null;
		var searchText = jQuery('#gsc-i-id2').val();
		s.eVar5 = searchText;
		s.eVar38= s.pageName;
		s.t(this,'o', 'Search Term');
	}
}
var renderSearchControls = function() {


	if (document.getElementById('searchWrapper')) {
		google.search.cse.element.render(
		{
		  div: "searchWrapper",
		  tag: 'searchbox-only',
		  gname: 'hkgcbSearch',
		  attributes: {resultsUrl: '/US/JRS/globalsearch/Search.do'}
		});	
		/*Remake of same search from above
		var boxDrawOptions = new google.search.DrawOptions();
		boxDrawOptions.enableSearchboxOnly('/US/JRS/globalsearch/Search.do');
		boxDrawOptions.setAutoComplete(true);
		var customSearchBox = new google.search.CustomSearchControl('009695499870347544712:e3dyicpbrwu');
		customSearchBox.draw('searchWrapper',boxDrawOptions);*/

	}
	

		$('#gsc-i-id1').keydown(function(e) {
	    	if(e.which == 13) {
			gsearch();
			scEvent();
	    	}
		});

		$(document).on('mouseup','.gsc-completion-selected', function() {
			if ( $(document.activeElement).prop('id') == 'gsc-i-id1') {
				$('#gsc-i-id1').val($('.gsc-completion-selected span').text());
				gsearch();
				scEvent();
			}
			else if ( $(document.activeElement).prop('id') == 'gsc-i-id2') {
				$('#gsc-i-id2').val($('.gsc-completion-selected span').text());
				gsearch2(customSearchControl);
				scEventL();
			}
		});


	if (document.getElementById('resultsDiv')) {

		var drawOptions = new google.search.DrawOptions();
		drawOptions.setAutoComplete(true);
		var customSearchControl = new google.search.CustomSearchControl('009695499870347544712:e3dyicpbrwu');
		
		customSearchControl.draw('resultsDiv',drawOptions);
		customSearchControl.setSearchCompleteCallback(customSearchControl, searchComplete, null);
		
		//Had to redo search as below search didn't allow for running functions after search results
		/*google.search.cse.element.render(
        {
          div: "resultsDiv",
          tag: 'searchresults-only',
		  gname: 'hkgcbSearch'
        });*/


        var newTD = document.createElement("td");
		newTD.setAttribute("id", "buttonTD");

		var test = document.getElementById("resultsDiv").firstChild.firstChild.firstChild;
		test.style.visibility = "visible";
		var test2 = test.firstChild;
		test2.style.display = "block";

		var sB = document.getElementById("gs_tti51");
		var parentSB = sB.parentNode;


		var newButton = document.createElement('input');
		//var sB = document.getElementById("gs_tti51");

		newButton.setAttribute("id","buttonSearch2");
		newButton.setAttribute("type", "button");
		// newButton.setAttribute("onclick", "javascript:gsearch2(customSearchControl);scEventL()");
		newButton.setAttribute("value","search");
		newTD.appendChild(newButton);

		parentSB.appendChild(newTD);

		$('.gsc-tabsAreaInvisible:first-child').before('<div class="searchTips">' +
		'<p><strong>Search Tips</strong></p>' +
		'<p><strong>Be Specific.</strong> Enter descriptive phrases (e.g., 1-year CD rates instead of just rates).</p>' +
		'<p><strong>Keep it simple.</strong> Ask questions in a plain, conversational way (e.g., Where can I find an ATM?).</p>' +
		'</div>');
		jQuery("#buttonSearch2").on('click',function() {
			gsearch2(customSearchControl);
			scEventL();
		});
		if ($('#gsc-i-id1').val() != "") {
			$('#gsc-i-id2').val($('#gsc-i-id1').val())
			$('#gsc-i-id1').val("");
			customSearchControl.execute(jQuery("#gsc-i-id2").val());
		} 
	} 

	
	$('#gsc-i-id2').keydown(function(e) {
	   	 if(e.which == 13) {
			gsearch2(customSearchControl);
			scEventL();

		}
	});


	
};



// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
window.__gcse = {
  callback: gssCallback
};

//concatenated with megaMenu.js('
$jq(document).ready(function($){
$.each([
    'banking',
    'creditcards',
    'lending',
    'investing',
    'business',
    'rewards',
    'services',
    'citigold'
  ], function (ind, name) {

    // On trigger click,
    // focus the first set of menu items
    $('#' + name).click(function () {
      var menu = $('#mm_' + name);
      var status = menu.attr('mm_status');

      if (!status || status == 'hide') {
        $('#mm_mask').show();
        var target = menu.find('#link' + (ind + 1));
        setTimeout(function () {
          target[0].focus();
        }, 500);
      }
    });

   // "Keydown" event within mega-menu dropdown areas
$('#mm_' + name).keydown(function (e) {
  var $firstStop = $('a', this).filter(':first');
  var $lastStop = $('a', this).filter(':last');
  var $default = $('li[tabindex=0]', this);
  var isDefault = e.target == $default[0];
  var isFirst = e.target == $firstStop[0];
  var isLast = e.target == $lastStop[0];
  var shift = e.shiftKey;
  var key = e.which;

  // "Escape" press
  if (key == 27) {
    $('a#' + name).click().focus();
  }
  // "Tab" press on last item
  else if (key == 9 && !shift && isLast) {
    e.preventDefault();
    $firstStop.focus();
  }
  // "Shift+Tab" press on:
  //   - first item
  //   - default-focused section
  else if (key == 9 && shift && (isFirst || isDefault)) {
    e.preventDefault();
    $lastStop.focus();
  }
});

  });
	//MegaMenuMonitor
	$.mmm = {
		//user set values
		arrowOffset: 9, //offset to centre arrow
		shadeDuration: 250, //duration of panel windowshade effect
		fadeDuration: 100, //duration of content fade effect
		outDelay: 0, //delay after user mouseout
		//end user set values
		
		requestQueue: new Array(),
		requestIndex: -1,
		requestActive: false,
		animationActive: false,
		queCheckActive: false,
		lastActive: null,
		lastActiveAnchor: null,
		menuHover: false,
		add: function(component, delay) {
			var l = $.mmm.requestQueue.length;
			if (l == 0 || component.component != $.mmm.requestQueue[l - 1].component) {
				$.mmm.requestQueue.push(component);
				if (!$.mmm.requestActive) setTimeout("$jq.mmm.checkQueue()", delay);
			}
		},
		checkQueue: function() {
			if (!$.mmm.queCheckActive) {
				$.mmm.queCheckActive = true;
				var ix = -1;
				var time = (new Date()).getTime();
				for (i=$.mmm.requestQueue.length-1;i>$.mmm.requestIndex;i--) {
					if ($.mmm.requestQueue[i].component != null) {
						if ($.mmm.lastActive == null || $.mmm.requestQueue[i].component.get(0) != $.mmm.lastActive.get(0)) {
							ix = i;
						}
						break;
					} else {
						if ($.mmm.lastActive != null && time - $.mmm.requestQueue[i].stamp >= $.mmm.outDelay) {
							ix = i;
						} else if ($.mmm.lastActive != null) {
							setTimeout("$jq.mmm.checkQueue()", $.mmm.outDelay/4);
						}
					}
				}
				if (ix > -1) {
					$.mmm.requestIndex = ix;
					$.mmm.handleRequest();
				}
				$.mmm.queCheckActive = false;
			}
		},
		handleRequest: function() {
			if (!$.mmm.requestActive) {
				$.mmm.requestActive = true;
				var request = $.mmm.requestQueue[$.mmm.requestIndex].component;
				if (request != null || !$.mmm.menuHover) {
					$.mmm.lastActive = request;
					var finish = function() {
							if ($.mmm.lastActiveAnchor != null) $.mmm.lastActiveAnchor.removeClass("active");
							$.mmm.lastActiveAnchor = $.mmm.requestQueue[$.mmm.requestIndex].anchor;
							$.mmm.requestActive = false;
							$.mmm.animationActive = false;
							setTimeout("$jq.mmm.checkQueue()", 0);
						};
					var handleShow = function() {
							$.mmm.doAnimationFunction(request, {opacity: 1}, $.mmm.fadeDuration, "show", "-", finish);
						}
					var handlePreShow = function() {
							if (request != null) {
								$.mmm.doAnimationFunction(request, {opacity: 0, "margin-left": 0}, 0, "preshow", "show", handleShow);
                                $(request).parents('#mm_container').attr('class', request.selector.replace('#','')+'_active');
							} else finish();
						}
					var handlePostHide = function() {
							var menus = $(".mm_menu");
							var toHide = null;
							for (i=0;i<menus.length;i++) {
								if ((request == null || menus.get(i) != request.get(0)) && $(menus.get(i)).css("margin-left") == "0px") {
									toHide = $(menus.get(i));
									break;
								}
							}
							if (toHide != null) {
							        setTimeout(function () {
									 if (!$(".active[mm_once]").length) $("#mm_mask").hide();}, 500);
								$.mmm.doAnimationFunction(toHide, {"margin-left": "-2000px"}, 0, "hide", "-", handlePreShow);
							} else {
								handlePreShow()
							}
						}
					var handleHide = function() {
							var menus = $(".mm_menu");
							var toHide = null;
							for (i=0;i<menus.length;i++) {
								if ((request == null || menus.get(i) != request.get(0)) && $(menus.get(i)).css("margin-left") == "0px") {
									toHide = $(menus.get(i));
									break;
								}
							}
							if (toHide != null) {
								$.mmm.doAnimationFunction(toHide, {opacity: 0}, $.mmm.fadeDuration, "fade", "-", handlePostHide);
							} else {
								handlePostHide()
							}
						}
					var handleTray = function() {
							var ele = $("#mm_mask");
							if (ele.css("top") < -ele.height()) ele.css({top: -ele.height()});
							if (request != null) {
								var tarHeight = Math.round($("#mm_container").height()/5)*5-1;
								$.mmm.doAnimationFunction(ele, {height: tarHeight}, $.mmm.shadeDuration, "show", "-", handleHide);
								$("#mm_container").css({height: tarHeight});
							} else {
								$.mmm.doAnimationFunction(ele, {height: 0}, $.mmm.shadeDuration, "hide", "-", handleHide);
							}
						}
					var handleArrow = function() {
							$.mmm.animationActive = true;
							if (request != null) {
								if ($.mmm.lastActiveAnchor != null) $.mmm.lastActiveAnchor.removeClass("active");
								if ($.mmm.requestQueue[$.mmm.requestIndex].anchor != null) $.mmm.requestQueue[$.mmm.requestIndex].anchor.addClass("active");
								var ele = $(".mm_a");
								var arrowX = $("#"+request.attr("id").substring(3)).parent().position().left + $.mmm.arrowOffset - ele.width() / 2 + $("#"+request.attr("id").substring(3)).width() / 2;
								ele.animate({left: arrowX}, $.mmm.fadeDuration);
							}
							handleTray();
						}
					handleArrow();
				} else $.mmm.requestActive = false;
			}
		},
		doAnimationFunction: function(ele, animation, duration, action, blocker, callback) {
			if (!(ele.attr("mm_status") == action || ele.attr("mm_status") == blocker)) {
				ele.attr("mm_status", action);
				ele.animate(animation, {duration: duration, queue: true, complete: function() {
						callback();
					}
				});
			} else callback();
		},
		checkOver: function(target, posx, posy) {
			var overMenu = posx >= target.offset().left;
			overMenu = overMenu && posy >= target.offset().top;
			overMenu = overMenu && posx < target.offset().left + target.innerWidth();
			overMenu = overMenu && posy < target.offset().top + target.innerHeight();
			return overMenu;
		}
	};
	/*
	//hover related
	$(".mm_target a").hoverIntent({
		over: function(){
			id = $(this).attr('id');
			if ($("#mm_"+id).length > 0) {
				$.mmm.add({component: $("#mm_"+id), stamp: (new Date()).getTime(), anchor: $(this)}, 0);
				eval($(this).attr('MM_once'));
				$(this).attr('MM_once', "");
			}
		},
		timeout: 0,
		out: function(){}
	});
	$("#mm_content").bind("mouseover", function(){
			$.mmm.menuHover = true;
			$.mmm.add({component: $.mmm.lastActive, stamp: (new Date()).getTime()}, 0);
		});
	$("body").bind("mousemove", function(e){
			if ($.mmm.lastActiveAnchor != null) {
				var posx = 0;
				var posy = 0;
				if (!e) var e = window.event;
				if (e.pageX || e.pageY) {
					posx = e.pageX;
					posy = e.pageY;
				}
				else if (e.clientX || e.clientY) {
					posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
					posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
				}
				
				var overMenu = $.mmm.checkOver($("#mm_content"), posx, posy);
				if (!overMenu && $.mmm.lastActiveAnchor != null) overMenu = $.mmm.checkOver($.mmm.lastActiveAnchor, posx, posy);
				
				if (!overMenu) {
					$.mmm.menuHover = false;
					$.mmm.add({component: null, stamp: (new Date()).getTime()}, $.mmm.outDelay);
				}
			}
		});
	*/
	$(".mm_target a").bind("click", function(e){
			id = $(this).attr('id');
			if ($("#mm_"+id).length > 0) {
				if ($.mmm.lastActiveAnchor == null || $.mmm.lastActiveAnchor.get(0) != $(this).get(0)) {
					$.mmm.add({component: $("#mm_"+id), stamp: (new Date()).getTime(), anchor: $(this)}, 0);
					try {
						eval($(this).attr('MM_once'));
					} catch (e) {}
					$(this).attr('MM_once', "");
				} else {
					$.mmm.menuHover = false;
					$.mmm.add({component: null, stamp: (new Date()).getTime()}, $.mmm.outDelay);
				}
			}
			return false;
		});
	$("html").bind("click", function(e){
			if ($.mmm.lastActiveAnchor != null) {
				var posx = 0;
				var posy = 0;
				if (!e) var e = window.event;
				if (e.pageX || e.pageY) {
					posx = e.pageX;
					posy = e.pageY;
				}
				else if (e.clientX || e.clientY) {
					posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
					posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
				}
				
				var overMenu = $.mmm.checkOver($("#mm_content"), posx, posy);
				if (!overMenu && $.mmm.lastActiveAnchor != null) overMenu = $.mmm.checkOver($.mmm.lastActiveAnchor, posx, posy);
				
				if (!overMenu) {
					$.mmm.menuHover = false;
					$.mmm.add({component: null, stamp: (new Date()).getTime()}, $.mmm.outDelay);
				}
			}
		});
	$(".mm_menu").css({opacity: 0, "margin-left": "-2000px"});
});