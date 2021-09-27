import { Button } from './App.styles.js';
import { HomePage } from './pages/homepage/HomePage';
import { RestaurantDetailPage } from './pages/RestaurantDetailPage/Restaurants';
import { UpdateRestaurantPage } from './pages/UpdateRestaurantPage/UpdateRestaurantPage';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';


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
