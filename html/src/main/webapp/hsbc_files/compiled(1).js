/**
 * @projectDescription: Compiled generic functionality for the PWS build pack.
 * Contains:
 * $.fn.hasFocus 1.0
 * $.fn.inputMsg 1.3
 * $.fn.dataFilter 1.3
 * $.fn.showHide 1.8
 * $.fn.megaDropdown 1.1
 * $.fn.tooltip 2.5
 * $.fn.treeView 1.2
 * $.fn.revolver 2.16
 * $.fn.fixedTableHeader 1.1
 * $.fn.infiniteCarousel 1.0
 */

(function($){
	/**
	 * @projectDescription: jQuery plugin for replacing default <select> or <ul> with custom ones.
	 * @version: 2.13
	 */
	$.fn.customSelect = function(opts){
		opts = $.extend({
			active: 'active',
			startValue: null,
			maxHeight: 300,
			zIndexStart: 0
		}, opts);
		
		var noOfElems = this.length;
		return this.each(function(i){			
			var selectExists = true;
			if(!$(this).find('select').length){
				selectExists = false;
			}
			
			var $this = $(this),
				$label = $this.find('label').attr('id', 'customSelectLabel'+i),
				$node = selectExists ? $this.find('select').hide() : $this.find('ul').hide(),
				$menu = $('<div class="customSelectMenu">').css('zIndex', opts.zIndexStart + noOfElems-i).appendTo($this),
				$valueRegion = $('<div tabIndex="0" class="valueRegion"><div class="valueRegionInner"><div class="arrow"/></div></div>"').appendTo($menu),
				$value = $('<div class="value" />').css('overflow', 'hidden').prependTo($valueRegion.find('.valueRegionInner')),
				$list = $('<ul role="listbox" aria-hidden="true" aria-labelledby="'+$label.attr('id')+'" id="menu' + i + '" />').appendTo($menu),
				selectIndex = 0,
				changeCount = 0,
				scrollable = false;
			
			if(selectExists){
				if(typeof($.fn.prop) === 'function'){
					var selectIndex = $node.prop('selectedIndex');
				}
				else{
					var selectIndex = $node.attr('selectedIndex');
				}
			}

			$list.css('float', 'left');
			$node.find('option, li').each(function(i){
				var className = '';
				if(i === $node.find('option, li').length-1){
					className = 'last';
				}
				var $listItem = $(
					'<li class="' + className + '" role="option" aria-selected="false"><span>' + $(this).text() + '</span></li>'
				).appendTo($list);
				
				if($(this).find('a').length){
					$listItem.html(
						'<span><a href="' + $(this).find('a').attr('href') + '">' + $(this).text() + '</a></span>'
					);
				}
			});
			
			if($list.width() < $valueRegion.width()){
				$list.width($valueRegion.width());
			}
			else{
				$list.width($list.width());
			}
			
			var width = $list.width();
			if($list.height() >= opts.maxHeight){
				scrollable = true;
				$list.css({
					height: opts.maxHeight,
					overflowY: 'scroll'
				});
				width += 20;//add 20px for scrollbar
			}
			
			$list.css({
				'float': 'none',
				position:'absolute',
				width: width
			});
			
			var visibleItems = Math.floor($list.height()/$list.find('li').eq(0).outerHeight());
			$list.hide();
			
			$valueRegion.click(function(e){
				e.preventDefault();
				if($list.is(':visible')){
					highlight();
					close();
				}
				else{
					open();
				}
			});
			$(document).click(function(e){
				if(!$.contains($this[0], e.target)){
					close();
				}
			});
			var $links = $list.find('li');
			$links.each(function(i){
				$(this)
					.click(function(){
						selectIndex = i;
						change();
						close();
					})
					.hover(function(){
						selectIndex = i;
						highlight();
					}, function(){
						$(this).removeClass(opts.active);
					});
			});
			$valueRegion.keydown(function(e){
				var keycode = e.keyCode,
					listSize = $list.find('li').length-1;
					direction = '';
				if(keycode <= 40 && keycode >= 13){
					if((keycode === 40) && (e.altKey)){ //alt & down key
						if(!$list.is(':visible')){
							open();
						}
					}
					else if(((keycode === 38) && (e.altKey)) || (keycode === 27)){ //alt & up key or esc key
						if($list.is(':visible')){
							close();
						}
					}
					else if((keycode === 40) || (keycode === 39)){ //down or right key
						if(selectIndex < listSize){
							selectIndex++;
							direction = 'down';
						}
					}
					else if((keycode === 38) || (keycode === 37)){ //up or left key
						if(selectIndex > 0){
							selectIndex--;
							direction = 'up';
						}
					}
					else if((keycode === 34) || (keycode === 35)){ //page down or end key
						if(selectIndex < listSize){
							selectIndex = listSize;
							direction = 'down';
						}
					}
					else if((keycode === 33) || (keycode === 36)){ //page up or home key
						if(selectIndex > 0){
							selectIndex = 0;
							direction = 'up';
						}
					}
					else if(keycode === 13){ //enter key
						close();
						if(!selectExists){
							document.location = $list.find('li a').eq(selectIndex).attr('href');
						}
					}
					change(direction);
					//prevent default window scroll events
					return false;
				}
			});
			
			$this.find('label').click(function(){
				$valueRegion.focus();
			});
			
			$valueRegion
				.focus(function(){
					$menu.addClass('onFocus');
				})
				.blur(function(){
					$menu.removeClass('onFocus');
				});
			
			change();
			bindCustomEvents();
			
			/**
			 * Bind custom events
			 */
			function bindCustomEvents(){
				$this
					.bind('changecustomselect', function(e, index){
						selectIndex = index;
						change();
					});
			}
			/**
			 * Opens the list
			 */
			function open(){
				$list.show().attr('aria-hidden', 'false');
				$this
					.addClass('open')
					.trigger('onopencustomselect', selectIndex);
				highlight();
				scroll('down');
			}
			/**
			 * Closes the list
			 */
			function close(){
				$list.hide().attr('aria-hidden', 'true');
				$this
					.removeClass('open')
					.trigger('onclosecustomselect', selectIndex);
			}
			/**
			 * Remove the active class from all list items and add it to the selected index
			 */
			function highlight(){
				$links.removeClass(opts.active).attr('aria-selected', 'false');
				$links.eq(selectIndex).addClass(opts.active).attr('aria-selected', 'true');
			}
			/**
			 * Change the selected value of the custom and real select boxes
			 */
			function change(direction){
				if(changeCount == 0 && opts.startValue != null){
					$value.text(opts.startValue);
				}
				else{
					$value.text($list.find('li').eq(selectIndex).text());
				}
				
				truncateValue();
				
				if(selectExists){
					if(typeof($.fn.prop) === 'function'){
						$node.prop('selectedIndex', selectIndex);
					}
					else{
						$node.attr('selectedIndex', selectIndex);
					}
				}
				$this.trigger('onchangecustomselect', selectIndex);
				$menu.removeClass('open');
				highlight();
				if(scrollable){
					scroll(direction);
				}
				changeCount++;
			}
			/**
			 * Truncates the text in $value with an ellipsis.
			 */
			function truncateValue(){
				$value.css({
					height: 'auto',
					overflow: 'visible'
				});
				
				var txt = $value.text(),
			        lh = $value.text('.').height();
		
		        $value.text(txt);
		        while($value.height()>1*lh && txt.length) {
		            txt = txt.substr(0, txt.length-1).replace(/\W$/,'');
		            $value.text(txt + '...');
		        }
			}
			/**
			 * Scrolls the list to show the highlighted item if it is not visible.
			 * @param: direction {String} - 'up' or 'down'
			 */
			function scroll(direction){
				var itemHeight = $links.eq(selectIndex).outerHeight();
				
				if(direction === 'down' && selectIndex > visibleItems-1){
					$list.scrollTop((itemHeight * ((visibleItems-1) - selectIndex)*-1));
				}
				else if(direction === 'up' && $links.eq(selectIndex).position().top < 0){
					$list.scrollTop(itemHeight * selectIndex);
				}
			}
		});
	};

	/**
	 * @projectDescription: jQuery plugin invoking a function based on if an element's children have focus
	 * @version: 1.0
	 */
	$.fn.hasFocus = function(callback){
		
		return $(this).each(function(){
			var $this = $(this),
				$focusable = $this.find('a, input'),
				hasFocus = false;
			
			$focusable.each(function(i){
				var $item = $(this);
				setTimeout(function(){
					if($item.is(':focus')){
						hasFocus = true;
					}
					
					if(i === $focusable.length-1){
						if(typeof callback === 'function'){
							callback(hasFocus);
						}
					}
				}, 0);
			});
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for setting a default message for input fields
	 * @version: 1.3
	 */
	$.fn.inputMsg = function(opts){
		opts = $.extend({
        	message: '',
            className: ''
        }, opts);
        
        return $(this).each(function(index) {
        	var $this = $(this),
        		message = opts.message ? opts.message : $this.val();
        	
			$this
        		.val(message)
                .addClass(opts.className)
                .blur(function(){
                	if(!$this.val()){
                    	$this.val(message).addClass(opts.className);
                    }
                })
                .focus(function(){
                	if($this.val() === message){
                		$this.val('').removeClass(opts.className)
                    }
                });
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for filtering content via tab selection
	 * @version 1.3
	 */
	$.fn.dataFilter = function(opts) {
		
		opts = $.extend(true, {
			duration: 0,
			selectors: {
				filterElements: 	'div',
				filterTabs: 		'.filterTabs',
				filterTabItem:		'li',
				filterTabTrigger: 	'a'
			},
			classes: {
				selectedTab: 'selected'
			},
			html5: false,
			addAriaWrapper: true
		}, opts);
		
		var $obj = this;
		$obj.busy = false;
		
		return this.each(function() {
			var $tabs = $obj.find(opts.selectors.filterTabs).show(),
				$tabItems = $tabs.find(opts.selectors.filterTabItem);
			
			$tabItems.each(function(i){
				$(this).find(opts.selectors.filterTabTrigger).click(function(e){
					if(!$obj.busy) {
						filter(getDataAttributes(e.target));
						
						$tabItems.removeClass(opts.classes.selectedTab);
						$tabItems.eq(i).addClass(opts.classes.selectedTab);
					}
					return false;
				});
			});
			
			if(opts.addAriaWrapper){
				$obj.attr({
					'aria-live': 'polite',
					'aria-relevant': 'all'
				});
			}
			
			$obj.find(opts.selectors.filterElements).each(function(){
				if($(this).is(':visible')){
					$(this).attr('aria-hidden', false);
				}
				else{
					$(this).attr('aria-hidden', true);
				}
			});
		});
		/*
		 * Creates a jQuery statement for selecting elements whose data attributes match.
		 * Shows matching elements and hides unmatching elements. 
		 * @param: {object} data - the data attributes to be filtered against
		 */
		function filter(data) {
			var matchedElements = opts.selectors.filterElements;
			
			for(attr in data) {
				if(opts.html5) {
					matchedElements += '[' + attr + '=' + data[attr] + ']';					
				}
				else {
					matchedElements += '.' + attr + '_' + data[attr];										
				}
			}
			
			for(attr in data) {
				if(opts.html5) {
					matchedElements += ',' + opts.selectors.filterElements + '[' + attr + '=all]';
				}
				else {
					matchedElements += ',' + opts.selectors.filterElements + '.' + attr + '_all';
				}
			}
			
			if($obj.find(matchedElements).is(':hidden') || $obj.find(opts.selectors.filterElements).not(matchedElements).is(':visible')) {
				$obj.busy = true;			
				$obj.find(matchedElements+':hidden').attr('aria-hidden', false).slideDown(opts.duration, function() {
					if($obj.find(opts.selectors.filterElements+':visible').not(matchedElements).length > 0) {
						$obj.find(opts.selectors.filterElements+':visible').attr('aria-hidden', false).not(matchedElements).attr('aria-hidden', true).slideUp(opts.duration, function() {
							$obj.busy = false;
						});	
					}
					else {
						$obj.busy = false;
					}
				});				
			}
		}
		/*
		 * Loops through the DOM attributes of an HTML element and puts any that begin with 'data-' into an object.
		 * @param: {HTMLElement} elem - a single DOM element. e.g. the target of a click event 
		 * @returns: {object} data - the data attribute name and values of the element
		 */
		function getDataAttributes(elem) {
			var data = {};

			if(opts.html5) {
				for(var i=0;i<elem.attributes.length;i++) {
					if(elem.attributes.item(i).nodeName.slice(0,5) === 'data-') {
						data[elem.attributes.item(i).nodeName] = elem.attributes.item(i).nodeValue;
					}
				}				
			}
			else {
				var classes = elem.className.split(" ");
				for(var i=0;i<classes.length;i++) {
					classes[i].split("=");
					if(classes[i].slice(0,5) === 'data-') {
						data[classes[i].split("_")[0]] = classes[i].split("_")[1];
					}
				}				
			}
			
			return data;							
		}
	};
	
	/**
	 * @projectDescription: jQuery plugin for show/hiding content with a trigger
	 * @version: 1.8
	 */
	$.fn.showHide = function(opts) {
		opts = $.extend({
			activeClass: 	'open',
			duration: 		'normal',
			trigger: 		'.showHideTrigger',
			content: 		'.showHideContent',
			delay:			0,
			update : [], //[{selector:'.selector', text:['close','open']}]
			clickTriggered: true, //if false then 'hover' event is used.
			jQuerySlide: true, //use default jQuery slide methods.
			addAriaWrapper: true
		}, opts);

		return this.each(function(i) {
			var $this = $(this),
				$trigger = $this.find(opts.trigger).eq(0).show(),
				$content = $this.find(opts.content).eq(0),
				maxHeight = $content.height(),
				hash = window.location.hash.substr(1),
				timer = null;
				
			if(opts.addAriaWrapper){
				$this.attr({
					'aria-live': 'polite',
					'aria-relevant': 'all'
				});
			}
							
			$content
				.css({
					height: opts.jQuerySlide ? 'auto' : 0
				})
				.hide()
				.attr('aria-hidden', true);
			
			if(opts.clickTriggered){
				$trigger.click(function(e){
					e.preventDefault();
					toggle();
				});
			}
			else{
				$trigger
					.bind('mouseenter', function(){
						timer = setTimeout(function(){
							show();
						}, opts.delay);
					})
					.bind('mouseleave', function(){
						clearTimeout(timer);
					});
				$this.bind('mouseleave', function(){
					hide();
					clearTimeout(timer);
				});
			}
			
			$this
				.bind('toggleshowhide', function(e, snap){
					toggle(snap);
				})
				.bind('openshowhide', function(e, snap){
					show(snap);
				})
				.bind('closeshowhide', function(e, snap){
					hide(snap);
				});
			
			if($this.attr('id') !== '' && $this.attr('id') === hash){
				toggle(true);
			}
			
			/**
			 * Toggles the content node and adds/removes relevant classes
			 * @param: {Boolean} snap - snap $content or not
			 */
			function toggle(snap){
				if(!$content.is(':visible') || $content.height() === 0){
					show(snap);
				}
				else{
					hide(snap);
				}
			}
			/**
			 * Show content, add active class and trigger event
			 * @param: {Boolean} snap - snap $content or not
			 */
			function show(snap){
				var duration = snap ? 0 : opts.duration;
				
				if(opts.jQuerySlide){
					$content.slideDown(duration, function(){
						complete();
					});
				}
				else{
					$content.show().animate({height: maxHeight}, duration, function(){
						complete();
					});
				}
				
				function complete(){
					$content.attr('aria-hidden', false);
					$trigger.addClass(opts.activeClass);
					update(true);
					$this.trigger('onopenshowhide');
				}
			}
			/**
			 * Hide content, remove active class and trigger event
			 * @param: {Boolean} snap - snap $content or not
			 */
			function hide(snap){
				var duration = snap ? 0 : opts.duration;
				
				if(opts.jQuerySlide){
					$content.slideUp(duration, function(){
						complete();
					});
				}
				else{
					$content.animate({height: 0}, duration, function(){
						complete();
					});
				}
				
				function complete(){
					$content
						.attr('aria-hidden', true)
						.hide();
					$trigger.removeClass(opts.activeClass);
					update(false);
					$this.trigger('oncloseshowhide');
				}
			}
			/**
			 * Updates the text value of an arbitrary number of selectors, depending on if
			 * the node passed is open or closed.
			 * @param: {boolean} isOpen - if the node passed is open or not.
			 */
			function update(isOpen) {
				for(var i = 0; i < opts.update.length; i++) {
					$this.find(opts.update[i].selector).text(opts.update[i].text[isOpen ? 0 : 1]);
				}
			}
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for show/hiding mega dropdowns
	 * @version: 1.2
	 */
 	$.fn.megaDropdown = function(opts) {
		opts = $.extend({
			activeClass: 	'active',
			node:			'.container',
			addAriaWrapper: true
		}, opts);

		return this.each(function() {
			var $this = $(this),
				$listItems = $this.children('li'),
				$nodes = $this.find(opts.node).attr('aria-hidden', true);
				
			if(opts.addAriaWrapper){
				 $this.attr({
					'aria-live': 'polite',
					'aria-relevant': 'all'
				});
			}
				
			$listItems.each(function(i){
				$(this)
					.bind('focusin mouseover', function(){
						show(i);
					})
					.bind('mouseleave', function(){
						hide(i);
					});
					
				$(this).focusout(function(){
					$(this).hasFocus(function(hasFocus){
						if(!hasFocus){
							hide(i);
						}
					});
				});
			});
			
			$this
				.bind('openmegadropdown', function(e, index){
					show(index);
				})
				.bind('closemegadropdown', function(e, index){
					hide(index);
				})
				.bind('closeallmegadropdown', function(){
					hide();
				});
			
			/**
			 * Shows a node at a given index.
			 * @param {Int} index - index of node to show
			 */
			function show(index){
				$listItems.eq(index)
					.addClass(opts.activeClass)
					.find(opts.node)
						.attr('aria-hidden', false);
						
				$this.trigger('onopenmegadropdown', index);
			}
			/**
			 * Hides a node at a given index.
			 * @param {Int} index - index of node to hide. If no index is passed then all are hidden.
			 */
			function hide(index){
				var $item = (index !== undefined) ? $listItems.eq(index) : $listItems;
				
				$item
					.removeClass(opts.activeClass)
					.find(opts.node)
						.attr('aria-hidden', true);
						
				$this.trigger('onclosemegadropdown', index);
			}
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for show/hidding a tooltip with a trigger.
	 * @version: 2.5
	 * @optional: jquery.fade-elem.js
	 */	
	$.fn.tooltip = function(opts){
		opts = $.extend(true, {
			selectors: {
				trigger:	'.tooltipTrigger',
				content:	'.tooltipContent'
			},
			classes: {
				overlay: 	'tooltipOverlay',
				inner1: 	'tooltipInner1',
				inner2: 	'tooltipInner2',
				spout: 		'spout'
			},
			fncs: {
				getLeft: function(){
					return 0;
				},
				getTop: function(){
					return 0;
				}
			},
			clickTriggered: true, //if false then 'hover' event is used.
			active:			'active',
			duration:		'normal',
			closeContent: 	'',
			zIndexStart: 0,
			zIndexFromBottom: true
		}, opts);
		
		var noOfElems = this.length;
		return this.each(function(i){
			var $this = $(this).show()
					.css({
						position: 'relative',
						zIndex: opts.zIndexFromBottom ? (opts.zIndexStart + noOfElems-i) : (opts.zIndexStart + noOfElems+i)
					}),
				busy = false,
				$trigger = $this.find(opts.selectors.trigger).show().css('cursor', 'pointer'),
				$content = $this.find(opts.selectors.content)
					.hide()
					.attr('aria-hidden', true),
				contentIndex = $content.index(),
				$close = $('<p><a href="#">' + opts.closeContent + '</a></p>'),
				$overlay = $(
					'<div class="' + opts.classes.overlay + '">' +
						'<div class="' + opts.classes.inner1 + '">' +
							'<div class="' + opts.classes.inner2 + '">' +
								$content.html() +
								'<div class="' + opts.classes.spout + '" />' +
							'</div>' +
						'</div>' +
					'</div>'
				);
				
			if(contentIndex === 0){
				$this.prepend($overlay);
			}
			else{
				$this.children().eq(contentIndex - 1).after($overlay);
			}
			
			//applying position absolute first is intentional.
			$overlay
				.css('position', 'absolute')
				.css({
					left: opts.fncs.getLeft($overlay, $trigger),
					top: opts.fncs.getTop($overlay, $trigger)
				});
				
			if($overlay.show().offset().left < 0){
				$overlay.addClass('flipRight');
			}
			$content.remove();
			
			if($.browser.msie && $.browser.version.substr(0,1)<7){
				var $iframe = $('<iframe />').css({
					height: $overlay.outerHeight(),
					width: $overlay.outerWidth(),
					position: 'absolute',
					left: $overlay.css('left'),
					top: $overlay.css('top'),
					display: 'none'
				});
				
				$overlay.before($iframe);
			}
			
			$overlay.hide();
			
			if(opts.clickTriggered){
				$trigger
					.click(function(e){
						e.preventDefault();
						toggle();
					})
					.keydown(function(e){
						if(e.which === 13){
							toggle();
						}
					});
			}
			else{
				$trigger
					.hover(function(){
						show();
					}, function(){
						hide();
					})
					.focusin(function(){
						show();
					})
					.focusout(function(){
						hide();
					});
			}
			
			$this.bind('toggletooltip', function(){
				toggle();
			});
			
			if(opts.closeContent !== ''){
				$overlay.find('.tooltipInner2').append($close);
				$close.find('a').click(function(e){
					e.preventDefault();
					hide();
				})
			}
			
			/**
			 * Toggles the content node and adds/removes relevant classes
			 */
			function toggle(){
				if($trigger.hasClass(opts.active)){
					hide();
				}
				else if(!busy){
					show();
				}
			}
			/**
			 * Shows the content node and adds relevant classes
			 */
			function show(){
				$trigger.addClass(opts.active);
				if(typeof $.fn.fadeElem === 'function' && !busy){
					busy = true;
					$overlay.fadeElem({
						fadeSpeed: opts.duration,
						fadeOut: false,
						callback: function(){
							busy = false;
							complete();
						}
					});
				}
				else{
					complete();
				}
				
				//on complete of show
				function complete(){
					$overlay
						.show()
						.attr('aria-hidden', false);
					$this.trigger('onopentooltip');
					
					if($.browser.msie && $.browser.version.substr(0,1)<7){
						$iframe.show();
					}
				}
			}
			/**
			 * Hides the content node and removes relevant classes
			 */
			function hide(){
				$trigger.removeClass(opts.active);
				if(typeof $.fn.fadeElem === 'function'){
					busy = true;
					$overlay.fadeElem({
						fadeSpeed: opts.duration,
						callback: function(){
							busy = false;
							complete();
						}
					});
				}
				else{
					complete();
				}
				
				//on complete of hide
				function complete(){
					$overlay
						.hide()
						.attr('aria-hidden', true);
					$this.trigger('onclosetooltip');
					
					if($.browser.msie && $.browser.version.substr(0,1)<7){
						$iframe.hide();
					}
				}
			}
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for show/hiding nested content
	 * @version: 1.2
	 */
	$.fn.treeView = function(opts) {
		opts = $.extend(true, {
			selectors: {
				wrapper: 		'li',
				trigger: 		'a',
				content: 		'ul',
				triggerAll: 	'.treeViewTriggerAll'
			},
			activeClass: 	'open',
			duration: 		'normal',
			event: 			'click',
			addAriaWrapper: true
		}, opts);

		return this.each(function(i) {
			var $this = $(this),
				$triggerAll = $this.find(opts.triggerAll),
				isOpen = false;
							
			$this.find(opts.selectors.content)
				.hide()
				.attr('aria-hidden', true);
			
			setLevelEvents($this);
			
			if(opts.addAriaWrapper){
				$this.attr({
					'aria-live': 'polite',
					'aria-relevant': 'all'
				});
			}
			
			/**
			 * Recursively loops through tree levels and binds events.
			 * @param {jQuery object} $elem - current level of tree
			 */
			function setLevelEvents($elem){
				$elem.children(opts.selectors.wrapper).each(function(){
					var $wrapper = $(this),
						$trigger = $wrapper.children(opts.selectors.trigger),
						$content = $wrapper.children(opts.selectors.content);
						
					if($wrapper.hasClass(opts.activeClass)){
						$content.show();
					}
						
					$trigger.bind(opts.event, function(e){
						e.preventDefault();
						toggle($trigger, $content);
					});
					setLevelEvents($content);
				});
			}
			/**
			 * Toggles a tree level
			 * @param {jQuery object} $elem - level to toggle
			 */
			function toggle($trigger, $content){
				if($content.is(':visible')){
					hide($trigger, $content);
				}
				else{
					show($trigger, $content);
				}
			}
			/**
			 * Shows a tree level
			 * @param {jQuery object} $elem - level to show
			 */
			function show($trigger, $content, duration){
				duration = duration || opts.duration;
				
				$content.slideDown(duration, function(){
					$content.attr('aria-hidden', false);
					$trigger.addClass(opts.activeClass);
				});
			}
			/**
			 * Hides a tree level
			 * @param {jQuery object} $elem - level to hide
			 */
			function hide($trigger, $content, duration){
				duration = duration || opts.duration;
				
				$content.slideUp(duration, function(){
					$content.attr('aria-hidden', true);
					$trigger.removeClass(opts.activeClass);
				});
			}
		});
	};
	
	/*
	 * @projectDescription Creates a revolving series of content slides
	 * @version: 2.16
	 * @optional: jquery.onfontresize.js
	 */	
	$.fn.revolver = function(opts){
		opts = $.extend(true,{
			duration: 500,
			interval: 7500,
			index: 0,
			selectors: {
				item: 			'.revolverItem',
				prev: 			'.revolverPrev',
				next: 			'.revolverNext',
				pager: 			'.revolverPager',
				select:			'.revolverSelect'
			},
			classes: {
				window:				'revolverWindow',
				belt: 				'revolverBelt',
				pagerItem: 			'pagerItem',
				pagerItemSelected: 	'pagerItemSelected',
				prevDisabled: 		'prevDisabled',
				nextDisabled: 		'nextDisabled',
				selected:			'selected'
			},
			infinite: true,
			mobile: false,
			selected: -1,
			stopOnHover: true,
			movedItems:	1,
			addAriaWrapper: true
		}, opts);
		
		return this.each(function(){
			var $this = $(this),
				$window = $this.find('.' + opts.classes.window),
				$belt = $this.find('.' + opts.classes.belt),
				$prev = $this.find(opts.selectors.prev),
				$next = $this.find(opts.selectors.next),
				maxHeight = 0,
				currIndex = opts.index,
				visibleItems = 0,
				busy = false,
				autoPlayTimer = null,
				items = [],
				filteredItems = [],
				selected = opts.selected;

			if(!$window.length){
				$window = $('<div class="' + opts.classes.window + '"/>').prependTo($this).width($this.width());
				$belt = $('<div class="' + opts.classes.belt + '"/>').prependTo($window);
			}
			
			$this
				.addClass('revolverActive')
				.find(opts.selectors.pager).append('<ul />');
			
			var $items = $this.find(opts.selectors.item).appendTo($belt),
				itemWidth = $items.outerWidth(),
				$pager = $this.find(opts.selectors.pager + ' ul');
				
			if(opts.addAriaWrapper){
				$this.attr({
					'aria-live':		'polite',	
					'aria-relevant':	'all'
				});
			}
			
			//load images before revolver is called
			var imageTotal = $this.find('img').length,
				imageCount = 0;
				
			if(imageTotal){
	    		$this.find('img').each(function(){
	    			$(this)
	    				.attr('src', $(this).attr('src') + '?' + new Date().getTime())
	    				.load(function(){
			    			if(++imageCount == imageTotal){
			    				loadComplete();
			    			}
			    		});
	    		});
	    	}
			else{
				loadComplete();
			}
			
			/**
			 * Sets relevant css properties and makes calls to other functions.
			 */
			function loadComplete(){
				$items.each(function(i){
					maxHeight = Math.max(maxHeight, $(this).outerHeight());
					
					if((i+1) * itemWidth <= $window.width()){
						visibleItems++;
					}
					if(opts.infinite){
						items.push($(this));
					}
				});
				if (visibleItems === 0){
					visibleItems = 1;
				}
				
				//return if not enough items to warrant revolver
				if($items.length <= visibleItems){
					$this.trigger('onabortrevolver');
					return;
				}
				
				if(opts.infinite){
					filteredItems = items;
					filter();
				}
				
				$window.css({
					position: 'relative',
					height: maxHeight,
					overflow: 'hidden'
				});
				$belt.css({
					position: 'absolute',
					top: 0,
					left: 0,
					width: getBeltWidth(itemWidth)
				});
				
				if(typeof $.onFontResize === 'object'){
					$(document).bind('fontresize', function(){
						$window.height(getMaxHeight());
					});
				}
				
				drawPager();
				bindNavEvents();
				bindCustomEvents();
				
				if(opts.selected != -1){
					$(opts.selectors.select).live('click', function(){
						$this = $(this);
						selected = $this.closest(opts.selectors.item).attr('data-index');
						$(opts.selectors.item).removeClass(opts.classes.selected);
						$this.closest(opts.selectors.item).addClass(opts.classes.selected);
					});
				}
				$this.trigger('onloadcompleterevolver');
			}
			/**
			 * Gets the width of the belt
			 */
			function getBeltWidth(width){
				return width * $items.length;
			}
			/**
			 * Displays prev and next buttons and binds click events to them.
			 * Sets autoplay if opts.interval > 0.
			 */
			function bindNavEvents(){
				$prev
					.css({
						display: 'block',
						cursor: 'pointer'
					})
					.click(function(e){
						e.preventDefault();
						if(!$(this).hasClass(opts.classes.prevDisabled)){
							change(currIndex-opts.movedItems, false, true, true);
						}
					});
				$next
					.css({
						display: 'block',
						cursor: 'pointer'
					})
					.click(function(e){
						e.preventDefault();
						if(!$(this).hasClass(opts.classes.nextDisabled)){
							change(currIndex+opts.movedItems, false, true, true);
						}
					});
					
				if(opts.interval > 0){
					setTimer(currIndex+opts.movedItems);
					if(!opts.mobile && opts.stopOnHover){
						$this.hover(function(){
							clearInterval(autoPlayTimer);
						}, function(){
							setTimer(currIndex+opts.movedItems);
						});
					}
				}
			}
			/**
			 * Binds custom events to $this.
			 */
			function bindCustomEvents(){
				$this
					.bind('changerevolver', function(e, index){
						change(index, false, true);
					})
					.bind('stoprevolver', function(){
						clearInterval(autoPlayTimer);
					})
					.bind('startrevolver', function(){
						setTimer(currIndex+1);
					})
					.bind('changeselectedrevolver', function(e, index){
						selected = index;
						$(opts.selectors.item).removeClass(opts.classes.selected);
						filteredItems[index].addClass(opts.classes.selected);
					})
					.bind('filterbyclassrevolver', function(e, className, exclude){
						filterByClass(className, exclude);
					})
					.bind('changeitemsrevolver', function(e, elements, selected){
						filteredItems = elements;
						
						currIndex = 0;
						filter();
						drawPager();
						change(currIndex, true, true);
					})
					.bind('resizerevolver', function(e, width, height){
						$window.css({
							width: width,
							height: height
						});
						$items.width(width);
						$belt.width(getBeltWidth(width));
						itemWidth = width;
					});
			}
			/**
			 * Draws the pager items and attaches pager events
			 */
			function drawPager(){
				$pager.empty().show();
				for(var i=0; i<filteredItems.length; i++){
					var className = (i === filteredItems.length-1) ? 'last' : '',
						$pagerItem = $(
							'<li><a href="#" class="' + opts.classes.pagerItem + ' ' + className + '">' +
								'Carousel item ' + (i+1) +
							'</a></li>'
						);
					$pager.append($pagerItem);
				}
				$pager.find('.' + opts.classes.pagerItem).each(function(i){
					$(this)
						.css('text-indent', '-9999px')
						.click(function(e){
							e.preventDefault();
							change(i, false, true, true);
						});
				});
				updatePager(currIndex);
				if($pager.find('.' + opts.classes.pagerItem).length-1 < visibleItems){
					$pager.hide();
				}
			}
			/**
			 * Appends filtered items to the belt
			 */
			function filter(){
				for(var i=0; i<filteredItems.length; i++){
					filteredItems[i]
						.hide()
						.attr({
							'data-index': i,
							'aria-hidden': 'true'
						});
				}
				
				for(var i=0; i<visibleItems; i++){
					filteredItems[currIndex+i]
						.show()
						.attr('aria-hidden', 'false');
				}
			}
			/**
			 * Filters the items by class.
			 * @param: className {string} - class to filter by
			 * @param: exclude {boolean} - exclude the filter items
			 */
			function filterByClass(className, exclude){
				if(busy){
					setTimeout(function(){filterByClass(className, exclude)}, opts.duration);
					return;
				}
				else{
					filteredItems = [];
					var filteredIndex = 0;
					$.each(items, function(index){
						$this = $(this);
						if(exclude){
							if(!$this.hasClass(className)){
								filteredItems[filteredIndex] = items[index];
								filteredItems[filteredIndex]
									.show()
									.attr({
										'data-index': filteredIndex,
										'aria-hidden': 'false'
									});
								filteredIndex++;
							}
						}
						else{
							if($this.hasClass(className)){
								filteredItems[filteredIndex] = items[index];
								filteredItems[filteredIndex]
									.show()
									.attr({
										'data-index': filteredIndex,
										'aria-hidden': 'false'
									});
								filteredIndex++;
							}
						}
					});
					
					currIndex = 0;
					$belt.empty();
					for(var i=0; i<filteredItems.length; i++){
						$belt.append(filteredItems[i]);
					}
					drawPager();
					change(currIndex, true, true, true);
					
					//return if not enough items to warrant revolver
					if(filteredIndex <= visibleItems){
						$prev.hide();
						$next.hide();
						if(opts.interval > 0){
							clearInterval(autoPlayTimer);
						}
					}
					else{
						$prev.show();
						$next.show();
						if(opts.interval > 0){
							setTimer(currIndex + opts.movedItems);
						}
					}
				}
			}
			/**
			 * Gets the maximum height of all items
			 * @returns maximum height
			 */
			function getMaxHeight(){
				var height = 0;
				$items.each(function(){
					height = Math.max(height, $(this).outerHeight());
				});
				return height;
			}
			/**
			 * Sets the timer to run the autoplay functionality
			 * @param: index {int} - index to start autoplay at
			 */
			function setTimer(index){
				var timeIndex = index;
				clearInterval(autoPlayTimer);
				autoPlayTimer = setInterval(function(){
					change(timeIndex, false);
					if(opts.infinite && timeIndex >= filteredItems.length) {
						timeIndex = (timeIndex - filteredItems.length) + opts.movedItems;
					} 	
					else if(!opts.infinite && timeIndex >= $items.length - visibleItems) {
						timeIndex = 0;
					}
					else{
						timeIndex += opts.movedItems;
					}
				}, opts.interval);
			}
			/**
			 * Changes the visible panels.
			 * @param: index {int} - index to change to
			 * @param: snap {boolean} - whether to snap or animate
			 * @param: resetTimer {boolean} - whether to reset the timer or not
			 * @param: userDriven {boolean} - whether the user has made the revolver change or not
			 */	
			function change(index, snap, resetTimer, userDriven){
				var duration = snap ? 0 : opts.duration;
				
				if(!opts.infinite){
					if(index > filteredItems.length - visibleItems){
						index = filteredItems.length - visibleItems;
					}
				}
				if(opts.interval > 0 && resetTimer){
					clearInterval(autoPlayTimer);
				}
				if(!busy){
					busy = true;
					
					if(opts.infinite){ 
						var left = 0,
							forward = true,
							count = 0,
							limit = index+visibleItems;
						
						//calculate closest direction					
						var forwardDist = 0, 
							backDist = 0;
						if(currIndex < index){
							forwardDist = index - currIndex;
							backDist = filteredItems.length - forwardDist;
						}
						else if(currIndex > index){
							backDist = currIndex - index;
							forwardDist = filteredItems.length - backDist;
						}
						
						if(forwardDist < backDist){
							forward = true;	
						}
						else if(forwardDist === backDist){
							forward = index > currIndex;
						}
						else{
							forward = false;	
						}
											
						if(index < 0){
							index = filteredItems.length - (index*-1);
						}
						
						if(forward){
							for(var i=0; i<forwardDist; i++){
								var itemNum = currIndex+visibleItems+i;
								if (itemNum >= filteredItems.length){
									itemNum = itemNum - filteredItems.length;	
								}
								var item = filteredItems[itemNum];
								if (opts.selected != -1 && item.attr('data-index') != selected){
									item.removeClass(opts.classes.selected);
								}
								$belt.append(item.show().attr('aria-hidden', 'false'));
								count++;
							}
							left = (itemWidth*forwardDist)*-1;
						}
						else{
							for(var i=0; i<backDist; i++){
								var itemNum = currIndex-i-1;
								if (itemNum < 0){
									itemNum = filteredItems.length+(currIndex-i-1);
								}
								var item = filteredItems[itemNum];
								if (opts.selected != -1 && item.attr('data-index') != selected){
									item.removeClass(opts.classes.selected);
								}
								$belt.prepend(item.show().attr('aria-hidden', 'false'));
								count++;
							}
							$belt.css('left', (itemWidth*backDist)*-1);
							left = 0;
						}
												
						if(index > filteredItems.length-1){
							index = index - filteredItems.length;
						}
						
						$this.trigger('onbeforechangerevolver', currIndex);
						$belt.animate({left: left}, duration, function(){
							updatePager(index);
							$belt.children().each(function(i){
								var itemIndex = parseInt($(this).attr('data-index'));
								var inRange = calcWithinRange(itemIndex, index, visibleItems, filteredItems.length);
								if(!inRange){
									$(this).hide().attr('aria-hidden', 'true');
								}
							});
							$belt.css('left', 0);
							busy = false;
							
							if(opts.interval > 0 && resetTimer){
								setTimer(index+1);
							}
							
							if(userDriven){
								//focus on first <a> for accessibility
								$belt.find(opts.selectors.item + ':visible').eq(0).find('a').focus();
							}
							
							currIndex = index;
							$this.trigger('onchangerevolver', currIndex);
						});
					}
					else{
						$this.trigger('onbeforechangerevolver', currIndex);
						$belt.animate({left: (index * itemWidth) * -1}, duration, function(){
							updateNavigation(index);
							updatePager(index);
							busy = false;
							
							if(opts.interval > 0 && resetTimer){
								setTimer(index+1);
							}
							
							if(userDriven){
								//focus on first <a> for accessibility
								$belt.find(opts.selectors.item + ':visible').eq(0).find('a').focus();
							}
							
							currIndex = index;
							$this.trigger('onchangerevolver', currIndex);
						});
					}
				}
			}
			/**
			 * Updates the navigation
			 * @param: index {int} - current index of visible panels
			 */
			function updateNavigation(index){
				if(index == 0){
					$prev.addClass(opts.classes.prevDisabled);
				}
				else{
					$prev.removeClass(opts.classes.prevDisabled);
				}
				
				if(index == $items.length - visibleItems){
					$next.addClass(opts.classes.nextDisabled);
				}
				else{
					$next.removeClass(opts.classes.nextDisabled);
				}
			}
			/**
			 * Updates the pager
			 * @param: index {int} - current index of visible panels
			 */
			function updatePager(index){ 
				$pager.find('.' + opts.classes.pagerItem).each(function(i){
					if((i >= index && i < index+visibleItems) || (opts.infinite && (i <= index + (visibleItems-1)-filteredItems.length))){
						$(this)
							.attr('title', 'Current carousel item')
							.addClass(opts.classes.pagerItemSelected);
					}
					else{
						$(this)
							.attr('title', '')
							.removeClass(opts.classes.pagerItemSelected);
					}
				});
			}
			/**
			 * Calculates if the current index item is within the range of visible elements
			 * @param: itemIndex: The index position of the specified element
			 * @param: index: The index of the first visible item on the page
			 * @param: visibleItems: The number of visible items within the set
			 * @param: setSize: size of the set of items
			 * @returns: Boolean (true if in range else false) 
			*/
			function calcWithinRange(itemIndex, index, visibleItems, setSize){
				//calculate range of values
				
				var tempIndex = index;
				var valueRange = new Array(visibleItems);
				
				for(var i = 0; i < visibleItems; i++){
					if(tempIndex > setSize-1){
						tempIndex = 0;	
					}
					valueRange[i] = tempIndex;
					tempIndex++;
				}
				//check if value is in the calculated range
				return $.inArray(itemIndex, valueRange) != -1;
			}
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for fixing a table header when scrolling
	 * @version: 1.1
	 */
	$.fn.fixedTableHeader = function(opts) {
		opts = $.extend({
			appendTo: 'body',
			attributes: {}
		}, opts);
		
		return this.each(function(){
			var $this = $(this),
				ie6 = $.browser.msie && $.browser.version.substr(0,1) < 7,
				$clone = $this.clone()
					.hide()
					.appendTo($(opts.appendTo)),
				headHeight = $this.find('thead').height(),
				topPosition = $this.offset().top;;
				
			$clone.find('tbody').remove();
			
			for(attr in opts.attributes){
				$clone.attr(attr, opts.attributes[attr]);
			}
			positionClone();
				
			$(window)
				.resize(function(){
					positionClone();
				})
				.scroll(function(){
					toggle($(window).scrollTop());
				});
			
			/**
			 * 
			 */
			function positionClone(){
				$clone.css({
					position: ie6 ? 'absolute' : 'fixed',
					top: 0,
					left: $this.offset().left
				});
			}
			/**
			 * Toggles the cloned header depending on its position relative to
			 * the original table.
			 * @param: {float} scrollTop - the scrollTop position of the window.
			 */
			function toggle(scrollTop){
				if(scrollTop >= topPosition && scrollTop < (topPosition + $this.height()) - headHeight){
					$clone.show();
					
					if(ie6){
						$clone.css('top', scrollTop);
					}
				}
				else{
					$clone.hide();
				}
			}
		});
	};
	
	/**
	 * @projectDescription: jQuery plugin for building an infinite carousel.
	 * @version: 1.0
	 */
	$.fn.infiniteCarousel = function(){
	    return this.each(function () {
	        var $this = $(this),
	        	$carouselWrapper = $('> div', this).css('overflow', 'hidden'),
	            $slider = $carouselWrapper.find('> ul'),
	            $origItems = $slider.find('> li'),
	            $origTabs = $origItems.find('a.carouselTab'),
	            $single = $origItems.filter(':first'),
	           	$pager = null,
	            singleWidth = $single.outerWidth(), 
	            visible = Math.ceil($carouselWrapper.innerWidth() / singleWidth), // note: doesn't include padding or border
	            currentPage = 0,
	            pages = Math.ceil($origItems.length / visible),
				paused = false;
		
		    var $allItems = $slider.find('> li'),
		    	$allTabs = $allItems.find('a.carouselTab'),
			    intervalWait = {
					wait: '',
					start: function (myFunction, speed) {
						clearInterval(this.wait);
						this.wait = setInterval(myFunction, speed || 9000);
					},
					stop: function () {
						clearInterval(this.wait);
					}
				};
	
			// call autoScroll
			intervalWait.start(doAutScroll);
			
		    //Set the left position to the first 'real' item
		    $carouselWrapper.scrollLeft(0);
				
			$this.find('img, .tabArticleText').hide();
			$allTabs.eq(0)
				.addClass('current')
				.siblings('img').show().attr('aria-hidden', false)
				.siblings('.tabArticleText').fadeIn('fast').attr('aria-hidden', false);
			
			setPager();
			updatePager(0);
			setNavElements();
			
			// create a public interface to move to a specific page
			$this.bind('gotoinfinitecarousel', function (event, page){
				gotoPage(page);
			});
			
			/**
			 * Increments page to be shown. Called by intervalWait.start()
			 */
			function doAutScroll(){
				var nextPage = currentPage + 1 < pages ? currentPage + 1 : 0;
				return gotoPage(nextPage);
			}
			/**
			 * Shows tab items and binds events. Called once.
			 */
			function setNavElements(){
				var thelastChild = $('.carouselWrapper li a.carouselTab:eq(2)');
				
				$allTabs.each(function(page){
					$(this)
						.bind('mouseover focusin', function(){
							intervalWait.stop();
							gotoPage(page);
						})
						.bind('click', function(e){ 
							e.preventDefault();
							intervalWait.stop();
							gotoPage(page);
						});
				});
				
				$allItems.bind('mouseover focusin', function(){
					intervalWait.stop();
				});
				
				$this.bind('focusout mouseleave', function(){
					if(!paused){
						intervalWait.start(doAutScroll);
					}
				});
				
				$origTabs.show();
			}
			/**
			 * Changes the current page that is shown.
			 * @param: {Integer} page - index of page to be shown.
			 */
			function gotoPage(page) {
				var dir = page < currentPage ? -1 : 1,
					n = Math.abs(currentPage - page),
					left = singleWidth * dir * visible * n;
					
				$origItems.find('> img').show().attr('aria-hidden', false);
				
				$carouselWrapper.filter(':not(:animated)').animate({
						scrollLeft : '+=' + left
					}, 500, function(){
					
					$allTabs.removeClass("current");
					$this.find('.tabArticleText').hide().attr('aria-hidden', true);
					
					$origItems.not(':eq('+page+')').find('> img').hide().attr('aria-hidden', true);
									
					updatePager(page);
					currentPage = page;
					
					var $currentTab = $allTabs.eq(currentPage);
					
					$currentTab
						.addClass('current')
						.siblings('.tabArticleText').fadeIn('fast').attr('aria-hidden', false);
				});
			}
			/**
			 * Builds the pager and binds events. Called once.
			 */
			function setPager(){
				$pager = $(
					'<div class="pager">' +
						'<ul />' +
						'<div class="pausePlay">' +
							'<a href="#" />' +
						'</div>' +
					'</div>'
				);
				
				$allItems.each(function(i){
					if($(this).attr('id')){
						if($(this).attr('id').indexOf('carousel') !== -1){
							$pager.find('ul').append('<li><a href="#">Carousel item ' + (i+1) + '</a></li>');
						}
					}
				});
				
				$pager.find('li').each(function(i){
					var $link = $(this).find('a');
					
					//fix for jQuery 1.8.2 
					$link.css("display","inline-block");
					
					$link
						.fadeTo(0, 0.8)
						.hover(function(){
							$(this).fadeTo(500, 1);
						}, function(){
							$(this).fadeTo(500, 0.8);
						})
						.focus(function(){
							$(this).fadeTo(500, 1);
						})
						.blur(function(){
							$(this).fadeTo(500, 0.8);
						})
						.click(function(e){
							e.preventDefault();
							gotoPage(i);
							$origItems.eq(i).find('a.carouselTab').focus();
						})
						.mousedown(function(){
							$(this).css('border-color', '#626469');
						});
				});
				
				$carouselWrapper.append($pager);
				
				$pager.find('.pausePlay a')
					.attr('title', 'Pause carousel')
					.text('Pause carousel')
					.fadeTo(0, 0.8)
					.hover(function(){
						$(this).fadeTo(500, 1);
					}, function(){
						$(this).fadeTo(500, 0.8);
					})
					.focus(function(){
						$(this).fadeTo(500, 1);
					})
					.blur(function(){
						$(this).fadeTo(500, 0.8);
					})
					.click(function(e){
						e.preventDefault();
						$(this).toggleClass('paused');
						if($(this).hasClass('paused')){
							paused = true;
							intervalWait.stop();
							$(this).attr('title', 'Play carousel').text('Play carousel');
						}
						else{
							paused = false;
							intervalWait.start(doAutScroll);
							$(this).attr('title', 'Pause carousel').text('Pause carousel');
						}
					})
					.mousedown(function(){
						$(this).css('border-color', '#626469');
					});
			}
			/**
			 * Updates the pager to reflect the current page that is shown.
			 * @param {Integer} index - index of pager to activate.
			 */
			function updatePager(index){
				$pager.find('li')
					.removeClass('selected')
					.find('a').attr('title', '');
				$pager.find('li').eq(index)
					.addClass('selected')
					.find('a').attr('title', 'Current carousel item');
			}
	    });  
	};
})(jQuery);