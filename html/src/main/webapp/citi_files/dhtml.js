// dhtml_getViewPortDimensions() -----------------------------------------------------
// returns the dimensions of the view port
function dhtml_getViewPortDimensions() {
	var _viewport = {'width': 0, 'height': 0};
	
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		_viewport.width		= window.innerWidth;
		_viewport.height	= window.innerHeight;
	}
	else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		_viewport.width		= document.documentElement.clientWidth;
		_viewport.height	= document.documentElement.clientHeight;
	}
	else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		_viewport.width		= document.body.clientWidth;
		_viewport.height	= document.body.clientHeight;
	}
	return _viewport;
}


// dhtml_getScrollPosition() ---------------------------------------------------------
// returns the amount (if any) the windows has been scrolled from the left and top
function dhtml_getScrollPosition() {
	var _scroll = {'left': 0, 'top': 0};

	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape
		_scroll.top = window.pageYOffset;
		_scroll.left = window.pageXOffset;
	}
	else if( document.documentElement && typeof document.documentElement.scrollLeft == 'number') {
		//IE6
		_scroll.top = document.documentElement.scrollTop;
		_scroll.left = document.documentElement.scrollLeft;
	}
	else if( document.body && typeof document.body.scrollLeft == 'number') {
		//DOM
		_scroll.top = document.body.scrollTop;
		_scroll.left = document.body.scrollLeft;
	}
	return _scroll;
}


// dhtml_getViewPortCenter() ---------------------------------------------------------
// determines the coordinates of the page at the center of the viewport
// taking into account the amount of window scrolling
function dhtml_getViewPortCenter() {
	var _dim	= dhtml_getViewPortDimensions();
	var _scroll	= dhtml_getScrollPosition();
	
	var _coords = {
		'x': _scroll.left,
		'y': _scroll.top,
		'width': _dim.width,
		'height': _dim.height,
		'center_x': parseInt(_dim.width/2) + _scroll.left,
		'center_y': parseInt(_dim.height/2) + _scroll.top
	};
	return _coords;
}

// dhtml_getPosition() ---------------------------------------------------------
// Get element's position - returns top, left, width, height
// includes corrections to IE issues:
var ie  = !!(typeof window.attachEvent != "undefined" && window.attachEvent && !window.opera);
var ie_ver;
if(ie) {
	var v = navigator.userAgent.match(/MSIE (\d+)/);
	ie_ver = v[1];
}

function dhtml_getPosition(elem) {
	var _pos = { 'top': 0, 'left': 0, 'width': 0, 'height': 0 };
	if(elem == null) {
		return _pos;
	}

	var stopLeft	= 0;
	var stopTop		= 0;

	if(elem.offsetParent) {
		_pos.width	= parseInt(elem.offsetWidth);
		_pos.height	= parseInt(elem.offsetHeight);

		var offsetAdjust = 0; // IE offsetLeft tests (special, parent's parent case)

		do {
			if(stopLeft == 0) {
				_pos.left += elem.offsetLeft;
			}
			if(stopTop == 0) {
				_pos.top += elem.offsetTop;
			}
			
			if(!ie || ie_ver >= 8) {
				continue;
			}
			if( !_IEPositionTest(elem) ) {
				// if current elem does NOT pass test
				if( elem.offsetParent && _IEPositionTest(elem.offsetParent) ) {
					// but parent elem DOES pass test
					if(_pos.left > 0) {
						// then subtract parent.offsetLeft (and parent border left):
						_pos.left -= elem.offsetParent.offsetLeft;
						var bdr = parseInt(elem.offsetParent.currentStyle.borderLeftWidth);
						_pos.left -= isNaN(bdr) ? 0 : bdr;
					}
				}
				offsetAdjust = 0;
			}
			else {
				// if current elem DOES pass test
				if(offsetAdjust) {
					// and is the parent of another elem that ALSO passed test, and
					if( elem.offsetParent && _IEPositionTest(elem.offsetParent) ) {
						// it's parent passed test,
						// then subtract parent.offsetLeft (and parent border left):
						_pos.left -= elem.offsetParent.offsetLeft;
						_pos.left -= parseInt(elem.offsetParent.currentStyle.borderLeftWidth);
					}
				}
				offsetAdjust = 1;
			}
		} while(elem = elem.offsetParent);
	}
	else {
		_pos.width = parseInt(elem.offsetWidth);
		_pos.height = parseInt(elem.offsetHeight);
	}

	return _pos;
};
function _IEPositionTest(elem) {
	if( typeof elem.currentStyle == "undefined") {
		return false;
	}
	if(elem.currentStyle.position == 'relative' && elem.currentStyle.hasLayout == false) {
		return true;
	}
	return false;
}

// dhtml_getStyles() -----------------------------------------------------------------
// get current style rules for element - useful when no inline styles have
// been defined:
function dhtml_getStyles(elem) {
	if(elem.currentStyle) {
		return elem.currentStyle;
	}
	else if(window.getComputedStyle) {
		return document.defaultView.getComputedStyle(elem, null);
	}
	return null;
}
