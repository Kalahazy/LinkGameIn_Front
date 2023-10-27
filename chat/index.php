<?
session_start();

if (isset($_GET['logout'])) {

	//Simple exit message
	$fp = fopen("log.html", 'a');
	fwrite($fp, "<div class='msgln'><i>User " . $_SESSION['name'] . " ha salido del chat.</i><br></div>");
	fclose($fp);

	session_destroy();
	header("Location: index.php"); //Redirect the user
}

function loginForm()
{
	echo '
	<div id="loginform" class="container">
    <form action="index.php" method="post">
        <p>¡Únete a nuestro chat en vivo, y encuentra amigos para jugar! <br> Coloca tu Nickname para continuar:</p>
        <div class="mb-3">
            <label for="name" class="form-label"></label>
            <input type="text" name="name" id="name" class="form-control" />
        </div>
        <button type="submit" name="enter" id="enter" class="btn btn-outline-danger">Enviar</button>
    </form>
</div>

	';
}

if (isset($_POST['enter'])) {
	if ($_POST['name'] != "") {
		$_SESSION['name'] = stripslashes(htmlspecialchars($_POST['name']));
	} else {
		echo '<span class="error">Por favor escribe tu Nickname</span>';
	}
}
?>
<!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<!--Icono de pestania-->
	<link rel="icon" href="./assets/images/img_registrarUX/Letra G en rojo.ico">
	<title>LinkGameIn-Chat</title>
	<link rel="stylesheet" href="style.css" />

	<!-- Incluye Bootstrap CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

	<!-- Incluye Bootstrap JavaScript y jQuery (popper.js es necesario para algunos componentes) -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
	<script src="../assets/scripts/scriptsMenuNavbar.js"></script>
</head>

<body>
	<!-- Barra de navegación -->
	<nav class="custom-navbar d-flex justify-content-between">
		<!-- Contenedor Logo -->
		<div id="containerLogo">
		</div> <!-- Cierre de contenedor logo -->
		<!-- Contenedor de Imagen Login/Logout -->
		<div class="containerProfile position-relative" id="profileImg">
		</div> <!-- Cierre de contenedor de Imagen Login/Logout -->
		<!-- Contenedor Menu Config -->
		<div class="config-menu" id="configMenu">
		</div> <!-- Cierre div de menu -->
	</nav> <!-- Cierre de Barra de navegación -->


	<br>
	<?php
	if (!isset($_SESSION['name'])) {
		loginForm();
	} else {
		?>



		<div id="wrapper" class="container">
			<div id="menu" class="mb-3">
				<p class="welcome">Hola, <b>
						<?php echo $_SESSION['name']; ?>
					</b></p>
				<p class="logout"><a id="exit" href="#">Salir del Chat</a></p>
				<div style="clear:both"></div>
			</div>
			<div id="chatbox" class="bg-dark text-light">
				<?php
				if (file_exists("log.html") && filesize("log.html") > 0) {
					$handle = fopen("log.html", "r");
					$contents = fread($handle, filesize("log.html"));
					fclose($handle);
					echo $contents;
				}
				?>
			</div>
			<form name="message" action="">
				<input name="usermsg" type="text" id="usermsg" class="form-control" /> <br>
				<input name="submitmsg" type="submit" id="submitmsg" value="Send" class="btn btn-outline-danger" />
			</form>
		</div>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
		<script type="text/javascript">
			// jQuery Document
			$(document).ready(function () {
				//If user submits the form
				$("#submitmsg").click(function () {
					var clientmsg = $("#usermsg").val();
					$.post("post.php", { text: clientmsg });
					$("#usermsg").attr("value", "");
					return false;
				});

				//Load the file containing the chat log
				function loadLog() {
					var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
					$.ajax({
						url: "log.html",
						cache: false,
						success: function (html) {
							$("#chatbox").html(html); //Insert chat log into the #chatbox div				
							var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
							if (newscrollHeight > oldscrollHeight) {
								$("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
							}
						},
					});
				}
				setInterval(loadLog, 1500);	//Reload file every 2.5 seconds

				//If user wants to end session
				$("#exit").click(function () {
					var exit = confirm("Estas por salir de LinkGameIn-Chat");
					if (exit == true) { window.location = 'index.php?logout=true'; }
				});
			});
		</script>
		<?php
	}
	?>


</body>

</html>