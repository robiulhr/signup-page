const express = require("express");
// const bodyParser = require("body-parser");
// const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
// creating route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// // api key mailchimp
// let mailchimpurl = "bb13869f5a4a75fdc39e6c9521d6bdd5-us5";
// // mailchimp SERVER_PREFIX
// let serverprefix = "us5";
// // mailchimp API call
// mailchimp.setConfig({
//   apiKey: mailchimpurl,
//   server: serverprefix,
// });

// // async function run() {
// //   const response = await mailchimp.ping.get();
// //   console.log(response);
// // }

// const event = {
//   name: "JS Developers Meetup",
// };

// const footerContactInfo = {
//   company: "Mailchimp",
//   address1: "675 Ponce de Leon Ave NE",
//   address2: "Suite 5000",
//   city: "Atlanta",
//   state: "GA",
//   zip: "30308",
//   country: "US",
// };

// const campaignDefaults = {
//   from_name: "Gettin' Together",
//   from_email: "gettintogether@example.com",
//   subject: "JS Developers Meetup",
//   language: "EN_US",
// };

// async function run() {
//   const response = await mailchimp.lists.createList({
//     name: event.name,
//     contact: footerContactInfo,
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     campaign_defaults: campaignDefaults,
//   });

//   console.log(
//     `Successfully created an audience. The audience id is ${response.id}.`
//   );
// }

// run();

// post request
// app.post("/", function (req, res) {
//   let fname = req.body.fname;
//   let lname = req.body.lname;
//   let email = req.body.email;
//   let password = req.body.password;
//   //   res.send("hello " + fname + lname + email + password);
// });

app.listen(4000, function () {
  console.log("server is running on port 4000");
});

// bb13869f5a4a75fdc39e6c9521d6bdd5-us5
