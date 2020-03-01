<?php
$username="s1879990";
$password="s1879990";
$database= "d1879990";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);


$deptfilter=$_REQUEST["deptfilter"];
$jobstatusfilter=$_REQUEST["jobstatusfilter"];
$jobtitlefilter=$_REQUEST["jobtitlefilter"];

//no filter sent list all 
if(!isset($_REQUEST["deptfilter"])&&!isset($_REQUEST["jobstatusfilter"])&& !isset($_REQUEST["jobtitlefilter"])){
$output=array();
if($result =mysqli_query($link,"SELECT * FROM JOB")){
while($row =$result->fetch_assoc()){
  $output[]=$row;
}
}
mysqli_close($link);
if(empty($output)){
echo json_encode("No available jobs");
}else {
echo json_encode($output);
}
//filter by job status(PART-TIME...)
}else if(!isset($_REQUEST["deptfilter"])&& isset($_REQUEST["jobstatusfilter"])&& !isset($_REQUEST["jobtitlefilter"])){
  $output=array();
  if($result =mysqli_query($link,"SELECT * FROM JOB WHERE JOB_STATUS = $jobstatusfilter ")){
  while($row =$result->fetch_assoc()){
    $output[]=$row;
  }
  }
  mysqli_close($link);
  if(empty($output)){
  echo json_encode("No available jobs");
  }else {
  echo json_encode($output);
  }
//filter by job type
}else if(!isset($_REQUEST["deptfilter"])&& !isset($_REQUEST["jobstatusfilter"])&& isset($_REQUEST["jobtitlefilter"])){
  $output=array();
  if($result =mysqli_query($link,"SELECT * FROM JOB WHERE JOB_TITLE = $jobtitlefilter ")){
  while($row =$result->fetch_assoc()){
    $output[]=$row;
  }
  }
  mysqli_close($link);
  if(empty($output)){
  echo json_encode("No available jobs");
  }else {
  echo json_encode($output);
  }
}
//filter by Dept 
else if(isset($_REQUEST["deptfilter"])&& !isset($_REQUEST["jobstatusfilter"])&& !isset($_REQUEST["jobtitlefilter"])){
  $output=array();
  // $deptID=mysqli_query($link,"SELECT DEPT_ID FROM DEPT WHERE DEPT_NAME= $deptfilter ");
if($result =mysqli_query($link,"SELECT * FROM JOB WHERE DEPT_ID = $deptfilter ")){
  while($row =$result->fetch_assoc()){
    $output[]=$row;
  }
  }
  mysqli_close($link);
  if(empty($output)){
  echo json_encode("No available jobs");
  }else {
  echo json_encode($output);
  }
} 
?>

