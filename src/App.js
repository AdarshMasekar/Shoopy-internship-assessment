import React from 'react';
import Header from './components/Layouts/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import './index.css';
import 'boxicons';
import Activities from './components/Activity/Activities';

const App = () => {
  return (
    <div className='App' >
      <Header/>
      <Searchbar/>
      <Activities/>
    </div>
  )
}

export default App