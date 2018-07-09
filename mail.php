<?php
$correo = $_POST['correo'];
$asunto = "Email para contactarlo";
$destino = "contacto@blindajesarmoredsecurity.com";
$copia="skasurck@gmail.com"; 
$copia2="adamquinta@gmail.com";
$carta = "Correo enviado desde la pagina principal \n ";
$carta .= "Correo: $correo \n";
$carta .= "Contactarse con ellos.";

mail("$destino,$copia,$copia2", $asunto, $carta);
header("Location:mensajedeenvio.html");
?>