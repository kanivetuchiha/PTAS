
const pag1 = ((req, res) => {
    res.send("'mensagem de boas vindas'");
})

const pag2 = ((req, res) => {
    res.send("Página de itens");
})

export default {pag1, pag2}