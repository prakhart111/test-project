import React from 'react'
import img8 from "../../assets/photos/img8.jpg";

const Page5 = ({showTimeClass}) => {
  return (
    <div className='w-screen h-screen flex flex-col-reverse sm:flex-row sm:gap-4 items-center justify-center colChangePage4 transition'>
        <p className={`text-white sm:p-4 px-4 sm:w-[35%] font-bold text-xl md:text-3xl ${showTimeClass}`}>
        <span className='font-black text-2xl md:text-4xl'>PERFECT.</span>
<br/><br/>
that’s the single word defining you two.<br/>
and together<br/>
you are<br/>
<br/>
<span className='font-black text-2xl md:text-4xl text-yellow-300'>spec</span>
<span className='font-black text-2xl md:text-4xl'>tacular.</span>
        </p>
        <img src={img8} className={`object-cover sm:w-[30%] w-[95%] h-[50%] sm:h-[75%] p-4 -mt-16 sm:mt-0 ${showTimeClass}`} />
    </div>
  )
}

export default Page5