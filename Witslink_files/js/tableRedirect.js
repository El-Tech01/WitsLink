 $(document).ready(function () {
     loadJobList();
 });

 function loadJobList() {

     $.ajax({
         type: 'POST',
         url: 'https://lamp.ms.wits.ac.za/~1879990/',
         dataType: 'json',
         data: {},
         contentType: 'application/json; charset=utf-8',
         success: function (res) {
             for (var i = 0; i < res.length; i++) {

                 var jobstat;
                 var today = new Date();

                 if (res[i]['jobDeadline']< today ) {
                    jobstat = '<tr><td>In-active</td></tr>';
                 } else if (res[i]['jobDeadline']>= today) {
                     jobstat = '<tr><td>Active</td></tr>';
                 }
                 $('#tableBody').append('<tr><td hidden>' + res[i]['jobTitle'] +
                     '</td><td>' + res[i]['jobStatus'] +
                     '</td><td>' + res[i]['jobDeadline'] +
                     '</td><td>' + res[i]['NUM_OF_APPS'] +
                     '</td><td>' + jobstat +
                     '</td></tr>')
             }
         }
     });
 }