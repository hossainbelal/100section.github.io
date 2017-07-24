(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".case-study-carousel").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
        });

        $(".testimonial-carousel").owlCarousel({
            items:3,
            loop:true,
            dots:true,
            nav:false,
        });

/*
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


*/
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	