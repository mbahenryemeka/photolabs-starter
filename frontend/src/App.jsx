import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// step 1, loop through the sample data for list item using the map method



// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = [...Array(3)].map((_, index) => <PhotoListItem
  id={sampleDataForPhotoListItem.id}
  location={sampleDataForPhotoListItem.location}
  imageSource={sampleDataForPhotoListItem.imageSource}
  username={sampleDataForPhotoListItem.username}
  profile={sampleDataForPhotoListItem.profile}
  key={index}
/>)
  return (
    <div className="App">
      <div className='photo-list'>
        {photos}
      </div>
    </div>
  );
};

export default App;
