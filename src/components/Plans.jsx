import React from 'react'
import { content } from '../constants/index'

const Plans = () => (
      <div className='bg-secondary mx-[6vw] transition-rounded my-[0vh] p-[3vh] origin-top-right duration-700 ease-in-out rounded-tr-[72px] rounded-bl-[72px] rounded-tl-[128px] rounded-br-[128px] hover:rounded-[0px] hover:scale-[1.05]'>
        <h1 className='text-third font-bold text-4xl font-oswald px-[1vw] py-[5px] text-left'>{content[4].title}</h1>
        <div className='flex flex-col w-full'>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[4].subtitles[0].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[4].content[0].skills}</h3>
          </div>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[4].subtitles[1].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[4].content[1].skills}</h3>
          </div>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[4].subtitles[2].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[4].content[2].skills}</h3>
          </div>
          <div className=''>
            <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left'>{content[4].subtitles[3].content}</h2>
            <h3 className='text-third font-semibold mx-[1vw] py-[5px] text-xs font-oswald text-left'>{content[4].content[3].skills}</h3>
          </div>
        </div>
      </div>
  )


export default Plans