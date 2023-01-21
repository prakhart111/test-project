import React from 'react'
import img15 from "../../assets/photos/img15.jpg";


const Page4 = ({showTimeClass}) => {
  return (
    <div className='w-screen h-screen flex flex-col-reverse sm:flex-row sm:gap-4 items-center justify-center colChangePage4 transition'>
        <p className={`text-white px-4 py-0 sm:p-4 sm:w-[35%] font-bold text-xl md:text-3xl ${showTimeClass}`}>
Happy 25th Anniversary to both of you! Congratulations on reaching a milestone made of love and trust! 
<br/><br />
You guys were always there for each other, despite of several hardships.
<br/><br />
Wishing you happiness for the days ahead too!
        </p>
        <img src={img15} className={`sm:w-[35%] p-4 -mt-16 sm:mt-0 ${showTimeClass}`} />
    </div>
  )
}

export default Page4