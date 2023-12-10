import React from 'react'

import "./Doctors.css"
const Doctors = () => {
    return (
        <>
            <div className='doc_sec'>
                <div className="container">
                    <h6 className='text-center text-white heading-1'>CERTIFIED PERSONAL</h6>
                    <h2 className='text-center text-white mt-5'> Our Doctors</h2>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="card" style={{ width: '14rem' }}>
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    width="223"
                                    height="200"
                                    src="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2021/02/doc-1.jpg"
                                    className="attachment-full size-full wp-image-594"
                                    alt=""
                                    srcSet="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2021/02/doc-1.jpg 370w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2021/02/doc-1-300x300.jpg 300w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2021/02/doc-1-150x150.jpg 150w"
                                    sizes="(max-width: 370px) 100vw, 370px"
                                />
                                <div className="card-body">
                                    <h3 className='text-center'>DR.VICTOR</h3>
                                    <p className="card-text text-center">Cardiology <br />
                                    +1 910-626-85266
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '14rem' }}>
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    width="223"
                                    height="200"
                                    src="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-03.png"
                                    className="attachment-full size-full wp-image-492"
                                    alt=""
                                    srcSet="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-03.png 370w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-03-300x300.png 300w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-03-150x150.png 150w"
                                    sizes="(max-width: 370px) 100vw, 370px"
                                />
                                <div className="card-body">
                                <h3 className='text-center'>DR.VICTOR</h3>
                                    <p className="card-text text-center">Pulmonary <br />+1 910-626-85266 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '14rem' }}>
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    width="223"
                                    height="200"
                                    src="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-05.jpg"
                                    className="attachment-full size-full wp-image-495"
                                    alt=""
                                    srcSet="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-05.jpg 370w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-05-300x300.jpg 300w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-05-150x150.jpg 150w"
                                    sizes="(max-width: 370px) 100vw, 370px"
                                />
                                <div className="card-body">
                                <h3 className='text-center'>DR.VICTOR</h3>
                                    <p className="card-text text-center">Ophthalmology <br />+1 910-626-85266</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '14rem' }}>
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    width="223"
                                    height="200"
                                    src="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-07.jpg"
                                    className="attachment-full size-full wp-image-499"
                                    alt=""
                                    srcSet="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-07.jpg 370w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-07-300x300.jpg 300w, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2020/02/doctor-07-150x150.jpg 150w"
                                    sizes="(max-width: 370px) 100vw, 370px"
                                />
                                <div className="card-body">
                                <h3 className='text-center'>DR.VICTOR</h3>
                                    <p className="card-text text-center">Cardiology <br />+1 910-626-85266</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Doctors
