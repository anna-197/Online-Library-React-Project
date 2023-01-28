import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {

  return(
    <>
      <div className='body'>
      <Header/>
      <h2 className='ReadingList-title'>Reading List</h2>
      <SearchBar/>
      </div>
    </>
  )
}

export default App;
