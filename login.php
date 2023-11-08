<?php
session_start();
?>
<!DOCTYPE html>
<html> 
	<head> 
		<meta charset="UTF-8"/>
		<title>Sistema de gestión de productos</title>
	</head>
	<?php
		$parametros = "'".$_REQUEST['Username']."', '".$_REQUEST['Password']."'";
	?>
	<body onload="return usuarioRegistrado(<?php echo $parametros ?>)">
		<div id="contenidoLogin"></div>
		<script src="./js/acceso.js"></script>
	</body>
</html>