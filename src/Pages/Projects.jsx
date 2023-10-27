import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'


function Projects() {
  return (
    <>
    <Header/>
    <div className='text-center' style={{marginTop:"140px"}}>
       <h1 className='mb-5 mt-5'>All Projects</h1>
       <div className="d-flex mb-5 justify-content-center m-4 w-100">
        <input className='form-control w-50' placeholder='Search by Tech' />
        <i class="fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
    <div className="container-fluid">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
        </Col>
      </Row>
    </div>
    </>
    
  )
}

export default Projects