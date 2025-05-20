import React from 'react'
import banner1 from "../assets/banner-1.jpg"
import banner3 from "../assets/banner-3.jpg"
import banner4 from "../assets/banner-4.jpg"
import banner5 from "../assets/banner-5.jpg"


const Banner = () => {
  return (
    <>
       


          {/* <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-bannarOne">
            <img src={banner1} alt="Banner 1" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src={banner5} alt="Banner 5" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src={banner3} alt="Banner 3" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src={banner4} alt="Banner 4" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div> */}
        <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <img src={banner1} alt="Banner 1" className="rounded-lg shadow-md w-full" />
            <img src={banner5} alt="Banner 5" className="rounded-lg shadow-md w-full" />
            <img src={banner3} alt="Banner 3" className="rounded-lg shadow-md w-full" />
            <img src={banner4} alt="Banner 4" className="rounded-lg shadow-md w-full" />
            
        </div>

    </>
  )
}

export default Banner
