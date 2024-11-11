import express, { json } from "express"
import userRoutes from "./modules/users/userRoutes.js"
import transactionRoutes from "./modules/transactions/transactionRoutes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/api/users', userRoutes);
app.use("/api/transactions", transactionRoutes);

export { app };