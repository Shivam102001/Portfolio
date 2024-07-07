import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import reactjs from '../assets/reactjs.png';
import nodejs from '../assets/nodejs.png';
import tailwind from '../assets/tailwindcss.png';
import express from '../assets/expressjs.png';
import nextjs from '../assets/Next.js.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen skill text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Skills</p>
                <p className='py-4'>Creating a well-defined skills section for a portfolio is essential to showcase your competencies and make a strong impression on potential employers or clients. </p>
            </div>
            <div className='w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML Icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS Icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='Javascript Icon'/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactjs} alt='Reactjs Icon'/>
                    <p className='my-4'>React JS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='Tailwind CSS Icon'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={nodejs} alt='Nodejs Icon'/>
                    <p className='my-4'>Node js</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={express} alt='Express JS Icon'/>
                    <p className='my-4'>Express Js</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={nextjs} alt='Next JS Icon'/>
                    <p className='my-4'>Next Js</p>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default Skills
