import React from 'react'
import { content } from '../constants/index'

const Education = () => (
    <div>
      <div className='bg-secondary ml-[6vw] transition-rounded my-[6vh] p-[3vh] origin-top-right rounded-br-[100px] duration-700 ease-in-out rounded-l-[100px] hover:rounded-l-[0px] hover:scale-[1.05]'>
        <h1 className='text-third font-bold text-4xl font-oswald px-[1vw] py-[5px] text-left'>{content[1].title}</h1>
        <div className='flex flex-row w-full'>
          <div className='w-1/2'>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[1].subtitles[0].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[1].content[0].skills}</h3>
            <p className='text-white font-regular mx-[1vw] py-[5px] text-xs font-oswald text-left tracking-wider leading-5'>{content[1].content[0].content}</p>
          </div>
          <div className='w-1/2'>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[1].subtitles[1].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[1].content[1].skills}</h3>
            <p className='text-white font-regular mx-[1vw] py-[5px] text-xs font-oswald text-left tracking-wider leading-5'>{content[1].content[1].content}</p>
          </div>
        </div>
      </div>
    </div>
  )


export default Education