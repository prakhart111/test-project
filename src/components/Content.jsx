import React from 'react'
import downIcon from "../assets/downIcon.png"
import play from "../assets/play.png"
import pauseImg from "../assets/pause.png"
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'

const Content = ({setShowDesign}) => {
    const [pageNumber,setPageNumber] = React.useState(1);
    const [pause,setPause] = React.useState(false);
    // const [id,setId] = React.useState(0);

    React.useEffect(()=>{
      const newIntID = setInterval(()=>{
        if(!pause){
          if(pageNumber<7)setPageNumber(pageNumber+1)
          if(pageNumber>=3){
            setShowDesign(false);
        }
      }},5000);
  
      return ()=>clearInterval(newIntID)
    },[pause])


  return (
    <div>
        {pageNumber==1?<Page1 />:
        pageNumber==2?<Page2 showTimeClass="pageShown"/>:
        pageNumber==3?<Page3 showTimeClass="pageShown"/>:
        pageNumber==4?<Page4 showTimeClass="pageShown"/>:
        pageNumber==5?<Page5 showTimeClass="pageShown"/>:
        pageNumber==6?<Page6 showTimeClass="pageShown"/> :"Under Progress"}
        <div className="absolute flex w-fit top-4 sm:right-0 sm:left-0 sm:m-auto -right-2">
        <h1 className='z-10 flex items-center align-center transition-all ease-in duration-500 text-white font-bold text-2xl cursor-pointer' onClick={()=>setPause(!pause)}>
          {/* {pause?"Play":"Pause"} */}
          <span className={`transition-opacity ease-in flex items-center align-center justify-center border bg-green-500 p-1 -mr-2 rounded-l-lg sm:rounded-lg duration-400 ${pause?"opacity-1":"opacity-0 w-0"}`}>
              <span>Play</span><img width="30%" src={play} />
          </span>
          <span className={`transition-opacity ease-in flex items-center align-center justify-center border bg-blue-400 p-1 rounded-l-lg sm:rounded-lg duration-400 ${pause?"opacity-0 w-0":"opacity-1"}`}>
              <span>Pause</span><img width="30%" src={pauseImg} />
          </span>
        </h1>
      </div>
      <div className="absolute flex w-fit bottom-4 right-0 left-0 m-auto">
      <img className='p-4 pb-12 h-28' 
            onClick={()=>{
                if(pageNumber<7)setPageNumber(pageNumber+1)
                else alert("Further Pages are under progress")
                if(pageNumber>=3){
                    setShowDesign(false);
                }
            }}
            src={downIcon}/>
                    <img className='up-icon rotate-180 p-4 pt-12 h-28' 
            onClick={()=>{
                if(pageNumber>=1)setPageNumber(pageNumber-1)
                else alert("Further Pages are under progress")
                if(pageNumber<=4){
                    setShowDesign(true);
                }
            }}
            src={downIcon} />  
      </div>    
    </div>
  )
}

export default Content