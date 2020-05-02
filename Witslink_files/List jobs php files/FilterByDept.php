<?php
$username="s1879990";
$password="s1879990";
$database= "d1879990";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);

$deptfilter=$_REQUEST["DEPT_ID"];

  $output=array();
  
if($result =mysqli_query($link,"SELECT * FROM JOB WHERE DEPT_ID = $deptfilter ")){
  while($row =$result->fetch_assoc()){
    $output[]=$row;
  }
  }
  
  if(empty($output)){
  echo json_encode("No available jobs");
  }
  else {
  echo json_encode($output);
  }
  die(); 
?>

