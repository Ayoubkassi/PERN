const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//morgan is just like body-parser just a Middleware

const restaurants = require('./routes/api/restaurants');


const app = express();

//bodyParser Middleware

app.use(bodyParser.json());

const PORT =  process.env.PORT || 5000 ;

//User Routes

app.use('/api/v1/restaurants' , restaurants);



app.listen(PORT , () => {
  console.log(`server is listening on port : ${PORT}`);
})
