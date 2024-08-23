
import { useState } from 'react';

// Custom Hook for managing application state
const useApplicationData = () => {
  // State
  const [displayModal, setDisplayModal] = useState(false);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  // Action to add or remove a photo from favorites
  const addPhoto = (id) => {
    if (favouritePhotos.includes(id)) {
      setFavouritePhotos(prevPhotos => prevPhotos.filter(photoId => photoId !== id));
    } else {
      setFavouritePhotos(prevPhotos => [...prevPhotos, id]);
    }
  };

  return {
    displayModal,
    setDisplayModal,
    favouritePhotos,
    addPhoto,
  };
};
