import React from 'react'
import { animated, useSpring, config, easings } from '@react-spring/web'

const SpringTesting = () => {

    const [springs,api] = useSpring(()=>({
        from:{rotate:0},
        to: {
            rotate: 360,
          },
        loop:true,
        config:{
             tension: 280, friction: 120,   
             easing: "easeOutCirc",
        }
    }),[])

    // const handleClick = () => {
    //     api.start({
    //       from: {
    //         rotate: 0,
    //       },
    //       to: {
    //         rotate: 180,
    //       },
    //     })
    //   }

  return (
    <animated.div
        // onClick={handleClick}
        style={{
        width: 80,  
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
        }}
    />
  )
}

export default SpringTesting