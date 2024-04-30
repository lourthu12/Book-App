import React ,{useRef}from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import './SearchForm.css';
import { useEffect } from 'react';


function SearchForm() {
 const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate    = useNavigate();


  const handleSubmit = () => {
    
  }

  // useEffect(() => searchText.current.focus(),[]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let tempSearchTerm = searchText.current.valueOf.trim();
  //   if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
  //     setSearchTerm("the lost World");
  //     setResultTitle("Please Enter Something...")
  //   }
  //   else{
  //     setSearchTerm(searchText.current.valueOf)
  //   }
  //   navigate("/book");
  // }

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
           <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
             <input type='text' className='form-control' placeholder='The Lost World...' ref={searchText}/>
             <button type='submit' className='flex flex-c' onClick ={handleSubmit}>
              <FaSearch className = "text-purple" size = {32}  />
             </button>
            </div>
           </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm