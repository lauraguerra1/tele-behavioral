// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');



export default function mail(req, res) {
  const { name, email, subject, message } = req.body
  console.log('req body', req.body)
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
    from: process.env.MAILER_EMAIL,
    to: process.env.RECEPIENT_EMAIL, 
    subject,
    text: `Inquiry from ${name}: ${message}`,
    replyTo: email
  };
  res.status(200).json(mailOptions)
}
