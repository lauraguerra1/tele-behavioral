// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');



export default function mail(req, res) {
  const { name, email, subject, message } = req.body
  //rememeber to set up error handling for missing parts here 
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASS 
    }  
  })

  const mailOptions = {
    from: email,
    to: process.env.RECEPIENT_EMAIL, 
    subject,
    text: message
  };
  res.status(200).json({ name: 'John Doe' })
}
