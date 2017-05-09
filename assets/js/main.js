$(document).ready(function () {
	//mobile toggle function start

	$(".mobile-toggler").on("click", function () {
		var e = $(".navigation");
		mobileToggle(e);
	});

	function mobileToggle(e) {
		if ($(e).hasClass("active") == true) {
			$(e).animate({maxHeight: "0"}, 300).removeClass("active");
		} else {
			$(e).animate({maxHeight: "100vh"}, 300).addClass("active");
		}
	};	
	//mobile toggle function end

	//main slider
	$(".slider-container").slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  prevArrow: ".left",
	  nextArrow: ".right",
	  mobileFirst: true,
	  focusOnSelect: true,
	  dots: true,
	  dotsClass: "dots"

	});
	//main slider end


	//accordion
	$(".accordion").accordion({
	  animate: 200,
	  header: "p",
	  heightStyle: "content"
	});

	//tabs
	$(".product-tabs .container").tabs();


	//response slider
	$(".response-container").slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  prevArrow: ".left",
	  nextArrow: ".right",
	  mobileFirst: true,
	  focusOnSelect: true,
	  responsive: [
	  	{
	  		breakpoint: 992,
	  		settings: {
	  			slidesToShow: 2,
	  			slidesToScroll: 1,
	  		}
	  	}
	  ]
	});
	//response slider end

	$(".arrows a").on("click", function (e) {
		e.preventDefault();
	});

	//product photos slider

	function photoSlider() {

		$('.main-photo').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  asNavFor: '.thumbnails',
		  mobileFirst: true,
		  vertical: false
		});

		$('.thumbnails').slick({
		  slidesToShow: 4,
		  infinite: true,
		  slidesToScroll: 1,
		  asNavFor: '.main-photo',
		  prevArrow: ".product-left",
	  	nextArrow: ".product-right",
	  	focusOnSelect: true,
	  	mobileFirst: true,
		  vertical: false,
		  responsive: [
		  	{
		  		breakpoint: 768,
		  		settings: {
		  			vertical: true,
		  		}
		  	}
		  ]
		});
	};

	photoSlider();
	//product photos slider end


	//callback modal
	$(".cb").on("click", function (e) {
		e.preventDefault();

		$("body").addClass("dark");
		$(".modal.callback").addClass("active");
	});

	//order modal
	$(".product-price a").on("click", function (e) {
		e.preventDefault();

		console.log('asd');

		$("body").addClass("dark");
		$(".modal.order").addClass("active");
	});

	//close modal
	$(".close-btn").on("click", function (e) {
		e.preventDefault();

		$("body").removeClass("dark");
		$(".modal").removeClass("active");
	});

	$("body").on("click", function(e) {
		if($(e.target).closest(".cb").length == 0 && $(e.target).closest(".product-price a").length == 0 && $(e.target).closest(".modal").length == 0) {
			$("body").removeClass("dark");
			$(".modal").removeClass("active");
		};
	});

});