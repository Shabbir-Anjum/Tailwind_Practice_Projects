import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className=' h-14 font-serif bg-gray-950 text-white flex justify-between items-center sticky px-14'>
        <div className=' font-bold'>
            <h2>Shabbir <span className='text-red-500'>Anjum</span></h2>
        </div>
        <nav >
            <ul className='flex space-x-8 '>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Service</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>About</a></li>
            </ul>
        </nav>
        <div>
            <button className=' hover:scale-125  bg-red-500 text-white rounded-2xl p-1 w-32'>SignUP/SignIn</button>
        </div>
      </div>
    </>
  )
}
