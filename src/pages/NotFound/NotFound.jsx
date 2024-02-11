import Lottie from 'lottie-react'
import React from 'react'
import notFound from "/public/animation/NotFoundAnimation.json";
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className='d-flex align-items-center not-found-content justify-content-center  flex-column  mb-5'>

    <Lottie animationData={notFound} className='not-found-animation' style={{width:'50%' }}/>
    <Link to={'/'} className='btn btn-outline-primary  '> Go To Home </Link>

    </div>
  )
}

export default NotFound