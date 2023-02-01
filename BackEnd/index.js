const express = require('express')
const cors = require('cors')

const app = express()

//config JSON response
app.use(express.json())

// Solve Cors 
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))

// Routes
const userRoutes = require('./routes/UserRoutes')

app.use('/users', userRoutes)


app.listen(5000)