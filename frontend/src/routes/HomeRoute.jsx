import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';
import { useState } from 'react';


const HomeRoute = ({ photos, topics}) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const addPhoto = (id) => {
    const copy = [...favouritePhotos];
    copy.push(id);
    setFavouritePhotos(copy);
  }
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} addPhoto={addPhoto}/>
    </div>
  );
};

export default HomeRoute;
