const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hiteshj1306@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the App, ${name}. Let me know how you get along with the App.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hiteshj1306@gmail.com",
    subject: "Sorry to see you go",
    text: `Goodbye, ${name}. I hope to see you back some time soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
