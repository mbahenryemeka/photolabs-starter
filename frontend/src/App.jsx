import React,{ useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  console.log('displayModal', displayModal); 

  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics}  setDisplayModal={setDisplayModal}/>
      {/* if displayModal is true, render PhotoDetailsModal */}
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} displayModal={displayModal} />} 
    </div>
  );
};
export default App;
