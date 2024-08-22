import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';
import { useState } from 'react';


const HomeRoute = ({ photos, topics, setDisplayModal }) => {
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
      <TopNavigation topics={topics} isFavPhotoExist={favouritePhotos.length > 0}/>
      <PhotoList photos={photos} addPhoto={addPhoto} setDisplayModal={setDisplayModal} />
    </div>
  );
};

export default HomeRoute;
