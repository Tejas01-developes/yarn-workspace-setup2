import { Db, MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

 class connectdb{
    private client:MongoClient
    private database!:Db

    constructor(){
        this.client=new MongoClient(process.env.DB_URL as string)
    }

   async connect(){
    try{
       await this.client.connect();
       this.database= this.client.db(process.env.DB as string)
        console.log("database connected")
    }catch(err){
        throw new Error("db connection failed")
    }
}

getdb():Db{
    if(!this.database){
        console.log("connect to the database first")
    }
    return this.database
}


}
export default new connectdb();