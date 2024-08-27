import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, addPhoto, setDisplayModal, photoData, favouritePhotos } = props;



  const displayModal = () => {
    setDisplayModal(photoData)
  };


  return (
    <div className="photo-list__item" id={id}>
      <PhotoFavButton addPhoto={addPhoto} id={id} favouritePhotos={favouritePhotos} />
      <img className="photo-list__image" src={imageSource} onClick={() => displayModal()} alt="" />
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile" src={profile} alt="" />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>

    </div>
  );
};

export default PhotoListItem;
