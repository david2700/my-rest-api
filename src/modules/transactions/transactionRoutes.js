import { Router } from "express";
import { deleteTransaction, getAllTransactions, getTransaction, PostTransaction, updateTransaction } from "./transactionController.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const transaction = await PostTransaction(req.body);
        res.status(200).json(transaction);
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message);
    }
});


router.get("/", async (req, res) => {
    try {
        const transactions = await getAllTransactions();
        res.json(transactions);
    } catch(error) {
        console.log(error)
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const transaction = await getTransaction(req.params.id);
        if (!transaction) {return res.status(404).send("transaction not found");}
        res.json(transaction);
    } catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    };
});

router.put('/:id', async (req, res) => {
    try {
        const transaction = await updateTransaction(req.params.id, req.body);
        if (!transaction) return res.status(400).send('Transaction not found or no changes made');
        res.json(transaction);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const transaction = await deleteTransaction(req.params.id);
        if (!transaction) return res.status(400).send('Transaction not found');
        res.json(transaction);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

export default router;