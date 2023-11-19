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
    text: `New message from ${name} \n Subject: ${subject} \n Message: ${message} \n Email Address: ${email}`,
    html:
      `<html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Josefin Sans', sans-serif;
              margin: 20px;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              color: #333;
            }
    
            h1 {
              font-family: 'Josefin Sans', sans-serif;
              color: #5e503f;
              text-align: center;
            }
    
            p {
              margin: 10px 0;
            }
    
            .patient-info {
              font-family: 'Josefin Sans', sans-serif;
              background-color: #ffffff;
              padding: 15px;    
            }
    
            .header-image {
              width: 100%;
              max-width: 400px;
              margin: 0 auto;
            }
            
            .flex-center {
              display: flex;
              justify-content: center;
            }
          </style>
      </head>
      <body>
        <div class='flex-center'>
          <img src="https://i.imgur.com/I7wCc2X.png" alt="Header Image" class="header-image">
        </div>
        <div class="patient-info">
          <h1>New Inquiry from ${name}</h1>
          <p>Here's a message from the patient:</p>
          <p>${message}</p>
          <p>Patient Email: ${email}</p>
        </div>
      </body> 
      </html>
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
