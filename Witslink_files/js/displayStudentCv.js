
window.addEventListener("load", function(){
    var urlRequest = new XMLHttpRequest();
    var studentNo = localStorage.getItem("Sno");
    var studentNoInt = parseInt(studentNo);

    urlRequest.open('GET',"http://lamp.ms.wits.ac.za/~s1879990/studentCVData.php/?STUDENT_NO="+studentNoInt);
    urlRequest.onload = function(){
        var respond = JSON.parse(urlRequest.responseText);
        HtmlOutput(respond);
    };
    urlRequest.send();
});


var display = document.getElementById("studentDetails");
function HtmlOutput(data) {
  var htmlString="";
  var hold="a";
  hold=data[0].STUDENT_NO;
  if(!hold.localeCompare("false")){
    htmlString= '<tr><td class="col1"> Connection problem</td></tr>';
  }
  else{
    for(i = 0; i < data.length; i++){
    htmlString = '<ul><li><p>'+data[i].STUDENT_FNAME+
    '</p></li><li><p>'+ data[i].STUDENT_LNAME+
    '</p></li><li><p>'+data[i].STUDENT_IDorPASS+
    '</p></li><li><p>'+data[i].STUDENT_NO+
    '</p></li><li><p>'+data[i].STUDENT_DOB+
    '</p></li><li><p>'+data[i].STUDENT_RACE+
    '</p></li><li><p>'+data[i].STUDENT_GENDER+
    '</p></li><li><p>'+data[i].STUDENT_MARIRAL_STATUS+
    '</p></li><li><p>'+data[i].STUDENT_HOME_LANG+
    '</p></li><li><p>'+data[i].STUDENT_OTHER_LANG+
    '</p></li><li><p>'+"None"+
    '</p></li></ul>';
    }
      //htmlString1 = window.location.assign("index.html");
    display.insertAdjacentHTML('beforeend',htmlString);

  }
}
