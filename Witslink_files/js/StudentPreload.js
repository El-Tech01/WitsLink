
window.addEventListener("load", function(){
    var urlform = new XMLHttpRequest();
    var std_id = localStorage.getItem("std");
    var stdIdInt = parseInt(std_id);
    urlform.open('GET', "http://lamp.ms.wits.ac.za/~s1879990/studentPreload.php/?STUDENT_NO="+stdIdInt);
    urlform.onload = function () {
        var resData = JSON.parse(urlform.responseText);
        loadStudentData(resData);
    };
    urlform.send();
});

function loadStudentData(Sdata){
 
      var hold = "";

      hold = Sdata[0].STUDENT_NO;
 
      if (!hold.localeCompare("false")) {
        //  alert("no data");
      }else{

              for (i = 0; i < Sdata.length; i++) {
                 
                  var stdNo = Sdata[i].STUDENT_NO;
                  var lname = Sdata[i].REGISTER_LNAME;
                  var fname = Sdata[i].REGISTER_FNAME;
                  var email = Sdata[i].REGISTER_EMAIL;
                  

                  localStorage.setItem("sn", stdNo);
                  localStorage.setItem("FName", fname);
                  localStorage.setItem("LName", lname);
                  localStorage.setItem("Email", email);
              }
              
      }
 


}
