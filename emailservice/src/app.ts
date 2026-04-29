import express from 'express';
import dbconnection from '@workspace/manageuser';


const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.listen(3001,async()=>{
await dbconnection.connect()
    console.log("server started on the port 3001")
})