<?php
$mat = $_GET["msj"];
$mat2 = $_GET["var"];
$BD=mysqli_connect("localhost", "root", "", "blog");
$Res=mysqli_query($BD, "select IDNoticia, TituloNoticia FROM noticia LIMIT ".$mat.",".$mat2);
while ($Fila=mysqli_fetch_array($Res))
{
  echo '<div class="noticia" >
          <p>'.$Fila['TituloNoticia'].'</p>
          <img src="img/eliminar.svg" id="'.$Fila['IDNoticia'].'" class="img-eliminar">
          <img src="img/editar.svg" id="'.$Fila['IDNoticia'].'" class="img-edit">
        </div>';
}
?>
