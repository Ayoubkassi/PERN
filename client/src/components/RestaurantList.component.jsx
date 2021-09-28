import React , { useContext } from 'react';
import { RestaurantContext } from '../Context';
import axios from 'axios';

export const RestaurantList = () => {

const data = useContext(RestaurantContext);

  const deleteRestaurant = async (e) => {
    const id = e.target.value;
    try{
      if(window.confirm("Are you sure ?")){
      const res = await axios.delete(`/api/v1/restaurants/${id}`);
      console.log(res);
      }
    }catch(err){
      console.log(err)
    }
  }

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
              <td><button value={restaurant.id} className="btn btn-danger" onClick={deleteRestaurant}>Delete</button></td>

            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
