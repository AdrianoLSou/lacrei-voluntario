import ENV from "./env";

const smtpConfig = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: ENV.MAIL_USER,
    pass: ENV.MAIL_PASS,
  }
}

export default smtpConfig;
