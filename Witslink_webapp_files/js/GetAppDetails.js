//Bibliography
var Lname = document.getElementById("Lname");
var Fname = document.getElementById("Fname");
var Id_or_passport = document.getElementById("id_or_passport");
var Studentno = document.getElementById("studentno");
var Dateofbirth = document.getElementById("dateofbirth");
var Race = document.getElementById("Race");
// kind of radio button
var Gender = document.getElementById("");
var MaritalStatus = document.getElementById("MaritalStatus");
var PrimaryLanguage = document.getElementById("PrimaryLanguage");
//kind of radio button
var Disability = document.getElementById("Disability");

var Disabilityspec = document.getElementById("disabilityspec");
//Contact details
var Email = document.getElementById("email");
var Contactnumber = document.getElementById("Contactnumber");
//Education
var Faculty = document.getElementById("faculty");
var YOS = document.getElementById("YOS");
var Motivation = document.getElementById("motivation");

//on load list all jobs avaible
var BtnUpload = document.getElementById("BtnUpload");
BtnUpload.addEventListener("click",function(){
  var urlSendData = new XMLHttpRequest();
  urlSendData.open('POST','');
  urlSendData.onload = function(){
    var DBresponse = JSON.parse(urlSendData.responseText);
    //will check if the things were submitted correctly based on the
    //output. check if the student exist 1st

  };
  urlJobStatus.send();
});
  `                                                                                         `
//get the Selected item from the radio button
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function GetApplicationDetails() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}
