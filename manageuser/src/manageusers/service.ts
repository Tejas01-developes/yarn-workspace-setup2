import connectdb from '../dbconnect/connect.js'
import { controllertype1 } from "../types/controllerstype.js"
import dotenv from 'dotenv';
dotenv.config();


export const insertuser=async(data:controllertype1):Promise<string>=>{
   
try{
await connectdb.getdb().collection(process.env.USER_COLLECTION as string).insertOne({userid:data.userid,name:data.name,email:data.email,password:data.password,added_at:new Date(Date.now())})
return "user inserted"
}catch(err){
    console.log("service failed")
throw new Error("user insertion service failed")
}
}