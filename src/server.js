const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer= require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3000, () => console.log("server running🌎"));

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gint.stirbys@gmail.com",
        pass: "Vytenis1991"
    },
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("ready to send🐱‍💻");
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "gint.stirbys@gmail.com",
        subject: "Portfolio Site- Contact Form Submission",
        html: `<p>Name: ${name}</p><br>
               <p>Email: ${email}</p><br>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({status: "ERROR" });
        } else {
            res.json({status: "Message Sent" });
        }
    });
});