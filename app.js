const express = require('express')
const cookieParser = require('cookie-parser')
//importing db
const db = require('./models/index.js')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(cookieParser())
app.use(express.json());

app.listen(3004, ()=> console.log("Running in port 3004"))