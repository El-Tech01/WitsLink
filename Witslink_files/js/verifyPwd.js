import Msg from './bootstrap-msg';
import {timeout} from './timeout';

var BtnLogin = document.getElementById("BtnLogin");
BtnLogin.addEventListener("click",function(){
  var urlRequest = new XMLHttpRequest();
  var user = document.getElementById("username").value;
  localStorage.setItem("un",user);
  var password = document.getElementById("password").value;
  urlRequest.open('GET',"http://lamp.ms.wits.ac.za/~s1879990/HRLogin.php/?USERNAME="+user+"&PASSWORD="+password);
  urlRequest.onload = function(){
      var respond = JSON.parse(urlRequest.responseText);
      HtmlOutput(respond);
  };
  urlRequest.send();

});
var display = document.getElementById("Test");
function HtmlOutput(data) {
  var htmlString="",hold="";
  hold=data[0].DEPT_ID;
  if(!hold.localeCompare("false")){
    alert("wrong password or username");
    Msg.success("message",timeout); 
    //htmlString = "<p>"+"password doesnt match"+"</p>";
  }
  else{
    htmlString = window.location.assign("ViewJob.html");
    display.insertAdjacentHTML('beforeend',htmlString);
    }
}
