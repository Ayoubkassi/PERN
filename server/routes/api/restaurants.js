const express = require('express');
const router = express.Router();



// @route GET /api/v1/restaurants
// @desc Get all Restaurants
// access public


router.get('/',(req,res)=>{
  res.status(200).json({
    status : "success",
    data : {
      restaurants : ["Mini House", "KFC"],
    },
  });
});

// @route GET /api/v1/restaurants/id
// @desc Get Single Restaurant
// access public

router.get('/:id',(req,res)=>{
  res.status(200).json({
    status : "success",
    data : {
      restaurant_id : req.params.id,
    },
  });
});

// @route POST /api/v1/restaurants
// @desc CREATE new restaurant
// access public

router.post('/',(req,res)=>{
  const { name , location , price } = req.body;

  const newRestaurant = new Restaurant({
    name : name,
    location : location,
    price : price
  });
});


// @route UPDATE  /API/V1/restaurants/id
// @desc update a restaurant
// access public

router.put('/:id',(req,res) =>{
    const id = req.params.id;
    const { name , location , price } = req.body;

});


// @route DELETE  /API/V1/restaurants/id
// @desc delete a restaurant
// access public

router.delete('/:id',(req,res) =>{
    const id = req.params.id;

});





module.exports = router;
