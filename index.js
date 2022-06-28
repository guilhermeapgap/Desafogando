const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const app = express()


app.use(
    express.urlencoded({
        extended:true,
}),
)

app.use(express.json())//pegando o body em json



app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')//template engine

app.use(express.static('public'))//ponte para os arquivos estaticos

// ----------rotas-------------


//index
app.get('/', (req,res)=>{
    res.render('index')
})// rota principal

//entrar
app.get('/entrar', (req, res) => {
    res.render('entrar')
})

//criar login
app.get('/login', (req, res) => {
    res.render('login')
})
//home
app.get('/home', (req, res) => {
    res.render('home')
})

//contatos
app.get('/contato', (req, res) => {
    res.render('contato')
})

//sobre
app.get('/sobre', (req, res) => {
    res.render('intro')
})
//-------fim das rotas-----------



app.post('/gastos/insertgastos', (req,res)=>{

    const valorGasto = req.body.valorGasto
    const item = req.body.item

    const sql = `INSERT INTO gastos (valorGasto, item) VALUES ('${valorGasto}','${item}')`//codigo que ira para o banco de dados 

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        //res.redirect('/')
    }) //executando o codigo sql

})


//resgatento os dados
app.get('/home', (req, res) => {
    const sql = "SELECT * FROM gastos"

    conn.query(sql, function (err, data){
        if(err){
            console.log(err)
            return
        }

        const gastos = data

        console.log(gastos)

        res.render('home', {gastos})
    })
})



const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'desafogando',
    port: '3307'
})// dados do banco do dados 

conn.connect(function(err){
    if(err){
        console.log(err)
        return
    }

    console.log('conectou ao MySQL!!!')

    app.listen(5000)
}) //criando uma conexãos


