import React,{ useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  console.log('displayModal', displayModal); 

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
    <div className="App">
     <HomeRoute photos={photos} topics={topics}  setDisplayModal={setDisplayModal} favouritePhotos={favouritePhotos} addPhoto={addPhoto}/>
      {/* if displayModal is true, render PhotoDetailsModal */}
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} displayModal={displayModal} favouritePhotos={favouritePhotos} addPhoto={addPhoto} />} 
    </div>
  );
};
export default App;
