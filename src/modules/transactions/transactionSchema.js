import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    type: String, //incoming or outgoing 
    amount: Number,
    recipient: String,
    payee: String,
    balance_after_transaction: Number,
    category: String,
    user: mongoose.SchemaTypes.ObjectId
})

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;