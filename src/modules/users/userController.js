import { ObjectId } from "mongodb";
import { getCollection } from "../../config/database.js";
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
    const userCollection = getCollection('users');
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = { ...userData, password: hashedPassword };

    const result = await userCollection.insertOne(newUser);
    return result;
}

export const getUser = async (userId) => {
    console.log(userId)
    const userCollection = getCollection('users');
    const user = await userCollection.findOne({ id: ObjectId(userId) });
    return user;
}

export const getAllUsers = async () => {
    const userCollection = await getCollection("users");
    const users = await userCollection.find().toArray();
    return users;
}

export const updateUser = async (userId, updatedData) => {
    const userCollection = getCollection('users');

    if (updatedData.password) {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
    };

    const result = await userCollection.updateOne({ _id: userId }, { $set: updatedData });
    return result;
}

export const deleteUser = async (userId) => {
    const userCollection = getCollection('user');
    const result = await userCollection.deleteOne({ _id:userId});
    return result;
};

export const loginUser = async (email, password) => {
    const userCollection = getCollection('users');
    const user = await userCollection.findOne(email);

    if(!user) {
        throw new Error("user not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Password invalid");
    }

    return user;
}

