let tag = document.getElementById('data');
 let stdn = document.getElementById('stdno');


let std = parseInt(localStorage.getItem('un'));
fetchData(std);

function fetchData(studentNo){
  let xhr = new XMLHttpRequest();
   xhr.open("POST", "https://lamp.ms.wits.ac.za/~s1879990/jobStatus.php?studentNo="+studentNo);

   xhr.onload = function (){
    // console.log(this.responseText);

      if (this.responseText == "No applications to display."){
        stdn.innerHTML = this.responseText;
      }else {
          stdn.innerHTML = studentNo;

          var jsonArr = JSON.parse(this.responseText);
          console.log(jsonArr);
          displayStatus(jsonArr);
      }
   };

  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.send();
}



function displayStatus(arr) {

    //var today = new Date();
   for (var i = 0; i < arr.length; i++) {
        var htmlString = '';
        htmlString +=  '<tr><td class="col1">' + arr[i]["Department"] +
            '</td><td class="col2">' + arr[i]["Job_title"] +
            '</td><td class="col3">' + arr[i]["Job_term"] +
            '</td><td class="col4">' + new Date(arr[i]["Deadline"]) +
            '</td><td class="col5">' + 'submitted' +
            '</td></tr>';

            tag.insertAdjacentHTML('beforeend', htmlString);
  }
}








































  //displayStatus(arr);


/*
function StatusTable(res) {
   var  htmlString ="", hold="";

    hold = res[0].JOB_TITLE;
       if (!hold.localeCompare("false")) {
             htmlString = "<tr><td>" + "No jobs available" + "</td></tr>";

       } else {

            var jobstat;
            var today = new Date();
           for (var i = 0; i < res.length; i++) {
                if (new Date(res[i].JOB_DEADLINE) < today ) {
                   jobstat = 'In-Active';
                } else if (new Date(res[i].JOB_DEADLINE) >= today) {
                    jobstat = 'Active';
                }
                htmlString +=  '<tr><td class="col1">' + res[i].JOB_TITLE +
                    '</td><td class="col2">' + res[i].JOB_STATUS +
                    '</td><td class="col3">' + res[i].JOB_DEADLINE +
                    '</td><td class="col4">' + res[i].NUM_OF_APPS +
                    '</td><td class="col5">' + jobstat +
                    '</td></tr>';
           }

       }
       postedJobs.insertAdjacentHTML('beforeend', htmlString);
}
*/
