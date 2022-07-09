import mailer from "nodemailer";
import ENV from "../infra/config/env";

export const mailService = (email: string, nome: string, mensagem: string) => {
  const smtp = mailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: ENV.MAIL_USER,
      pass: ENV.MAIL_PASS,
    }
  });

  const mail = {
    from: ENV.MAIL_USER,
    to: email,
    subject: "Lacrei - Analise do seu cadastro!",
    text: mensagem
    //html: "<a> oi </a>"
  }

  return new Promise((resolve, reject) => {
    smtp.sendMail(mail)
      .then(response => {
        smtp.close();
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      })
  })
}
