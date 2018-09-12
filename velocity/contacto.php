<?php
//add the recipient's address here
$myemail = 'youremail@host.com';
 
//grab named inputs from html then post to #thanks
if (isset($_POST['name'])) {
$name = strip_tags($_POST['telefono']);
$email = strip_tags($_POST['correo']);
$message = strip_tags($_POST['consulta']);
echo "<span class=\"alert alert-success\" >Tu consulta a sido recibida. Gracias! Esto es lo que ha enviado:</span><br><br>";
echo "<stong>Name:</strong> ".$name."<br>";   
echo "<stong>Email:</strong> ".$email."<br>"; 
echo "<stong>Message:</strong> ".$message."<br>";
 
//generate email and send!
$to = $myemail;
$email_subject = "Telefono: $name";
$email_body = "Mensaje de Web PYE. ".
" Detalles:\n Telefono: $name \n ".
"Email: $email\n Mensage \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
mail($to,$email_subject,$email_body,$headers);
}
?>