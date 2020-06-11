document.getElementById('appStatus').addEventListener('click', function(){

  sessionStorage.setItem("loaded",false);

  if ('un' in sessionStorage){
    window.location.replace("viewAppStatus.html");
  }else{
    Msg['warning']("You have to be logged in first to see your applications");
    window.location.replace("studentLogin.html");
  }

});

let myform = document.getElementById('DetailsForm');
   myform.addEventListener('submit', (e)=>{
     e.preventDefault();

     let xhr = new XMLHttpRequest();
      xhr.open("POST","https://lamp.ms.wits.ac.za/~s1879990/studentUpdate.php");

      xhr.onload = function (){
        if(this.responseText){
          Msg['success']("Details successfully updated!");
          window.location.replace("viewAppStatus.html");
        }else{
          Msg['error']("An error was encountered, please try again");
        }
      };

      xhr.send(new FormData(myform));
   });
