<?php
$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$std_id = $_REQUEST["STUDENT_NO"];
$json = array();
$sqlQry;

if ($conn) {
    if (isset($std_id)) {
        $sqlQry = "SELECT * FROM STUDENT WHERE STUDENT_NO = '$std_id'";
        $qryRes = $conn->query($sqlQry);
        if($qryRes){
            if($qryRes->num_rows > 0){
                while($row = $qryRes->fetch_assoc()){
                    $json[] = $row;
                }
            }else{
                $sqlQry = "SELECT * FROM REGISTER WHERE STUDENT_NO = '$std_id'";
                $qryRes = $conn->query($sqlQry);
                while ($row = $qryRes->fetch_assoc()) {
                    $json[] = $row;
                }
            }
        }
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