jQuery(document).ready(function($){
        
        $(".team-carousel").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            nav:true,
            autoplay:true,
            dots:true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          });
        $(".product-carousel").owlCarousel({
            items:4,
            margin:30,
            loop:true,
            nav:true,
            autoplay:true,
            dots:true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          });
        $(".homepage-slides").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            autoplay:true,
            dots:true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
          });
       });