//export express
const { request, response } = require('express')
const express = require('express')

//for db for destructing
const bodyParser = require('body-parser')

const routerUser = require('./routes/user')




//create instance of express
const app = express()
app.use(bodyParser.json())
app.use('/user',routerUser)



app.listen(4000,'0.0.0.0',()=>{
     console.log(`Application started`)
})


