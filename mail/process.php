<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['telefono']))
		$errors['telefono'] = 'Necesitamos tu numero de Telefono.';

	if (empty($_POST['email']))
		$errors['email'] = 'Necesitamos tu correo.';

	if (empty($_POST['consulta']))
		$errors['consulta'] = 'Escribi tu consulta.';
	
	if (empty($_POST['g-recaptcha-response'])) {
		$errors['recaptcha'] = 'Verifica el ReCaptcha.';
	} else {
		
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$data_recaptcha = array('secret' => '6LfU6BgTAAAAAHxouKP-PNB4mufDZE5fLNH4tSrK',
		'response' => $_POST['g-recaptcha-response'],
		'remoteip'=>$_SERVER['REMOTE_ADDR']);

		
		$options = array(
			'http' => array(
				'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
				'method'  => 'POST',
				'content' => http_build_query($data_recaptcha),
			),
		);
		$context  = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		if ($result === FALSE) { 
			
		$errors['recaptcha'] = 'Verifica el ReCaptcha Verifica';
		
		
		} 
		
	
	}
	
	
	
	
// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		$to = "contacto@estudiopye.com";
		$email_subject = "Consulta de WEB: ".$_POST['producto'];
		$email_body = "Mensaje:  ".$_POST['consulta']." \n\n". 
		"Detalles:\n\n Telefono: ".$_POST['telefono']." \n ".
		"Email: ".$_POST['email']."\n";
		$headers = "From: ".$_POST['email']."\n";
		$headers .= "Reply-To: ".$_POST['email'];
		mail($to,$email_subject,$email_body,$headers);

		// if there are no errors process our form, then return a message

		// DO ALL YOUR FORM PROCESSING HERE
		// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Recibimos tu consulta! Gracias';
	}

	// return all our data to an AJAX call
	echo json_encode($data);