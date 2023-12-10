import React from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
    return (
        <Navbar expand="lg" bg="dark">
            <img width="150" height="54" src="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2018/07/logo-regular-white-free-img-150x54.png" class="custom-logo" alt="Logo" decoding="async" srcset="https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2018/07/logo-regular-white-free-img.png 1x, https://websitedemos.net/multimed-04/wp-content/uploads/sites/228/2018/07/logo-@2x-white-free-img.png 2x" sizes="(max-width: 150px) 100vw, 150px"></img>

            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto">

                    <Link to="/" style={{ color: 'white'   , marginRight:'40px'}}>Home <span className="sr-only ">(current)</span></Link>
                    <Link to="/about" style={{ color: 'white',marginRight:'40px' }}>About</Link>

                    <Link to="/doctors" style={{ color: 'white',marginRight:'40px' }}>Doctors</Link>
                    <Link to="/patients" style={{ color: 'white',marginRight:'40px' }}>Patients</Link>
                    <Link to="/appointments" style={{ color: 'white',marginRight:'40px' }}>
                        <Button type="button" className="btn btn-light">
                            <span className='fw-bold'>Get Appointment</span>
                        </Button>
                    </Link>



                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
