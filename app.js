const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
res.send("app working");
});

app.post("/mail", (req, res)=> {
let message = req.body.message;
console.log("message: ", message);

let transporter = mailer.createTransport({
    service: "Gmail",
auth: {
user: "aksp89@gmail.com",
pass: "GmailAK@19/06/89."
},
tls: {
    rejectUnauthorized: false
}
});

transporter.sendMail({
    from: "Ankur",
    to: "aksp89@gmail.com",
    subject: "testing...",
    text: message
}, (err)=>{
if(err) res.send("mail not sent");
res.send("mail sent");
});

});

app.listen(process.env.PORT || 8080, ()=> {
console.log("App listening on 8080");
});

module.exports = app;

