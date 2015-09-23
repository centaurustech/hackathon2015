$(function() { 		
 		var mainNav = $("#sections li.level1"),
	        mainNavTop = $("#sections li.level1 .mainTopNav"),
	        doormatList = $("#sections li.level1 div.doormat"),
	        doormatCloseTabLinks = $("#sections li.level1 div.doormat a.closeDoormatTab");
		
		var navFadeTimerIn = 6;
		var navFadeTimerOut;
		var doormatActiveTimer = 8;
		var doormatFlags = 0;
		var doormatActive = 0;
	
		
        mainNavTop.attr('title', function(i, val) {
            return 'Expand menu: ' + val; 
        });
		
        $('#sections').attr('aria-live','polite').attr('aria-relevant', 'all');
		
		// splitting mouseover and focus events to improve link navigation by tab key
        // touch env. reset & support
		
		var touchStartTime;
		var touchStartLocation;
		var touchEndTime;
		var touchEndLocation;

				

		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;

	
		$('#sections .doormat').css("left", "-9999px");
		
    
var onMouseOver = function(that){

 	doormatFlags = 1;
	clearTimeout(navFadeTimerIn); //clear timer

	if (!doormatActive) {
		navFadeTimerIn = setTimeout(function () {
			clearTimeout(doormatActiveTimer);
			doormatActive = 1;
			that.addClass('focused');
			that.find('div.doormat').addClass('showdoormat').attr('aria-hidden', false).css("left", "0");
		}, 300);
	} else {
		//show doormat without timeout
		clearTimeout(doormatActiveTimer);
		doormatActive = 1;
		that.addClass('focused');
		that.find('div.doormat').addClass('showdoormat').attr('aria-hidden', false).css("left", "0");	
	}
};
 
var onMouseLeave = function(that){
	clearTimeout(navFadeTimerIn); //clear timer
	
	doormatActiveTimer = setTimeout( function() {
		doormatActive = 0;
	}, 100);
	
	doormatFlags = 0;
	that.removeClass('focused');
	that.find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px"); 
};
 
 var onTouchStart = function(that){
 
    mainNav.addClass('nohover');
    mainNavTop.addClass('nohover');

         var d = new Date();
         touchStartTime = d.getTime();

         if (that.hasClass('touched')) {
             that.prevAll().removeClass('focused touched');
             that.prevAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.nextAll().removeClass('focused touched');
             that.nextAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.removeClass('focused touched');
             that.find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");

             if ($(this).attr('href')) window.location = $(this).attr('href');
         }	 
	 
	 
 
 
 };
 
  var onTouchEnd = function(that){
 
         var d = new Date();
         touchEndTime = d.getTime();

         if (that.hasClass('touched')) {
             that.removeClass('touched');
             doormatFlags = 0;

             that.prevAll().removeClass('touched focused');
             that.prevAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.nextAll().removeClass('focused touched');
             that.nextAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.removeClass('focused');


         } else {
             that.addClass('touched');
             doormatFlags = 1;

             that.prevAll().removeClass('focused touched');
             that.prevAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.nextAll().removeClass('focused touched');
             that.nextAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
             that.addClass('focused');

             that.find('div.doormat').addClass('showdoormat').attr('aria-hidden', false).css("left", "0");
         } 
	
 
 
 };
 
     mainNavTop.bind('touchstart', function (e) {
         e.preventDefault();
         e.stopPropagation();
         var that = $(this).parent();
		 
		 onTouchStart(that);


     });

     mainNavTop.bind('touchend', function (e) {
         e.preventDefault();
         e.stopPropagation();
         var that = $(this).parent();
		 
		 onTouchEnd(that);

     });

//not in touch environment, TBT @ Windows 8 IE 10 dual interface systems

     mainNav.bind('mouseover', function (e) {
         var that = $(this);

		 onMouseOver(that);
		 
		 
     });


     mainNav.bind('mouseleave', function (e) {
         var that = $(this);

		 onMouseLeave(that);
		 
	 });

		
		doormatCloseTabLinks.bind('click touchend', function(e){
			var that = $(this);
			clearTimeout(navFadeTimerIn);
			doormatFlags = 0;
			e.preventDefault();
			e.stopPropagation();
			that.parents().find('#sections li.level1').removeClass('focused touched');
			that.parents().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
		});
		
		
		mainNav.bind('focusin', function(e){
			var that = $(this);			
			doormatFlags = 1;
			
			that.prevAll().removeClass('focused touched');
			that.prevAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
			that.nextAll().removeClass('focused touched');
			that.nextAll().find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
			that.addClass('focused');
			
			if ( doormatFlags ) {
				that.find('div.doormat').addClass('showdoormat').attr('aria-hidden', false).css("left", "0");
			}
			
		});
		
			
		mainNav.bind('focusout', function(e){
			var that = $(this);
			doormatFlags = 0;
			that.removeClass('focused touched');
			that.find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px"); 
		});
			
		
		$('#sections p.skipLink a').click(function(e) {
			var that = $(this);
			var nextItem = that.parents('li').next('li');
			e.preventDefault();
			mainNav.removeClass('focused touched');
			mainNav.find('div.doormat').removeClass('showdoormat').attr('aria-hidden', true).css("left", "-9999px");
			nextItem.find('a:eq(0)').focus();
		});
});