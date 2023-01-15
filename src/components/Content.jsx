import React from 'react'
import downIcon from "../assets/downIcon.png"
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'

const Content = ({setShowDesign}) => {
    const [pageNumber,setPageNumber] = React.useState(1);
  return (
    <div>
        {pageNumber==1?<Page1 />:
        pageNumber==2?<Page2 showTimeClass="pageShown"/>:
        pageNumber==3?<Page3 showTimeClass="pageShown"/>:
        pageNumber==4?<Page4 showTimeClass="pageShown"/>:
        pageNumber==5?<Page5 showTimeClass="pageShown"/>:
        pageNumber==6?<Page6 showTimeClass="pageShown"/> :"Under Progress"}
        <img className='absolute bottom-0 m-auto left-0 right-0 p-4 pb-12' 
        onClick={()=>{
            if(pageNumber<7)setPageNumber(pageNumber+1)
            else alert("Further Pages are under progress")
            if(pageNumber>=3){
                setShowDesign(false);
            }
            
        }}
        src={downIcon} />
    </div>
  )
}

export default Content