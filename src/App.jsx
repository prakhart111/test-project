import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RotatingDesign from './components/RotatingDesign'
import Content from './components/Content'

function App() {
  const [showDesign,setShowDesign] = useState(true)
  return (
    <div className="App flex flex-col items-center align-center justify-center">
      {showDesign && <><RotatingDesign type={1}/>
      <RotatingDesign type={2}/>
      <RotatingDesign type={3}/>
      <RotatingDesign type={4}/></>}
      <Content setShowDesign={setShowDesign}/>
    </div>
  )
}
export default App
