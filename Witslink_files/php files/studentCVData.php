<?php

$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn  = mysqli_connect("127.0.0.1",$username,$password,$database);
$studentNo = $_REQUEST["STUDENT_NO"];
$output=array();


if(!isset($studentNo)){
    $output="did not send the required output";
}
else{
    if($result =mysqli_query($conn,"SELECT * FROM STUDENT WHERE STUDENT_NO='$studentNo'")){
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
        "STUDENT_NO" => "false"
    ));  
     echo json_encode($arr);
  }
  else {
     echo json_encode($output);
  }
  die();
?>

