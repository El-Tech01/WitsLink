<?php

$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn  = mysqli_connect("127.0.0.1",$username,$password,$database);
$uname = $_REQUEST["USERNAME"];
$pass = $_REQUEST["PASSWORD"];
$output=array();

if(!isset($uname,$pass)){
    $output="did not send the required output";
}
else{

    if($result =mysqli_query($conn,"SELECT * FROM DEPARTMENT WHERE DEPT_ID='$uname' and DEPT_PASSWORD = '$pass'")){
        while($row =$result->fetch_assoc()){
          $output[]=$row;
        }
    }
    else{
        die(mysqli_error($conn));
    }
}
mysqli_close($conn);
  if(empty($output)){
  $arr = array
    (array(
        "DEPT_ID" => "false"
    ));
     echo json_encode($arr);
  }
  else {
     echo json_encode($output);
  }
  die();
?>
