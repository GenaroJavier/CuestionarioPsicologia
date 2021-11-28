<?php
  $mat = $_GET["msj"];
  $BD = mysqli_connect("localhost", "root", "", "blog");
  $Res = mysqli_query($BD, "select Noticia,TituloNoticia from noticia where IDNoticia = ".$mat);
  $Fila = mysqli_fetch_array($Res);
  echo $Fila['Noticia'];
?>
