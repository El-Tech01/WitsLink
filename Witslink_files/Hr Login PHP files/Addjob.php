<?php
    $username= "s1879990";
    $password= "s1879990";
    $database= "d1879990";
    $conn = mysqli_connect("127.0.0.1", $username, $password, $database); 
    
    include HRLogin.php;

    $departID = $dID; 
    $jobTitle = $_POST["jobTitle"];
    $jobStatus = $_POST["jobStatus"];
    $jobDealine = $_POST["jobDeadline"];
    $jobDesc = $_POST["jobDesc"];

    if($conn){
        if(isset($jobTitle, $jobStatus, $jobDealine, $jobDesc)){
            $query = "INSERT INTO NEW_JOB VALUES($dID,?,?,?,?)";

            $jobTitle = mysqli_real_escape_string($conn,$jobTitle);
            $jobStatus = mysqli_real_escape_string($conn,$jobStatus);
            $jobDealine = mysqli_real_escape_string($conn,$jobDealine);
            $jobDesc = mysqli_real_escape_string($conn,$jobDesc);

            $stmt = mysqli_stmt_init($conn);

            if(!mysqli_stmt_prepare($stmt, $query)){
                die(mysqli_error($conn));
            }else{
                mysqli_stmt_bind_param($stmt, "isssidsssssissssss"$jobTitle,$jobStatus,$jobDealine,$jobDesc);
                    //mysqli_stmt_execute($stmt);
                        if($stmt->execute()){
                            $output=true;
                            echo json_encode($output);
                        }
                        else {
                            $output=false;
                            echo json_encode($output);
                        }
            }
        }

    }else {
        die("Connection was not established");
    }
    mysqli_close($conn);
    die();

?>
