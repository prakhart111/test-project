import React from 'react'
import design from "../assets/design.png"
const RotatingDesign = ({type}) => {
    const img = new Image();
    img.src = design;
      const type1 = {
        left:-1 * 500 /3,
        top:-1 * 500 / 3,
      }
      const type2 = {
        left:-1 * 500 /3,
        bottom:-1 * 500 / 3,
      }
      const type3 = {
        right:-2 * 500 /3,
        top:-1 * 500 / 3,
      }
      const type4 = {
        right:-2 * 500 /3,
        bottom:-1 * 500 / 3,
      }
      const selectedType = type==1?type1:type==2?type2:type==3?type3:type==4?type4:'';

  return (
    <div style={{
        position:"absolute",    
        margin:0,
        padding:0,
        ...selectedType
    }}>
        <img src={design} className={`scale-[0.8] sm:scale-[0.95] ${type==1 || type==4 ? 'rotate-img' : 'rotate-img2'}`} width="70%" style={{padding:0,margin:0}} />
    </div>
  )
}

export default RotatingDesign