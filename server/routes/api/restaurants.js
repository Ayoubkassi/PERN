const express = require('express');
const router = express.Router();
const db = require('../../db');



// @route GET /api/v1/restaurants
// @desc Get all Restaurants
// access public


router.get('/',async (req,res)=>{
  try{
    const { rows } = await db.query('SELECT * FROM restaurants');
    res.status(200).json({
      status : "success",
      data : {
        restaurants : rows
      },
    });

  }catch(err){
    console.Log(err);
    res.status(404).json({
      status : "failed",
      message : err 
    })
  }

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

  res.status(200).json({
    status : "success",
    message : "restaurant created successfully"
  });
});


// @route UPDATE  /API/V1/restaurants/id
// @desc update a restaurant
// access public

router.put('/:id',(req,res) =>{
    const id = req.params.id;
    const { name , location , price } = req.body;

    res.status(200).json({
      status : "success",
      message : "restaurant updated successfully"
    });

});


// @route DELETE  /API/V1/restaurants/id
// @desc delete a restaurant
// access public

router.delete('/:id',(req,res) =>{
    const id = req.params.id;

    res.status(204).json({
      status : "success",
      message : "restaurant deleted successfully"
    });
});





module.exports = router;
