import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import userEvent from '@testing-library/user-event';

const PhotoDetailsModal = ({ setDisplayModal, displayModal, favouritePhotos, addPhoto }) => {
  const { urls, user, location, similar_photos } = displayModal;
  
  const photos = Object.values(similar_photos);
  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img className="photo-details-modal__image" src={urls.full} alt="selected" />
      </div>
      <div><img className="photo-list__user-profile" src={user.profile} alt="" /></div>
      <div className="photo-list__user-info">
        <p>{user.username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
      <div>
        <p>Similar Photos</p>
      </div>
      <div>
      <PhotoList
        photos={photos} favouritePhotos={favouritePhotos} addPhoto={addPhoto}              
      />
      </div>




    </div>
  )
};

export default PhotoDetailsModal;
