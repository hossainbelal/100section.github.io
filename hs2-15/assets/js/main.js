jQuery(document).ready(function($){
    
     		$(".portfolio-filter li").on('click', function(){

			var filterData = $(this).attr("data-filter");

			 $(".portfilio-list").isotope({
			   filter:filterData,
		});

			$(".portfolio-filter li").removeClass("active") 
			$(this).addClass("active") 
		});
		         
        $(".portfilio-list").isotope({
        	itemSelector:'.single-portfolio-item',
        	percentPosition: true,
        	masonry:{
        		columnWidth:'.single-portfolio-item',
        		horizontalOrder: true
        	}
        });
       });


/* only for Masonry 

   $(".portfilio-list").masonry({
            horizontalOrder: true
            });

    *****/