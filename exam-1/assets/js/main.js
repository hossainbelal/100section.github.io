  jQuery(document).ready(function($){

        $('.mainmenu li a').click(function(){
             $('.mainmenu li a').removeClass("active");
                 $(this).addClass("active");
    });
          $(".logo-carousel").owlCarousel({
            items:5,
            margin:30,
            loop:true,
            nav:false,
            autoplay:true,
            dots:true,
          });
        
       
    }); // you missing this syntax in your main.js file

   