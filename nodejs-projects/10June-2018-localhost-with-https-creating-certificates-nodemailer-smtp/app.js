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