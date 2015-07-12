$(document).ready(function(){
	$('#wrap').hide();

	$('.fiddlesticks').on('click',function(){
		$(this).hide();
		$('#wrap').show();
	});
	$('.edubut').on('click',function(){
		$('.edu').toggle();
	});
	$('.expbut').on('click',function(){
		$('.exp').toggle();
	});
	$('.accbut').on('click',function(){
		$('.acc').toggle();
	});
	$('.skibut').on('click',function(){
		$('.ski').toggle();
	});
	$('.actbut').on('click',function(){
		$('.act').toggle();
	});
	$('.intbut').on('click',function(){
		$('.int').toggle();
	});

});


