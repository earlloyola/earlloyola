( function($) {

	var app = {

		mobile_width: 991,

		initSiteAnimation: function(){
			AOS.init({
			  once: true, 
			});
		},

		initFixedHeader: function(){
		    var body = $('body'),
				fixed_header = $('.header-wrapper'),
				fixed_header_offset = $('.header-wrapper').height();
			$(window).on('load resize scroll orientationchange', function () {
				var scroll = $(window).scrollTop();
				if( window.innerWidth > app.mobile_width && scroll > fixed_header_offset ) {
					fixed_header.addClass('active');
		        } else {
		            fixed_header.removeClass('active');
			    }
			});
		},

		initparallaxText: function(){
			$(window).on("load scroll", function() {
		     	var parallaxElement = $(".parallax-text:not(.is-long)"),
		        	parallaxQuantity = parallaxElement.length;
		      		window.requestAnimationFrame(function() {
			        for (var i = 0; i < parallaxQuantity; i++) {
				          var currentElement = parallaxElement.eq(i),
					            windowTop = $(window).scrollTop(),
					            elementTop = currentElement.offset().top,
					            elementHeight = currentElement.height(),
					            viewPortHeight = window.innerHeight * 0.2 - elementHeight * 0.2,
					            scrolled = windowTop - elementTop + viewPortHeight;
					          	currentElement.css({
					          	transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+ scrolled * -0.25 +" , 0, 1)"
				          });
		        	}
		      });
		    });

			$(window).on("load scroll", function() {
		         	var parallaxElement = $(".parallax-text.is-long"),
		            	parallaxQuantity = parallaxElement.length;
		          		window.requestAnimationFrame(function() {
		    	        for (var i = 0; i < parallaxQuantity; i++) {
		    		          var currentElement = parallaxElement.eq(i),
		    			            windowTop = $(window).scrollTop(),
		    			            elementTop = currentElement.offset().top,
		    			            elementHeight = currentElement.height(),
		    			            viewPortHeight = window.innerHeight * 0.2 - elementHeight * 0.2,
		    			            scrolled = windowTop - elementTop + viewPortHeight;
		    			          	currentElement.css({
		    			          	transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
		    		          });
		            	}
		          });
		    });
		},


		initCustomFunction: function() {
			$('.menu-slideshow a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#slideshow').offset().top - 95}, 500);
			});
			$('.menu-about a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#about').offset().top - 95}, 500);
			});
			$('.menu-contact a').click(function (e) {
				e.preventDefault();
			    $('html, body').animate({scrollTop: $('#footer-contacts').offset().top - 95}, 500);
			});
		},

		initparticle: function(){
			$('.has-particles').each(function(){
				var $particleId = $(this).find('.particle-js').attr('id');
				particlesJS($particleId, {
				  "particles": {
				    "number": {
				      "value": 50,
				      "density": {
				        "enable": true,
				        "value_area": 800
				      }
				    },
				    "color": {
				      "value": "#ffffff"
				    },
				    "shape": {
				      "type": "circle",
				      "stroke": {
				        "width": 0,
				        "color": "#000000"
				      },
				      "polygon": {
				        "nb_sides": 5
				      },
				      "image": {
				        "src": "img/github.svg",
				        "width": 100,
				        "height": 100
				      }
				    },
				    "opacity": {
				      "value": 0.5,
				      "random": false,
				      "anim": {
				        "enable": false,
				        "speed": 1,
				        "opacity_min": 0.1,
				        "sync": false
				      }
				    },
				    "size": {
				      "value": 2,
				      "random": true,
				      "anim": {
				        "enable": false,
				        "speed": 40,
				        "size_min": 0.1,
				        "sync": false
				      }
				    },
				    "line_linked": {
				      "enable": true,
				      "distance": 150,
				      "color": "#ffffff",
				      "opacity": 0.4,
				      "width": 1
				    },
				    "move": {
				      "enable": true,
				      "speed": 2,
				      "direction": "none",
				      "random": false,
				      "straight": false,
				      "out_mode": "out",
				      "bounce": false,
				      "attract": {
				        "enable": false,
				        "rotateX": 600,
				        "rotateY": 1200
				      }
				    }
				  },
				  "interactivity": {
				    "detect_on": "canvas",
				    "events": {
				      "onhover": {
				        "enable": true,
				        "mode": "grab"
				      },
				      "onclick": {
				        "enable": true,
				        "mode": "push"
				      },
				      "resize": true
				    },
				    "modes": {
				      "grab": {
				        "distance": 150,
				        "line_linked": {
				          "opacity": 1
				        }
				      },
				      "bubble": {
				        "distance": 400,
				        "size": 40,
				        "duration": 2,
				        "opacity": 8,
				        "speed": 3
				      },
				      "repulse": {
				        "distance": 200,
				        "duration": 0.4
				      },
				      "push": {
				        "particles_nb": 4
				      },
				      "remove": {
				        "particles_nb": 2
				      }
				    }
				  },
				  "retina_detect": true
				});
			});
		},
	}

	
	$(document).ready( function() {
		app.initSiteAnimation();
		app.initFixedHeader();
		app.initparallaxText();
		app.initCustomFunction();
		app.initparticle();
	});
	
	$(window).on('load', function(){

	});

})(jQuery);