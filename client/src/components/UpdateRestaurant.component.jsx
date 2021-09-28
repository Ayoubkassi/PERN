import React , { useEffect , useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const UpdateRestaurant = () => {

const [restaurant , setRestaurant] = useState(null);
const history = useHistory();
const path = history.location.pathname;
const id = path.split('/')[2];
console.log(id);


const getRestaurant = async () => {
  try{
    const res = await axios.get(`/api/v1/restaurants/${id}`)
    setRestaurant(res.data.data.restaurant[0]);
  }catch(err){
    console.log(err);
  }
}

useEffect(()=> {
  getRestaurant();
},[]);

  return (
    <div style={{maxWidth : '700px', margin : '40px auto'}}>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input value={restaurant && restaurant.name}  type="text" className="form-control" required />
        </div>
        <div className="form-group">
        <label>Location</label>
          <input type="text" value={restaurant && restaurant.location} className="form-control" required />
        </div>
          <button type="submit" class="btn btn-primary btn-block">Update Restaurant</button>
      </form>
    </div>
  );
}
