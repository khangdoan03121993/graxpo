(function(){
  "use strict";

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 0.5);
    });
}

$('.logo p:nth-child(2)').remove();

    //set same height
  
        var highestBox = 0;
        var highestBox1;
        var highestBox2;
        $('.user > a > img').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height(); 
                highestBox1 = highestBox;
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

     //check size screen

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

  //scroll to each section

   $('a[href^="#"]').click(function(e){
    var top = 0;
    var target = $(this).attr('href');
    var strip = target.slice(1);
    var anchor = $("div[name='" + strip + "']");
    var a = $('html, body').animate({
        scrollTop: anchor.offset().top
    }, 1000);
    // e.preventDefault();
  })

$(window).load(function() {

   $(window).trigger('resize');

   //slider

  $('.flexslider').flexslider({
    animation: "slide"
  });

  //menu

  $('.nav').click(function(){
    $(this).parent().find('.menu').toggleClass('open');
    $('.box-in1').toggleClass('open');
    $('.box-in2').toggleClass('open');
  })

  //fix attribute in slider

  $('.test > ul.flex-direction-nav').css('display', 'none');
  $('.test > ol').addClass('pagging');
  $('.pagging').find('a').empty();
  $('.flex-viewport').addClass('slider');


});


})(jQuery)





$(document).ready(function(){

  //counter up

  $('.counter').counterUp({
    delay: 100,
    time: 5000
  });


   //masonry on isotope

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
 
          //menu masonry

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
})

//




     


// $(window).resize(function(){

//   if ($(window).width() <= 768){  
//     $(".item").removeClass('flex');
//   } else if ($(window).width() > 768){
//     $(".item").addClass('flex');
//   }
  
// });


	