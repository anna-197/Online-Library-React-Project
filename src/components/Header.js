import React from 'react'
import '../App.css';

function Header() {
  return (
    <>
      <div className='header'>
      {/* anchor tag for loading home page on clicking the image */}
        <a href='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcSGDOS0hkk5shiEcujGF_I7umVEjZ54NPw&usqp=CAU' alt='logo'></img>
        </a>
        <h1>Welcome to Virtual Library</h1>
        <ul className='nav-items'>
          <li><a href='/'>Home</a></li>
          <li>Reading List</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
    
  )
}

export default Header