<?php
include "studentInfo.php";

$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$job_id = $_REQUEST["JobID"];

if(isset($job_id)){

    $sqlQry = "INSERT INTO APPLICATION VALUES ($studentNo,$job_id,'$motivation')";
    $studentNo = mysqli_real_escape_string($conn, $studentNo);
    $job_id = mysqli_real_escape_string($conn, $job_id);
    $motivation = mysqli_real_escape_string($conn, $motivation);

    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sqlQry)) {
        die(mysqli_error($conn));
    }else{
         mysqli_stmt_bind_param($stmt,'iis',$studentNo,$job_id,$motivation);
        if ($stmt->execute()) {
            $result = true;
            echo json_encode($result);
        } else {
            $result = false;
            echo json_encode($result);
            die(mysqli_error($conn));
        }
    }
   
}
mysqli_close($conn);
die();

?>