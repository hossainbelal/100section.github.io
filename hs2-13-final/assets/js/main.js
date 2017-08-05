jQuery(document).ready(function($){
    

    var homepageSlides = $(".homepage-slides");

        homepageSlides.owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            dots:true,
            nav:true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });


        homepageSlides.on('translate.owl.carousel', function(event){
                $(".welcome-area-text h5").removeClass("animated jackInTheBox");
                $(".welcome-area-text h1").removeClass("animated bounceIn");
                $(".welcome-area-text p").removeClass("animated fadeIn");
        });

        homepageSlides.on('translated.owl.carousel', function(event){
                $(".welcome-area-text h5").addClass("animated jackInTheBox");
                $(".welcome-area-text h1").addClass("animated bounceIn");
                $(".welcome-area-text p").addClass("animated fadeIn");
        });

             $(".welcome-area").YTPlayer({
             fitToBackground: true,
             videoId: 'LSmgKRx5pBo'
       });


        $(".video-play-btn").magnificPopup({
            type:'video',
           });
       });