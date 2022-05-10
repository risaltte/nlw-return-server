import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "69ba45da018dcf",
        pass: "0e811b6a62068e"
    }
});

export class NodemailerMailAdaper implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Rafael Risalte <risaltte@gmail.com>',
            subject,
            html: body
        });
    }
}