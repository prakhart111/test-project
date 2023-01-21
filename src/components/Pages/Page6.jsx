import React from 'react'
import CarouselComponent from '../CarouselComponent'


const Page6 = ({showTimeClass}) => {
  return (
    <div className={`${showTimeClass} colChangePage6`}>
        <p className={` absolute top-28 text-white sm:p-4 px-4 sm:w-[35%] font-bold text-2xl md:text-3xl ${showTimeClass}`}>
          few memorable ones
        </p>
      <CarouselComponent />
    </div>
  )
}

export default Page6