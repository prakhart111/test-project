import React from 'react'

const Page2 = ({showTimeClass}) => {
  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center colChangePage2 transition`}>
        <h1 className={`${showTimeClass} text-white text-5xl md:text-8xl font-black`}>25th</h1>
        <h1 className={`${showTimeClass} text-white text-5xl md:text-8xl font-black`}>Wedding</h1>
        <h1 className={`${showTimeClass} text-white text-5xl md:text-8xl font-black`}>Anniversary</h1>
    </div>
  )
}

export default Page2