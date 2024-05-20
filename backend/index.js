const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')



const app = express()
app.use(cors({
   
}))
app.use(express.json())




const PORT = 8080 || process.env.PORT



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
