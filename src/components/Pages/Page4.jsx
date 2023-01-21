import React from 'react'
import img11 from "../../assets/photos/img11.jpg";


const Page4 = ({showTimeClass}) => {
  return (
    <div className='w-screen h-screen flex flex-col-reverse sm:flex-row sm:gap-4 items-center justify-center colChangePage4 transition'>
        <p className={`text-white p-4 sm:w-[35%] font-bold text-xl md:text-3xl ${showTimeClass}`}>
        You guys are not twenty five years older in terms of marriage but you are twenty five years, stronger, 
        happier and prosperous and this is something worth all the hardships that you had to go through. Happy 25th anniversary.
        </p>
        <img src={img11} className={`sm:w-[45%] p-4 ${showTimeClass}`} />
    </div>
  )
}

export default Page4