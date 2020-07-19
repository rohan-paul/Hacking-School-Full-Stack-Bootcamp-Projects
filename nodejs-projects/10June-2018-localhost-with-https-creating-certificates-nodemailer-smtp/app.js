/*Here, I am implementing nodemailer to send automatied emails
1> First create an smtp mail (here I have used from another person - which is
user: "ths@aadaranango.org",
pass: "CVCvM?FwUzLU")

2> Because I dont have a TLS (TLS is a successor to Secure Sockets Layer protocol, or SSL.) certificate - so to start the server, I have run the below command - 

NODE_TLS_REJECT_UNAUTHORIZED=0 nodemon app.js

3> Then go to Postman and send the POST request from route - http://localhost:3000/  - then in the running terminal I will get as below

Message sent: <1a08d237-2983-7c1e-e532-02b680791a29@mail.com>
Preview URL: false

And in my gmail (the one I have mentioned in mailOptions) I will get the email (check spam folder as well)
*/

var express = require("express");
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", function(req, res) {
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      host: "mail.aadaranango.org",
      port: 587,
      secure: false,     
      auth: {
        user: "ths@aadaranango.org",
        pass: "CVCvM?FwUzLU"
      }
    });

    var mailOptions = {
      from: '"Prashanth" <iprash011@mail.com>',
      to: "rohanpaul2@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>"
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is running");
});

//  In package.json I had this commnd ( "start": "node ./bin/www" ) - 