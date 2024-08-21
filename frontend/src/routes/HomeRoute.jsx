import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';
import { useState } from 'react';


const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const addPhoto = (id) => {
    if (favouritePhotos.includes(id)) {
      // Remove the photo id from the array if it is already included
      setFavouritePhotos(prevPhotos => prevPhotos.filter(photoId => photoId !== id));
    } else {
      // Add the photo id to the array if it is not included
      setFavouritePhotos(prevPhotos => [...prevPhotos, id]);
    }
  }
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList photos={photos} addPhoto={addPhoto} />
    </div>
  );
};

export default HomeRoute;
