import React from 'react'

const Page6 = ({showTimeClass}) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center colChangePage6 transition'>
        <h1 className={`text-white absolute top-4 left-4 font-black text-8xl md:text-9xl ${showTimeClass}`}>2022</h1>
    </div>
  )
}

export default Page6