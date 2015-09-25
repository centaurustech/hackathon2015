var flash2Obj;
var cboltour_qtPlayingNow;
var cboltour_qtArrayMovies;

function videobuttonclick(text) {
	var s = s_gi(s_account)
	s.linkTrackVars="prop1,eVar20,events";
	s.pageName=s.pageName; 
	s.eVar20=s.pageName + text; 
	//var lt = obj
	s.tl(this,'o', text); 
}


function _fl_h(filename, mvtype){
	var fileName = filename.filename;
	var fileWidth;
	var fileHeight;
	if(typeof filename.width != 'undefined' && filename.width != null){
		fileWidth = filename.width;
	}else{fileWidth = 830;}
	if(typeof filename.height != 'undefined' && filename.height != null){
		fileHeight = filename.height;
	}else{fileHeight = 500;}
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	if (isIE) {
		return 	    '<object codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"'+
					' width="'+fileWidth+'"'+
					' height="'+fileHeight+'"'+ 
					' align="middle"'+
					' id="qt_movie_1"'+
					' name="qt_movie_1"'+
					' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'+
					' type="application/x-shockwave-flash">'+
					'<param name="movie" value="/JRS/cboltour/flashStreamed/' + fileName + '.swf"/>'+ 
					'<param name="src" value="/JRS/cboltour/flashStreamed/' + fileName + '.swf"/>'+
					'<param name="quality" value="high"/>'+
					'<param name="play" value="true"/>'+
					'<param name="loop" value="true"/>'+
					'<param name="scale" value="showall">'+
					'<param name="wmode" value="transparent"/>'+
					'<param name="devicefont" value="false"/>'+
					'<param name="bgcolor" value="#ffffff"/>'+
					'<param name="menu" value="true"/>'+
					'<param name="allowFillScreen" value="false"/>'+
					'</object>';						
	} else {
		return '<embed height="'+fileHeight+'" width="'+fileWidth+'" align="middle" type="application/x-shockwave-flash" salign="" allowfullscreen="false" menu="true" id="qt_movie_1" name="qt_movie_1" bgcolor="#ffffff" devicefont="false" wmode="transparent" scale="showall" loop="true" play="true" pluginspage="//www.macromedia.com/go/getflashplayer" quality="best" src="/JRS/cboltour/flashStreamed/'+fileName+'.swf" movie="/JRS/cboltour/flashStreamed/'+fileName+'.swf"/>';
		}						
}

function cboltourAvatarChangeQT (qtMovie) {
	if (qtMovie == 'prev' || qtMovie == 'next') {
	
		var currentIndex = jQuery.inArray(cboltour_qtPlayingNow, cboltour_qtArrayMovies);	
		// sanity check - ensure that we cant go beyond the range
		if ( ( qtMovie == 'prev' && currentIndex == 0 ) || 
			 ( qtMovie == 'next' && currentIndex == cboltour_qtArrayMovies.length - 1)
			) {
			return;
		}
		
		qtMovie = qtMovie == 'prev' ? cboltour_qtArrayMovies[currentIndex - 1]
									: cboltour_qtArrayMovies[currentIndex + 1];
	
	}
	
	cboltour_qtPlayingNow = qtMovie;	
	
	// set the nav style based on what is currently active
	_cboltourSetNavStyles(cboltour_qtPlayingNow);
	
	$('#cboltour_lghtboxHeaderTitle').html(lghtBoxToMovie[qtMovie].title);
	
	modalAlert(qtMovie, {'lightbox': 'cboltour_avatar_lghtbox'});
}


function _cboltourSetNavStyles(qtMovie) {

	// remove active class from all items
	for (var i=0; i < cboltour_qtArrayMovies.length; i++) {
		var what_qtmv = cboltour_qtArrayMovies[i];
			$('#nav_item_'+what_qtmv).removeClass('active');
	}	
			
	// assign active class to current movie
	$('#nav_item_'+qtMovie).addClass('active');

	// remove disable class from ends
	$('#cboltour_nav_item_prev').removeClass('disable');	
	$('#cboltour_nav_item_next').removeClass('disable');
	
	// what styles to put on prev/next
	var currentIndex = jQuery.inArray(cboltour_qtPlayingNow, cboltour_qtArrayMovies);	
	if ( currentIndex == 0 )  { $('#cboltour_nav_item_prev').addClass('disable'); }
	if ( currentIndex == cboltour_qtArrayMovies.length - 1 ) { $('#cboltour_nav_item_next').addClass('disable'); }

}

function cboltourModalAlertQT(qtMovie, args) {

	cboltour_qtPlayingNow = qtMovie;
	
	_createLghtBox(qtMovie);

	if (typeof args != 'undefined' && args != null  ) {
		if ( typeof args.qt != 'undefined' && args.qt != null ) {
			_create_nav_items(args);
			
			// set the nav style based on what is currently active
			_cboltourSetNavStyles(cboltour_qtPlayingNow);	
		}	
	} else {
		// make sure that the nav does not display it exists in the dom but now user is clicking on showing a single movie
		$('#cboltour_lghtboxHeaderNav').hide();
	}
	
	// populate title under header
	$('#cboltour_lghtboxHeaderTitle').html(lghtBoxToMovie[qtMovie].title);
	
	modalAlert(qtMovie, {'lightbox': 'cboltour_avatar_lghtbox'});
	var h;
	
	if(typeof(height) == "undefined") {	
		h = $('#blanketMask').css('height');	
		if(typeof(h) == "undefined") {
			h = '1000';
			alert(h);
		} else {
			var h1 = h.replace("px", "") - 0;
			h = h1 + 550;		
		}
	} else {
		h = height;
	}
	
	$('#blanketMask').css('height', h + 'px'); 
	videobuttonclick('vPlayerThankYou');
	return false;
}

function _create_nav_items (args) {

	// make sure it is displayed if exists
	$('#cboltour_lghtboxHeaderNav').show();

	// return if elements already created
	if ( document.getElementById('cboltour_nav_item_prev') != null ) {
		 return;
	}	 
	// copy to global array
	cboltour_qtArrayMovies = args.qt;

	//create previous/next links
	var prev_item;
	var next_item;
	

	if ($.browser.msie && parseFloat($.browser.version) < 9) {
		prev_item = document.createElement("<a onclick=\"return cboltourAvatarChangeQT('prev');\"></a>");
		next_item = document.createElement("<a  onclick=\"return cboltourAvatarChangeQT('next');\"></a>");		
	} else {		
		prev_item = document.createElement('a');				
		$(prev_item).bind( 'click', {direction : 'prev'},  function (event) { 
			return cboltourAvatarChangeQT( event.data.direction );	
		});		

		next_item = document.createElement('a');	
		$(next_item).bind( 'click', {direction : 'next'},  function (event) { 
			return cboltourAvatarChangeQT( event.data.direction );	
		});					
	}
	
	$(prev_item).attr("id", 'cboltour_nav_item_prev');		
	$(prev_item).css({'text-decoration':'none'});
	$(prev_item).html('Prev');
	$(prev_item).attr("href", '#');
	$(prev_item).attr("class", 'cboltour_prevnext');		
	// add previous 
	$('#cboltour_avatar_qt_navitems').append(prev_item);		

	$(next_item).attr("id", 'cboltour_nav_item_next');		
	$(next_item).css({'padding':'3 10px', 'text-decoration':'none'});
	$(next_item).html('Next');
	$(next_item).attr("href", '#');
	$(next_item).attr("class", 'cboltour_prevnext');			
	
	for (var i=0; i < args.qt.length; i++) {
		var what_qtmv = args.qt[i];
		
			var nav_item;
						
			if ($.browser.msie && parseFloat($.browser.version) < 9) {
				nav_item = document.createElement("<a onclick=\"return cboltourAvatarChangeQT('"+what_qtmv+"');\"></a>");			
			} else {
				
				nav_item = document.createElement('a');				
				$(nav_item).bind( 'click', {qt: what_qtmv},  function (event) { 
					return cboltourAvatarChangeQT( event.data.qt );	
				});						
			}
			
			$(nav_item).attr("id", 'nav_item_'+what_qtmv);			
			$(nav_item).html(i+1);
			$(nav_item).attr("href", '#');		
			$('#cboltour_avatar_qt_navitems').append(nav_item);	
	}
	// add next item
	$('#cboltour_avatar_qt_navitems').append(next_item);
}
function killModalAlert(){
	$('#modalBlanket').remove();
}


function  _createLghtBox(qtMovie) {
	var lghtBoxWidth;
	var lghtBoxHeight;
	if (typeof qtMovie != 'undefined' && qtMovie != null  ) {
		if ( typeof lghtBoxToMovie[qtMovie].width != 'undefined' && lghtBoxToMovie[qtMovie].width != null ) {
			lghtBoxWidth = lghtBoxToMovie[qtMovie].width;
		}else {
			lghtBoxWidth = '830';
		}
		if ( typeof lghtBoxToMovie[qtMovie].height != 'undefined' && lghtBoxToMovie[qtMovie].height != null ) {
			lghtBoxHeight = lghtBoxToMovie[qtMovie].height;
		}else {
			lghtBoxHeight = '500';
		}
	}	

	if ( typeof document.getElementById('lightbox') == 'undefined' || 
			 document.getElementById('lightbox') == null ) {
		 
		var lightbox = document.createElement('DIV');
		$(lightbox).attr("id", 'lightbox');
		$(lightbox).attr("class", 'alertpanel');			
		$(lightbox).css({'display': 'none', 'position': 'absolute'});	
		$('body').append(lightbox);
		
		var lghtboxBgdImg = document.createElement('DIV');
		$(lghtboxBgdImg).attr("id", 'cboltour_lghtboxBgdImg');	
		$(lghtboxBgdImg).attr("class", 'cboltour_lghtboxBgdImg');
		$(lghtboxBgdImg).css({
			'width': lghtBoxWidth+'px',
			'height': (+lghtBoxHeight+40)+'px'
		});
		$(lightbox).append(lghtboxBgdImg);
		
	
		var close_item;					
		if ($.browser.msie && parseFloat($.browser.version) < 9) {
			close_item = document.createElement('<a  onclick=\"return killModalAlert();\"></a>');				
		} else {
			close_item = document.createElement('a');	
			$(close_item).bind( 'click', function (i) { 
				return killModalAlert();	
			});					
		}	
		$(close_item).attr('class', 'cboltour_avatar_close_lghtbox');
		$(close_item).attr('id', 'cboltour_avatar_close_lghtbox');
			
				
		$(close_item).attr("href", '#');									
		$(lghtboxBgdImg).append(close_item);
		
		var lghtboxHeaderTitle = document.createElement('DIV');
		$(lghtboxHeaderTitle).attr("id", 'cboltour_lghtboxHeaderTitle');
		$(lghtboxHeaderTitle).attr("class", 'cboltour_lghtboxHeaderTitle');		
		$(lghtboxBgdImg).append(lghtboxHeaderTitle);			
		
		var lghtboxHeaderSpaceNav = document.createElement('DIV');
		$(lghtboxHeaderSpaceNav).attr("id", 'cboltour_lghtboxHeaderNav');
		$(lghtboxHeaderSpaceNav).attr("class", 'cboltour_lghtboxHeaderNav');	
		$(lghtboxBgdImg).append(lghtboxHeaderSpaceNav);				

		var cboltourAvatarQtNav = document.createElement('DIV');
		$(cboltourAvatarQtNav).attr("id", 'cboltour_avatar_qt_nav');	
		$(cboltourAvatarQtNav).attr("class", 'cboltour_avatar_qt_nav');			
		$(lghtboxHeaderSpaceNav).append(cboltourAvatarQtNav);

		var cboltourAvatarQtNavItems = document.createElement('SPAN');
		$(cboltourAvatarQtNavItems).attr("id", 'cboltour_avatar_qt_navitems');
		$(cboltourAvatarQtNavItems).attr("class", 'cboltour_avatar_qt_navitems');			
		$(cboltourAvatarQtNav).append(cboltourAvatarQtNavItems);			
		
		var cbolflashcontent_div = document.createElement('DIV');
		$(cbolflashcontent_div).attr("id", 'flashcontent');						
		$(lghtboxBgdImg).append(cbolflashcontent_div);		

		// adjust style for ie	
		if ($.browser.msie) { 
			$(close_item).css({'padding-right':'38px'}); 
			$(lghtboxHeaderTitle).css({'display':'inline'});
			$(lghtboxHeaderSpaceNav).css({'display':'inline'});
		}
		
	}	

}
