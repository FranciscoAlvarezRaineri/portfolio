// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const PASSWORD = process.env.password;

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "FranciscoAlvarezRaineri@gmail.com",
    pass: PASSWORD,
  },
  secure: true,
});

export default function handler(req, res) {
  const { email, name, message } = req.body;
  const mailData = {
    from: "FranciscoAlvarezRaineri@gmail.com",
    to: "FranciscoAlvarezRaineri@gmail.com",
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) return res.status(404).send(err);
    res.status(200).json({
      success: true,
      message:
        "The e-mail was sent correctly. I'll answer shortly. Thank you for getting in touch!",
    });
  });
}
