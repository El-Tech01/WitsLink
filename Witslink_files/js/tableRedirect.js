window.addEventListener("load", function(){
    var urltable = new XMLHttpRequest();
    var dept_id = localStorage.getItem("un");
    var deptidInt = parseInt(dept_id);
    urltable.open('GET', "http://lamp.ms.wits.ac.za/~s1879990/jobsPosted.php/?USERNAME="+deptidInt);
    urltable.onload = function () {
        var respondData = JSON.parse(urltable.responseText);
        loadJobTable(respondData);
        
    };
    urltable.send();
});

var postedJobs = document.getElementById("tableBody");


 function loadJobTable(res) {
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
                 htmlString +=  '<tr><td>' + res[i].JOB_TITLE +
                     '</td><td>' + res[i].JOB_STATUS +
                     '</td><td>' + res[i].JOB_DEADLINE +
                     '</td><td>' + res[i].NUM_OF_APPS +
                     '</td><td>' + jobstat +
                     '</td></tr>';
            }
           
        }
        postedJobs.insertAdjacentHTML('beforeend', htmlString);
 }

