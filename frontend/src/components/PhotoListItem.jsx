import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
  return (
    <div className="photo-list__item" id={id}>
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt="" />
      <div className="photo-list__user-details" >
        <div><img className="photo-list__user-profile" src={profile} alt="" /></div>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
