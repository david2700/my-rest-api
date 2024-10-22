import express, { json } from "express"
import userRoutes from "./modules/users/userRoutes.js"

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

export { app };