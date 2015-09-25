// STILL A WORK IN PROGRESS
// Adding aria roles and tags

// prototypal inheritance
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

(function($) {
	// ie alias
	var headache = $.browser.msie && $.browser.version.substr(0,1)<9;

	// carousel
	var Carousel = {
		settings: {
			itemsPerPage: 1,
			itemsPerTransition: 1,
			noOfRows: 1,
			pagination: true,
			navigation: true,
			speed: 'normal',
			easing: 'swing'
		},

		init: function(el, options) {
			if (!el.length) {
				return false;
			}

			this.options = $.extend({}, this.settings, options);
			this.itemIndex = 0;	
			this.container = el;
			this.runner = this.container.find('ul');
			this.items = this.runner.children('li');
			this.navContainer = this.container.find('.navContainer');
			this.noOfItems = this.items.length;
			this.setRunnerWidth();
			if (this.noOfItems <= this.options.itemsPerPage) {return false;} // bail if there are too few items to paginate
			this.insertMask();
			this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;

			if (this.options.pagination) {
				this.addPagination();
			}

			if (this.options.navigation) {
				this.addNavigation();
			}

			this.container.attr({
				role: "application"
			});

			this.items.attr({
				role: "tabpanel document"
			});

			this.updateBtnStyles();
		},

		insertMask: function() {
			this.runner.wrap('<div class="mask" />');
			this.mask = this.container.find('div.mask');

			// set mask height so items can be of varying height
			var maskHeight = this.runner.outerHeight(true);
			this.mask = this.container.find('div.mask');
			this.mask.height(maskHeight);
		},

		setRunnerWidth: function() {
			this.noOfItems = Math.round(this.noOfItems / this.options.noOfRows);
			var width =  this.items.outerWidth(true) * this.noOfItems;
			this.runner.width(width);
		},

		addPagination: function() {
			var i, links = [];
			this.paginationLinks = $('<ol class="pagination-links" role="tablist navigation" />');
			for (i = 0; i < this.noOfPages; i++) {
				links[i] = '<li role="presentation"><a href="#item-' + i + '" role="tab">' + (i + 1) + '</a></li>';
			}
			this.paginationLinks.append(links.join(''));
			this.navContainer.prepend(this.paginationLinks).find('a').bind('click.carousel', $.proxy(this, 'paginationHandler'));
		},

		paginationHandler: function(e) {
			this.itemIndex = e.target.hash.substr(1).split('-')[1] * this.options.itemsPerTransition;
			this.animate();
			return false;
		},

		addNavigation: function() {
			this.prevLink = $('<a href="#" class="prev" role="link">Prev</a>')
								.bind('click.carousel', $.proxy(this, 'prevItem'))
								.prependTo(this.navContainer);
			this.nextLink = $('<a href="#" class="next" role="link">Next</a>')
								.bind('click.carousel', $.proxy(this, 'nextItem'))
								.appendTo(this.navContainer);
		},

		nextItem: function() {
			this.itemIndex = this.itemIndex + this.options.itemsPerTransition;
			this.animate();
			return false;
		},

		prevItem: function() {
			this.itemIndex = this.itemIndex - this.options.itemsPerTransition;
			this.animate();
			return false;
		},

		updateBtnStyles: function() {
			if (this.options.pagination) {
				this.paginationLinks
					.children('li')
						.removeClass('current')
						.eq(Math.ceil(this.itemIndex / this.options.itemsPerTransition))
							.addClass('current');
			}

			if (this.options.navigation) {
				this.nextLink
					.add(this.prevLink)
						.removeClass('disabled');
				if (this.itemIndex === (this.noOfItems - this.options.itemsPerPage)) {
					this.nextLink.addClass('disabled');
				} 
				else if (this.itemIndex === 0) {
					this.prevLink.addClass('disabled');
				}
			}
		},

		animate: function() {
			var nextItem, pos;
			// check whether there are enough items to animate to
			if (this.itemIndex > (this.noOfItems - this.options.itemsPerPage)) {
				this.itemIndex = this.noOfItems - this.options.itemsPerPage; // go to last panel - items per transition
			}

			if (this.itemIndex < 0) {
				this.itemIndex = 0; // go to first
			}

			nextItem = this.items.eq(this.itemIndex);
			pos = nextItem.position();
			
			if (headache) {
				this.runner
					.stop()
					.animate({left: -pos.left}, this.options.speed, this.options.easing);
			}
			else {
				this.mask
					.stop()
					.animate({scrollLeft: pos.left}, this.options.speed, this.options.easing);
			}
			this.updateBtnStyles();
		}
	};

	// bridge
	$.fn.carousel = function(options) {
		return this.each(function() {
			var obj = Object.create(Carousel);
			obj.init($(this), options);
			$.data(this, 'carousel', obj);
		});
	};
})(jQuery);