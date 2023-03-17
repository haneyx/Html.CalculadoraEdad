<?php

$interval = date_diff(date_create(), date_create($_GET['datex']));
$txt = "";
$edad = explode("_", $interval->format("%Y_%M_%d"));

$a = intval($edad[0]);
if($a==1)$txt="1 Año";
else $txt=$a." Años";
$txt.=" con ";

$m = intval($edad[1]);
if($m==1)$txt.=" 1 mes";
else $txt.=$m." meses";
$txt.=" y ";

$d = intval($edad[2]);
if($d==1)$txt.=" 1 día";
else $txt.=$d." días";

echo $txt;
?>
