import React from 'react';
import { Header } from '../../components/Header.component';
import { UpdateRestaurant  } from '../../components/UpdateRestaurant.component';

export const UpdateRestaurantPage = () => {
  return(
    <>
      <Header text="Update Restaurant" />
      <UpdateRestaurant  />
    </>
  );
}
