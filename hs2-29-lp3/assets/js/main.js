jQuery(document).ready(function($){
    	  $(".portfolio-list").masonry({
    	  			fitWidth: true, 
    	  			horizontalOrder:false,
    	  			percentPosition: true,  		
    	  			
    	  });

    	  $(".single-portfolio-item").hover(function(){
    	  	$(".single-portfolio-item .portfolio-hover h2").removeClass("animated slideInDown");
    	  	$(this).find(".portfolio-hover h2").addClass("animated slideInDown");
    	  });
     	
     		$(".menu-trigger").on('click', function(){
     			$(".offcanvas-menu").addClass("active");
     			$(".offcanvas-menu-overlay").addClass("active");
     		});

     		$(".menu-close i.fa, .offcanvas-menu-overlay").on('click', function(){
     			$(".offcanvas-menu").removeClass("active");
     			$(".offcanvas-menu-overlay").removeClass("active");
     		});
       });


