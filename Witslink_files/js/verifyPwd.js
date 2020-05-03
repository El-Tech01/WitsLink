var BtnLogin = document.getElementById("BtnLogin");
BtnLogin.addEventListener("click",function(){
  var urlRequest = new XMLHttpRequest();
  var user = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  urlRequest.open('GET','http://lamp.ms.wits.ac.za/~s1879990/Login.php/?USERNAME=10001');
  urlRequest.onload = function(){
      var respond = JSON.parse(urlRequest.responseText);
      HtmlDisplayJob(respond);
  };
  urlRequest.send();
});

var display = document.getElementById("Test");
// list jobs given data array
//function to be tested
function HtmlDisplayJob(data) {
  var htmlString="",hold="";
  hold=data[0].DEPT_ID;
  if(!hold.localeCompare("false")){
    htmlString = "<p>password doesn't match</p>";
  }
  else{
    htmlString= "<p> password matched </p>";
    }
  display.insertAdjacentHTML('beforeend',htmlString);
}
