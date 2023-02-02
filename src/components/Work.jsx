import React from 'react'
import { content } from '../constants/index'

const Work = () => (
    <div>
      <div className='bg-secondary ml-[6vw] transition-rounded my-[6vh] p-[3vh] origin-top-right duration-700 ease-in-out rounded-[100px] hover:rounded-[0px] hover:scale-[1.05]'>
        <h1 className='text-third font-bold text-4xl font-oswald px-[1vw] py-[5px] text-left'>{content[2].title}</h1>
        <div className='flex flex-col w-full'>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[2].subtitles[0].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[2].content[0].skills}</h3>
            <p className='text-white font-regular mx-[1vw] py-[5px] text-xs font-oswald text-left tracking-wider leading-5'>{content[2].content[0].content}</p>
          </div>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[2].subtitles[1].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[2].content[1].skills}</h3>
            <p className='text-white font-regular mx-[1vw] py-[5px] text-xs font-oswald text-left tracking-wider leading-5'>{content[2].content[1].content}</p>
          </div>
        </div>
      </div>
    </div>
  )


export default Work