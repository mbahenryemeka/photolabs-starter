import React,{ useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    state,
    toggleModal,
    addPhoto,
  } = useApplicationData();

  return (
    <div className="App">
     <HomeRoute photos={state.photoData} topics={state.topicData}  setDisplayModal={toggleModal} favouritePhotos={state.favouritePhotos} addPhoto={addPhoto}/>
      {/* if displayModal is true, render PhotoDetailsModal */}
      {state.displayModal && <PhotoDetailsModal setDisplayModal={toggleModal} displayModal={state.displayModal} favouritePhotos={state.favouritePhotos} addPhoto={addPhoto} />} 
    </div>
  );
};
export default App;
