import React from 'react';
import { Header } from '../../components/Header.component';
import { AddRestaurant } from '../../components/AddRestaurant.component';
export const HomePage = () => {
  return(
    <div className="mr-4 ml-4 mt-4">
      <Header />
      <AddRestaurant />
    </div>
  );
}
