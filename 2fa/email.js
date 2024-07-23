const nodemailer = require("nodemailer");

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "investments@benefund.io", // Your email
    pass: "Agreatpassword123$", // Your email password or app-specific password
  },
});

// Function to send email
const sendEmail = async (email, name) => {
  html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Account</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 20px 0;
      }
      .header img {
        width: 100px;
      }
      .header h1 {
        margin: 0;
        color: #333333;
      }
      .content {
        margin: 20px 0;
        font-size: 16px;
        line-height: 1.5;
        color: #555555;
      }
      .content p {
        margin: 10px 0;
      }
      .content a {
        display: inline-block;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
      }
      .footer {
        text-align: center;
        padding: 20px 0;
        font-size: 14px;
        color: #999999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${process.env.FE_URL}/img/icon-1.png" alt="CryptoCoin" />
        <h1>Verify Your Account</h1>
      </div>
      <div class="content">
        <p>Dear User,</p>
        <p>Thank you for signing up for CryptoCoin. Please use the code below to verify your account:</p>
        <p><strong>Your code is 57809</strong></p>
        <p>Click the link below to verify your account:</p>
        <p><a href="${process.env.FE_URL}/verify.html">Verify Your Account</a></p>
        <p>If you did not sign up for this account, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 CryptoCoin. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`;
  const mailOptions = {
    from: "investments@benefund.io",
    to: email,
    subject: `${name}, Please Confirm Your Account`,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
  }
};

const sendEmail2 = async () => {
  const mailOptions = {
    from: "investments@benefund.io",
    to: "kalemmalek123@gmail.com",
    subject: `He take the bait`,
    text: `You got him`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmail, sendEmail2 };
