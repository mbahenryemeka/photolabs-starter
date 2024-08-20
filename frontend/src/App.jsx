import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';



const App = () => { 
  return (
    <div className="App">
      <div className='photo-list'>
        <TopNavigation/>        
        <PhotoList/>   
      </div>
    </div>
  );
};
export default App;
