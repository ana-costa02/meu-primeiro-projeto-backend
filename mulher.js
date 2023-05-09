const express = require("express") //iniciando o express
const router = express.Router() // configurando a primeira parte da rota

const app = express() // iniciando o app
const porta = 3333 //criando a porta


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
