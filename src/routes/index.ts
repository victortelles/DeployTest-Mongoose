import { Router } from "express";
import userRoutes from './users';

const router = Router();

//Ruta raiz
router.get('', (req, res) => {
    res.send('Hello World!');
})

// /users
router.use('/users', userRoutes);

export default router;