
$(document).ready(function () {
	$('.a_contacto').click(function () {
	$('.cont_clientes').toggle();
	$('.foot_contacto').toggle();
	});
	$('.clientes').click(function () {
	$('.cont_clientes').toggle();
	$('.foot_contacto').toggle();
	});
/* COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!! COHETE!!!  */
	$("#cont_cohete img").click(function (){
		  if ($(this).hasClass('velocity-animating')) {
            return false;
		  }
		
		$(this).velocity({properties:{ translateX: "50px",translateY: "-50px",rotateZ: "-22.5"}, options: { duration: 500 }})
				.velocity({properties:{ translateX: "-=50px",translateY: "10px",rotateZ: "-=22.5"}, options: { duration: 1500  }})
				.velocity({properties:{translateY: "+50px"}, options: { duration: 1500  }})
				.velocity({properties:{translateY: "-340px", opacity: "0"}, options: { duration: 500, complete: function(){
					$("#cont_cohete img").velocity("fadeOut", {duration: 0 });
					$("#cont_cohete div.desc_click_img").velocity("fadeIn", { duration: 1000 })
				} }})
	});
	
	
	$("#cont_cohete div.desc_click_img").click(function (){
				 if ($(this).hasClass('velocity-animating')) {
					return false;
				 }
				$("#cont_cohete div.desc_click_img").velocity("fadeOut", {duration: 0 });
				$("#cont_cohete img").velocity("fadeIn", {duration: 0 });
				$("#cont_cohete img").velocity({properties:{ translateY: "-50px"}, options: { duration: 500 }})
				.velocity({properties:{ translateY: "10px", opacity: "1"}, options: { duration: 1500  }})
				.velocity({properties:{ rotateZ: "+=45"}, options: { duration: 500  }})
	});

/* FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!! FIN COHETE!!!  */	
	
/* CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO CARRITO   */	
		
	$("#cont_tienda img").click(function (){
			if ($(this).hasClass('velocity-animating')) {
            return false;
		  }
		  
		
		$(this).velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})
				.velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})
				.velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})/*
				.velocity({properties:{rotateZ: "-=10.5"}, options: { duration: 500 }})
				.velocity({properties:{ translateX: "-=10px"}, options: { duration: 500 }})
				.velocity({properties:{ translateX: "+=2000px", opacity: "0"}, options: { duration: 500, complete: function(){
					$("#cont_tienda img").velocity("fadeOut", {duration: 0 });
					$("#cont_tienda div.desc_click_img").velocity("fadeIn", { duration: 1000 })
				} }})*/
		
	});
	
	
	$("#cont_tienda div.desc_click_img").click(function (){
				 if ($(this).hasClass('velocity-animating')) {
					return false;
				 }
				 
				 $(this).velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})
				.velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})
				.velocity({properties:{ scaleX: 1.2,scaleY: 1.2}, options: { duration: 300 }})
				.velocity({properties:{ scaleX: 1,scaleY: 1}, options: { duration: 200 }})/*
				 
				/* 
				$("#cont_tienda div.desc_click_img").velocity("fadeOut", {duration: 0 });
				$("#cont_tienda img").velocity("fadeIn", {duration: 0 });
				$("#cont_tienda img").velocity({properties:{ opacity:  "0"}, options: { duration: 0 }})
								.velocity(
								{properties:{ 
									translateX:  "-=1920px",
								rotateZ: "+=19"},
				options: { duration: 500 }})
									.velocity({properties:{ opacity:  "1"}, options: { duration: 1500 }})*/
				
	});
		
/* FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO FIN CARRITO */

/* SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA  SOCIAL MEDIA   */	
		
	$("#cont_sm img.sm").click(function (){
			if ($(this).hasClass('velocity-animating')) {
            return false;
		  }
		
		$(this).velocity({properties:{ translateX: "-70px"}, options: { duration: 500 }})
					.velocity("callout.pulse", 600, function(){
					$(".per").css('opacity', '0.1');
					$(".per").show();
					$(".group_per").show();					
					})
					
					.velocity("callout.pulse", 600, function(){
					$(".per_top").velocity({opacity: "1"},  100)
				
						
					})
					.velocity("callout.pulse", 800, function(){
					$(".per_but").velocity("fadeIn", 100)
					
						
					})
					.velocity("callout.pulse", 1200, function(){
					
					$(".per_med").velocity("fadeIn",  300)
					})
					.velocity("fadeOut", 1600, function(){
					$(this).hide();
					$(".per").hide();
					$(".group_per").hide();
					$(".per").css( "opacity", "0.1" );
					$("#cont_sm div.desc_click_img").velocity("fadeIn", { duration: 1500 })
					})
							
	});
	
	
	$("#cont_sm div.desc_click_img").click(function (){
				 if ($(this).hasClass('velocity-animating')) {
					return false;
				 }
				$("#cont_sm div.desc_click_img").velocity("fadeOut", {duration: 0 });
				$("#cont_sm img.sm").velocity({properties:{ translateX: "+=70px"}, options: { duration: 0 }})
				$("#cont_sm img.sm").velocity("fadeIn", {duration: 0 });
				
				
	});
		
/* FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA  FIN SOCIAL MEDIA   */


/* STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE STORE    */	
	
	$("#cont_store img").click(function (){
			if ($(this).hasClass('velocity-animating')) {
            return false;
		  }
		
		$(this)		.velocity("callout.pulse", 600)
					.velocity({properties:{ width: "+=30%"}, options: { duration: 500 }})
					
					.velocity("callout.bounce",2600)
					.velocity("fadeOut", 600, function(){
					
					
					
					$("#cont_store div.desc_click_img").velocity("fadeIn", { duration: 1000 })
					}) 
							
	});
	
	
	$("#cont_store div.desc_click_img").click(function (){
				 if ($(this).hasClass('velocity-animating')) {
					return false;
				 }
				 $(this).velocity("fadeOut", 100, function(){
					
					
					$("#cont_store img").velocity({properties:{ width: "-=30%"}, options: { duration: 0 }})
				
				$("#cont_store img").velocity("fadeIn", { duration: 1000 })
					}) 
				
				
				
	});
$(".data").fadeOut();	
	
/* FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE FIN STORE     */	
$(".muestra").click(function() {
		$(this).hide();
		$(this).siblings().fadeIn();
		
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