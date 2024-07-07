import React from 'react'


const Work = () => {
  return (
    <div name='work' className='w-full h-screen work text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Projects</p>
                <p className='py-6'>Please CheckOut some of  my Recent Projects</p>
            </div>

            <div className='flex flex-col'>
              <div>
                <h1 className='text-2xl font-bold my-1'>Chat app</h1>
                <p>ChatApp is a modern and user-friendly messaging application that enables users to register, connect with friends, and communicate seamlessly. The application supports text messaging, image sharing, and video sharing, providing a comprehensive communication platform for users.</p>
                <li>User Registration and Authentication</li>
                <li>Real-time Messaging</li>
                <li>Image and video sharing capabilities within chat.</li>
                <li>Search and add friends by username or email.</li>
                <li>Online/offline status indicator</li>
              </div>


            </div>

        </div>
      
    </div>
  )
}

export default Work
