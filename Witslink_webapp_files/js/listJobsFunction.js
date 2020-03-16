//var disJobDiv = document.getElementById("jobDiv");
function HtmlDisplayJob(data) {
  var htmlString="",hold;
  hold =data.jobs[0].JOB_TITLE;
  if(!hold.localeCompare("false")){
    htmlString = "No available jobs";
  }
  else{
    for(i = 0; i < data.jobs.length; i++){
      htmlString += data.jobs[i].JOB_TITLE+" Duration: "
      +data.jobs[i].JOB_STATUS+" Description: "
      +data.jobs[i].JOB_DESC+" Deadline: "
      +data.jobs[i].JOB_DEADLINE;
    }
  }
  return htmlString;
}
exports.HtmlDisplayJob = HtmlDisplayJob;
