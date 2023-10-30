import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import designImg from '../Assests/project.png'
import HomeProjects from '../Components/HomeProjects'
import { Link } from 'react-router-dom'

function PFHome() {
  const [isLoggedIn, setLoggenIn] = useState(true)
  return (
    <>
      {/* Landing Section*/} 
      <div className="container-fluid rounded bg-dark" style={{width:"100%",height:"100vh"}}>
        <Row className="align-items-center p-5">
          <Col className='mt-5 p-5' sm={12} md={6}>
            <h1 className='text-danger' >Project Fair</h1>
            <div></div>
            <p className='text-white'>One Stop Destination for all Software Development Projects... Where Users can Add and Manage their Projects. As well as Access all Projects available in our Website. What are you waiting for!!!</p>
          {
            isLoggedIn?
            <Link to={'/dashboard'} className="btn btn-danger rounded mt-2"> Manage Your Projects <i class="fa-solid fa-arrow-right fa-beat mt-2"></i></Link>:
            <Link to={'/login'} className="btn btn-danger rounded mt-2"> Get Started <i class="fa-solid fa-arrow-right fa-beat mt-2"></i></Link>}
          </Col>
          <Col sm={12} md={6}>
            <img  className='img-fluid mt-5 w-100' src={designImg} alt="img" />
          </Col>
        </Row>
      </div>
      {/* Glimpse of all Projects*/}
      <div className="all-projects mt-5">
        <HomeProjects/>
      </div>

    </>
  )
}

export default PFHome