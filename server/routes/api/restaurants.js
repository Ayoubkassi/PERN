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




module.exports = router;
