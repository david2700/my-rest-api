import Transaction from "./transactionSchema.js";
import User from "../users/userSchema.js";

export const PostTransaction = async (transactionData) => {
    //transactionData.user = userId;
    const transaction = await Transaction.create(transactionData);

    return transaction;
}

export const getTransaction = async (transactionId) => {
    const transaction = await Transaction.findById(transactionId);
    return transaction;
}

export const getAllTransactions = async () => {
    const transactions = await Transaction.find({});
    return transactions;
}

export const updateTransaction = async (transactionId, updatedData) => {

    await Transaction.findByIdAndUpdate(transactionId, updatedData).save();

    const transaction = Transaction.findById(transactionId);
    return transaction;
}

export const deleteTransaction = async (transactionId) => {
    const transaction = await Transaction.findByIdAndDelete(transactionId).save();
    return transaction;
};
