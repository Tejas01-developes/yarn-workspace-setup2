import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
class emailsendingservice {
    transport;
    constructor() {
        this.transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
    }
    async sendemails(to, sub, text) {
        try {
            await this.transport.sendMail({
                from: process.env.EMAIL,
                to,
                subject: sub,
                text
            });
        }
        catch (err) {
            throw new Error("email sending failed");
        }
    }
}
export default new emailsendingservice();
//# sourceMappingURL=emailss.js.map