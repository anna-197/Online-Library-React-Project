import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useAppContext } from "./context/appContext";

const SearchBar = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  // const[favourites, setFavourites] = useState([]);

  const{favourites, addToFavourites, removeFromFavourites} = useAppContext();

  console.log('favourites are', favourites)

  const favouritesChecker = (id) =>{
    const boolean  = favourites.some((each_book)=> each_book.id === id)
    return boolean;
    }



  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleCLick(event) {
    event.preventDefault();
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        book +
        "&key=AIzaSyCHYcFQLjiWJJpOxQyChKd9XRNh0wjgJ3w&maxResults=4"
    ).then((response) => {
      console.log(response);
      setResult(response.data.items);
    });
  }

  function handleKeyDown(event){
    if (event.key === 'Enter') {
      Axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=AIzaSyCHYcFQLjiWJJpOxQyChKd9XRNh0wjgJ3w&maxResults=40"
      ).then((response) => {
        console.log(response);
        setResult(response.data.items);
      });
    }
  }

  return (
    <>
   <div className="ReadingList">
        
        <div className="ReadingList-container">
        { favourites.map((each_book) => (
          <>
          
            <div className="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={
                  each_book.volumeInfo.imageLinks &&
                  each_book.volumeInfo.imageLinks.smallThumbnail
                }
                alt="thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">{each_book.volumeInfo.title}</h5>

                <a
                  href={each_book.volumeInfo.previewLink}
                  className="read-more"
                  target="_blank" rel="noreferrer"
                >
                  Read More
                </a>
                <br></br>
                {favouritesChecker(each_book.id) ? 
                <button className="add-btn" onClick={()=>removeFromFavourites(each_book.id)}> Remove from Reading List </button>
                : (
                  <button className="add-btn" onClick={()=>addToFavourites(each_book)}> Add to Reading List </button>
                ) }
                
              </div>
            </div>
          </>
        ))}
        </div>
    </div>

    
      <div className="SearchBar">
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Which book do you want to read?"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" class="searchButton" onClick={handleCLick}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="result-container">
        {result.map((each_book) => (
          <>
            <div className="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={
                  each_book.volumeInfo.imageLinks &&
                  each_book.volumeInfo.imageLinks.smallThumbnail
                }
                alt="thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">{each_book.volumeInfo.title}</h5>

                <a
                  href={each_book.volumeInfo.previewLink}
                  className="read-more"
                  target="_blank" rel="noreferrer"
                >
                  Read More
                </a>
                <br></br>
                <button className="add-btn" onClick={()=>addToFavourites(each_book)}> Add to Reading List </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
