const express = require("express") //iniciando o express
const router = express.Router() // configurando a primeira parte da rota
//const { v4: uuidv4 } = require('uuid')
const cors = require('cors') //trazendo o pacote cors - que permite consumir essa API no front-end

const conectaBancoDeDados = require('./bancoDeDados') //ligando o arquivo banco de dados
conectaBancoDeDados() //chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel')

const app = express() // iniciando o app
app.use(express.json())
app.use(cors())
const porta = 3333 //criando a porta

// excluiu a lista inicial de mulheres, pois agora há banco de dados 

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        //apagou o id
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    
    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }

}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.parrams.id)
        

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.citacao) {
        mulherEncontrada = request.body.citacao
    }

    } catch (erro) {
        console.log(erro)
    }

    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBancoDeDados)
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})

    } catch (erro) {
        console.log(erro)
    }


}


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//configurações do app
app.use(router.get('/mulheres', mostraMulheres)) //configuração rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configura rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configura a rota patch/mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configura rota delete /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta
