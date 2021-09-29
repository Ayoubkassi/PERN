import React , { useEffect , useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const UpdateRestaurant = () => {

const [restaurant , setRestaurant] = useState(null);
const [location , setLocation]=useState('');
const [name , setName]= useState('');
const history = useHistory();
const path = history.location.pathname;
const id = path.split('/')[2];
console.log(id);


const err = name === '' || location === '';

// const setRestaurantName = (e) => {
//   setName(e.target.value);
// }
//
// const setRestaurantLocation= (e) => {
//   setLocation(e.target.value);
// }

const getRestaurant = async () => {
  try{
    const res = await axios.get(`/api/v1/restaurants/${id}`)
    setRestaurant(res.data.data.restaurant[0]);
    // setName(restaurant.name);
    // setLocation(restaurant.location);
  }catch(err){
    console.log(err);
  }
}

const newRestaurant = async () => {
  const data = {
    name : name,
    location : location
  }

  try{
    if(err){
      alert('Please Enter the missing fields');
    }
    else{
    const res = await axios.put(`/api/v1/restaurants/${id}`, data);
    console.log(res);
  }
  }catch(err){
    console.log(err);
  }
}

useEffect(()=> {
  getRestaurant();
},[restaurant]);

  return (
    <div style={{maxWidth : '700px', margin : '40px auto'}}>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input value={name}  onChange={(e)=> setName(e.target.value)}  type="text" className="form-control" required />
        </div>
        <div className="form-group">
        <label>Location</label>
          <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} className="form-control" required />
        </div>
          <button type="submit" onClick={newRestaurant} class="btn btn-primary btn-block">Update Restaurant</button>
      </form>
    </div>
  );
}
