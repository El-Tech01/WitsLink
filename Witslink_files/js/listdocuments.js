window.addEventListener("load", function(){
    var urlRequest = new XMLHttpRequest();
    var studentNo = localStorage.getItem("Sno");
    var studentNoInt = parseInt(studentNo);

    urlRequest.open('GET',"http://lamp.ms.wits.ac.za/~s1879990/showfiles.php/?STUDENT_NO="+studentNoInt);
    urlRequest.onload = function(){
        var respond = JSON.parse(urlRequest.responseText);
         loadTable(respond);
    };
    urlRequest.send();
});
var postedDocs = document.getElementById("tableBody");


 function loadTable(res) {
    var  htmlString ="", hold="";

     hold = res[0].FILE_ID;
        if (!hold.localeCompare("false")) {
              htmlString = "<tr><td>" + "No Additional documents submitted" + "</td></tr>";

        } else {
            for (var i = 0; i < res.length; i++) {
                 htmlString += '<tr class="col1" ><td class="col1">' + i +
                     '</td><td class="col2">' + res[i].FILE_NAME +
                     '</a></td><td class="col3">' + res[i].FILE_TYPE +
                     '</td><td class="col4" onclick=" "><a href="AdditionalDocList.html">' +  "Open"+
                      '</td></tr>';

                }
            postedDocs.insertAdjacentHTML('beforeend', htmlString);

      }

 }
