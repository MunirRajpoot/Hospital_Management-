import React from 'react'
import "./About.css"
const About = () => {
  return (
   <>
<div className='mt-5 container'>

<div className="row">
    <div className="col"><h1 className='text-black fw-bold mt-5'>About Our Clinic</h1>
<p className='para_sec text-start mt-3'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
<p className='para_sec '>
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
</p></div>
    <div className="col mt-5 mb-5">
        <img className='about_img' src="https://karachimedicalcomplex.com/wp-content/uploads/2020/08/med_depart1.jpg"  style={{ height: '350px', width: '500px' }} alt="img" />
    </div>
</div>


</div>

   </>
  )
}

export default About
