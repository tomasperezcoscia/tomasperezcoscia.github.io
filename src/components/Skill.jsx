import React from 'react'

const Skill = ({name,percentage}) =>(
    <div className='flex flex-row'>
          <div className='w-1/2'>
              <h3 className='text-third font-bold text-lg font-oswald px-[1vw] py-[5px] text-left'>{name}</h3>
          </div>
          <div className='w-1/2 self-center'>
              <div className='w-[90%] origin-left bg-primary rounded-full h-[2vh] items-center'>
                <div className={`w-[${percentage}%] bg-third rounded-full h-[1.8vh] self-center`}></div>
              </div>
          </div>
        </div>
  )


export default Skill