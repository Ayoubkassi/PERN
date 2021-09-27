const express = require('express')
require('dotenv').config()
const app = express()

const PORT = 5000 ||  process.env.PORT ;


app.get('/restaurants',(req,res) => {
  res.send("This is awesome")
})

app.listen(PORT , () => {
  console.log(`server is listening on port : ${PORT}`);
})
