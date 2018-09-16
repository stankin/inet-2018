
	jQuery(document).ready(function($)
	{
		// Show First Slide
		var _slides = $(".async_slider li");
		_slides.hide().first().show();
		
		
		$('.gallery a').hoverZoom({
			overlay: true,
			overlayColor: '#4997c9',
			overlayOpacity: 0.9,
			zoom: 0,
			speed: 300
		});
		
		
			
		// Testimonals
		var _testimonals_timeout = 3; // Seconds to switch testimonals
		
		var testimonals = $(".testimonals");
		var testimonals_ch = testimonals.children();
		testimonals_ch.hide().first().show();
		
		var _tm_options = {
			container: testimonals, 
			testimonals: testimonals_ch,
			timeout: _testimonals_timeout * 1000,
			pause_on_hover: true,
			name_el: $("#tm_name"),
			url_el: $("#tm_web"),
		};
		
		var testimonals_roller = new testimonalsRoller(_tm_options);
		testimonals_roller.start();
	});
	
	
	jQuery(window).load(function()
	{	
		// Setup Slides
		var _max_height = 0;
		var _slides = $(".async_slider li");
		
		_slides.each(function()
		{
			var $this = $(this);
			var height = $this.height();
			_max_height = height > _max_height ? height : _max_height;
		});
		
		_slides.each(function()
		{
			var $this = $(this);
			var height = $this.height();
			
			var slide_padding = parseInt((_max_height - height) / 2, 10);
						
			$this.css({
				paddingTop: slide_padding,
				height: _max_height - slide_padding
			});
		});
		
		
	    // Setup Slider
	    $(".async_slider").asyncSlider({
	        keyboardNavigate: true,
	        easing: 'easeInOutExpo',
	        minTime: 1000,
	        maxTime: 1300,
	
			// Navigation - Slide Links
			slidesNav: $(".slides_nav_container"), // Also this way is possible!
			
			// Navigation - Next and Prev
			prevNextNav: true,
			centerPrevNextNav: true,
			prevNextNav: $(".sliderNav"),
	        autoswitch: 4800
	    });
	    
	    // Center Slider Nav
	    var slides_nav_container = $(".slides_nav_container");
	    
	    slides_nav_container.css({
	    	marginLeft: -parseInt(slides_nav_container.width() / 2, 10)
	    });
	    
	    
	    $(".fancybox").fancybox();
	    
	    
	    // Subscribe Form
	    var subscribe_box = $("#subscribe_box");
	    
	    var succ_up = subscribe_box.find('.success_message .up').html();
	    var succ_down = subscribe_box.find('.success_message .down').html();
	    
	    var err_up = subscribe_box.find('.error_message .up').html();
	    var err_down = subscribe_box.find('.error_message .down').html();
	    
	   
	    
	    $("#subscribe_form").submit(function(ev)
	    {
	    	ev.preventDefault();
	    	
	    	var email = $(this).find('input[type="text"]');
	    	var button = $(this).find('.subscribe');
	    	
	    	if(check_mail(email.val()))
	    	{
	    		button.fadeTo(250, 0.5);
	    		
	    		email.css({
	    			backgroundImage: 'url(images/loader.gif)'
	    		});
	    		
	    		$.ajax({
	    			url: 'process_subscribe.php',
	    			type: 'POST',
	    			data: {email: email.val(), rand: Math.random()},
	    			success: function(status)
	    			{
	    				status = parseInt(status, 10);
	    				
	    				if(status == 1)
	    				{
	    					hide_box(subscribe_box, succ_up, succ_down);
	    				}
	    				else
	    				{
	    					hide_box(subscribe_box, err_up, err_down);
	    				}
	    			}
	    		});
	    	}
	    	else
	    	{
	    		shuffle_box(subscribe_box, 50);
	    		email.select();
	    	}
	    });
	});
	
	
	function hide_box(b, content_top, content_bottom)
	{
		b.css({
			position: 'relative',
		})
		.animate({
			opacity: 0
		}, function()
		{
			b.find('.column_content').html(content_top);
			b.find('.bottom_content').html(content_bottom);
			
			b.css({bottom: -120}).animate({
				bottom: 0,
				opacity: 1
			});
		});
	}
	
	
	function shuffle_box(b, d)
	{
		b.css({
			position: 'relative'
		});
		
		b.stop(true, true)
		.animate({left: 10}, d)
		.animate({left: -10}, d)
		.animate({left: 10}, d)
		.animate({left: -10}, d)
		.animate({left: 0}, d)
		.animate({left: -10}, d)
		.animate({left: 0}, d);

	}
	
	function check_mail(email)
	{
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(email))
		{
			return true;
		}
		
		return false;
	}
	
	
	
	/* Testimonals Roller plugin by Arlind Nushi */
	var testimonalsRoller = function(_options)
	{
		var self = this;
		
		var options = {
			container: null,
			testimonals: null,
			testimonals_per_page: 1,
			timeout: 0,
			pause_on_hover: true,
			show_hide_speed: 500,
			name_el: null,
			web_el: null
		};
		
		$.extend(options, _options);
		
		// Define Variables
		var container = options.container;
		var testimonals = options.testimonals;
		var testimonals_per_page = options.testimonals_per_page;
		var timeout = options.timeout;
		var pause_on_hover = options.pause_on_hover;
		var show_hide_speed = options.show_hide_speed;
		var name_el = options.name_el;
		var url_el = options.url_el;
		
		
		var interval = null;
		
		container.css({
			position: 'relative'
		});
		
		// Class Variables
		this.index = 0;
		this.total = testimonals.length;
		
		
		return {
			next: function()
			{
				var indexes = this.get_indexes();
				
				var to_hide = testimonals.slice(indexes[0], indexes[1]);
				
				this.next_index();
				
				indexes = this.get_indexes();
				var to_show = testimonals.slice(indexes[0], indexes[1]);
				
				var _name = to_show.attr('data-name');
				var _url = to_show.attr('data-url');
				
				name_el.stop().fadeTo(show_hide_speed, 0, function()
				{
					name_el.stop().text(_name).fadeTo(show_hide_speed, 1);
				});
				
				url_el.stop().fadeTo(show_hide_speed, 0, function()
				{
					url_el.stop().text(_url).fadeTo(show_hide_speed, 1);
				});

				
				to_hide.stop().css({position: 'relative'}).animate({top: -20, opacity: 0}, {
					duration: show_hide_speed,
					complete: function()
					{
						to_hide.css({top: 0}).hide();
						
						to_show.fadeTo(0,0);
						
						to_show.stop().css({
							top: 20,
							position: 'relative'
						}).animate({
							top: 0,
							opacity: 1
						}, {
							duration: show_hide_speed
						});
					}
				});
			},
			
			get_indexes: function()
			{
				var index_1 = self.index;
				var index_2 = self.index + testimonals_per_page ;
				index_2 %= self.total;
				
				if(index_1 > index_2)
					index_2 = index_1 + 1;
				
				return [index_1, index_2];
			},
			
			next_index: function()
			{
				self.index += testimonals_per_page;
				self.index = self.index % self.total;
			},
			
			start: function()
			{
				var _self = this;
				
				var indexes = this.get_indexes();
				var active = testimonals.slice(indexes[0], indexes[1]);
				
				var _name = active.attr('data-name');
				var _url = active.attr('data-url');
				
				name_el.text(_name);
				url_el.text(_url);
				
				// Auto Scroller
				if(timeout > 0)
				{
					var auto_scroller = function()
					{
						_self.next();
					};
					
					interval = setInterval(auto_scroller, timeout);
					
					// Pause on Hove
					if(pause_on_hover)
					{
						container.hover(function()
						{
							window.clearInterval(interval);
							interval = null;
						},
						function()
						{
							interval = setInterval(auto_scroller, timeout);
						});
					}
				}
			}
		};
	}
	