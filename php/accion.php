<?php
$mat = $_GET["msj"];
$mat2 = $_GET["var"];
$BD=mysqli_connect("localhost", "root", "", "blog");
$Res=mysqli_query($BD, "select IDNoticia, ImagenNoticia, TituloNoticia FROM noticia LIMIT ".$mat.",".$mat2);
while ($Fila=mysqli_fetch_array($Res))
{
  echo '<div class="noticia" id="'.$Fila['IDNoticia'].'">
          <p>'.$Fila['TituloNoticia'].'</p>
          <img src="'.$Fila['ImagenNoticia'].'">
        </div>';
}
//SELECT IDNoticia, IDNoticia, TituloNoticia FROM noticia LIMIT 4,8
/*<input id="'.$Fila['IDNoticia'].'" type="text" value="'.$Fila['IDNoticia'].'" style="display: none">*/

/*<div class="noticia">
  <p>'.$Fila['TituloNoticia']'.</p>
  <img src="../'.$Fila['ImagenNoticia'].'">
  <p></p>
</div>*/
?>
