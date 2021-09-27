import React , { useState , useEffect } from 'react';
import axios from 'axios';

export const RestaurantList = () => {

  const [data , setData] = useState([]);

  const getRestaurants = async () => {
      try{
        const res = await axios.get('/api/v1/restaurants');
        setData(res.data.data.restaurants);
      }catch(err){
        console.log(err)
      }
  }
  useEffect(()=>{
    getRestaurants();
  },[data])
  return(
    <table className="table table-dark" style={{border : 'none'}}>
      <thead style={{backgroundColor : '#007bff' , border : 'none' , outline : 'none'}}>
        <tr>
          <th>Restaurant</th>
          <th>Location</th>
          <th>Price Range</th>
          <th>Rating</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map(restaurant => (
            <tr>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.price_range}$</td>
              <td>5</td>
              <td><button className="btn btn-success">Update</button></td>
              <td><button className="btn btn-danger">Delete</button></td>

            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
