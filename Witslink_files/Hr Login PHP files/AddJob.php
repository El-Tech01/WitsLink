<?php
    $username= "s1879990";
    $password= "s1879990";
    $database= "d1879990";
    $conn = mysqli_connect("127.0.0.1", $username, $password, $database);

    $dept_id = $_POST["Department"];
    $jobTitle = $_POST["jobTitle"];
    $jobStatus = $_POST["jobStatus"];
    $jobDeadline = $_POST["jobDeadline"];
    $jobDesc = $_POST["jobDesc"];

    if($conn){
        if(isset($jobTitle, $jobStatus, $jobDeadline, $jobDesc)){
            $query = "INSERT INTO NEW_JOB (DEPT_ID,JOB_TITLE,JOB_STATUS,JOB_DESC,JOB_DEADLINE) VALUES($dept_id,?,?,?,?)";

            $jobTitle = mysqli_real_escape_string($conn,$jobTitle);
            $jobStatus = mysqli_real_escape_string($conn,$jobStatus);
            $jobDeadline = mysqli_real_escape_string($conn,$jobDeadline);
            $jobDesc = mysqli_real_escape_string($conn,$jobDesc);

            $stmt = mysqli_stmt_init($conn);

            if(!mysqli_stmt_prepare($stmt, $query)){
                die(mysqli_error($conn));
            }else{
                mysqli_stmt_bind_param($stmt, "ssss",$jobTitle,$jobStatus,$jobDesc,$jobDeadline);
                    //mysqli_stmt_execute($stmt);
                        if($stmt->execute()){
                            $output=true;
                            echo json_encode("Job post successfull!");
                                    
                        }
                        else {
                            $output=false;
                            echo json_encode("Job post was not successful");
                            /*echo json_encode($output);*/
                            die(mysqli_error($conn));
                        }
            }
        }else{
	die("send required values");
	}

    }else {
        die("Connection was not established");
    }
    mysqli_close($conn);
    die();
?>
