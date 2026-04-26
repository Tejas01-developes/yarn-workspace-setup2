import connectdb from '../dbconnect/connect.js';
import dotenv from 'dotenv';
dotenv.config();
export const insertuser = async (data) => {
    try {
        await connectdb.getdb().collection(process.env.USER_COLLECTION).insertOne({ userid: data.userid, name: data.name, email: data.email, password: data.password, added_at: new Date(Date.now()) });
        return "user inserted";
    }
    catch (err) {
        console.log("service failed");
        throw new Error("user insertion service failed");
    }
};
//# sourceMappingURL=service.js.map