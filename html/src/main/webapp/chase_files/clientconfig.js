

define({


 	XPOOrgID:"15629",
 	adServiceURL:"https://s.xp1.ru4.com/meta",
 	contentServer:"https://www.chase.com",
 	timeout:"2000",
 	zipcodeServiceURL:"/apps/services/getZipcode.html",
 	geoipServiceURL:"/apps/services/getGeoLocation.html",
 	segmentServiceURL:"https://s.xp1.ru4.com/wsb/15629/poe/38260318?_u=[ECI]&Debug=false&Test=false&ContentType=application/json&TransactionID=eee-444",
 	autoloanRatesServiceURL:"/apps/services/getAutoloanRates.html",
 	whiteListedDomains:".jpmorganchase.com,.chase.com,creditcards.chase.com,chaseonline.chase.com,.jpmorgan.com,.jpmchase.net,.chasestudentloans.com,.opinionlab.com,chaseclearandsimple.com,.chasegreatrewards.com,.shareholder.com,.chasepaymentech.com,.chasehsa.com,.theexplorercard.com,.jpmorgansecurities.com,partners.leadfusion.com,.disneyrewards.com,.chasepayeedirectory.com,chasemyoffers.com,.leadfusion.com,ccsic.fni-stl.com,.mychasestudentloan.com,.jpmorganaccess.com,.chase.ca,.cslservicing.com,mychasestudentloan.com,markets.jpmorgan.com,jpmm.com,explorelhrcollection.com,.explorelhrcollection.com,insideaccess.com,.insideaccess.com,Careersatchase.com,.missionmainstreetgrants.com,missionmainstreetgrants.com,.chasecreditcards.com,.getthechasecard.com,.chasepanel.com,chasepanel.com,disneydebit.com,disneyrewards.com,www.choosebp.com,jpmorganonline.com,.juniusrep.com,info.evidon.com,online.chasecanada.ca,.chasereferafriend.com,mazdacapitalservices.com,.mazdacapitalservices.com,landroverfinancialgroup.com,jaguarfinancialgroup.com,subarumotorsfinance.com,bestbuycard.ca,firstusa.com,.chaseoffers.com,cccstagea.f9dev.com,.missionmainstreetgrants.com,.f9dev.com,.chasedigitalpayments.com,.creditcardsccstage.f9dev.com,.cybergrants.com,.chasemastery.com",
 	standardDisclaimerMsg:"/content/chasecom/en/snippets/common/modular/weblink-disclosure.html",
 	chaseOnlineRoot:"https://chaseonline.chase.com",
 	isAuthorMode:"false",
 	loyaltyLoginModalSnippet:"/content/chasecom/en/snippets/common/modular/holidyloginmodalsnippet.html",
 	defaultZipGateURL:"https://www.chase.com",
 	offerCodeServerName:"https://apply.chase.com/Auto",
 	reportingJSURL:"/apps/chase/clientlibs/foundation/scripts/Reporting.js",
 	sweepxmlpath:"/content/feed/public/MM_JPMS_P.xml",
 	requestConsultation:"https://apply.chase.com/mortgage/RequestConsultation.aspx",
 	prequalifyWithMe:"https://apply.chase.com/mortgage/GettingStarted.aspx",
 	findLoanOffcierServiceURL:"https://www2.chase.com/Mortgage/Views/LoanOfficer/LoanOfficerResults.aspx",
 	mortgageMiniRateURL:"https://www2.chase.com/Mortgage/Views/Rates/MiniRates.aspx",
 	mortgageAssumptionURL:"https://www2.chase.com/Mortgage/Views/Rates/AssumptionAndPayments.aspx",
 	standardDisclaimerMsgLite:"/content/chasecom/en/snippets/common/modular/weblink-disclosure-lite.html",
 	mortgageTrackingParams:"SourceCode,iq_id",
 	homeequityTrackingParams:"srcid,iq_id",
 	disableP2P:"true",
 	mobileStandardDisclaimerMsg:"/content/chasecom/en/mobile-banking/mobile/mobilepartialdisclaimermsg.touch.html",
 	bbTokenPageURL:"/business-banking/tokenlogin",
 	searchServiceURL:"https://gwsol.chase.com/PSRWeb/search/v20131117/list.action",
 	eCouponServiceURL:"https://gwsol.chase.com/PSRWeb/ecoupon/v20131117/list.action?type=json&applId=GATEWAY&channelId=COL",
 	eCouponErrorResponseMessage:"Due to a system error, we are having trouble retrieving your coupon code. Please try again later.",
 	eCouponOfferIdErrorMessage:"Due to a system error, we are having trouble retrieving your coupon code. Please try again later.",
 	xdmServicePath:"/PSRWeb/xdm",
 	searchhelpURL:"https://www.chase.com/ccp/index.jsp?pg_name=ccpmapp/generic/shared/page/chase_search_tips",
 	searchjpmchaseURL:"http://www.jpmorganchase.com/home/search?site=cfsTWF&q=",
 	searchjpmorganURL:"http://query.jpmorgan.com/inetSearch/index_redesign.jsp",
 	loanOriginatorServiceURL:"https://gwsol.chase.com/PSRWeb/loanofficer/originator/search/v20131117/list.action?",
 	safeActServiceTimeOut:"40000",
 	ecouponServiceTimeout:"20000",
 	searchServiceTimeout:"20000",
 	chaseAtWorkService:"/apps/services/chaseatworkfilter.html",
 	cawLoginPage:"/chaseatwork",
 	gamingScriptUrl:"https://smws.chase.com/cigservices/gaming/gaming.html",
 	XFSWhiteListedDomains:"chase.com,jpmorganchase.com,jpmorgansecurities.com,jpmchase.net",
 	checkingSavingsRatesServiceURL:"/apps/services/getCheckingSavingsRates.html",
 	cardcmaXML:"/content/feed/public/creditcards/cma/cmaonlineexport.xml",
 	cardCMADAMPath:"/content/feed/public/creditcards/cma/Chase/",
 	sendmailPSRServiceURL:"https://gwsol.chase.com/PSRWeb/sendmessage/v20140323/send.action",
 	aloginjsp:"https://mfasa.chase.com/auth/alogin.jsp",
 	excludedQueryPassforwardParams:"iCELL",
 	clientlibsCacheKey:"ERSFS52GS",
 	studentloanServiceURL:"/apps/services/StudentLoanPhAndSrcServlet.html",
 	globalAPREnable:"true",
 	shortLeadPSRServiceURL:"https://gwsol.chase.com/PSRWeb/prequalification/consultation/submit.action",
 	shortLeadSuccessURL:"/content/chasecom/en/mortgage/mortgage-lead-form-success",
 	shortLeadErrorURL:"/content/chasecom/en/mortgage/mortgage-lead-form-error",
 	campaignparameterlist:"CELL,jp_cmp,jp_aid,jp_ltg,jp_waTag,jp_hpv"

});
