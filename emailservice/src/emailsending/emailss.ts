import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

class emailsendingservice{
    private transport

    constructor(){
        this.transport=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL as string,
                pass:process.env.PASS as string
            }
        })
      
    }
public async sendemails(to:string,sub:string,text:string){
    try{
   await this.transport.sendMail({
        from:process.env.EMAIL as string,
        to,
        subject:sub,
        text
    })
}catch(err){
    throw new Error("email sending failed")
}
}
}

export default new emailsendingservice()
