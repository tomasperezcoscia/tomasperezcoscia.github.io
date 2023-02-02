import React from 'react'
import { content } from '../constants/index'
import Skill from './Skill'
import { tools, team } from '../assets'

const Skills = () =>
(
  <div className='bg-secondary ml-[6vw] transition-rounded origin-top-right duration-700 ease-in-out rounded-b-[72px] rounded-tr-[200px] hover:rounded-[0px] hover:scale-[1.05]'>
    <h1 className='text-third font-bold text-4xl font-oswald px-[1vw] py-[5px] text-left'>Skills</h1>
    <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-2xl font-oswald text-left'>Passives</h2>
    <div className='flex flex-col w-full'>
      <Skill
        name='Object Oriented Programming'
        percentage='80'
      />
      <Skill
        name='Web Development'
        percentage='70'
      />
      <Skill
        name='Technical Documentation'
        percentage='80'
      />
      <Skill
        name='Database Management'
        percentage='90'
      />
      <Skill
        name='Teamwork'
        percentage='85'
      />
    </div>
    <div className='p-[1vw]'>
      <h2 className='text-white font-semibold mx-[1vw] py-[5px] text-2xl font-oswald text-left my-4'>Actives</h2>
      <h2 className='text-third font-bold text-lg font-oswald text-left ml-[3vw]'>Cool under pressure</h2>
      <div className='w-full flex flex-row items-center justify-center'>
        <div className='w-[30%]'>
          <img src={tools} alt="" className='w-full' />
        </div>
        <p className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left my-4'>With a remarkable ability to work under pressure, Tomas demonstrates a calm and collected demeanor even in the most intense of situations. His unwavering focus and ability to maintain composure allows him to make clear and confident decisions, making him a valuable asset in high-pressure environments.</p>
      </div>
      <h2 className='text-third font-bold text-lg font-oswald text-left ml-[3vw]'>United We Stand</h2>
      <div className='w-full flex flex-row items-center justify-center'>
        <div className='w-[36%]'>
          <img src={team} alt="" className='w-full' />
        </div>
        <p className='text-white font-semibold mx-[1vw] py-[5px] text-lg font-oswald text-left my-4'>With a natural talent for teamwork, Tomas possesses the ability to work seamlessly with others to achieve a common goal. His excellent communication skills and ability to foster collaboration among team members make him a valuable asset in group projects and endeavors. Whether leading or following, Tomas always puts the success of the team first, making him a true team player.</p>
      </div>
    </div>
  </div>

)


export default Skills