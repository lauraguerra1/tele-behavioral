const nodemailer = require('nodemailer');

export default function mail(req, res) {
  const { name, email, subject, message } = req.body

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
    html:
      `<h1>New Inquiry from ${name}</h1>
      <p>${message}</p>
      <p>Patient email: ${email}</p>
      `, 
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json(error)
    } else {
      res.status(200).json({message: info.response})
    }
  })
}
