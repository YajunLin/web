$(document).foundation();
          
$("img.rollover").hover(function(){ this.src = this.src.replace("_off", "_on"); }, function() { this.src = this.src.replace("_on", "_off"); });

$(document).on('scroll', function (event) {
	var w = $(window).width();
	var b = $('body');
	if(w > 640) {
	    if (parseInt($(window).scrollTop(), 10) > 20) {
	        b.addClass('scrolled');
	    } else {
	        b.removeClass('scrolled');
	    }
	}
});
        