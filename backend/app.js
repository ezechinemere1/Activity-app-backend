const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//import todo routes
const todos = require('./routes/todoroute')


//MiDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"5mb"}))
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true

}))


app.use(cors())

// ROUTES MIDDLEWARE
app.use('/api', todos)


//PORT
const port = 8000

app.listen(port, ()=>{
    console.log(` server running on ${port}`)
})