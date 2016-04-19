$(document).ready(function(){
  $('.grid').isotope({
    layoutMode: 'masonry',
        itemSelector: '.grid-item',
        percentPosition: true,
         
  });

  $('.work-mid').isotope({
    layoutMode: 'masonry',
        itemSelector: '.work-into',
        percentPosition: true,
         
  });
 

 $('.portfolio-filter li').click(function(){
  $('.portfolio-filter li').removeClass('active');
  $(this).addClass('active');
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  return false;
 })

 $(window).resize(function(){

  if ($(window).width() <= 768){  
    $('.grid').isotope({
    layoutMode: 'vertical',
        itemSelector: '.grid-item',
        percentPosition: true,
     
  });

     $('.work-mid').isotope({
    layoutMode: 'vertical',
        itemSelector: '.work-into',
        percentPosition: true,
         
  });

  }else {
    $('.grid').isotope({
    layoutMode: 'masonry',
        itemSelector: '.grid-item',
        percentPosition: true,
          
  });

     $('.work-mid').isotope({
    layoutMode: 'masonry',
        itemSelector: '.work-into',
        percentPosition: true,
         
  });
    
  }
  
});
 
})

$(window).on('load', function(){
  $(window).trigger('resize');
})

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.nav').click(function(){
		$(this).parent().find('.menu').toggleClass('open');
    $('.box-in1').toggleClass('open');
    $('.box-in2').toggleClass('open');
	})

  $('.test > ul.flex-direction-nav').css('display', 'none');
  $('.test > ol').addClass('pagging');
  $('.pagging').find('a').empty();
  $('.flex-viewport').addClass('slider');

  var highestBox = 0;
     var highestBox1;
        $('.user > a > img').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height(); 
                highestBox1 = highestBox*1.5;
        }
        return highestBox1;
    }); 

    $('.blog-height > a > img').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height(); 
                
        }
        return highestBox;
    }); 


    $('.user > a > img').height(highestBox1);
    $('.blog-height > a > img').height(highestBox);


});

     


$(window).resize(function(){

  if ($(window).width() <= 768){  
    $(".item").removeClass('flex');
  } else if ($(window).width() > 768){
    $(".item").addClass('flex');
  }
  
});


	