const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();


// google account credentials used to send email
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "msprakash237@gmail.com",
    pass: "Suriya@7874",
  },
});


exports.sendEmail = functions.firestore
    .document("orders/{orderId}")
    .onCreate((snap, context) => {
      const mailOptions = {
        from: "msprakash237@gmail.com",
        to: snap.data().email,
        subject: "contact form message",
        html: `<h1>Order Confirmation</h1>
                                <p>
                                   <b>Email: </b>${snap.data().email}<br>
                                </p>`,
      };


      return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent!");
      });
    });
