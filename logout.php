<?php
session_start();
session_destroy();
header('Location: ./index.php');
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<title>Pagina 3</title>
</head>
	<body>
		<p>Has Cerrado Sesion</p>
	</body>
</html>