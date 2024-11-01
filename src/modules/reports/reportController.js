import { getCollection } from "../../config/database";
import bcrypt from 'bcrypt';

export const generateReport = (userId) => {
    const reportCollection = getCollection('reports');
    const report = reportCollection.findOne({ _id: userId });
}