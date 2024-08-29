import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//database connection

const connectDB = async ()=>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Database connection successful || Host : ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("Database Connection Failed : ", error)
    process.exit(1)
  }
}

export default connectDB