import React from 'react'
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm'
import './Header.css';

function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-ctext-center text-white'> 
         <h2 className='header-title text-capitalize'>find book of your choice.</h2><br/>
         <p className='header-text fs-18 fw-3'>lorem25
         </p>
         <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header