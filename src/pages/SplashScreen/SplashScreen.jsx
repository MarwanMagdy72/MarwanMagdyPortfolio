import React from 'react'
import './splashScreen.css'
import rocket from '../../../public/animation/rocket.json'
import Lottie from 'lottie-react'
function SplashScreen() {
  return (
    <div className='splash-screen'>

        <Lottie  animationData={rocket}/>
    </div>
  )
}

export default SplashScreen