import express from 'express';
import controller from '../controller.js'; 
import authMid from '../middleware/authMid.js';

const router = express.Router();  

// Definir rotas
router.get('/', controller.pag1); 
router.get('/itens', authMid, controller.pag2); 

export default router;
