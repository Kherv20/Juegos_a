/*Ejercicio 2:
  Se pide crear un contenido mínimo que invoque a la función registrarUsuario con los 
  parámetros correspondientes, cuyos valores están en el arreglo $_REQUEST:
  $_REQUEST['registerName']
  $_REQUEST['registerLastName']
  $_REQUEST['registerEmail']
  $_REQUEST['registerPass']
  PUEDEN VER EL ARCHIVO login.php COMO EJEMPLO.
  Ejercicio 3:
  imprimir un mensaje de "USUARIO REGISTRADO CON ÉXITO" o "USUARIO NO REGISTRADO" según el
  resultado de la función invocada. 
  Ejercicio 4:
  Asimismo, se pide que invoque a una función de javaScript que imprima todos los usuarios 
  registrados hasta el momento (esta función hay que crearla en el archivo acceso.js). 
  Como sugerencia, se puede agregar un botón que al hacer click imprima los usuarios 
  registrados. */

  <!DOCTYPE html>
<html> 
	<head> 
		<meta charset="UTF-8"/>
		<title>Usuarios Registrados</title>
	</head>
	<?php
	?>
	<body>
		<div id="contenidoUsuarios"></div>
		<script src="./js/acceso.js"></script>
	</body>
</html>  
