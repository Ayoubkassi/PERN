import React , { createContext , useState , useEffect } from 'react';
import { Button } from './App.styles.js';
import { HomePage } from './pages/homepage/HomePage';
import { RestaurantDetailPage } from './pages/restaurantDetailPage/RestaurantDetailPage';
import { UpdateRestaurantPage } from './pages/updateRestaurantPage/UpdateRestaurantPage';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import axios from 'axios';
import { RestaurantContext } from './Context';



function App() {
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
  return (
    <div>
        <Router>
          <Switch>
            <RestaurantContext.Provider value={data}>
              <Route exact path="/" component={ HomePage } />
              <Route path="/restaurants/:id/update" component={ UpdateRestaurantPage } />
              <Route path="/restaurants/:id" component={ RestaurantDetailPage } />
            </RestaurantContext.Provider>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
