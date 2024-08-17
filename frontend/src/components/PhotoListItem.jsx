import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const {id, location, imageSource, username, profile } = props;
  return (
    <div className="photo-list__item">
      <img  src={imageSource} alt="" />
      <img src={profile} alt="" />
      <h2>{username}</h2>
      <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>      
    </div>
  );
};

export default PhotoListItem;
