import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setDisplayModal, favouritePhotos, addPhoto, onTopicSelect }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favouritePhotos.length > 0} onTopicSelect={onTopicSelect} />
      <PhotoList photos={photos} addPhoto={addPhoto} setDisplayModal={setDisplayModal} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;
