import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    
    setIsLiked((prevState) => {   
      return !prevState;
    });
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;