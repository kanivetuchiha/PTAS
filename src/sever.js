import express from 'express';
import router from './routes/rotas.js'
const app = express();
const porta = process.env.PORT || 3000;

app.use('/',router)


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
