import React from 'react'

const Page2 = ({showTimeClass}) => {
  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center colChangePage3`}>
        <h1 className={`text-white font-black self-start md:self-center ml-16 md:-ml-52 ${showTimeClass}`}>Mr. & Mrs.</h1>
        <h1 className={`text-white text-9xl Yesteryear ${showTimeClass}`}>Tandon</h1>
    </div>
  )
}

export default Page2