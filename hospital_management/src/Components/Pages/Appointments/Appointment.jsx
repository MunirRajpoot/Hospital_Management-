import React from 'react'
import "./Appointment.css"
const Appointment = () => {
  return (
    <>
      <div className='appoi-form'>
        <h2 className='text-center text-white p-4'>GET AN <span className="fw-bold">Appointment</span></h2>
      </div>
      <div className="container">
        <p className="fw-bold">Please enter your details!</p>
        <div className="row">

          <div className="col">
            <p>Name</p>
            <div class="input-group flex-nowrap">

              <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
            </div></div>
          <div className="col">
            <p>Phone Number</p>
            <div class="input-group flex-nowrap">

              <input type="tel" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
            </div></div>
        </div>
        <div className="row mt-4">
          <div className="col"><p>Your Email</p>
            <div class="input-group flex-nowrap">

              <input type="email" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
            </div></div>
          <div className="col"><p>Visit Date</p>
            <div class="input-group flex-nowrap">

              <input type="date" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-dark mt-3">Submit</button>
      </div>
    </>
  )
}

export default Appointment
