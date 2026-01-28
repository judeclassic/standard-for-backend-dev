import nodemailer, { Transporter } from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailGenerator, IEmailTem } from "./template";

const checkEnv = () => {
  if (!process.env.EMAIL_SERVICE) {
    throw new Error('EMAIL_SERVICE is not set');
  }
  if (!process.env.EMAIL_APP_USER) {
    throw new Error('EMAIL_APP_USER is not set');
  }
  if (!process.env.EMAIL_APP_PASSWORD) {
    throw new Error('EMAIL_APP_PASSWORD is not set');
  }
  if (!process.env.EMAIL_FROM) {
    throw new Error('EMAIL_FROM is not set');
  }
} 

class EmailRepository {
  from: string;
  template: EmailGenerator;
  transporter: Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>

  constructor() {
    checkEnv();
    this.from = process.env.EMAIL_FROM!;
    this.template = new EmailGenerator()
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE!,
      auth: {
        user: process.env.EMAIL_APP_USER!,
        pass: process.env.EMAIL_APP_PASSWORD!
      }
    });
  }

  sendEmail = async (to: string, template: IEmailTem) => {
    const mailOptions = {
      from: this.from,
      to: to,
      subject: template.subject,
      html: template.html,
    };
  
    this.transporter.sendMail(mailOptions, (err) => {
      if (err) console.error('Email failed :', err);
    });
  }
}

export default EmailRepository;