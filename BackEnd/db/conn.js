const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/Desafogando')
    console.log('Conectou com Mongoose!')   
}

main().catch((err)=>console.log(err))

module.exports = mongoose