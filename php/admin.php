<?php
$row = 1;
if (($handle = fopen("TestHablilidadesPensamiento1.csv", "r")) !== FALSE) {
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    echo '<p>'.$data[0].'-'.$data[1].'</p>
          <input type="radio" name="'.$data[0].'" value="v" class="radiobtn">
          <label for="'.$data[0].'">Verdadero</label>
          <input type="radio" name="'.$data[0].'" value="f" class="radiobtn">
          <label for="'.$data[0].'">falso</label>';
  }
  fclose($handle);
}
?>