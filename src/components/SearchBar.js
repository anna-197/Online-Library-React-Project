import React, { useState } from "react";
import "../App.css";
import Axios from "axios";

const SearchBar = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleCLick(event) {
    event.preventDefault();
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        book +
        "&key=AIzaSyCHYcFQLjiWJJpOxQyChKd9XRNh0wjgJ3w&maxResults=40"
    ).then((response) => {
      console.log(response);
      setResult(response.data.items);
    });
  }

  return (
    <>
      <div className="SearchBar">
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Which book do you want to read?"
              onChange={handleChange}
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
                >
                  Read More
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
