import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';

const PhotoDetailsModal = ({setDisplayModal,displayModal}) => {
  console.log('photo', displayModal);
  return (
    <div className="photo-details-modal">      
      <button className="photo-details-modal__close-button" onClick={()=>setDisplayModal(false)}>
        
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
