import React from 'react';
import { Button } from './App.styles.js';
import { HomePage } from './pages/homepage/HomePage';
import { RestaurantDetailPage } from './pages/restaurantDetailPage/RestaurantDetailPage';
import { UpdateRestaurantPage } from './pages/updateRestaurantPage/UpdateRestaurantPage';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/restaurants/:id/update" component={ UpdateRestaurantPage } />
            <Route path="/restaurants/:id" component={ RestaurantDetailPage } />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
