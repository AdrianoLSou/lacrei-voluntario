import mailer from "nodemailer";
import ENV from "../infra/config/env";
import smtpConfig from "../infra/config/mail";

export const mailService = (email: string, nome: string, mensagem: string) => {
  const smtp = mailer.createTransport(smtpConfig);

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
