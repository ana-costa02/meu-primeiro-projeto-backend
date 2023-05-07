const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {nome: 'Ana Costa',
    imagem: 'https://www.linkedin.com/in/ana-carolina-da-costa-a615b6203/',
    minibio: 'Estudante de Desenvolvimento de Software Multiplataforma'
},

{    nome: 'Iana Chan',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=1689206400&v=beta&t=wZVYrw2K863LRkrEiaTPKvcFMNDCAvbiDNZCNFe_odo',
    minibio: 'Fundadora Programaria'
},

{
    nome: 'Nina da Hora',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_800_800/0/1679701313082?e=1689206400&v=beta&t=mqwliGvn8u18M9IvX1Ku2q4idhP29b2yUQCZcMatA0c',
    minibio: 'Hacker Antirracista'
}
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
