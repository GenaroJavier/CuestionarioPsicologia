<?php
$noticia= $_POST['editor1'];
$TituloNoticia = $_POST['NomNot'];
$ImagenNoticia = $_POST['ImgNot'];
/*echo $TituloNoticia;
echo $ImagenNoticia;
echo $noticia;*/

$BD=mysqli_connect("localhost", "root", "", "blog");
//$Res=mysqli_query($BD, "insert into alumno values ('$mat', '$nom', '$ap','$sex', '$carr')");
$fecha = date("Y")."-".date("m")."-".date("d");
$Res=mysqli_query($BD, "insert into noticia (TituloNoticia, ImagenNoticia, Noticia, FechaNoticia) VALUES ('$TituloNoticia','$ImagenNoticia','$noticia','$fecha')");
if(mysqli_affected_rows($BD)>0)
{
  echo "Éxito al ingresar Noticia";
}
//INSERT INTO `noticia`(`TituloNoticia`, `ImagenNoticia`, `Noticia`, `FechaNoticia`) VALUES ([value-2],[value-3],[value-4],[value-5])
?>
