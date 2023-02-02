import React from 'react'
import { content } from '../constants/index'

const Introduction = () => (
    <div className='bg-secondary ml-[6vw] transition-rounded origin-top-right duration-700 ease-in-out rounded-bl-[100px] hover:rounded-bl-[0px] hover:scale-[1.05]'>
      <div className="flex flex-col px-[7vw] leading-7">
        <h1 className='text-white font-bold text-6xl font-oswald my-4 text-center'>{content[0].title}</h1>
        <h2 className='text-third font-bold text-lg font-oswald my-4 text-center'>{content[0].subtitles[0].content}</h2>
        <p className='text-white font-regular text-m font-oswald my-4 tracking-wider'>{content[0].content[0].content}</p>
      </div>
      <div className='flex flex-row justify-center items-center '>
        <button className='mb-[2vh] mx-[2vw] bg-third text-white font-bold font-oswald p-[10px] rounded-full bg-third hover:bg-black text-white font-bold py-2 px-4 rounded-full transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Download CV</button>
        <button className='mb-[2vh] mx-[2vw] bg-third text-white font-bold font-oswald p-[10px] rounded-full bg-third hover:bg-black text-white font-bold py-2 px-4 rounded-full transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Contact</button>
      </div> 
    </div>
  )



  
export default Introduction