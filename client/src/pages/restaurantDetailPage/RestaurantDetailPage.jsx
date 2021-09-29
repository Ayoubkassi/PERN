import React , { useEffect , useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header.component';


export const RestaurantDetailPage = () => {

  const [restaurant , setRestaurant] = useState(null);
  const [imgSrc, setImgSrc ] = useState('https://spoonacular.com/recipeImages/16682-556x370.jpg')
  const history = useHistory();
  const path = history.location.pathname;
  const id = path.split('/')[2];
  console.log(id);

  const getRestaurant = async () => {
    try{
      const res = await axios.get(`/api/v1/restaurants/${id}`)
      setRestaurant(res.data.data.restaurant[0]);
      setImgSrc(`https://spoonacular.com/recipeImages/${restaurant.id}-556x370.jpg`)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=> {
    getRestaurant();
  },[restaurant]);

  return(
    <div style={{backgroundColor: 'black', color : 'white', height : '100vh'}}>
      <div className="container"  >
        <Header text={restaurant && restaurant.name } />
        <h2 className="text-center mb-4">Location : { restaurant && restaurant.location }</h2>
        <img src={imgSrc && imgSrc} alt="Food" style={{marginLeft : '18%'}}  />
      </div>
    </div>
  );
}
