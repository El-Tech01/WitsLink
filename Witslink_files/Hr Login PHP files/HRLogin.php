<?php
$username="s1879990";
$password="s1879990";
$database= "d1879990";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);

$deptID= $_REQUEST["deptID"];
$deptpassword =$_REQUEST["deptPassword"];
$output=array();
if($result =mysqli_query($link,"SELECT * FROM DEPARTMENT WHERE DEPT_ID= $deptID")){
while($row =$result->fetch_assoc()){
  $output[]=$row;
}
}
$dID= $row[0];
mysqli_close($link);
if(empty($output)){
echo json_encode("false");
}else {
echo json_encode($output);
}
?>

