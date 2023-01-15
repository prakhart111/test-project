import React from 'react'
import design from "../assets/design.png"
const RotatingDesign = ({type}) => {
    const img = new Image();
    img.src = design;
    img.onload = () => {
        console.log(img.height);
        console.log(img.width);
      };
      const type1 = {
        left:-1 * img.width /3,
        top:-1 * img.height / 3,
      }
      const type2 = {
        left:-1 * img.width /3,
        bottom:-1 * img.height / 3,
      }
      const type3 = {
        right:-2 * img.width /3,
        top:-1 * img.height / 3,
      }
      const type4 = {
        right:-2 * img.width /3,
        bottom:-1 * img.height / 3,
      }
      const selectedType = type==1?type1:type==2?type2:type==3?type3:type==4?type4:'';

  return (
    <div style={{
        position:"absolute",    
        margin:0,
        padding:0,
        ...selectedType
    }}>
        <img src={design} className={type==1 || type==4 ? 'rotate-img' : 'rotate-img2'} width="70%" style={{padding:0,margin:0}} />
    </div>
  )
}

export default RotatingDesign