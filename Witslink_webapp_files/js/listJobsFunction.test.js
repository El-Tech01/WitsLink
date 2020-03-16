const {HtmlDisplayJob} = require("./listJobsFunction");

/*var json= "{"JOB_TITLE":"false",
"JOB_STATUS": "Part-Time",
"JOB_DESC":"WHAT WHAT WHAT WHAT WHAT",
"JOB_DEADLINE":"02-07-2020"}";*/

test("test the json data array from the php request if no job available",()=>{
  var text = '{"jobs":[' +
  '{"JOB_TITLE":"false"}]}';
  obj = JSON.parse(text);
expect(HtmlDisplayJob(obj)).toBe("No available jobs");
});
