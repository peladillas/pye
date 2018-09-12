
$(document).ready(function () {
/* 
		$.Velocity.RegisterUI("callout.twirl", {
    defaultDuration: 3000,
    calls: [ 
            [ { rotateZ: -45 }, 0.5 ],
			[ { translateZ: -45 }, 0.5 ]
            
    ] */


	$("#cont_cohete img").click(function (){
		  if ($(this).hasClass('velocity-animating')) {
            return false;
			console.log('click descartado en texto');
		 }
		
		/* $(this).velocity("callout.twirl"); */
		$(this).velocity({properties:{ translateX: "50px",translateY: "-50px",rotateZ: "-22.5"}, options: { duration: 500 }})
				.velocity({properties:{ translateX: "-=50px",translateY: "10px",rotateZ: "-=22.5"}, options: { duration: 1500  }})
				.velocity({properties:{translateY: "+50px"}, options: { duration: 1500  }})
				.velocity({properties:{translateY: "-340px", opacity: "0"}, options: { duration: 500, complete: function(){
					
					$("#cont_cohete img").velocity("fadeOut", {duration: 0 });
					$("#cont_cohete p").velocity("fadeIn", { duration: 1000 })
					
				} }})
		
				
	});
	$("#cont_cohete p").click(function (){
				 if ($(this).hasClass('velocity-animating')) {
            return false;
			console.log('click descartado en texto');
		 }
		
				$("#cont_cohete p").velocity("fadeOut", {duration: 0 });
				$("#cont_cohete img").velocity("fadeIn", {duration: 0 });
				
				$("#cont_cohete img").velocity({properties:{ translateY: "-50px"}, options: { duration: 500 }})
				.velocity({properties:{ translateY: "10px", opacity: "1"}, options: { duration: 1500  }})
				
				.velocity({properties:{ rotateZ: "+=45"}, options: { duration: 500  }})
				
				
					
			
				
	});

	
	
	

	$(".prod" ).parent().hover(function() {
		$(this).stop( true, true);
		$(this).css('color', 'red');
		$(this).children('.prod').fadeOut( 0,"linear",function() {
		$(this).siblings('.prod_desc').stop( true, true ).fadeIn( 800, "linear")
		});
	}, function() {
		$(this).stop( true,true );
		$(this).css('background','yellow');
		$(this).children('.prod_desc').fadeOut( 0,"linear",function() {
		$(this).siblings('.prod').stop( true, true ).fadeIn( 800, "linear");
	}); 
	
	});


	
	 
	
	

	  
});		