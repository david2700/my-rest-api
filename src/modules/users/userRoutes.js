import { Router } from "express";
import { registerUser, getUser, updateUser, deleteUser, loginUser, getAllUsers } from "./userController.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const result = await registerUser(req.body);
        res.status(201).json(result);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        console.log(user);
        if (!user) {return res.status(404).send("user not found");}
        res.json(user);
    } catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    };
});

router.put('/:id', async (req, res) => {
    try {
        const result = await updateUser(req.params.id, req.body);
        if (result.modifiedCount === 0 ) return res.status(400).send('User not found or no changes made');
        res.json(result);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const result = await getAllUsers();
        res.json(result);
    } catch(error) {
        console.log(error)
        res.status(400).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteUser(req.params.id);
        if (result.deleteCount === 0 ) return res.status(400).send('User not found');
        res.json(result);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        res.json({ message: "Login successful"})
    } catch {
        res.status(400).send(error.message)
    }
});

export default router;