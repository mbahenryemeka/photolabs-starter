import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList'
import '../styles/TopNavigationBar.scss'


const TopNavigation = ({topics,isFavPhotoExist}) => {
  //const isFavPhotoExist = favouritePhotos.length > 0;
  return (    
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>      
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </nav>
  )
}

export default TopNavigation;