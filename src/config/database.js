import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mongodb:wordpass@cluster0.e7gbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let database

export const connectDB = async () => {
    try {
        await client.connect();
        console.log("connected to mongodb");
        database = client.db("pfms");
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



