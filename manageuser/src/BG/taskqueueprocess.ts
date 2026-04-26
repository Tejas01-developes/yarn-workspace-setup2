import { taskcontainer } from "./backgroundworker.js";
import emailsendingservice from '@workspace/emailservice';
taskcontainer.process(async(job)=>{
    const {to,sub,text}=job.data;
    if(!to || !sub || !text){
        throw new Error("nothing in the contailner for email processing")
    }
    console.log("email processing");
    await emailsendingservice.sendemails(to,sub,text)
    console.log("email send")
})