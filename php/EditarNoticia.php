<?php
$IdNoticia= $_POST['idNoticia'];
$noticia= $_POST['editor1'];
$TituloNoticia = $_POST['NomNot'];
$ImagenNoticia = $_POST['ImgNot'];

$BD=mysqli_connect("localhost", "root", "", "blog");
$Res=mysqli_query($BD, "update noticia set TituloNoticia='$TituloNoticia', ImagenNoticia='$ImagenNoticia', Noticia='$noticia' where IDNoticia ='$IdNoticia'");
if(mysqli_affected_rows($BD)>0)
{
  echo "Éxito al actualizar alumno";
}
else {
  echo "El usuario no existe";
}
$idNot = $_GET['hola'];
echo $idNot;
?>
