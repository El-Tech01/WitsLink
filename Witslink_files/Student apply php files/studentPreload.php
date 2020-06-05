<?php
$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$std_id = $_REQUEST["STUDENT_NO"];
$json = array();

if ($conn) {
    if (isset($dept_id)) {
        $sqlQry = "SELECT * FROM REGISTER WHERE STUDENT_NO = '$std_id'";

    }
    mysqli_close($conn);
    if(!empty($json)){
         echo json_encode($json);
    }else{
        $res ="Student Non-existent";
        echo json_encode($res);
    }
        
} else {
    echo "Connection Error!";
}

?>