import React from 'react'
import city from './assets/city.jpg'
import car1 from './assets/car1.png'
import car2 from './assets/car2.png'
import car3 from './assets/car3.png'

export default function MainPage() {
  return (
    <div>
      <div className='w-[220px] rounded-xl ml-4 mt-4 bg-gray-300'>
        <img src={city} className='relative mt-13 rounded-xl'/>
        <img src={car3} className='absolute top-[45%] ml-[94px]'/>    
        <img src={car2} className='absolute top-[47%] ml-20 w-[100px]'/>            
        <img src={car1} className='absolute top-[47%] w-[140px]'/>
        <div className='absolute top-[90px]'>
        <button className='bg-red-600 px-2 rounded-2xl'>Осталось всего 10 aвто!</button>      
        <h1>Грандиозная распродажа тестового парка!</h1>
        <h3>Узнай свою цену!</h3>            
        </div>        
      </div>
    </div>
  )
}
