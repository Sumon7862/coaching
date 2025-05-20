import React from 'react'
import banner1 from "../assets/banner-1.jpg"
import banner3 from "../assets/banner-3.jpg"
import banner4 from "../assets/banner-4.jpg"
import banner5 from "../assets/banner-5.jpg"


const Banner = () => {
  return (
    <>
        <div className="container">
            <div className='px-10'>
                <img src={banner1} alt="#" />
                <img src={banner5} alt="#" />
                <img src={banner3} alt="#" />
                <img src={banner4} alt="#" />
            </div>
        </div>
    </>
  )
}

export default Banner
