import mongoose from "mongoose";
import User from "../users/userSchema";

const reportSchema  = mongoose.Schema({
    account_balance: {
        type: Number,
        default: 0
    },
    monthly_spend: {
        type: Number,
        default: 0
    },
    annual_spend: {
        type: Number,
        default: 0
    },
    monthly_earnings: {
        type: Number,
        default: 0
    },
    yearly_earnings: {
        type: Number,
        default: 0
    },
    finance_goal: String,
    user_id: { type: mongoose.Types.ObjectId, ref: 'User'}
})

const Report = mongoose.model("Report", reportSchema);

export default Report;