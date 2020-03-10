<?php
$username="s1879990";
$password="s1879990";
$database= "d1879990";
$link = mysqli_connect("127.0.0.1", $username, $password, $database);

error_reporting(0);
$DEPT_ID=$_REQUEST["DEPT_ID"];
$JOB_STATUS=$_REQUEST["JOB_STATUS"];
$JOB_TITLE=$_REQUEST["JOB_TITLE"];

$output=array();
//no filter sent list all 
if(!isset($DEPT_ID) && !isset($JOB_STATUS) && !isset($JOB_TITLE)){
    if($result =mysqli_query($link,"SELECT * FROM JOB")){
        while($row =$result->fetch_assoc()){
            $output[]=$row;
        }
    }
//filter by job status(PART-TIME...)
}
else if(isset($DEPT_ID)){
  if($result =mysqli_query($link,"SELECT * FROM JOB WHERE DEPT_ID ='$DEPT_ID'")){
    while($row =$result->fetch_assoc()){
        $output[]=$row;
    }
  }
//filter by job type
}
else if(isset($JOB_TITLE)){
  if($result =mysqli_query($link,"SELECT * FROM JOB WHERE JOB_TITLE = '$JOB_TITLE' ")){
    while($row =$result->fetch_assoc()){
        $output[]=$row;
    }
  }
}
//filter by Dept 
else if(isset($JOB_STATUS)){
  // $deptID=mysqli_query($link,"SELECT DEPT_ID FROM DEPT WHERE DEPT_NAME= $deptfilter ");
if($result =mysqli_query($link,"SELECT * FROM JOB WHERE JOB_STATUS = '$JOB_STATUS' ")){
    while($row =$result->fetch_assoc()){
      $output[]=$row;
    }
  }  
} 
mysqli_close($link);
  if(empty($output)){
  $arr = array
    (array(
        "JOB_TITLE" => "false"
    ));  
  echo json_encode($arr);
  }
  else {
  echo json_encode($output);
  }
?>

