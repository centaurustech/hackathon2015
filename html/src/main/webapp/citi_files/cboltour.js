	var currentTourIndex = 0;
	var newTourIndex = 0;
	var channelMvId = '';
	var tourMenu = '';
	var flash2Obj;
	var PARENT_QT = '';
	var CHILD_QT = '';
	var flashObj;
	//var _j="https://jcm4ws1.nam.nsroot.net";


	var DEBUG = 0;
	var lghtBoxToMovie = {

					'accountSummaryLghtBx2':'mobile_acctSum_860x610_f4v',
					'addPayeeLghtBx2':'mobile_addPayee_860x610_f4v',
					'getStartedLghtBx2':'mobile_getStarted_860x610_f4v',
					'accountSummaryLghtBx1':'online_acctSum_860x610_f4v',
					'getStartedLghtBx1':'online_getStarted_860x610_f4v',
					'linkAccountLghtBx1':'online_linkedAcct_860x610_f4v',
					'downloadAccountLghtBx1':'online_downloadAcct_860x610_f4v',
					'addPayeeLghtBx1':'online_addPayee_860x610_f4v',
					'thankyouLghtBx':'thankYou',
					'IITsLghtBx1':'online_IITs_860x610_f4v',
					'TBLALghtBx2':'mobile_TBLA_860x610_f4v',
					'TBLALghtBx1':'online_TBLA_860x610_f4v',
					'setUpPayAlertLghtBx1':'online_PayAlerts_860x610_f4v',
					'makePaymentsLghtBx3':'mobile_oneTimePay_860x610_f4v',
					'payeeSpendingReportLghtBx1':'online_payeeSpendReport_860x610_f4v',
					'makePaymentsLghtBx2':'online_expressPayments_860x610_f4v',
					'makePaymentsLghtBx1':'online_oneTimePay_860x610_f4v',
					'WireTransfersLghtBx1':'online_wireTransfers_860x610_f4v',
					'GlobalTransfersLghtBx1':'online_globalTransfers_860x610_f4v',
					'JCLghtBx1':'JC_860x610_f4v',
					'SSLghtBx1':'SS_860x610_f4v',
					'vPlayerTooMuchDebt': {
									'filename':'tooMuchDebt',
									'title' : 'Got Too Much Debt? Try These Four Steps'
					},             
					'vPlayerBeforeYouRetire': {
									'filename':'beforeYouRetire',
									'title' : 'Five Financial Steps to Take Before You Retire'
					},             
					'vPlayerOneTimePayment': {
									'filename':'cbol_vplayer_onetime_payment',
									'title' : 'Make a One-Time Payment'
					},             

					'vPlayerAddPayee': {
									'filename':'cbol_vplayer_add_payee',
									'title' : 'Add a Payee'
					},

					'vPlayerEBills': {
									'filename':'cbol_vplayer_ebills',
									'title' : 'Set Up eBills'
					},

					'vPlayerCheckDeposit': {
									'filename':'mobile_vplayer_check_deposit',
									'title' : 'Using Mobile Check Deposit'
					},

					'vPlayerExpressPayment': {
									'filename':'cbol_vplayer_express_payment',
									'title' : 'Make an Express Payment'
					},

					'vPlayerGettingStarted': {
									'filename':'cbol_vplayer_getting_started',
									'title' : 'Getting Started with Citibank<sup>&reg;</sup> Online'
					},
					
					'vPlayerAccountSummary': {

									'filename':'cbol_vplayer_acct_summ',
									'title' : 'View Your Account Summary, Details and Activity'
					},

					'vPlayerPaymentAlerts': {
									'filename':'cbol_vplayer_payment_alerts',
									'title' : 'Set Up Payment Alerts'
					},                                              
					'vPlayerJC': {
									'filename':'jonathan_clements_3',
									'title' : 'Risk Seminar'
					},                                              
					'vPlayerSS': {
									'filename':'susan_salgado_3',
									'title' : 'Hospitality Seminar'
					},                                              
					'vPlayerRedSox': {
									'filename':'SBB_Red_Sox620x414',
									'title' : 'The Business of Baseball Q&amp;A with Red Sox COO Sam Kennedy',
									'width':'620',
									'height':'414'
					},
					'vPlayerClementsVideo': {
									'filename':'ClemetsVideo',
									'title' : 'Your Business Today: The Risk In How We Think About Risk'
					},                                              
					'vPlayerMayerSalgado': {
									'filename':'Meyer_Salgado_Union_Square_6th_cut2',
									'title' : 'Transforming Organizations through the Power of Hospitality',
									'width':'640',
									'height':'394'
					},
	
					'vPlayerBayportLabs':{
									'filename':'BayportLabs830x500',
									'title':'Bayport Labs'
					},
					'vPlayerEnotecaMaria':{
									'filename': 'EnotecaMaria830x500',
									'title': 'Enoteca Maria'
					},
					'vPlayerNirvanaSurfboards':{
									'filename': 'Nirvana830x500',
									'title':'Nirvana Surfboards'
					},
					'vPlayerSusieCakes':{
									'filename':'SusieCakesVideo830x500',
									'title':'SusieCakes'
					},
					'vPlayerTheFencingPost':{
									'filename': 'TheFencingPost830x500',
									'title':'The Fencing Post'
					},
					'vPlayerSimplicity':{
									'filename': 'videoPlayer',
									'title':'Learn More About Simplicity',
									'width':'720',
									'height':'406'
					},                                      
					'vPlayerThankYou':{
									'filename': 'thankyoupreferred',
									'title':'<a href="http://creditcards.citicards.com/usc/thankyou/Preferred/2013/July/internal/default.htm?app=UNSOL&sc=1NMZ1SX3&m=7XRD111111W&langId=EN&siteId=CB&B=B&screenID=3131&uc=CK5&t=t&naInd=V&intc=1~2~62~3~091713~1~TYPreferred~ATLTVSpotVideoOverlayLink" target="_blank">Learn More About the Citi ThankYou® Preferred Card</a>',
									'width':'720',
									'height':'426'
					},
					'vPlayerFTools':{
									'filename': 'CitiFinancialTools_Tutorial',
									'title':'Citi<sup>&reg;</sup> Financial Tools Tutorial',
									'width':'720',
									'height':'406'
					},
					'vPlayerCollSavers':{
									'filename': '4TipsCollegeSavers',
									'title':'Four Tips For College Savers',
									'width':'860',
									'height':'484'
					},
					'vPlayerHappiness':{
									'filename': 'SqueezeMoreHappiness',
									'title':'How to Squeeze More Happiness From Your Money',
									'width':'420',
									'height':'240'
					},                     
					'vPlayerChJobs':{
									'filename': 'ChangingJobs',
									'title':'Changing Jobs? Here Are Some Smart Financial Moves',
									'width':'420',
									'height':'240'
					},   
					'vPlayerSBPopmoney':{
									'filename': 'SB_Popmoney',
									'title':'How to use Popmoney - Using Citi Online for Small Business',
					},   
					'vPlayerSBGetStarted':{
									'filename': 'Getting_Started_Web',
									'title':'Getting Started - Using Citi Online for Small Business',
					},   
					'vPlayerSBMobileApp':{
									'filename': 'Getting_Started_Mobile',
									'title':'Getting Started - using the Citi Mobile App for Small Business',
					},   
					'vPlayerSBAcctActivity':{
									'filename': 'Accts_Summary_Details',
									'title':'Citi Online for Small Business-Account Summary, Details, and Activity',
					},   
					'vPlayerSBAlerts':{
									'filename': 'SB_Set_Up_Alerts',
									'title':'How to set up Alerts - Using Citi Online for Small Business',
					},
					'vPlayerRichExpectations':{
									'filename': 'Outlook_Rich_Expectations',
									'title':'Rich Expectations, Poor Allocations',
					},
					'vPlayerShiftGrowthOpport':{
									'filename': 'Shifting_Growth_Opportunities',
									'title':'Shifting Growth Opportunities',
					},
					'vPlayerPortfolioRisk':{
									'filename': 'Hedging_Portfolio_Risk',
									'title':'Hedging Portfolio Risk',
					},
					'vPlayerLiquidityTradeOff':{
									'filename': 'Liquidity_Trade_Off',
									'title':'Liquidity Trade Off',
					},
					'vPlayerGlobalChange':{
									'filename': 'Harnessing_Global_Change',
									'title':'Harnessing Global Change',
					},                                                                              
                                                                 
                                                                      

								
                };

	
	var hbxlinks = {
		'close':['', 'BYG_Thank You For Touring'],
		'seeAllQT':['','LNav_See All QuickTakes'],
		'replay':['','TNav_Replay'],
		'previous':['','Previous Button'],
		'next':['','Next Button']
	}
	var menuItemNotExpanded = [0,1];
	
	window.onload = function() {
		init_menu();
		flashObj = getflashObj('tour_movie');	
	}

		//////////////////////////////////////////
		// this is a function to get the flash object
	function getflashObj(movieName) {
		if (window.document.tour_movie) {
			return window.document.tour_movie;
		}	
		if (document.embeds[movieName]) {
			return document.embeds[movieName];
		}
		if (document[movieName]) {
			return document[movieName];
		}	
		if (window[movieName]) {
			return window[movieName];
		}
		
	}	
	
	function init_menu() {
	
		// need this here if calling this js file for qtakes only from outside cboltour locations
		if ( typeof document.getElementById('tours_menu_inner') == 'undefined' || 
			 document.getElementById('tours_menu_inner') == null ) {
			 return false;		
		}	
		
		tourMenu = document.getElementById('tours_menu_inner').getElementsByTagName('A');
		_divs = document.getElementsByTagName('DIV');	
		for (var i=0; i < _divs.length; i++) {
			if (/_menuitem/.test(_divs[i].id)) {			
				if ((/_accInfo/).test(_divs[i].id)) { init_slide_object(_divs[i].id); }
				if ((/_makePay/).test(_divs[i].id)) { init_slide_object(_divs[i].id); }
				if ((/_makeTransfer/).test(_divs[i].id)) { init_slide_object(_divs[i].id); }
				if ((/_emailAlerts/).test(_divs[i].id)) { init_slide_object(_divs[i].id); }
			}	
		}
		for (var id in _slideObjects) {
			 _slideObjects[id].elem.style.display = 'none';
		}	
		
	}	



	function showNextTour (direction, indx) {
		if (DEBUG) {console.log('inside showNextTour and index is '+indx);}
		if (typeof(indx) == 'undefined') {	
			newTourIndex = (direction == 'next')  
					? (currentTourIndex  == tourMenu.length) ? 0 : currentTourIndex + 1
					: (currentTourIndex  == 0) ? tourMenu.length -1: currentTourIndex - 1;
		} else {
			newTourIndex = indx;
		}
		
		var callerId;
		var callerObj;		
		// enter this block if one is navigating to view previous movie  going from an overview to another overview		
		if (  tourMenu[newTourIndex].parentNode.nodeName != 'LI' && direction == 'previous') { 
			callerId = tourMenu[newTourIndex].parentNode.id;
			callerObj = document.getElementById(callerId);
										
			if (/noexpand/.test(callerObj.className)) {	
				// now have to reset the style for the previous parent menu item				
				var prevCallerId = tourMenu[currentTourIndex].parentNode.id;
				var prevCallerObj = document.getElementById(prevCallerId);
				prevCallerObj.className = 'topic';
				
				for (var x in menuItemNotExpanded) {
					if (x == newTourIndex) {
						callerObj.className = 'topic_noexpand_active';
					} else {
						tourMenu[x].parentNode.className = 'topic_noexpand';								
					}
				}				
				
			} else {
				if (DEBUG) {console.log('callerObj.className is '+callerObj.className);	}		
				callerObj.className = 'topic_expanded';
					
				// chnage subitem color to blue	
				var prevSubItem = tourMenu[ currentTourIndex ].id;
				var prevSubItemObj = document.getElementById(prevSubItem);
				prevSubItemObj.style.color = '#088eee';	
				
				// need to set what the new channel movie is going to be
				channelMvId = callerId.replace('_caller', '');	
				//if (DEBUG) {console.log('callerObj has class '+channelMvId); }
			}	
		}

		// enter this bllock when on a channel movie and navigating backwards.
		// need to open the mainmenu of previous overview,
		if (  tourMenu[newTourIndex].parentNode.nodeName == 'LI' && newTourIndex !=0 && direction == 'previous' && tourMenu[currentTourIndex].parentNode.nodeName != 'LI') { 
			if (DEBUG) {console.log('going backwards and about to play channel video'); }
			callerId = tourMenu[currentTourIndex].parentNode.id;
			callerObj = document.getElementById(callerId);
			callerObj.className = 'topic';
		}

		// if user is clicking on next button, callerId not generated
		if (typeof callerId == "undefined") {
			if (tourMenu[newTourIndex].parentNode.nodeName == 'LI') {
				 callerId = tourMenu[ newTourIndex ].id;
			} else {
				callerId = tourMenu[ newTourIndex ].parentNode.id;
			}			
		
		}
		
		menuControl(newTourIndex);
		currentTourIndex = 	newTourIndex;
		if (DEBUG) {console.log('callerid is '+callerId);	}
		hbxClean(callerId,'swfshell',direction);			

	}
	
	function getNewTourIndex (id) { 

		var newIndex;
		var obj;
		var subMenuItem = 0;
		var noExpandMenuItem = 0;
		var parentId;

		
		// no objId if noexpand mainmenu
		if (document.getElementById(id) != null) {
			obj = document.getElementById(id);
			if (obj.parentNode.nodeName == 'LI') {
				subMenuItem = 1;
			}else {

				// an exandable menu item
				//obj = document.getElementById(id + '_caller');
			}			
		}

		

		for (var i=0; i < tourMenu.length; i++) {
			if (subMenuItem) {
					if ( tourMenu[i].id == obj.id ) { 
						newIndex = i;
						return newIndex; 
					}
			} else {	
				parentId = tourMenu[i].parentNode.id.replace('_caller', '');
				if ( parentId == id ) { 
					newIndex = i;
					return newIndex;
				}
			}	
		}	
	}
	function manageTimeLine(newIndex) {
		//menuControl(newIndex);
		highlgtMenuItem (newIndex);
	}
	
	function quicktakeTimeLine(state) {
		var obj = document.getElementById('quicktake_demo');
		//var qtlnk = obj.getElementsByTagName('A');
		if (state == 'active') {
			obj.className = 'qt_demo_active';
		} else {
			obj.className = 'qt_demo';
		}
	}
	
	function manageMainMenuItem_click(id) {
	    quicktakeTimeLine(''); // need to ensure qt link is not highlighted
		channelMvId = id;
		var newIndex = getNewTourIndex(id);
		((/welcome/.test(id)) || (/getStart/.test(id))) ? _slideupOnly(id): slide(id);
		hbxClean(id, 'menu');
		
		flashObj.varNameFromHtml(newIndex);
		currentTourIndex = newIndex;
	}
	
	function manageSubMenuItem_click(id) {
		quicktakeTimeLine(''); // need to ensure qt link is not highlighted
		hbxClean(id, 'submenu');
		var newIndex = getNewTourIndex(id);
							
		// need to determine if the parent menu item is opened
		var menu_class = document.getElementById(id).className;	
		var main_menuitem = document.getElementById('tour_'+ menu_class +'_menuitem_caller');
		if (/activeclosed/.test(main_menuitem.className) || /noexpand/.test(main_menuitem.className)) {
			channelMvId = 'tour_'+ menu_class +'_menuitem';
			slide ('tour_'+ menu_class +'_menuitem');
		}
		
		highlgtSubMenuItem(newIndex);
	
		flashObj.varNameFromHtml(newIndex);
		currentTourIndex = newIndex;
	}

	function manage_qtDemo (clicked_from) {			
		_hbxtrack('seeAllQT');
		 collapseMenu ();
		if (clicked_from == 'menu') { flashObj.varNameFromHtml('qt_demo_menu') };		 
	}

	function collapseMenu () {
		var _id;	
		if (  tourMenu[currentTourIndex].parentNode.nodeName != 'LI') { 
			_id = tourMenu[currentTourIndex].parentNode.id;			
		} else {
			tourMenu[currentTourIndex].style.color = '#088eee';
			_id = 'tour_'+tourMenu[currentTourIndex].className +'_menuitem_caller';
		}
		
		var callerObj = document.getElementById(_id);	
		
		if (/noexpand/.test(callerObj.className)) {	
			for (var x in menuItemNotExpanded) {
				tourMenu[x].parentNode.className = 'topic_noexpand';
			}				
		} else {								
			callerObj.className = 'topic';
		}
		
		_id = _id.replace('_caller','');
		// close any menu item
		_slideupAll(_id);		
		currentTourIndex = 0;
	}
	
	function _hbxtrack(hbxid) {	
		_hbLink(hbxlinks[hbxid][1]);
	}
	
	function hbxClean(id, origin, swf_direction) {

		var obj = document.getElementById(id);
		var myinnerhtml;

		if (typeof(obj) == 'undefined') {
				return false;		
		}
		// is this a submenu item or is it a menu item link eg is it "make payments" or one of its children
		if (  origin == 'menu' || origin == 'submenu'|| origin == 'swfshell') { 
			if (origin == 'menu') {
				obj = document.getElementById(id + '_caller').getElementsByTagName('A')[0];
			} 

			if (typeof(obj) == 'undefined') {
				return false;
			}
			myinnerhtml = obj.innerHTML.replace(/<.*?>/g,"");
			myinnerhtml = myinnerhtml.replace(/^\s*/g,"");
			myinnerhtml = myinnerhtml.replace(/[\,]/g,"");
			myinnerhtml = myinnerhtml.replace(/\s*$/g,"");
			myinnerhtml = myinnerhtml.replace(/&amp;/g,'and');
			myinnerhtml = myinnerhtml.replace(/\n/," ");
			var lnkName = myinnerhtml;
			var  pn = myinnerhtml.replace(/[\s]/g,'+');
			//myinnerhtml = obj.innerHTML.replace(/\<.*\>/g,"");
			//myinnerhtml = obj.innerHTML.replace(" ","+");
			if (origin == 'swfshell') {
				_hbLink(hbxlinks[swf_direction][1]);
			}else{ _hbLink('LNav_' + lnkName) };
			_hbPageView(pn);
		} 
	}
	
	function CurrentTourIndex (id) { 

		tourMenu[currentTourIndex].style.color = '#088eee';
		
		// always ensure that the 'welcome item color is reset to 
		tourMenu[0].color = '#088eee';
		
		var newIndex;

		for (var i=0; i < tourMenu.length; i++) {
			if (i == 0) {
				//this is welcome
			} else if (  tourMenu[i].parentNode.nodeName == 'LI' ) { 
				// this is a submenulink
				 if ( tourMenu[i].id == obj.id ) { newIndex = i };
			} else {
				// this is a parent menu item
				var parentMenuLnk = document.getElementById('obj.id').getElementsByTagName('A')	
				var parentId = tourMenu[i].parentNode.id.replace('_caller', '');
				if ( parentId == obj.id ) { newIndex = i }
			}
	
		}
		
		return newIndex;	
	}

	function cbolpopup(str,name,winargs) {
	   window.open (str,name,winargs);
	}
	 
	 
	function menuControl( linkIndex) {	
	
		if (/noexpand/.test(tourMenu[linkIndex].parentNode.className)) {
			var callerId = tourMenu[linkIndex].parentNode.id.replace('_caller', '');
			channelMvId = callerId;
			_slideupOnly(callerId);
		} else if (  tourMenu[linkIndex].parentNode.nodeName == 'LI' ) { 
			 // there will be no slide
			var id =  'tour_'+ tourMenu[linkIndex].className +'_menuitem';
			var parentMenuVisibilty = _slideObjects[id].visible;
			if(!parentMenuVisibilty) {				
				_slideObjects[id].showmovie = 0;							
				slide('tour_'+tourMenu[linkIndex].className+'_menuitem');
			}	
			highlgtSubMenuItem(linkIndex);
		} else {
			var parentId = tourMenu[linkIndex].parentNode.id.replace('_caller', '');
			highlgtSubMenuItem(linkIndex);
			slide (parentId);
		}				

	}	
	
	
	function highlgtMenuItem( linkIndex ) {
	
		// ensure that non expanded menuItems are styled correctly
		var isNoExpandMenuItem = 0;
		var noexpandFlagActive = 0;
		var noexpandFlag = 0;
		var isNoExpandMenuFlag = 1;
	

		for (var i=0; i < tourMenu.length; i++) {

			if ((/noexpand/.test(tourMenu[i].parentNode.className))) {
					
				for (var x in menuItemNotExpanded) {
					if (linkIndex == x) {
						tourMenu[x].parentNode.className = 'topic_noexpand_active';
						isNoExpandMenuFlag = 0;
						//tourMenu[i].parentNode.className = 'topic topic_noexpand_active';
					} else {
						tourMenu[x].parentNode.className = 'topic_noexpand';								
					}
				}	
			} else if (/topic/.test(tourMenu[i].parentNode.className)) {
				 ( i == linkIndex ) ? tourMenu[i].parentNode.className = 'topic_expanded' 
									: tourMenu[i].parentNode.className = 'topic';			
			}
		}	
	}	
	
	
	function highlgtSubMenuItem( linkIndex ) {

		if (linkIndex == 0) {
			var welcomeobj = document.getElementById('tour_welcome_link');
			welcomeobj.style.color = '#088eee';
		} else {
			
		}
		

		for (var x in menuItemNotExpanded) {
			tourMenu[x].parentNode.className = 'topic_noexpand';							
		}	
		
		
		for (var i=0; i < tourMenu.length; i++) {
			if (  tourMenu[i].parentNode.nodeName == 'LI' ) { 
				// this is a submenulink
				 ( i == linkIndex ) ? tourMenu[i].style.color = '#000' 
									: tourMenu[i].style.color = '#088eee';
			}
		}			
	}
	
	
	function changeQTmovie(lghtboxid) {
	
		try {
			document[PARENT_QT] = null;
		} catch(e) {
			
		}	
		
		//var lghtbxElem = document.getElementById(lghtboxid).getElementsByTagName('DIV')[0];
		// //	console.log('this is id '+lghtbxElem.className);
			// var dyndiv = document.createElement('DIV');
			// dyndiv.id = 'flashcontent';
			// dyndiv.innerHTML = _fl_h(lghtBoxToMovie[lghtboxid], 'qt');
			// lghtbxElem.appendChild(dyndiv);
				
			var flashContent = document.getElementById('flashcontent');
			//if (DEBUG) {console.log('inside changeQTmovie and qt movie is '+lghtBoxToMovie[lghtboxid]);}
			
			var swf_filename;
			if ( typeof lghtBoxToMovie[lghtboxid] == 'object') {
				swf_filename = lghtBoxToMovie[lghtboxid];
			} else {
				swf_filename = lghtBoxToMovie[lghtboxid];
			}
			
			flashContent.innerHTML = _fl_h(swf_filename, 'qt');
			
			/*var swf_div_title = document.getElementById('cboltour_lghtboxHeaderTitle');
			if (swf_div_title != null){
				//Logic for Simplicity Title
				if (swf_div_title.innerHTML == 'Learn More About the Citi ThankYou® Preferred Card'){
					swf_div_title.innerHTML = '<a href="http://creditcards.citicards.com/usc/thankyou/Preferred/2013/July/internal/default.htm?app=UNSOL&sc=1NMZ1SX3&m=7XRD111111W&langId=EN&siteId=CB&B=B&screenID=3131&uc=CK5&t=t&naInd=V&intc=1~2~62~3~091713~1~TYPreferred~ATLTVSpotVideoOverlayLink" target="_blank">Learn More About the Citi ThankYou® Preferred Card</a>'
				}
			}*/
	}


	function clearQTmovie(lghtboxid) {

		var qtObj1 = window.document.qt_movie_1;
		var qtObj2 = window.document.qt_movie_2;
		if (typeof(qtObj1) != 'undefined') {
			try {
				qtObj1.src = '';
				qtObj1  = null;
				qtObj1  = undefined;
			} catch (e) {			
			}
		}	
		if (typeof(qtObj2) != 'undefined') {
			try {
				qtObj2.src = '';
				qtObj2  = null;
				qtObj2  = undefined;
			} catch (e) {			
			}
		}	
		if($('#flashcontent').length > 0){
			var dyndiv = document.getElementById("flashcontent");
			dyndiv.innerHTML = "";
		}
	}
	
	function changeMovie(linkIndex, obj) {
	
		//var myMovie = movieToLink[linkIndex];
		try {
			var fObj = document.getElementById['tour_movie'];
			fObj = null;
		} catch(e) {
		}
		if (myMovie == null) { myMovie = movieSrc };

		// need this here if calling this js file for qtakes only from outside cboltour locations
		if ( typeof document.getElementById('tourFlashObjDiv') == 'undefined' || 
			 document.getElementById('tourFlashObjDiv') == null ) {
			 return false;		
		}	 
		
		var flash2Obj = document.getElementById('tourFlashObjDiv');	
		flash2Obj.innerHTML = _fl_h(myMovie);

	}		
	function testSWFObj (mvtype) {
		var defaultMv =  'qt_movie_1';
		var b = 1;
		if (document.getElementById(defaultMv) != null) {
			b = 0;
		} 

		return b;
	}
	
	function _fl_h(filename, mvtype){
		var fileName = filename.filename;
		var w = (mvtype == 'qt') ? '860': '642';
		var h = (mvtype == 'qt') ? '610': '483';

		// bool to test if a swf object is in scope already
		var b = testSWFObj(mvtype);		
		var isIE = navigator.appName.indexOf("Microsoft") != -1;
			
		if (mvtype == 'qt') {
			if (isIE) {
				mvid = (b == 0) ? 'qt_movie_2'
							   : 'qt_movie_1';
				PARENT_QT = CHILD_QT;			   
				CHILD_QT = mvid;
			} else {
				mvid = 'qt_movie_1';
			}
		} else {		
			mvid = 'tour_movie';								
		}
		
		// have to place swf into object for ie if we need to call a callback function i.e container call a function within flash
		if (isIE) {
			return 	    '<object codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"'+
						' width="'+w+'"'+
						' height="'+h+'"'+ 
						' align="middle"'+
						' id="'+mvid+'"'+
						' name="'+mvid+'"'+
						' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'+
						' type="application/x-shockwave-flash"'+
						'<param name=movie value="/JRS/cboltour/'+ myFlashDir +'/' + fileName + '.swf"/>'+
						'<param name=src value="/JRS/cboltour/'+ myFlashDir  +'/' + fileName + '.swf"/>'+					
						'<param name=quality value="high"/>'+
						'<param name=play value="true"/>'+
						'<param name=loop value="true"/>'+
						'<param name=scale value="showall">'+
						'<param name=wmode value="transparent"/>'+
						'<param name=devicefont value="false"/>'+
						'<param name=bgcolor value="#ffffff"/>'+
						'<param name=menu value="true"/>'+
						'<param name=allowFillScreen value="false"/>'+
						'<param name=allowScriptAccess value="sameDomain"/>'+
						'</object>';	
						
		} else {
				if (DEBUG) {console.log('embed qt movie'); }
				return '<embed height="'+h+'" width="'+w+'" align="middle" type="application/x-shockwave-flash" salign="" allowscriptaccess="sameDomain" allowfullscreen="false" menu="true" id="'+mvid+'" name="'+mvid+'" bgcolor="#ffffff" devicefont="false" wmode="transparent" scale="showall" loop="true" play="true" pluginspage="//www.macromedia.com/go/getflashplayer" quality="best" src="/JRS/cboltour/'+ myFlashDir +'/' + fileName + '.swf" movie="/JRS/cboltour/'+ myFlashDir +'/' + fileName + '.swf"/>';
		}					
	}
	
	function img_mo(what, src) {
		var img = what.getElementsByTagName('IMG').item(0);
		if(img == null || src == null) {
			return false;
		}
		if(img.style.filter) {
			img.style.filter = img.style.filter.replace(/\/[^\/]+$/, '/' + src);
		}
		else {
			img.src = img.src.replace(/\/[^\/]+$/, '/' + src);
		}
		return false;
	}
	
	 function slideCallback(obj) {
			
			for (var i in menuItemNotExpanded) {
				tourMenu[i].parentNode.className = 'topic_noexpand';
			}
			if(obj == null) {
				return false;
			}
			
			var currentIndex;
		// need to include this block since a menu item might appear active (from the first tour timeline)
		// but not opened ie visible		
			for (var i=0; i < tourMenu.length; i++) {
				if ((/noexpand/.test(tourMenu[i].parentNode.className))) {
					tourMenu[i].parentNode.className = 'topic_noexpand';
				} else if (  /_caller/.test(tourMenu[i].parentNode.id) ) { 					
					tourMenu[i].parentNode.className = 'topic';				
				} else {
					( currentTourIndex == i ) ? tourMenu[i].style.color = '#000'
											: tourMenu[i].style.color = '#088eee';
				}					
			}			

			var callerobj = document.getElementById(obj.id+'_caller');
			if(callerobj == null) {
				return false;
			}
			if(obj.visible) {			
				if (callerobj.id == channelMvId+'_caller') {
					callerobj.className = 'topic_activeclosed';					
				} else {
					callerobj.className = 'topic';	
				}
			}
			else {
				callerobj.className = 'topic_expanded';
			}
		}
		

	function stopMovie() {	
		if (typeof(flashObj) != 'undefined') {
			try {
				flashObj.stopTourMovie('stop');
			} catch (e) {
				return true;
			}
		}
	}	
		

	function tourslaunchPopup(url, title, winParams) {
		mywindow = window.open (url,title, winParams);
	}

	function openParentPage(url, notFromSwf) {
		var serv = '';
		if (! notFromSwf) {
			serv = _j;
		}
		try {
			window.opener.location.href = serv + url;
		} catch(e) {
			 window.open (serv + url,"cboltour_faux_parent"); 
		}
	}

	
	function closePopup() {
		window.close();
	}	

	function fcallbackOpenThankYou () {
		modalAlert('thankyouLghtBx');
		collapseMenu();		
	}
		
	// this function is called from shell to play a specific movie other than default when page loads
	function playSpecificMv() {
		// when ready for to flesh this out .. set newTourindex from url param
		newTourIndex = 6;		
		showNextTour ('next', newTourIndex);	
		return newTourIndex;
	}

	function _hbPageView(pn) {
		s.pageName = pn;
		s.t();
	}	

	function _hbLink(ln) {
		s.tl(this,'o',ln);
	}	