<?php
$username="s1879990";
$password="s1879990";
$database= "d1879990";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);

//$studentno=$_REQUEST["studentno"];

$studentno=1604352;

$dbQuery = "SELECT FILE_ID, FILE_NAME, FILE_TYPE FROM FILE WHERE STUDENT_NO = $studentno ";

$output=array();

if(isset($studentno)){
if($result = mysqli_query($link,$dbQuery)){
while($row = mysqli_fetch_array($result))
{
 

           $output[]=$row;
        }
    }

}
mysqli_close($link);
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
 
?>
