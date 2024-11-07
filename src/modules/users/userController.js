import { ObjectId } from "mongodb";
import { getCollection } from "../../config/database.js";
import bcrypt from 'bcrypt';
import User from "./userSchema.js";

export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new User({ ...userData, password: hashedPassword });

    const result = await newUser.save();
    return result;
}

export const getAllUsers = async () => {
    const users = await User.find({});
    return users;
}

export const getUser = async (userId) => {
    console.log(userId)
    const user = await User.findById(userId);
    return user;
}



export const updateUser = async (userId, updatedData) => {
    if (updatedData.password) {
        updatedData.password = await bcrypt.hash(updatedData.password, 10);
    };

    await User.findByIdAndUpdate(userId, updatedData);

    const user = User.findById(userId);
    return user;
}

export const deleteUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    return user;
};

export const loginUser = async (email, password) => {
    const user = await User.findOne(email);

    if(!user) {
        throw new Error("user not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Password invalid");
    }

    return user;
}

