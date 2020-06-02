var jobMot = document.getElementById("submitApplication");

jobMot.addEventListener("click", function(){
    var urlApp = new XMLHttpRequest();
    var Job_id = localStorage.getItem("j");
    var jobidInt = parseInt(Job_id);
    urlApp.open('GET', "http://lamp.ms.wits.ac.za/~s1879990/motivation.php/?JobID="+jobidInt);
    urlApp.send();
});


