import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = ({run}) => {
    
    
    const [windowDimension, setDimenson] = useState({ width: 0, height: 0 })
    useEffect(() => {
        const detectSize = () => {
            setDimenson({ width: window.innerWidth, height: window.innerHeight })
        }
        setDimenson({ width: window.innerWidth, height: window.innerHeight })
			window.addEventListener("resize", detectSize)
			return () => {
				window.removeEventListener("resize", detectSize)
			}
		}, [windowDimension])
  return (
    <div>
          <ReactConfetti
              width={windowDimension.width}
              height={windowDimension.height}
              tweenDuration={1000}
              run={run}
            onConfettiComplete={()=>console.log("Confetti")}
          ></ReactConfetti>
    </div>
  )
}

export default Confetti
