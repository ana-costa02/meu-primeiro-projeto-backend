const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: "Ana Costa", 
        imagem: "https://www.linkedin.com/in/ana-carolina-da-costa-a615b6203/",
        minibio: "Estudante de desenvolvimento de software multiplataforma"
    })
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router, get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)
