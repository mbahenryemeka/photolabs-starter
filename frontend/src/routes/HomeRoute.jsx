import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';
import { useState } from 'react';


const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const addPhoto = (id) => {
    //const isIncluded = favouritePhotos.includes(id);
    //console.log("isIncluded", isIncluded);
    if (!favouritePhotos.includes(id)) {
      setFavouritePhotos(prevPhotos => [...prevPhotos, id])
    };
  }
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos}/>
      <PhotoList photos={photos} addPhoto={addPhoto} />
    </div>
  );
};

export default HomeRoute;
