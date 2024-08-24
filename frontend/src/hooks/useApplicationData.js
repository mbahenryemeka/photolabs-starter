

import { useReducer } from 'react';

const initialState = {
  displayModal: false,
  favouritePhotos: [],
};

export const ACTIONS = {
  // TOGGLE_MODAL: 'TOGGLE_MODAL',
  ADD_PHOTO: 'ADD_PHOTO',
  REMOVE_PHOTO: 'REMOVE_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
}

const reducer = (state, action) => {
  switch (action.type) {
    // case 'TOGGLE_MODAL':
    //   console.log('toggle modal', state.displayModal);
    //   return { ...state,  displayModal: !state.displayModal };
    case 'SELECT_PHOTO':
      return { ...state, displayModal: action.payload}
      
    case 'ADD_PHOTO':
      return {...state, favouritePhotos: [...state.favouritePhotos, action.payload]} 
      
    case 'REMOVE_PHOTO':
      return { ...state, favouritePhotos: [...action.payload]} 
      
    default:
    throw new Error(`Action type not supported, ${action.type}`);
  }
};
// Custom Hook for managing application state
const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

    // rename this function to toggleFavourites
     const addPhoto = (photoId) => {
       if (state.favouritePhotos.includes(photoId)) {
         const copyOfFavouritePhotos = [...state.favouritePhotos].filter(favPhotoId => favPhotoId !== photoId);
         dispatch({ type: ACTIONS.REMOVE_PHOTO, payload: copyOfFavouritePhotos });
         return
       }

       dispatch({type: ACTIONS.ADD_PHOTO, payload: photoId});
  };

  const toggleModal = (photoDetails) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails});


  
  return {
    state,
     toggleModal, 
     addPhoto, 
  };
};
export default useApplicationData;




