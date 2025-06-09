import React from 'react'
import './App.css'
import phone from './assets/appleiphone15.png'
import Header from './Header';
import MainPage from './MainPage';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[300px] h-[570px]">
        <div className="absolute left-[22px] w-[256px] h-[524px] z-10 overflow-hidden rounded-[24px]">
          <Header />
          <MainPage/>
        </div>

        <img src={phone} className="absolute bottom-[23px] left-0 w-full h-full z-20 pointer-events-none" />
      </div>
    </div>
  )
}

