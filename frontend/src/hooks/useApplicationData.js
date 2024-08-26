import { useReducer, useEffect } from 'react';


const initialState = {
  displayModal: false,
  favouritePhotos: [],
  photoData: [],
  topicData: []
};

export const ACTIONS = {
  ADD_PHOTO: 'ADD_PHOTO',
  REMOVE_PHOTO: 'REMOVE_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PHOTO':
      return { ...state, displayModal: action.payload }

    case 'ADD_PHOTO':
      return { ...state, favouritePhotos: [...state.favouritePhotos, action.payload] }

    case 'REMOVE_PHOTO':
      return { ...state, favouritePhotos: [...action.payload] }

    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };

    case 'SET_TOPIC_DATA':
      return {...state, topicData: action.payload }

    default:
      throw new Error(`Action type not supported, ${action.type}`);
  }
};
// Custom Hook for managing application state
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    fetch('/api/photos')
    .then (response => response.json())
    .then(data =>dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(()=> {
    fetch('/api/topics')
    .then (response => response.json())
    .then(data =>dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const addPhoto = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      const copyOfFavouritePhotos = [...state.favouritePhotos].filter(favPhotoId => favPhotoId !== photoId);
      dispatch({ type: ACTIONS.REMOVE_PHOTO, payload: copyOfFavouritePhotos });
      return
    }

    dispatch({ type: ACTIONS.ADD_PHOTO, payload: photoId });
  };

  const toggleModal = (photoDetails) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails });
  return {
    state,
    toggleModal,
    addPhoto,
  };

  
};
export default useApplicationData;




