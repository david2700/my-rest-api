import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const uri = "mongodb+srv://mongodb:wordpass@cluster0.e7gbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


let database

export const connectDB = async () => {
    try {
        database = await mongoose.connect(uri, {dbName: "pfms"});
        console.log("connected to mongodb");
    } catch(error) {
        console.error("Failed to connect to database", error);
    }
};

export const getCollection = (collectionName) => {
    if (!database) {
        throw new Error("database not connected");
    }
    return database.collection(collectionName);
}



