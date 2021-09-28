import React , { useState } from 'react';
import axios from 'axios';


export const AddRestaurant = () => {
  const [name ,setName]= useState('');
  const [location , setLocation]= useState('');
  const [price , setPrice] = useState(null);
  //const [error , setError]=useState(false);

  const error = name === '' || location === '' || price === null ;

  const IncludeRestaurant = () => {
    if(error){
      alert('Please Enter all the fields !');
    }
    else{
    axios.post('/api/v1/restaurants', {
    name: name,
    location: location,
    price : price
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }

  return(
    <div className="mb-4">
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" required value={name} className="form-control" onChange={(e)=> setName(e.target.value)} placeholder="Name" />
          </div>
          <div className="col">
            <input type="text" required value={location} className="form-control" onChange={(e)=> setLocation(e.target.value)} placeholder="Location"/>
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2" onChange={(e) => setPrice(e.target.value)} value={price}>
              <option disbled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit" onClick={IncludeRestaurant}>Add</button>
        </div>
      </form>
    </div>
  );
}
