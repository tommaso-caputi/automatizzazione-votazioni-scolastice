<?php
    //cambiare le variabili sottostanti
    $username = "";          //username database altervista
    $dbname = "";            //nome database altervista (es.my_username)
    $password="";            //password database altervista (se non impostata, lasciare vuota)
    //-----------------
    
    $classe = $_POST['classe'];
    $hostname="localhost";
	$link = mysqli_connect($hostname,$username, $password, $dbname) or die ("html>script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)/script>/html>");
	
    $query = "SELECT * FROM studenti WHERE classe='$classe'";
	$result = mysqli_query($link, $query);
	if($result){
        $row = mysqli_fetch_array($result);
        echo $row[1];
	}else{
        echo "Errore nella generazione del link";
    }
?>
