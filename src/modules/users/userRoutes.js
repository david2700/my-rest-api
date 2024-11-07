import { Router } from "express";
import { registerUser, getUser, updateUser, deleteUser, loginUser, getAllUsers } from "./userController.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.get("/all", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch(error) {
        console.log(error)
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        if (!user) {return res.status(404).send("user not found");}
        res.json(user);
    } catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    };
});

router.put('/:id', async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        if (!user) return res.status(400).send('User not found or no changes made');
        res.json(user);
    } catch(error) {
        res.status(400).send(error.message);
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        if (!user) return res.status(400).send('User not found');
        res.json(user);
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