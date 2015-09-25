// Code to adds SiteCat calls to SOM offer elements
// Returns closure to keep variables out of global scope
function somOfferSiteCatTracking() {
	var urlParamRegex, ajaxUrlRegex, activeAjaxCalls = 0,
		// Components to use for jQuery selectors
		jqElements = ["div","a"],
		jqParams = ["intc","cmp","emc","ecid","icid","cid"],
		jqAttributes = ["onclick","onmousedown","onmouseup","href","data-actionurl"];
	
	// Regex for matching (escaped) substrings that belong to global AJAX URLs
	ajaxUrlRegex = new RegExp(
		escapeRegExp("/US/REST/manageoffers/getoffers.jws") + "|" +
        escapeRegExp("/REST/offers/getOffers.jws") + "|" +
        escapeRegExp("/JRS/som/GetContextualOfferDetails.do") + "|" +
        escapeRegExp("/JRS/som/GetContextualOfferDetailsForDashboard.do")
	);
	
	// Regex for matching offer params (defined above) in element's attributes (&, =, and ? can be URL-encoded)
	// Result: param in [2] and code in [4]
	// Note: [1] and [5] are boundaries: [? &"'] or beginning/end-of-string
	// Sample result array: [0:"?cid=13&", 1:"?", 2:"cid", 3:"=", 4:"13", 5:"&"]
	urlParamRegex = new RegExp("(^|[? &\"\']|%26|%3F|%3f)(" + jqParams.join("|") + ")(=|%3D|%3d)(.*?)([ &\"\']|%26|$)");
	
	// Attach listeners for global AJAX events
	$(document).ajaxSend(function(e, jqXHR, options){
		ajaxCallStarted(options.url);
	});
	$(document).ajaxComplete(function(e, jqXHR, options){
		ajaxCallCompleted(options.url);
	});
	
	// Count AJAX calls to SOM (no URL means a local call)
	function ajaxCallStarted(url) {
		// Only proceed if URL is in list (global) or no URL provided (regional)
		if (!url || ajaxUrlRegex.test(url)) {
			activeAjaxCalls++;
		}
	}
	// Remove complete calls from the counter
	function ajaxCallCompleted(url) {
		// Only proceed if URL is in list (global) or no URL provided (regional)
		if (!url || ajaxUrlRegex.test(url)) {
			activeAjaxCalls--;
			// Trigger completion event if all calls finished
			if (activeAjaxCalls < 1) {
				$(window).trigger('somAjaxCallsCompleted');
			}
		}
	}
	
	// Campaign tracking functions:
	
	function trackCampaignCodeWithCampaignText(campaigntext) {
		var s = window.s || s_gi(s_account), // Either make local ref to global s, or create new local s
			isInternal = false, trackResult, trackParam="", trackCode="";
		
		// Find campaign/tracking code, and determine if internal/external
		trackResult = urlParamRegex.exec(campaigntext);
		if (trackResult) {
			trackParam = trackResult[2];
			trackCode = trackResult[4].replace(");", "");
			if (/^(icid|intc)$/.test(trackParam)) { isInternal = true; } 
		}
		
		// Code specific to vendor based reporting suites, based on some key words from URL entries
		if (campaigntext.indexOf("PrepareSSOToBBAction") !== -1){
		   s = s_gi(wa_BB_Acct);
		   s.s_account = wa_BB_Acct;
		} else if (campaigntext.indexOf("PrepareForSSOToTY") !== -1){
		   s = s_gi(wa_TY_Acct);
		   s.s_account = wa_TY_Acct;
		} else if (campaigntext.indexOf("citiprivatepass") !== -1){
		   s = s_gi(wa_PP_Acct);
		   s.s_account = wa_PP_Acct;
		}
		// Determine if CBOL/CMI
		if (/^(cmp|emc|ecid|intc|cid)$/.test(trackParam)) { s.tQryStrCmp="cbol"; }
		else if (/^(icid)$/.test(trackParam)) { s.tQryStrCmp="cmi"; }
		else { s.tQryStrCmp=""; }
		
		if (isInternal) {
			// Common params for internal campaigns
			s.linkTrackVars='eVar39';
			s.eVar39 = trackCode;
		} else {
			// External reporting suite params
			s.linkTrackVars='campaign';
		}
		
		//CBOL External Campaign Tracking
		if(!isInternal && s.tQryStrCmp == 'cbol') {
			s.campaign = trackCode;
		}
		//CMI Internal Campaign Tracking
		else if (isInternal && s.tQryStrCmp == 'cmi') {
			s.linkTrackEvents = 'event34';
			if (s.eVar39) { s.events = 'event34'; }
		}
		
		// Send to SiteCat
		s.trackingServer="metrics.citibank.com";
		s.trackingServerSecure=wa_siteCat_Domain;   
		s.tl(this,'o',trackCode);
	}
	
	// Check campaign params from events string and report to site catalyst
	function trackCampaignCode(element) {
		var eventtext = "", elementAttrs = [], attrString;
		
		// Get the matched element's onclick/onmousedown/onmouseup/href/actionUrl as a combined string
		for (var attr = 0; attr < jqAttributes.length; attr++) {
			attrString = $(element).attr(jqAttributes[attr]);
			if (attrString) {
				//check if the tag is a contextual alert
				if ($('.cT-contextAlert').find(element).length || 
				$('#cardsOfferPanel').find(element).length || 
				$('#benefitsMenu .StructContextualtext').find(element).length ||
				$('#myProfileMenu .StructContextualtext').find(element).length) {
					//change the global variable to the URL itself to track it
					if (attrString.indexOf("updateSOMForCO(") > 0) {
						var splitString = attrString.split("offer_");
						var firstString = splitString[0];
						var varString = splitString[1];
						//find the end of the parameter
						var endIndex = varString.indexOf(");");
						var offerVariable = varString.substring(0, endIndex-1);
						var url = window[offerVariable.toString()];
						if (url && url != "") {
							varString = varString.replace(offerVariable.toString(), url.toString());
							attrString = firstString + "offer_" + varString;
						}
					}
				}
				elementAttrs.push(attrString);
			}
		}
		
		// Only proceed if we have at least one matching attr
		if (elementAttrs.length !== 0) {
			eventtext = elementAttrs.join(" ");
			
			// Find campaign/tracking code, and determine if internal/external
			trackCampaignCodeWithCampaignText(eventtext);
		}
	}
	
	// Check campaign params from action url string and report to site catalyst
	function trackCampaignCodeWithUrl(actionUrl) {
		// Only proceed if we have non null actionUrl
		if (actionUrl) {
			// Find campaign/tracking code, and determine if internal/external
			trackCampaignCodeWithCampaignText(actionUrl);
		}
	}
	
	// Attach above function to matching elements
	function startTracking() {
		var codeRegex, codeTest, codeMatch, jqSelectors=[], $tagsToTrack;
		
		// Iterate through all combinations of the arrays to build query
		for (var attr = 0; attr < jqAttributes.length; attr++) {
			for (var pa = 0; pa < jqParams.length; pa++) {
				for (var el = 0; el < jqElements.length; el++) {
					jqSelectors.push(jqElements[el] + "[" + jqAttributes[attr] + "*='" + jqParams[pa] + "=']");
					jqSelectors.push(jqElements[el] + "[" + jqAttributes[attr] + "*='" + jqParams[pa] + "%3D']"); // (for URL-encoded hrefs)
				}
			}
		}
		//for contextual alerts
		jqSelectors.push(".cT-contextAlert a[href*='updateSOMForCO(']");
		jqSelectors.push("#cardsOfferPanel a[href*='updateSOMForCO(']");
		jqSelectors.push("#benefitsMenu .StructContextualtext a[href*='updateSOMForCO(']");
		jqSelectors.push("#myProfileMenu .StructContextualtext a[href*='updateSOMForCO(']");
		jqSelectors = jqSelectors.join(",");
		
		// Query each iteration and save resulting set
		$tagsToTrack = $(jqSelectors);
		
		// For all items in JQ set, send element to SiteCat function on click
		$tagsToTrack.bind('click', function() {
			trackCampaignCode(this);
		});
	}
	
	// Trigger to run at window.onload
	function waitForAjax() {
		if(activeAjaxCalls > 0){
			// If SOM AJAX calls pending, set a listener for completion
			$(window).on("somAjaxCallsCompleted", function(){
				if (jQuery("body[id='acbol_common_t_sDashboard']").length) {
					//setInterval to check until marketing bar is loaded
					var intervalID = setInterval(function() {
						//if mbar is visible and it is not currently loading
						if (jQuery('#mbarWidget').is(':visible') && !jQuery('#mBarLoadingImgDiv').is(':visible')) {
							clearInterval(intervalID);
							setTimeout(function(){
								startTracking();
							},1000);
						}
					}, 500);
				}
				else {
					setTimeout(function(){
						startTracking();
					},1000);
				}
			});
		} else {
			// All SOM AJAX complete, run right away
			//check if we are on dashboard
			if (jQuery("body[id='acbol_common_t_sDashboard']").length) {
				//setInterval to check until marketing bar is loaded
				var intervalID = setInterval(function() {
					//if mbar is visible and it is not currently loading
					if (jQuery('#mbarWidget').is(':visible') && !jQuery('#mBarLoadingImgDiv').is(':visible')) {
						clearInterval(intervalID);
						setTimeout(function(){
							startTracking();
						},1000);
					}
				}, 500);
			}
			else {
				setTimeout(function(){
					startTracking();
				},1000);
			}
		}
	}
	
	// Make regex-safe strings by escaping URL chars like . and ?
	function escapeRegExp(string){
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	
	// Expose functionality within closure
	// Example usage:
	//   var SomOfferTracking = somOfferSiteCatTracking();
	//   SomOfferTracking.waitForAjax();
	return {
		// Call at the beginning/end of non-global AJAX requests so they are counted by waitForAjax
		ajaxCallStarted: ajaxCallStarted,
		ajaxCallCompleted: ajaxCallCompleted,
		// Start tracking when SOM AJAX is finished; call on window.load in page footer
		waitForAjax: waitForAjax,
		// Alternatively, start tracking immediately; be sure SOM is loaded first
		startTracking: startTracking,
		// track the campaign code from the url value received
		trackCampaignCodeWithUrl: trackCampaignCodeWithUrl
	};
}
// Declare somTrackingObj
var somTrackingObj = somOfferSiteCatTracking();