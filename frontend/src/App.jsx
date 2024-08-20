import React from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopicList from './components/TopicList'


const App = () => {
 
  return (
    <div className="App">
      <div className='photo-list'>
        <TopicList/>
        <PhotoList/>
      </div>
    </div>
  );
};

export default App;
