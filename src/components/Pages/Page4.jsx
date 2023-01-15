import React from 'react'

const Page4 = ({showTimeClass}) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center colChangePage4 transition'>
        <h1 className={`text-white absolute top-4 left-4 font-black text-8xl md:text-9xl ${showTimeClass}`}>1998</h1>
    </div>
  )
}

export default Page4