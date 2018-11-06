$(function() {
	
	$(".panel").css({
		"height":$(window).height()
	});
	var timer;

	$(window).resize(function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$(".panel").css({
				"height":$(window).height()
			});
		},40);
	});

	$.scrollify({
		section:".panel",
		offset: 0
	});
	

	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});
});