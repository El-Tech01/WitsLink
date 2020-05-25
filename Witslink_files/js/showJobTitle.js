var jtitle = document.getElementById("jobName");
var jbname = localStorage.getItem("jname");
window.addEventListener('load',function(){
    var htmlstr = "<h3>"+"Job Title: "+jbname+"</h3>"
    jtitle.insertAdjacentHTML('beforeend', htmlstr);

});