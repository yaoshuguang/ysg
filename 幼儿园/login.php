<?php
	session_start();
	$user = $_POST["user"];
	$password = $_POST["password"];
	require "../DB.class.php";
	$db = new DB();
	$sql = "select pwd form user where user = '{$user}'";
	$mm = $db->strquery





?>
