/**
 * @projectDescription: Bespoke functionality for the PWS build pack. All code to be within
 * 'PWS' namespace. Reserved 'init' method for all objects - which is called implicitly for
 * all second level objects.
 */
(function($){
	
	$(document).ready(function(){
		PWS.init();
	});
	
	/**
	 * Main object. Contains high-level functionality and calls to lower level initialisation methods.
	 */
	PWS = {
		init: function(){
			for(var i in PWS){
				if(PWS[i].hasOwnProperty('init') && typeof(PWS[i].init) === 'function'){
					PWS[i].init();
				}
			}
			this.callPlugins();
			this.callRevolver();
			
			if(BrowserDetect.isIe() && BrowserDetect.getVersion() < 7){
				//background cache fix for ie6
				var m = document.uniqueID && document.compatMode && !window.XMLHttpRequest && document.execCommand;
				try{
					if(!!m){ 
						m("BackgroundImageCache", false, true);
					} 
				}
				catch(e){};
			}
			
			$(document.body).attr({
				'aria-live': 'polite',
				'aria-relevant': 'all'
			});
			
			$('.closeWin').click(function(e){
				e.preventDefault();
				window.close();
			});
			$('.printPage').click(function(e){
				e.preventDefault();
				window.print();
			});
		},
		/**
		 * Calls jQuery plugins.
		 */
		callPlugins: function(){
			if($.fn.dataFilter){
				$('#productSelector').dataFilter({
					duration: 0,
					selectors: {
						filterElements: '#products tbody',
						filterTabs: '#productTabs'
					},
					addAriaWrapper: false
				});
				
				$('#products div.handle').show();
			}
			
			if($.fn.showHide){
				$('#products tbody').showHide({
					trigger: '.furtherInfo .handle a',
					content: '.furtherInfo .content',
					activeClass: 'selected',
					addAriaWrapper: false
				});
			}
			
			if($.fn.tooltip){				
				$('#mortgageForm li label').each(function(){
					$(this).tooltip({
						selectors: {
							trigger:	'.help a',
							content:	'.tooltipContent'
						},
						classes: {
							overlay: 	'tooltipContent'
						},
						fncs: {
							getTop: function($overlay){
								var top = $overlay.show().height();
								return top * -1;
							}
						},
						clickTriggered: false,
						zIndexFromBottom: false
					})
					.find('.help  a').click(function(e){
						e.preventDefault();
					});
				});
			}
			
			if($.fn.treeView){
				$('#treeNav ul').treeView({
					duration:0,
					selectors: {
						trigger: 'p'
					},
					addAriaWrapper: false
				});
				
				$('#treeNav').find('p a').attr('title', function(i, val){
                	return 'Expand or collapse menu: ' + val 
                });
			}
			
			if($.fn.infiniteCarousel){
				$('#hero').infiniteCarousel();
			}
			
			if($.fn.customSelect){
				$('.customSelect').customSelect();
			}
		},
		callRevolver: function(){
			if($.fn.revolver){
				var $smallCarousel = $('#smallCarousel');
				
				if(!$smallCarousel.hasClass('revolverActive')){
					$smallCarousel.revolver({
						interval: 0,
						duration: 1000,
						selectors: {
							item: '.revolverWindow .revolverBelt a',
							prev: '#galleryPrev',
							next: '#galleryNext',
							pager: '#galleryPager'
						},
						classes: {
							pagerItemSelected: 	'selected'
						},
						addAriaWrapper: false
					})
					.bind('onchangerevolver', function(e, i){
						$('#smallCarousel .revolverBelt a[data-index='+i+']').focus();
					})
					.bind('onloadcompleterevolver', function(){
						controlLinks();
					})
					.bind('onabortrevolver', function(){
						$(this).find('.revolverNavigation').hide();
					})
					.find('.galleryControls').show();
					
					var controlLinks = function(){
						var controlLinks = $('div#smallCarousel .galleryControls a, .revolverNavigation li a'),
							borderColor = 'transparent';
							
						if(BrowserDetect.isIe() && BrowserDetect.getVersion() < 7){
							borderColor = '#fff';
						}
							
						controlLinks.each(function(){
							var alink = $(this);
							alink.mousedown(function(e){
								alink.css({'border-color':borderColor});
							});
						});
					}
				}
			}
		}
	};

	PWS.Header = {
		init: function(){
			this.CountryList.init();
			this.callPlugins();
			this.setMainNav();

			this.setDropdowns($('#internetBanking'), $('#internetBanking').find('.links'));
			this.setDropdowns($('#authenticate'), $('#logon'));
		},
		/**
		 * Calls jQuery plugins.
		 */
		callPlugins: function(){
			//search form
			if($.fn.inputMsg){
				$('#q').inputMsg();
			}
		},
		/**
		 * Sets the header drop downs.
		 */
		setDropdowns: function($trigger, $dropDown){
			$dropDown.hide().attr('aria-hidden', true);
			$trigger
				.find('a:first').click(function(e) {
					e.preventDefault();
					if(!$(this).hasClass('loggedOn')){
						if($(this).hasClass('on') && !$.contains($dropDown[0], e.target)){
							hide();
						}
						else {
							show();
						}
					}
				})
				.end()
				.bind('mouseleave', function(){
					$dropDown
						.fadeOut('slow')
						.attr('aria-hidden', true);
					$trigger.removeClass('on');
				})
				.blur(function(){
					hide();
				});
				
			var $links = $dropDown.find('a, input');
				
			$dropDown.focusout(function(){
				$(this).hasFocus(function(hasFocus){
					if(!hasFocus){
						hide();
					}
				});
			});
			
			function show(){
				$trigger.addClass('on');
				$dropDown
					.fadeIn('slow')
					.attr('aria-hidden', false);
			}
			
			function hide(){
				$trigger.removeClass('on');
				$dropDown
					.fadeOut('slow')
					.attr('aria-hidden', true);
			}
		},
		/**
		 * Sets navigation events for main nav
		 */
		setMainNav: function(){
			var $mainNav = $('#sections > ul'),
				$mainNavItems = $mainNav.find('.mainTopNav');
			
			if($.fn.megaDropdown){
				$mainNav.find('.doormat');
				
				$mainNavItems
					.attr('title', function(i, val){
				  		return 'Expand menu: ' + val 
					})
					.click(function(e){
						e.preventDefault();
					});
					
				$mainNav.megaDropdown({
					activeClass: 	'focused',
					node:			'div.doormat',
					addAriaWrapper: false
				});
			}
			
			$('#sections p.skipLink a').click(function(e){
				e.preventDefault();
				$mainNav.trigger('closeallmegadropdown');
				$(this).parents('li').next('li').find('a:eq(0)').focus();
			});
		}
	};
	
	PWS.Header.CountryList = {
		$trigger: null,
		$dropDown: null,
		init: function(){
			var self = this;
			
			this.setRegionTabs();
			
			this.$trigger = $("#locale .dropDownLink")
				.attr('aria-controls', '#dropDown');
				
			this.$dropDown = $('#dropDown')
				.hide()
				.addClass('showDropDown');
					
			this.$trigger.click(function(e) {
				e.preventDefault();
				self.toggleDropDown();
			});
			
			this.$dropDown.bind('mouseleave', function(){
				self.hide();
			});
			
			/*	removed due to an issue with onclick events for language toggle (tested under Chrome) 
			this.$dropDown.focusout(function(){
				$(this).hasFocus(function(hasFocus){
					if(!hasFocus){
						self.hide();
					}
				});
			});*/
			
			this.$dropDown.find('p.skipLink a').click(function(e){
				e.preventDefault();
                self.hide();
                self.$trigger.focus();
			});
		},
		/**
		 * Toggles country list drop down.
		 */
		toggleDropDown: function(){
			if(this.$trigger.hasClass('on')){
				this.hide();
			}
			else{
				this.show();
			}
		},
		/**
		 * 
		 */
		show: function(){
			this.$trigger.addClass('on');
			this.$dropDown.fadeIn('slow')
				.attr('aria-expanded', true)
				.parent().css('z-index', '20')
				.find('select').css('visibility', 'hidden');
				
			this.$dropDown.find('a:eq(1)').focus();
		},
		/**
		 * 
		 */
		hide: function(){
			this.$trigger.removeClass('on');
			this.$dropDown.fadeOut('slow')
				.attr('aria-expanded', false)
				.parent().css('z-index', '1')
				.find('select').css('visibility', 'visible');
		},
		/**
		 * Creates Region tabs and sets change events.
		 */
		setRegionTabs: function(){
			var $dropDownBody = $('#dropDownBody'),
				$tabs = $('<ul class="regionTabs"></ul>'),
				$regions = $dropDownBody.find('.region');
				
			
			$dropDownBody.find('.region').each(function(i){
				var $region = $(this),
					$tab = $('<li><a title="' + $region.find('h3').text() + ': Click to view HSBC websites in this region" class="' + $region.attr('id') + '" href="#">' + $region.find('h3').text() + '</a></li>')
						.appendTo($tabs)
						.mouseenter(function(e){
							e.preventDefault();
							changeRegion(i, true);
						});
			});
			
			$dropDownBody.prepend($tabs);
			
			changeRegion(0);
			function changeRegion(index, click){
				$regions
					.hide()
					.attr('aria-hidden', true);
				$regions.eq(index)
					.show()
					.attr('aria-hidden', false);
					
				if(click){
					$regions.eq(index).find('a:first').focus();
				}
				
				$tabs.find('li').removeClass('selected');
				$tabs.find('li').eq(index).addClass('selected');
			}
		}
	};
	
	PWS.ProductNav = {
		$productNav: null,
		$dropDowns: null,
		init: function(){
			var self = this;
			
			this.$productNav = $('#productNav');	
			this.$dropDowns = this.$productNav.find('li ul.dropDown');
			
			this.$dropDowns
				.hide()
				.attr('aria-hidden', true);

			this.$productNav.find('#shareTab').css('display', 'block');
			
			this.$productNav.find('#printTab').css('display', 'block');
			
			this.$productNav.find('li a.acctService').click(function(e){
				e.preventDefault();
				self.hide();
				self.show($(this).siblings('.dropDown'));
			});
			
			this.$productNav.children('ul').children('li').mouseleave(function(){
				self.hide();
			});
			
			this.$dropDowns.focusout(function(){
				$(this).hasFocus(function(hasFocus){
					if(!hasFocus){
						self.hide();
					}
				});
			});
			
			this.ieStyles();
		},
		/**
		 * Applies IE-specific styles when interacting with productNav.
		 */
		ieStyles: function(){
			var self = this;
			if(BrowserDetect.isIe()){
				var $innerPage = $('#innerPage');
				
				this.$productNav.find('li a.acctService').click(function(){
					$innerPage.css('z-index', '20');
					self.$productNav.parent().css('z-index', '100');
				});
				
				this.$productNav.find('li').bind('mouseleave focusout',function(){
					$innerPage.css('z-index', '1');
					self.$productNav.parent().css('z-index', '1');
				});
				
				$('#grid').focusin(function() {
					$innerPage.css('z-index', '1');
					self.$productNav.parent().css('z-index', '1');
				});
			
				this.$productNav.focusin(function() {
					$innerPage.css('z-index', '1');
					self.$productNav.parent().css('z-index', '1');
				});
			}
		},
		/**
		 * Shows a dropdown menu.
		 * @param {jQuery object} $dropDown - the dropdown menu to show.
		 */
		show: function($dropDown){
			$dropDown
				.show()
				.attr('aria-hidden', false);
				
			if($dropDown.parent().hasClass('on')){
				$dropDown.parent()
					.removeClass('on')
					.addClass('active');
			}
			$dropDown.parent().addClass('open');
		},
		/**
		 * Hides all dropdown menus
		 */
		hide: function(){
			this.$dropDowns
				.hide()
				.attr('aria-hidden', true);
				
			this.$productNav.children('ul').children('li').each(function(){
				$(this).removeClass('open');
				if($(this).hasClass('active')){
					$(this)
						.removeClass('active')
						.addClass('on');
				}
			});
		}
	};
	
	PWS.ProductComparison = {
		init: function(){
			this.paintZebraStripes();
			this.pluginCalls();
			this.setSections();
		},
		/**
		 * Calls jQuery plugins.
		 */
		pluginCalls: function(){
			if($.fn.showHide){
				$('#productComparison td').showHide({
					activeClass: 	'open',
					trigger: 		'a.more',
					content: 		'p.moreContent',
					addAriaWrapper: false,
					update: [{selector:'a.more', text:['Show less', 'Show more']}]
				});
			}
			
			if($.fn.fixedTableHeader){
				$('#productComparison').fixedTableHeader({
	                attributes: {
	                	id: 'fixed-table-header'
	                }
	            });
	            $('#fixed-table-header').find('caption').remove();
			}
		},
		/**
		 * Adds 'odd' and 'even' classes to <th> and <td> tags.
		 */
		paintZebraStripes: function(){
			$('#productComparison tr, #businessProductTable tr.rowContent')
				.find('th:odd,td:odd').addClass('odd')
				.end()
				.find('th:even,td:even').addClass('even')
				.end()
				.find('td:first-child, th:first-child').removeClass('odd even');
		},
		/**
		 * Implements fading show/hide functionality for table sections.
		 */
		setSections: function(){
			var $productTable = $('#productTable');
			
			$productTable.find('.open').attr('aria-hidden', false);
			$productTable.find('.midContent:not(.open)')
				.attr('aria-hidden', true).hide().prev().find('.sectionType').addClass('closed');
			
			$productTable.find('.subHeader a').click(function(e){
				e.preventDefault();
				var $subHeader = $(this).parents('.subHeader');
				
				if($subHeader.next('.midContent').is(':visible')) {
					$subHeader.find('.sectionType').addClass('closed');
					$subHeader.next('.midContent').fadeOut('slow').attr('aria-hidden', true);
				}
				else {
					$subHeader.find('.sectionType').removeClass('closed');
					$subHeader.next('.midContent').fadeIn('slow').attr('aria-hidden', false);
				}
			});
		}
	};
	
	PWS.Lightboxes = {
		$activeTrigger: null,
		lightboxArray: [],
		init: function(){
			var self = this;
			
			this.lightboxArray = [
				{
					$content: $('#lightviewDetails'),
					$trigger: $('.triggerModalDetails')
				},
				{
					$content: $('#lightviewDetails01'),
					$trigger: $('.triggerModalDetails01')
				},
				{
					$content: $('#lightviewDetails02'),
					$trigger: $('.triggerModalDetails02')
				},
				{
					$content: $('#lightviewDetails03'),
					$trigger: $('.triggerModalDetails03')
				},
				{
					$content: $('#lightviewDetails04'),
					$trigger: $('.triggerModalDetails04')
				},
				{
					$content: $('#lightviewDetails05'),
					$trigger: $('.triggerModalDetails05')
				},
				{
					$content: $('#lightviewDetails06'),
					$trigger: $('.triggerModalDetails06')
				},
				{
					$content: $('#lightviewDetails07'),
					$trigger: $('.triggerModalDetails07')
				},
				{
					$content: $('#lightviewDetails08'),
					$trigger: $('.triggerModalDetails08')
				},
				{
					$content: $('#lightviewDetails09'),
					$trigger: $('.triggerModalDetails09')
				},
				{
					$content: $('#lightviewDetails10'),
					$trigger: $('.triggerModalDetails10')
				},
				{
					$content: $('#lightviewDetails11'),
					$trigger: $('.triggerModalDetails11')
				},
				{
					$content: $('#lightviewDetails12'),
					$trigger: $('.triggerModalDetails12')
				},
				{
					$content: $('#lightviewDetails13'),
					$trigger: $('.triggerModalDetails13')
				},
				{
					$content: $('#lightviewDetails14'),
					$trigger: $('.triggerModalDetails14')
				},
				{
					$content: $('#lightviewDetails15'),
					$trigger: $('.triggerModalDetails15')
				},
				{
					$content: $('#lightviewDetails16'),
					$trigger: $('.triggerModalDetails16')
				},
				{
					$content: $('#lightviewDetails17'),
					$trigger: $('.triggerModalDetails17')
				},
				{
					$content: $('#lightviewDetails18'),
					$trigger: $('.triggerModalDetails18')
				},
				{
					$content: $('#lightviewDetails19'),
					$trigger: $('.triggerModalDetails19')
				},
				{
					$content: $('#lightviewDetails20'),
					$trigger: $('.triggerModalDetails20')
				},
				{
					$content: $('#lightviewProposition'),
					$trigger: $('.triggerModalProposition'),
					callback: function(){
						PWS.callRevolver();
					}
				},
				{
					$content: $('#lightviewProduct'),
					$trigger: $('.triggerModalProduct')
				}
			];
			
			var handleTriggers = function(arrayItem){
				arrayItem.$content
					.attr('aria-hidden', true)
					.find('.lightview').prepend('<a href="#" class="anchor" />')
					.end()
					.find('.close a').click(function(e){
						e.preventDefault();
						self.hide(arrayItem.$content);
					});
					
				arrayItem.$trigger.click(function(e){
					e.preventDefault();
					self.$activeTrigger = $(this);
					self.show(arrayItem.$content, $(this));
					if(typeof arrayItem.callback === 'function'){
						arrayItem.callback();
					}
				});
				
				if(arrayItem.$trigger.hasClass('ajaxLightbox')){
					self.getContent(arrayItem.$trigger, arrayItem.$content);
				}
			};
			
			for(var i=0; i<this.lightboxArray.length; i++){
				handleTriggers(this.lightboxArray[i]);
			}
		},
		/**
		 * Makes an AJAX request for lightbox content.
		 * @param: {jQuery object} $trigger - lightbox trigger
		 * @param: {jQuery object} $content - lightbox content
		 */
		getContent: function($trigger, $content, callback){
			var self = this,
				url = $trigger.attr('href'),
				containers = [];
			
			$content.find('.ajaxContent').each(function(){
				containers.push($(this).attr('id'));
			});
			
			$.get(url, function(data){
				for(var i=0; i<containers.length; i++){
					$(data).find('#' + containers[i].substr(5)).each(function(){
						$content.find('#' + containers[i]).append($(this));
						if($content.find('.pageTabs').length){
							self.getTabContent($content);
						}
					});
				}
			});
		},
		/**
		 * 
		 */
		getTabContent: function($content){
			var $tabs = $content.find('.pageTabs li'),
				$tabContent = $content.find('.tabContent');
				
			$tabs.each(function(i){
				if(i > 0){
					$.get($(this).find('a').attr('href'), function(data){
						$tabContent.append($(data).find('#overlayContentFull'));
						if($tabContent.children().length === $tabs.length){
							PWS.Tabs.build($tabs, $tabContent.children());
						}
					});
				}
			});
		},
		/**
		 * Shows a lightbox and appends the overlay.
		 * @param: {jQuery object} $content - lightbox to show
		 */
		show: function($content, $trigger){
			var self = this,
				$overlay = $('<div class="overlay" />')
				.css({
					height:$(document).height(), 
					width:$(document).width()
				})
				.appendTo($('body')),
				$lightboxLinks =  $content.find('a');
				
			$overlay.click(function(){
				self.hide($content);
			});
				
			$content.show();
			$content
				.css({
					left: ($(window).width()-$content.width())/2,
					top: $(window).scrollTop() + ($(window).height()-$content.height())/2
				})
				.attr('aria-hidden', false);
			
			//focus first link
			$lightboxLinks.eq(0).focus();
			
			$lightboxLinks.last().blur(function(){
				$lightboxLinks.eq(1).focus();
			});
			
			//append anchor to stop browser tabbing into furniture.
			$content.append('<a href="#" />');
			
			//attach esc key to close lightbox
			$(document).keydown(function(e){
				if(e.which === 27){  
					if($content.is(":visible")){
						self.hide($content);
					}
				}
			});
			
			$('#top').css({
				position: 'relative',
				zIndex: 1
			});
		},
		/**
		 * Hides a lightbox and removes the overlay.
		 * @param: {jQuery object} $content - lightbox to hide
		 */
		hide: function($content){
			$content
				.hide()
				.attr('aria-hidden', true);
			$('.overlay').remove();
			this.$activeTrigger.focus();
		}
	};
	
	PWS.Tabs = {
		build: function($tabs, $tabNodes){
			var self = this;
			
			$tabs.find('a').each(function(i){
				$(this).click(function(e){
					e.preventDefault();
					self.change(i, $tabs, $tabNodes);
				});
			});
			
			this.change(0, $tabs, $tabNodes);
		},
		change: function(index, $tabs, $tabNodes){
			$tabNodes.attr('aria-hidden', true).hide();
			$tabNodes.eq(index).attr('aria-hidden', false).show();
			$tabs.removeClass('selected');
			$tabs.eq(index).addClass('selected');
		}
	};
	
	PWS.PillarPagination = {
		$container: null,
		$content: null,
		$list: null,
		$next: null,
		$prev: null,
		listWidth: 0,
		animSpeed: 500,
		currentPos: 1,
		init: function(){
			var obj = this,
				busy = false;
			this.$container = $('.pillarPagination');
			this.$content = this.$container.find('.pillarContent');
			this.$list = this.$content.find('ul');
			this.$next = $('<a class="pillarNext pillarArrow" href="#"><span>Scroll right</span></a>').appendTo(this.$container);
			this.$prev = $('<a class="pillarPrev pillarArrow" href="#"><span>Scroll left</span></a>').prependTo(this.$container);
			this.listWidth = this.$list.find('li').width();
			
			this.$list.find('li').each(function(i){
				if($(this).hasClass('current')){
					obj.currentPos = i+1;
				}
			});
			this.$content.css({
				height: this.$list.find('li').height(),
				position: 'relative',
				overflow: 'hidden'
			});
			this.$list.css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: this.$list.find('li').length * this.listWidth
			});
			this.updateAria();
			this.updateArrows();
			
			$('.pillarArrow').click(function(e){
				e.preventDefault();
			});
											   
			this.$next.click(function(){
				if(!$(this).hasClass('pillarNextDisabled') && busy == false){
					busy = true;
					obj.$list.find('li').eq(obj.currentPos+1).css('display', 'block');
					obj.$list.animate({left: -420}, obj.animSpeed, function(){
						obj.currentPos++;
						obj.updateAria();
						obj.$list.css('left', 0);
						obj.updateArrows();
						busy = false;
					});
				}
			});
			this.$prev.click(function(){
				if(!$(this).hasClass('pillarPrevDisabled') && busy == false){
					busy = true;
					obj.$list.find('li').eq(obj.currentPos-2).css('display', 'block');
					obj.$list.css('left', -420);
					obj.$list.animate({left: 0}, obj.animSpeed, function(){
						obj.currentPos--;
						obj.updateAria();
						obj.$list.css('left', 0);
						obj.updateArrows();
						busy = false;
					});
				}
			});
		},
		/**
		 * Update the aria attributes.
		 */
		updateAria: function(){
			var obj = this;
			this.$list.find('li').each(function(i){
				if(i == obj.currentPos-1 || i == obj.currentPos){
					$(this)
						.attr('aria-hidden', false)
						.css('display', 'block');
				}
				else{
					$(this)
						.attr('aria-hidden', true)
						.hide();
				}
			});
		},
		/**
		 * Update the navigation arrows.
		 */
		updateArrows: function(){
			if(this.currentPos == this.$list.find('li').length-1){
				this.$next.addClass('pillarNextDisabled');
			}
			else{
				this.$next.removeClass('pillarNextDisabled');
			}
			
			if(this.currentPos == 1){
				this.$prev.addClass('pillarPrevDisabled');
			}
			else{
				this.$prev.removeClass('pillarPrevDisabled');
			}
		}
	};
	
	/**
	 * Contains site-wide code for better accessiblity.
	 */
	PWS.Accessiblity = {
		init: function(){
			this.skipLinks();
			this.removeTabStyles();
			this.applyIeClasses();
		},
		/**
		 * Applies classes to IE.
		 */
		applyIeClasses: function(){
			if(BrowserDetect.isIe()){
				$('input').each(function(){
					if($(this).attr('type') === 'text' && BrowserDetect.getVersion() < 8){
						$(this)
							.focus(function(){
								$(this).addClass('ieTextFocus');
							})
							.blur(function(){
								$(this).removeClass('ieTextFocus');
							});
					}
					else if($(this).attr('type') === 'submit'){
						if(BrowserDetect.getVersion() < 8){
							$(this)
								.focus(function(){
									$(this).addClass('ieSubmitFocus');
								})
								.blur(function(){
									$(this).removeClass('ieSubmitFocus');
								});
						}
						
						if(BrowserDetect.getVersion() < 7){
							$(this).hover(function(){
								$(this).addClass('ieSubmitHover');
							}, function(){
								$(this).removeClass('ieSubmitHover');
							});
						}
					}
				});
			}
		},
		/**
		 * Implements skip-link functionality.
		 */
		skipLinks: function(){
			var $firstLink = $('#innerPage a:eq(0)'),
				$level1List = $("#sections li.level1");
			
			$('li.skipLink a').click(function(e) {
				e.preventDefault();
				$firstLink.focus();
			});
			
			$('p.skipLinkLast a').click(function(e) {
				e.preventDefault();
				$level1List
					.removeClass('focused')
					.find('div.doormat')
						.removeClass('showdoormat')
						.attr('aria-hidden', true);
				$firstLink.focus();
			});
			
			if(BrowserDetect.isIe()){
				$('#skip')
					.bind('focusin', function(){
						$(this).addClass('ieSkip');
						$(this).removeClass('skip');
					})
					.bind('focusout', function(){
						$(this).removeClass('ieSkip');
						$(this).addClass('skip');
					});
			}
		},
		/**
		 * Removes styles applied when using tabs to navigate on mousedown.
		 */
		removeTabStyles: function(){
			var $noTextDecoration = $(
					'div#mainTopUtility #tabs a,' +
					'div#mainTopUtility #locale a,' +
					'div#mainTopUtility #onlineBanking a.ibLink,' +
					'div#mainTopUtility #onlineBanking a.button,' +
					'a.mainTopNav,' +
					'a.hasMore,' +
					'a.carouselTab,' +
					'.pageTabs li a,' +
					'.pageTabs li a span,' +
					'div.langList a,' +
					'#dropDown .regionTabs li a,' +
					'a.greyBtn,' +
					'a.greyBtn span,' +
					'a.redBtn,' +
					'a.redBtn span'
				),
				$noOutline = $(
					'div#logo a,' +
					'div#grid a,' +
					'.jqmWindow .close a span,' +
					'form #products .productInfo td input,' +
					'#businessProductTable td input,' +
					'#productSet .options .filter label input,' +
					'.jqmWindow a'
				),
				$whiteBorder = $(
					'div.propositionRow .promo a,' +
					'div.bannerItem a'
				);
			
			$noTextDecoration.mousedown(function(){
				$(this).css('text-decoration', 'none');
			});
			
			$noOutline.mousedown(function(){
				$(this).css('outline', '0');
			});
			
			$whiteBorder.mousedown(function(){
				$(this).css('border-color', '#fff');
			});
			
			$('div#smallCarousel .galleryControls a').mousedown(function(e){
				$(this).css('border-color', 'transparent');
			});
			
			$('#mortgageForm span.help a').mousedown(function(e){
				$(this).css('border-color', '#e4e4e4');
			});
			
			$('#grid .pillarAdvance a.pillarArrow').mousedown(function(e){
				$(this).css('border-color', '#7b7b7b');
			});
			
			$('#grid .pillarPremier a.pillarArrow').mousedown(function(e){
				$(this).css('border-color', '#181236');
			});
			
			$('div.doormat .info a').mousedown(function(e){
				$(this).css('border-color', '#626469');
			});
			
			$('input[type="submit"]').mousedown(function(e){
				$(this).css({'border':'0', 'outline':'0'});
			});
		}
	};
	
	PWS.PopupMenu = {
		init: function(){
			var position = [];
			
			$('.popupMenu .popupMenuItem').each(function(){
				$(this).find('.popupMenuItemContent p.popupItemLink')
					.addClass('hidden')
					.attr('aria-hidden', true);
					
				position.push($(this).position());
			});
			$('.popupMenu .popupMenuItem').each(function(i){
				var $this = $(this),
					width = $this.width();
				$this.css({
					position: 'absolute',
					top: position[i].top,
					left: position[i].left
				});
				
				var expandedLeft = position[i].left;
				if((i+1) > position.length/2){
					$this.addClass('expanded');
					expandedLeft = position[i].left - ($this.width() - width);
					$this
						.removeClass('expanded')
						.find('img')
							.height(160)
							.width(200);
				}
				
				$this.find('.popupMenuItemInner').bind('focusin mouseover', function(e){
						$this
						.addClass('expanded')
						.css({
							top: -42,
							left: expandedLeft
						})
						.find('p.popupItemLink').removeClass('hidden').attr('aria-hidden', false);
					$this.parents('.grid').css('zIndex', '3');
					$this.find('img')
						.height('auto')
						.width('auto');
				});
				
				$this.find('.popupMenuItemInner').bind('focusout mouseleave', function(e){
					$this
						.removeClass('expanded')
						.css({
							top: position[i].top,
							left: position[i].left
						})
						.find('p.popupItemLink').addClass('hidden').attr('aria-hidden', true);
					$this.parents('.grid').css('zIndex', '1');
					$this.find('img')
						.height(160)
						.width(200);
				});
			});
		}
	};
	
})(jQuery);