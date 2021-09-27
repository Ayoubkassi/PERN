const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
//morgan is just like body-parser just a Middleware
//const { Client } = require('pg');

const restaurants = require('./routes/api/restaurants');

//Setup our database config

// const client = new Client()
// await client.connect()

//create our http server
const app = express();

//bodyParser Middleware
app.use(cors());
app.use(bodyParser.json());

const PORT =  process.env.PORT || 5000 ;

//User Routes

app.use('/api/v1/restaurants' , restaurants);



app.listen(PORT , () => {
  console.log(`server is listening on port : ${PORT}`);
})
