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
$otherLanguages=$_POST["otherLanguages"];
$skill=$_POST["skill"];

if ($conn) {
    if (isset($firstName, $lastName, $idOrPass, $studentNo, $dateOfBirth, $race, $gender, $maritalStatus, $homeLanguage,
    $disability, $emailAddress, $phoneNumber, $faculty,$school, $YOS, $skill)) {
        $qry = "UPDATE STUDENT SET STUDENT_FNAME = '$firstName',STUDENT_LNAME = '$lastName',STUDENT_IDorPASS = '$idOrPass', STUDENT_DOB = '$dateOfBirth',STUDENT_PHONE_NO = '$phoneNumber', STUDENT_RACE = '$race', STUDENT_GENDER = '$gender',STUDENT_MARITAL_STATUS = '$maritalStatus',STUDENT_EMAIL = '$emailAddress', STUDENT_YOS = '$YOS', STUDENT_HOME_LANG='$homeLanguage', STUDENT_OTHER_LANG='$otherLanguages', STUDENT_DISABILITY='$disability', STUDENT_DISABLILITY_DESC='$specifyDisability', STUDENT_FACULTY='$faculty', STUDENT_SCHOOL='$school', STUDENT_SKILLS='$skill' WHERE STUDENT_NO = '$studentNo'";
        $result = mysqli_query($conn, $qry);
        if($result){
            $qry2 = "SELECT * FROM REGISTER WHERE STUDENT_NO = '$studentNo'";
            $result2 = $conn->query($qry2);
            if($result2->num_rows > 0){
                $regQry = "UPDATE REGISTER SET REGISTER_FNAME = '$firstName', REGISTER_LNAME = '$lastName', REGISTER_EMAIL = '$emailAddress' WHERE STUDENT_NO = '$studentNo'";
                $regRes= $conn->query($regQry);
                if($regRes){
                    echo json_encode("Successful Update!");
                    mysqli_close($conn);
                }else{
                    echo json_encode("Updating Error!");
                }
            }

        }else{
            echo json_encode("Cannot update at the moment.");
        }
    }else{
        echo json_encode("Please enter all required data.");
    }
}else{
    echo json_encode("Connection Error!");
}
mysqli_close($conn);
die();
?>