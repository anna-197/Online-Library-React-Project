import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BooksList from './components/BooksList';

function App() {

  

  const [books, setBooks] = useState([        {
    "Title": "Fantastic Beasts and Where to Find Them: The Original Screenplaye",
    "Year": "2016",
    "Type": "book",
    "Poster": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481542648i/29363501._SY180_.jpg"
},
{
    "Title": "Fantastic Beasts: The Crimes of Grindelwald: The Original Screenplay Fantastic Beasts: The Crimes of Grindelwald: The Original Screenplay",
    "Year": "2018",
    "Type": "book",
    "Poster": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527724881i/39330961._SY180_.jpg"
},
{
    "Title": "Fantastic Beasts: The Secrets of Dumbledore: The Original Screenplay Fantastic Beasts: The Secrets of Dumbledore: The Original Screenplay",
    "Year": "2022",
    "Type": "book",
    "Poster": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661082101i/41879350._SX120_.jpg"
}]);



  return (
    <div className="App">
      <Header/>
      <BooksList books={books} />
      <button className="btn" onClick={setBooks}> Click </button>
    </div>
  );
}

export default App;
