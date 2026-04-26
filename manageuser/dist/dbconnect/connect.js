import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
class connectdb {
    client;
    database;
    constructor() {
        this.client = new MongoClient(process.env.DB_URL);
    }
    async connect() {
        try {
            await this.client.connect();
            this.database = this.client.db(process.env.DB);
            console.log("database connected");
        }
        catch (err) {
            throw new Error("db connection failed");
        }
    }
    getdb() {
        if (!this.database) {
            console.log("connect to the database first");
        }
        return this.database;
    }
}
export default new connectdb();
//# sourceMappingURL=connect.js.map