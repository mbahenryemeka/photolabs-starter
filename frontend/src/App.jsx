import React,{ useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    displayModal,
    setDisplayModal,
    favouritePhotos,
    addPhoto,
  } = useApplicationData();

  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics}  setDisplayModal={setDisplayModal} favouritePhotos={favouritePhotos} addPhoto={addPhoto}/>
      {/* if displayModal is true, render PhotoDetailsModal */}
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} displayModal={displayModal} favouritePhotos={favouritePhotos} addPhoto={addPhoto} />} 
    </div>
  );
};
export default App;
