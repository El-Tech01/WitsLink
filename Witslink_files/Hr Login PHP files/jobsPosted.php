<?php
$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$dept_id = $_REQUEST["DEPT_ID"];
$json = array();

if ($conn) {
    if (isset($dept_id)) {
        $sqlQry = "SELECT JOB_ID,JOB_TITLE, JOB_STATUS, JOB_DEADLINE,NUM_OF_APPS FROM NEW_JOB WHERE DEPT_ID = '$dept_id'";

    }
    mysqli_close($conn);
    if(!empty($json)){
         echo json_encode($json);
    }else{
        $arr = array(array(
            "DEPT_ID" => "false"
        ));
        echo json_encode($arr);
    }
        
} else {
    echo "Connection Error!";
}

?>