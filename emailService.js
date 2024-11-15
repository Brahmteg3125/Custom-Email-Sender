// emailService.js
const nodemailer = require('nodemailer');

const sendEmail = async (emailOptions, userCredentials) => {
  const transporter = nodemailer.createTransport({
    service: userCredentials.service, // e.g., 'gmail'
    auth: {
      type: 'OAuth2',
      user: userCredentials.email,
      accessToken: userCredentials.accessToken,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: userCredentials.refreshToken,
    },
  });

  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
