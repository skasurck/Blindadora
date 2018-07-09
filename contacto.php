<?php  

// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "contacto@blindajesarmoredsecurity.com";
$copia="skasurck@gmail.com"; 
$copia2="adamquinta@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail("$destinatario,$copia,$copia2", $asunto, $carta);
header('Location:mensajedeenvio.html');

?>