<?php
header("Access-Control-Allow-Origin: *");
$page = $_REQUEST['page'];
@$mid = $_REQUEST['mid'];
// print_r($_REQUEST);
// @$fid = $_REQUEST['fid'];
// @$data = $_REQUEST['data'];

// echo "include/adm_dashboard.php";

if (isset($mid)){
	echo "html/".$page.".html?msgid=".$mid;	
}
else{
	echo "html/".$page.".html";
}