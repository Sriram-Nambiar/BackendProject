import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


//Connect to database
const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb conection error",error);
        process.exit(1)
    }
}

export default connectDB
