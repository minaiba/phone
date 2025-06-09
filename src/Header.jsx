import React, { useState } from 'react'
import aiba from './assets/logoABC.png'
import { CiHeart, CiSearch, CiWifiOn } from "react-icons/ci";
import { LuSignal, LuSignalLow } from 'react-icons/lu';
import { IoBatteryHalf } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="text-white bg-gray-900 px-4 py-2 flex justify-between items-center text-sm">
        <span className='font-mono'>16:23</span>
        <div className='flex gap-2 items-center'>
          <LuSignal />
          <CiWifiOn />
          <IoBatteryHalf />
        </div>
      </div>
      <div className="bg-white shadow px-4 py-2 text-gray-800 relative">
        <div className="flex items-center justify-between">
          <button
            className="text-xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu />
          </button>
          <img src={aiba} className='w-[60px]' />
          <div className='flex'>
          <CiHeart />
          <LuSignalLow/>
          <CiSearch />            
          </div>
        </div>
        {menuOpen && (
          <nav className="mt-2 space-y-2 text-sm border-t-1">
            <button className="block w-full text-left hover:text-blue-600">Главная</button>
            <button className="block w-full text-left hover:text-blue-600">О нас</button>
            <button className="block w-full text-left hover:text-blue-600">Контакты</button>
          </nav>
        )}
      </div>
    </div>

  )
}

