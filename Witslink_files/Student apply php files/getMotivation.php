<?php
$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$std_id = $_REQUEST["STUDENT_NO"];
$job_id = $_REQUEST["JOB_ID"];
$json = array();

if ($conn) {
    if (isset($std_id)) {
        $sqlQry = "SELECT * FROM APPLICATION WHERE STUDENT_NO = '$std_id'AND JOB_ID = '$job_id'";
        $qryRes = $conn->query($sqlQry);
        if($qryRes){
            if($qryRes->num_rows > 0){
                while($row = $qryRes->fetch_assoc()){
                    $json[] = $row;
                }
            }
        }
    }else{
        echo ("No student number given!");
    }
    mysqli_close($conn);
    if (!empty($json)) {
        echo json_encode($json);
    } else {
        $res = "Student Non-existent";
        echo json_encode($res);
    }
        
}else {
    echo "Connection Error!";
}