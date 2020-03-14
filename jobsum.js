function jobsum(a, b) {
  return a + b;
}
module.exports = jobsum;

var disJobDiv = document.getElementById("jobDiv");
function HtmlDisplayJob(data) {
  var htmlString="",hold="";
  hold=data[0].JOB_TITLE;
  if(!hold.localeCompare("false")){
    htmlString = "<h2>"+"No available jobs"+"<h2>";
  }
  else{
    for(i = 0; i < data.length; i++){
      htmlString += "<br><h2>"+data[i].JOB_TITLE+"</h2> <h3> Duration: "+data[i].JOB_STATUS+"</h3> <p> Description: "
      +data[i].JOB_DESC+"</p> <small> Deadline: "+data[i].JOB_DEADLINE+  "</small>";
    }
  }
  disJobDiv.insertAdjacentHTML('beforeend',htmlString);
}
