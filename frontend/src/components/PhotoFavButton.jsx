import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  console.log('props', props)
  const {addPhoto, id} = props;
 
  const handleClick = () => {  
    addPhoto(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favouritePhotos.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;