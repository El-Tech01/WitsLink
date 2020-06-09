let stdnt = document.getElementById("studentlgn");
 let hr = document.getElementById("hrlgn");

 if ("un" in sessionStorage){
   while (stdnt.firstChild && hr.firstChild){
     stdnt.removeChild(stdnt.firstChild);
      hr.removeChild(hr.firstChild);
   }
   let appView = "<a href="+"studentProfile.html"+" class="+"page-scroll>My Profile</a>";
    let logout = "<a href="+"StudentLogin.html"+" class="+"page-scroll>Log out</a>";
     stdnt.insertAdjacentHTML('beforeend',appView);
      hr.insertAdjacentHTML('beforeend',logout);
 }
