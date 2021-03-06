// magic.js
$(document).ready(function() {	$( "#prod1" ).on('click',function() {	  $('#prod1').fadeToggle( "slow", "linear" );	  $('#prod1_desc').fadeToggle( "slow", "linear" );	});	$( "#prod1_desc" ).on('click',function() {	  $('#prod1').fadeToggle( "slow", "linear" );	  $('#prod1_desc').fadeToggle( "slow", "linear" );	});	

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'telefono'              : $('input[name=telefono]').val(),
            'email'             : $('input[name=email]').val(),
            'consulta'    : $('input[name=consulta]').val(),
			'g-recaptcha-response'    : $('input[name=g-recaptcha-response]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'mail/process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});