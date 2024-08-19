import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';


const App = () => {
 
  return (
    <div className="App">
      <div className='photo-list'>
        <PhotoList/>
      </div>
    </div>
  );
};

export default App;
