const {HtmlDisplayJob} = require("./listJobsFunction");

test("test the json data array from the php request if no job available",()=>{
  var text = '{"jobs":[' +
  '{"JOB_TITLE":"false"}]}';
  obj = JSON.parse(text);
expect(HtmlDisplayJob(obj)).toBe("No available jobs");
});

test("test the json data array from the php request with job available",()=>{
  var text = '{"jobs":[' +
  '{"JOB_TITLE":"Tutoring","JOB_STATUS":"Part-Time","JOB_DESC":"WHAT WHAT","JOB_DEADLINE":"02-04-2020"}]}';
  obj = JSON.parse(text);
expect(HtmlDisplayJob(obj)).toBe("Tutoring Duration: Part-Time Description: WHAT WHAT Deadline: 02-04-2020");
});


//Table
const{loadJobTable}=require("./listJobsFunction");
test("test the json array to load jobs if no job available in the table",()=>{
  var hold =  '{"jobs":[' +
  '{"JOB_TITLE":"false"}]}';
  obj = JSON.parse(hold);
  var   htmlString = "<tr><td>" + "No jobs available" + "</td></tr>";
  expect(loadJobTable(obj)).toBe(htmlString);
});

test("test the json data array from the php request with jobs available and load them to a table",()=>{
  var text = '{"jobs":[' +
  '{"JOB_TITLE":"Facilitator","JOB_STATUS":"Part-Time","JOB_DEADLINE":"02-04-2020","NUM_OF_APPS":"72"}]}';
  obj = JSON.parse(text);
  var htmlString =  '<tr><td class="col1">' + "Facilitator" +
      '</td><td class="col2">' + "Part-Time" +
      '</td><td class="col3">' + "02-04-2020" +
      '</td><td class="col4">' + "72"+
      '</td><td class="col5">' + "In-Active" +
      '</td></tr>';
expect(loadJobTable(obj)).toBe(htmlString);
});

//password
const{HtmlOutput}=require("./listJobsFunction");
test("test the json array to test password of department",()=>{
  var hold =  '{"jobs":[' +
  '{"DEPT_ID":"false"}]}';
  obj = JSON.parse(hold);
  var   htmlString = 'wrong password or username';
  expect(HtmlOutput(obj)).toBe(htmlString);
});
test("test the json array to test password of department if department exist",()=>{
  var hold =  '{"jobs":[' +
  '{"DEPT_ID":"10001"}]}';
  obj = JSON.parse(hold);
  var   htmlString = 'ViewJob.html';
  expect(HtmlOutput(obj)).toBe(htmlString);
});
