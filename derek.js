$(document).ready(function(){
	$(".click-to-slide").click(function(){
        	$("div#slide-in-nav").toggleClass("active");
			$("#menu-button").toggleClass("menu-open");
    });

	$('div#side-menu a').hover(function(){		
		var menu_id = $(this).attr('data-tab');

		$('div#side-menu a').removeClass('current');
		$('#menu-images .menu-img-container').removeClass('current');

		$(this).addClass('current');
		$("#"+menu_id).addClass('current');
		 
	});
	
	$("#go-to-page-two").click(function(){
		$("div#reg-form-interior").removeClass("slide-left");
		$("div#reg-form-interior").addClass("slide-right");        
	});
	
	$("a#back-to-page-one").click(function(){
		$("div#reg-form-interior").removeClass("slide-right");
		$("div#reg-form-interior").addClass("slide-left");
	});
});


