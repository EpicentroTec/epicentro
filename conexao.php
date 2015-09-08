<?php
$server  = "localhost";
$usuario = "root";
$senha   = "";
$banco   = "epicentro";

$con    = mysql_connect($server, $usuario, $senha) or die ("Erro 7: " . mysql_error());
$dbase  = mysql_select_db($banco) or die ("Erro 8: " . mysql_error($con));
?>