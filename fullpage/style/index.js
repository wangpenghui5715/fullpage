	$(document).ready(function(e) {
	    var unslider04 = $('#b01').unslider({
			dots: true
		}),
		data04 = unslider04.data('unslider');
		$('.unslider-arrow04').click(function() {
	        var fn = this.className.split(' ')[1];
	        data04[fn]();
	    });
	});

	$(function(){
		$('.dowebok').fullpage({
		});
	});