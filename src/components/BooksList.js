import React from 'react';

const BooksList = (props) => {
	return (
		<>
			{props.books.map((book, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={book.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default BooksList;
