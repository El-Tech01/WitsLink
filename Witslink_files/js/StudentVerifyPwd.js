var BtnLogin = document.getElementById("sBtnLogin");
BtnLogin.addEventListener("click",function(){
  var urlRequest = new XMLHttpRequest();
  var user = document.getElementById("username").value;
  localStorage.setItem("std",user);
  var password = document.getElementById("password").value;
  urlRequest.open('GET',"http://lamp.ms.wits.ac.za/~s1879990/StudentLogin.php/?studentNo="+user+"&password="+password);
  urlRequest.onload = function(){
      var respond = JSON.parse(urlRequest.responseText);
      HtmlOutput(respond);
  };
  urlRequest.send();

});
var display = document.getElementById("Test");
function HtmlOutput(data) {
  var htmlString="",hold="";
  hold=data[0].STUDENT_NO;
  if(!hold.localeCompare("false")){
    Msg['error']("Incorrect Username or Password. Please Try Again.");
    //htmlString = "<p>"+"password doesnt match"+"</p>";
  }
  else{
    htmlString = window.location.assign("index.html");
    display.insertAdjacentHTML('beforeend',htmlString);
    }
}
