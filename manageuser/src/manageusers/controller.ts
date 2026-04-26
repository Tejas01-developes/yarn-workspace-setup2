import { Request, Response } from "express";

import bcrypt from 'bcrypt';
import { bodytype1 } from "../types/bodytypes.js";
import { insertuser } from "./service.js";
import { taskcontainer } from "../BG/backgroundworker.js";


export const insert=async(req:Request<{},{},bodytype1>,resp:Response):Promise<void>=>{
const {name,email,password}=req.body
if(!name || !email || !password){
    resp.status(400).json({message:"fields not recived"})
    return
}
const userid:string=crypto.randomUUID();
const hash=await bcrypt.hash(password,10)
try{
await insertuser({userid,name,email,password:hash})
await taskcontainer.add({
    to:email,
    sub:"welcome email",
    text:"welcome to our service"
})
resp.status(200).json({message:"userinserted succesfully"})
return
}catch(err){
    throw new Error("insertion failed")
}
}