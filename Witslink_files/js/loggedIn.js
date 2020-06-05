let stdnt = document.getElementById("studentlgn");
 let hr = document.getElementById("hrlgn");

 if ("un" in localStorage){
   while (stdnt.firstChild && hr.firstChild){
     stdnt.removeChild(stdnt.firstChild);
      hr.removeChild(hr.firstChild);
   }
   let appView = "<a href="+"viewAppStatus.html"+" class="+"page-scroll>view my applications</a>";
    let logout = "<a href="+"StudentLogin.html"+" class="+"page-scroll>Log out</a>";
     stdnt.insertAdjacentHTML('beforeend',appView);
      hr.insertAdjacentHTML('beforeend',logout);
 }
