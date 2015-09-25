// ================================================== Modal Alert

var blanket_iframe_offset = null;
var _modal_args = null;
var lghtboxid = '';

function modalAlert(contentId, args) {
	if(contentId == null) {
		return false;
	}
	
	// if user switches from online to mobile  without closing ... clear
	lghtboxid = contentId;
	//var contentElem = document.getElementById(contentId);

	changeQTmovie(contentId);
	
	_modal_args = args != null ? args : null; // <- these args may be used elsewhere, such as in the hideModalAlert action.

	if(_modal_args != null && _modal_args.iframe != null) {
		iframe = parent == null ? null : _modal_args.iframe;
	}
	else {
		iframe = null;
	}
	
	//TEMP SET UP
	
	var contentElem = document.getElementById('lightbox');
	
	//var contentElem = document.getElementById(contentId);
	
	// this is necessary when we toggle back and forth between divs that have already been opened and have flash files embedded. 
	// The problem, only in ie, is that the flash player does not auto replay the second time the div is displayed.
	
	if (navigator.userAgent.indexOf('MSIE') != -1 ) {
		var contentElemHTML = contentElem.innerHTML;
		contentElem.innerHTML = "";
		contentElem.innerHTML = contentElemHTML;	
	}	
	

	if(contentElem == null) {
		if( iframe != null ) {
			contentElem = parent.document.getElementById(contentId);
		}
		if(contentElem == null) {
			return false;
		}
	}
	var body = ( iframe != null ) ? parent.document.getElementsByTagName('BODY').item(0) : document.getElementsByTagName('BODY').item(0);
	if(body == null) {
		body = document.getElementsByTagName('BODY').item(0);
	}
	// if this is the first time this content has been shown, initialize the content:
	if(contentElem.className == null || !contentElem.className.match('modalAlert_init')) {
		contentElem.visibility	= 'hidden';
		contentElem.display		= 'none';
		contentElem.className	+= ' modalAlert_init';
		//body.appendChild(contentElem);
	}

	var blanket = document.getElementById('modalBlanket');
	if(blanket == null && iframe != null) {
		blanket = parent.document.getElementById('modalBlanket');
	}
	
	if(blanket == null) {
		// create main blanket element
		blanket = ( iframe != null ) ? parent.document.createElement('DIV') : document.createElement('DIV');
		blanket.id = 'modalBlanket';
		blanket.style.position	= 'absolute';
		blanket.style.left		= 0;
		blanket.style.top		= 0;
		blanket.style.height	= '100%';
		blanket.style.width		= '100%';
		blanket.style.zIndex	= 100000; // try to ensure it's above everything else
		body.appendChild(blanket);
		blanket.style.display	= 'none';
		if(iframe != null) {
			var par_iframe_ref = parent.document.getElementById(iframe);
			blanket_iframe_offset = dhtml_getPosition(par_iframe_ref);
		}

		// create the transparent mask (have to do this because opacity inherits and can't be unset):
		// selectively use the ue 5/6 behavior (iframe) if needed in a non-ie browser:
		var useMask = false;
		if(_modal_args != null && typeof _modal_args.useMask != "undefined" && _modal_args.useMask != null && _modal_args.useMask) {
			useMask = true;
		}
		
		// DAN LEFT THIS CODE HERE IF WE NEED TO USE AN IFRAME
		if (false) {
			if(useMask || navigator.userAgent.indexOf('MSIE 6') != -1 || navigator.userAgent.indexOf('MSIE 5') != -1) {
				// ie 5/6 needs an iframe to cover any select menus
				blanketMask = ( iframe != null ) ? parent.document.createElement('IFRAME') : document.createElement('IFRAME');
				
				if(typeof(basepath) == 'undefined' || basepath == null) {
					basepath = '.';
				}
				
				blanketMask.src = './scripts/blanketframe.htm'; // have to use a real html file in order to get a background color
				//alert(blanketMask.src);
				
				//blanketMask.src = '/citibank.com/http/domain/scripts/blanketframe.htm'; // have to use a real html file in order to get a background color
				blanketMask.setAttribute('scrolling', "no");
				blanketMask.frameBorder = 0;
				blanketMask.style.backgroundColor = '#000';
				blanketMask.id = 'blanketMask';
				if(navigator.userAgent.indexOf('MSIE') != -1) {
					blanketMask.style.filter	= 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
				}
				else {
					blanketMask.style.opacity	= '0.7';
				}
			}
		}else {
			// non-ie can just use a div
			blanketMask = ( iframe != null ) ? parent.document.createElement('DIV') : document.createElement('DIV');
			blanketMask.id = 'blanketMask';
			
			if( _modal_args != null && typeof _modal_args.lightbox != "undefined" ) {		
				blanketMask.style.backgroundColor = '#fff';		
			}	else {
				blanketMask.style.backgroundColor = '#000';
			}
	
			if(window.navigator.appVersion.match(/MSIE/)) {
				blanketMask.style.filter	= 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
			}
			else {
				blanketMask.style.opacity	= '0.7';
			}
		}
		blanketMask.style.position = 'absolute';
		blanketMask.style.margin	= '0';
		blanketMask.style.padding	= '0';
		blanketMask.style.left		= '0';
		blanketMask.style.top		= '0';
		blanketMask.style.width		= '100%';
		blanketMask.style.height	= '100%';
		blanketMask.style.zIndex	= 0;
		blanket.appendChild(blanketMask);

		blanketMask = document.getElementById('blanketMask');
		if(blanketMask == null && iframe != null) {
			blanketMask = parent.document.getElementById('blanketMask');
		}
	}
	
	// clear out any previously set content:
	if(blanket.childNodes.length > 1) {
		var contentChild = blanket.childNodes[0];
		// we might need this content later, so we hide it and put it back in the 'body'
		contentChild.style.visibility	= 'hidden';
		contentChild.style.display		= 'none';
		body.appendChild(contentChild);
	}
	var viewport_dim	= dhtml_getViewPortDimensions();
	var scroll_offest	= dhtml_getScrollPosition();
	var body_dim		= dhtml_getPosition(body);

	var offset_height = 0;
	if(window && window.locationbar && window.locationbar.visible) {
		offset_height += 15;
	}
	else if(window.navigator) {
		offset_height += 21; // l21 ocationbar offset
		if(window.navigator.appVersion.match(/MSIE\s+[56]/)) {
			// ie 6 (and possibly 5)  will add a bunch of height to the body
			// which, apparently, you can't accurately test for...  this method
			// seems to work pretty well (a small amount of extra height may be
			// added).
			// take the difference between the body height andview port height
			// and divide by 2 (umm...):
			var html_dim = dhtml_getPosition(document.getElementsByTagName('HTML').item(0));
			if(body_dim.height < html_dim.height) {
				body_dim.height = html_dim.height;
			}
			
			offset_height += (body_dim.height > html_dim.height) ? 130 : 40; 
		}
	}
	

	// handle any window resizes:
	// (if the body is smaller than the viewport, we'll use the viewport dimensions):
	var leftScrollBarWidth = 0;
	
	if(window.navigator.appVersion.match(/MSIE/)) {
		offset_height += 140;
		leftScrollBarWidth = 21;
	}	
	
	blanket.style.width			= Math.max((body_dim.width - leftScrollBarWidth), (viewport_dim.width)) + 'px';
	blanket.style.height		= Math.max((body_dim.height + offset_height), viewport_dim.height) + 'px';
	blanketMask.style.width		= blanket.style.width;
	blanketMask.style.height	= blanket.style.height;

	// show the content and place it in the center of the screen:
	contentElem.style.visibility	= 'visible';
	contentElem.style.display		= '';
	contentElem.style.position		= 'absolute';
	contentElem.style.zIndex		= 2;

	if(_modal_args == null || typeof _modal_args.staticPostion == "undefined" || _modal_args.staticPostion == null || !_modal_args.staticPostion) {
		// don't start above the window or past the left edge of the screen:
		var left	= Math.max(0,parseInt(viewport_dim.width/2) + scroll_offest.left - parseInt(contentElem.offsetWidth/2));
		var top		= Math.max(0,parseInt(viewport_dim.height/2) + scroll_offest.top - parseInt(contentElem.offsetHeight/2));
		
		if(iframe != null && blanket_iframe_offset != null) {
			left	+= blanket_iframe_offset.left;
			top		+= blanket_iframe_offset.top;
		}
	
		contentElem.style.left			= left + 'px';
		contentElem.style.top			= top + 'px';
	}
	blanket.appendChild(contentElem);	
	blanket.appendChild(blanketMask);
	// show the main blanket
	blanket.style.display		= '';

	return false;
}

function hideModalAlert(flag) {

	
	var blanket = document.getElementById('modalBlanket');
	// hide the main blanket
	// (we'll worry about moving content if the blanket is shown again):
	
	if(blanket != null) {
		blanket.style.display	= 'none';
	}
	
	clearQTmovie(lghtboxid);
		
	if(_modal_args != null && _modal_args.callback != null) {
		return _modal_args.callback(flag, _modal_args);
	}

	return false;
}



