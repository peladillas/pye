$("#mc-embedded-subscribe").click(function () {
	$("#mc-embedded-subscribe-form").submit();
	$("#mce-EMAIL").val('');
	$("#close_sus").click();
});	

$(document).ready(function () {
	

	
	if ($(window).width() >= 1024) {
		$('#desk').fullpage({
			anchors : ['Hola', 'LandingPage', 'TiendaOnLine', 'SocialMedia', 'Seguinos'],
			menu : '#menu',
			scrollingSpeed : 500,
			afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
				if(index == 1){
					$("meta[name='theme-color']").attr('content', '#000000');
					
				}else{
					
					$("meta[name='theme-color']").attr('content','#ffff00');
				}
			}
		});
	} else {
		$('#fullpage').fullpage({
			anchors : ['Hola', 'LandingPage', 'TiendaOnLine', 'SocialMedia', 'Seguinos'],
			menu : '#menu',
			scrollingSpeed : 500,
			afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
				if(index == 1){
					$("meta[name='theme-color']").attr('content', '#000000');
					
				}else{
					
					$("meta[name='theme-color']").attr('content','#ffff00');
				}
			}
		});
	}

});
$(window).resize(function (event) {
	if ($(window).width() >= 1024) {
		$.fn.fullpage.destroy('all');
		$('#desk').fullpage({
			anchors : ['Hola', 'LandingPage', 'TiendaOnLine', 'SocialMedia', 'Seguinos'],
			menu : '#menu',
			scrollingSpeed : 500,
			afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
				if(index == 1){
					$("meta[name='theme-color']").attr('content', '#000000');
					
				}else{
					
					$("meta[name='theme-color']").attr('content','#ffff00');
				}
			}
		});
	} else {
		$('#fullpage').fullpage({
			anchors : ['Hola', 'LandingPage', 'TiendaOnLine', 'SocialMedia', 'Seguinos'],
			menu : '#menu',
			scrollingSpeed : 500,
			afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
				if(index == 1){
					$("meta[name='theme-color']").attr('content', '#000000');
					
				}else{
					
					$("meta[name='theme-color']").attr('content','#ffff00');
				}
			}
		});
		
	}
});window.producto;$('#myModal').on('shown.bs.modal', function () {	if(window.location.hash.length==0){		  window.producto='Home';		}else{				 window.producto=window.location.hash;		}})
$(document).ready(function () {
	$("#enviar_form").click(function () {
	 
		$('#form_contact').submit(function (event) {
			$('#enviar_form').attr('disabled', true);
			$('.form-group').removeClass('has-error');
			$('.help-block').remove();						$(".mensajes").remove();
			var formData = {
				'telefono' : $('input[name=telefono]').val(),
				'email' : $('input[name=email]').val(),
				'consulta' : $('input[name=consulta]').val(),
				'g-recaptcha-response' : $('#g-recaptcha-response').val(),'producto' : window.producto};						
			$.ajax({
				type : 'POST',
				url : 'mail/process.php',
				data : formData,
				dataType : 'json',
				encode : true
			}).done(function (data) {
				
				if (!data.success) {
					$(".help-block").remove();
					$(".confirmacion").remove();
					
					if (data.errors.telefono) {
						$('#telefono-group').addClass('has-error');
						$('#telefono-group').append('<div class="help-block">' + data.errors.telefono + '</div>');
					}
					if (data.errors.email) {
						$('#email-group').addClass('has-error');
						$('#email-group').append('<div class="help-block">' + data.errors.email + '</div>');
					}
					if (data.errors.consulta) {
						$('#superhero-group').addClass('has-error');
						$('#superhero-group').append('<div class="help-block">' + data.errors.consulta + '</div>');
					}
					if (data.errors.recaptcha) { 
						
						$('#recaptcha-group').addClass('has-error');
						$('#recaptcha-group').append('<div class="help-block">' + data.errors.recaptcha + '</div>');
						
					}
					$('#enviar_form').attr('disabled', false);
				} else {
					$('#enviar_form').attr('disabled', false);
					grecaptcha.reset();
					var frm = $('#form_contact')[0];
					frm.reset();
					$('form').append('<div class="confirmacion mensajes alert alert-success">' + data.message + '</div>');
					setTimeout(function () {
						$(".mensajes").remove();
						$('#myModal').modal('toggle')
					}, 3000);
					location.reload();
				}
			}).fail(function (data) {
				
			});
			event.preventDefault();
		});
	});
});