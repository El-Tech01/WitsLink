//var disJobDiv = document.getElementById("jobDiv");
function HtmlDisplayJob(data) {
  var htmlString,hold;
  hold =data.jobs[0].JOB_TITLE;
  if(!hold.localeCompare("false")){
    htmlString = "No available jobs";
  }
  else{
    for(i = 0; i < data.length; i++){
      htmlString += "<br><h2>"+data[i].title+"</h2> <h3> Duration: "+data[i].JOB_STATUS+"</h3> <p> Description: "
      +data[i].JOB_DESC+"</p> <small> Deadline: "+data[i].JOB_DEADLINE+  "</small>";
    }
  }
  return htmlString;
}
//module.exports = HtmlDisplayJob;
exports.HtmlDisplayJob = HtmlDisplayJob;
