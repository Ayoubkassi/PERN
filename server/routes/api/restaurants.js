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
    console.log(err);
    res.status(404).json({
      status : "failed",
      message : err
    });
  }

});

// @route GET /api/v1/restaurants/id
// @desc Get Single Restaurant
// access public

router.get('/:id',async (req,res)=>{
  const id = req.params.id;
  const query = {
    text : 'SELECT * FROM restaurants WHERE id=$1',
    values : [id]
  }

  try{

      const { rows } = await db.query(query);
      if(rows){
      res.status(200).json({
        status : "success",
        data : {
          restaurant : rows,
        },
      });
    }

  } catch(err){
    console.log(err);
    res.status(404).json({
      status : "failed",
      message : err
    });
  }

});

// @route POST /api/v1/restaurants
// @desc CREATE new restaurant
// access public

router.post('/',async (req,res)=>{
  const { name , location , price } = req.body;

  const query = {
    text : 'INSERT INTO restaurants(name , location , price_range) VALUES ($1,$2,$3)',
    values : [name , location , price]
  };

  try{
    const { rows } = await db.query(query);
    if(rows){
      res.status(200).json({
        status : "success",
        message : "restaurant created successfully"
      });
    }

  } catch(err){
    console.log(err);
    res.status(404).json({
      status : "failed",
      message : err
    });
  }


});


// @route UPDATE  /API/V1/restaurants/id
// @desc update a restaurant
// access public

router.put('/:id', async(req,res) =>{
    const id = req.params.id;
    const { name , location , price } = req.body;

    const query = {
      text : 'UPDATE restaurants SET name=$1 , location=$2 , price_range = $3 WHERE id=$4',
      values : [name ,location , price,id]
    };

    try{
      const { rows } = await db.query(query);
      if(rows){
        res.status(200).json({
          status : "success",
          message : "restaurant updated successfully"
        });
      }

    }catch(err){
      console.log(err);
      res.status(404).json({
        status : "failed",
        message : err
      });
    }



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
