<?php
$username = "s1879990";
$password = "s1879990";
$database = "d1879990";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

$firstName=$_POST["firstName"];
$lastName=$_POST["lastName"];
$idOrPass=$_POST["idOrPass"];
$studentNo=$_POST["studentNo"];
$dateOfBirth=$_POST["dateOfBirth"];
$race=$_POST["race"];
$gender=$_POST["gender"];
$maritalStatus=$_POST["maritalStatus"];
$homeLanguage=$_POST["homeLanguage"];
$disability=$_POST["disability"];
$specifyDisability=$_POST["specifyDisability"];
$emailAddress=$_POST["emailAddress"];
$phoneNumber=$_POST["phoneNumber"];
$faculty=$_POST["faculty"];
$school=$_POST["school"];
$YOS=$_POST["YOS"];
$motivation=$_POST["motivation"];
$otherLanguages=$_POST["otherLanguages"];
$skill=$_POST["skill"];

/*
$proofReg=$_POST["proofReg"];
$transcript=$_POST["transcript"];
*/

if ($conn){
        if(isset($firstName,$lastName,$idOrPass,$studentNo,$dateOfBirth,$race,$gender,$maritalStatus,$homeLanguage,
        $disability,$emailAddress,$phoneNumber,$faculty,$YOS,$motivation)){
        $query ="INSERT INTO STUDENT VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        $studentNo=mysqli_real_escape_string($conn, $studentNo);
        $fName=mysqli_real_escape_string($conn, $firstName);
        $lName=mysqli_real_escape_string($conn, $lastName);
        $idOrPass=mysqli_real_escape_string($conn, $idOrPass);
        $yos=mysqli_real_escape_string($conn, $YOS);
        $dob=mysqli_real_escape_string($conn, $dateOfBirth);
        $gender=mysqli_real_escape_string($conn, $gender);
        $maritalStatus=mysqli_real_escape_string($conn, $maritalStatus);
        $race=mysqli_real_escape_string($conn, $race);
        $homeLanguage=mysqli_real_escape_string($conn, $homeLanguage);
        $otherLanguages=mysqli_real_escape_string($conn, $otherLanguages);
        $disability=mysqli_real_escape_string($conn, $disability);
        $specifyDisability=mysqli_real_escape_string($conn, $specifyDisability);
        $phoneNumber=mysqli_real_escape_string($conn, $phoneNumber);
        $emailAddress=mysqli_real_escape_string($conn, $emailAddress);
        $faculty=mysqli_real_escape_string($conn, $faculty);
        $school=mysqli_real_escape_string($conn, $school);
        $motivation = mysqli_real_escape_string($conn, $motivation);
        $skill=mysqli_real_escape_string($conn, $skill);
        /*$proofReg=mysqli_real_escape_string($conn, $proofReg);
        $transcript=mysqli_real_escape_string($conn, $transcript);
      */
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $query)){
           die(mysqli_error($conn));
        }
        else{
            mysqli_stmt_bind_param($stmt, "isssissssssssssssss",$studentNo,$fName,$lName,$idOrPass,$yos,$dob,$gender,$maritalStatus,$race,$homeLanguage,$otherLanguages,$disability,$specifyDisability,$phoneNumber,$emailAddress,$faculty,$school,$motivation,$skill);
                //mysqli_stmt_execute($stmt);
                    if($stmt->execute()){
                        $output=true;
                        echo json_encode($output);
                    }
                    else {
                        $output=false;
                        echo json_encode($output);
			die(mysqli_error($conn));
                    }
            }
    }
}
else {
    die("Connection was not established");
}
mysqli_close($conn);
die();
?>
