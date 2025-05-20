import React from 'react'
import fbIcon from "../assets/fbLogo.png";
import youTubeIcon from "../assets/youTubeLogo.png";

const Header = () => {
  return (
    <>
      <div className="bg-[#e5e7e963] h-10 flex items-center border-b-1 px-10">
        <div> 
          <a href="https://www.facebook.com/ERGOAcademicCare" target="_blank"><img className='h-6 w-6' src={fbIcon} alt="Facebook Logo" /></a>
        </div>
        <div>
          <a href="https://www.youtube.com/@ERGOAcademicCare" target="_blank"><img className='h-10 w-15' src={youTubeIcon} alt="YouTube Logo" /></a>
        </div>
        <div> 
          <h3>Contact: 01937952527</h3>
        </div>
        
      </div>
    </>
  )
}

export default Header
