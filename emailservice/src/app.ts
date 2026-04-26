import express from 'express';
import dbconnect from '@workspace/manageuser';


const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.listen(3001,async()=>{
    await dbconnect.connect()
    console.log("server started on the port 3001")
})