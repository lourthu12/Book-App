import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';

function Home() {
  return (
    <main>
      <Header />
      <Outlet />
      </main> 
    )
}

export default Home