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
});


