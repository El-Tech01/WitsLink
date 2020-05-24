window.addEventListener("load", function(){
    var urltable = new XMLHttpRequest();
    var dept_id = localStorage.getItem("un");
    var deptidInt = parseInt(dept_id);
    urltable.open('GET', "http://lamp.ms.wits.ac.za/~s1879990/jobsPosted.php/?USERNAME="+deptidInt);
    urltable.onload = function () {
        var respondData = JSON.parse(urltable.responseText);
<<<<<<< HEAD
        loadJobTable(respondData);

=======
        loadJobTable(respondData);   
>>>>>>> ae4ac16dc377da58cd138d5562014a5c08802bec
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
<<<<<<< HEAD

                 htmlString +=  '<tr><td class="col1"><a href="ViewApp.html">' + res[i].JOB_TITLE +
                     '</a></td><td class="col2">' + res[i].JOB_STATUS +
=======
                 htmlString +=  '<tr id = "dataRow"><td class="col1">' + res[i].JOB_TITLE +
                     '</td><td class="col2">' + res[i].JOB_STATUS +
>>>>>>> ae4ac16dc377da58cd138d5562014a5c08802bec
                     '</td><td class="col3">' + res[i].JOB_DEADLINE +
                     '</td><td class="col4">' + res[i].NUM_OF_APPS +
                     '</td><td class="col5">' + jobstat +
                     '</td></tr>';
            }

        }
        postedJobs.insertAdjacentHTML('beforeend', htmlString);
 }
