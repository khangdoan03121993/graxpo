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

     var highestBox = 0;
        $('.user > a > img').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height(); 
                highestBox1 = highestBox*1.5;
        }
        return highestBox1;
    });    
    $('.user > a > img').height(highestBox1);


   



$(window).resize(function(){

  if ($(window).width() <= 768){  
    $(".item").removeClass('flex');
  } else if ($(window).width() > 768){
    $(".item").addClass('flex');
  }
  
});


	