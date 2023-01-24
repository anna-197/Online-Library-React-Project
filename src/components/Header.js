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
        <ul className='nav-items'>
          <li>Home</li>
          <li>Reading List</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
    
  )
}

export default Header