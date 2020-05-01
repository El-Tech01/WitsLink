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
