<?
session_start();
date_default_timezone_set('America/Mexico_City');

if (isset($_SESSION['name'])) {
	$text = $_POST['text'];

	$fp = fopen("log.html", 'a');
	fwrite($fp, "<div class='msgln'>(" . date("g:i A") . ") <b>" . $_SESSION['name'] . "</b>: " . stripslashes(htmlspecialchars($text)) . "<br></div>");
	fclose($fp);
}
?>