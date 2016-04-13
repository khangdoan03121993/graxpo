$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.nav').click(function(){
		$(this).parent().find('.menu').toggleClass('open');
    $('.box-in1').toggleClass('open');
    $('.box-in2').toggleClass('open');
	})


});

$(window).resize(function(){

  if ($(window).width() <= 768){  
    $(".item").removeClass('flex');
  } else if ($(window).width() > 768){
    $(".item").addClass('flex');
  }
  
});


	