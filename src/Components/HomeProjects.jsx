import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
function HomeProjects() {
  return (
    <>
        <h1 className='text-center text-warning'>Explore Our Projects</h1>
        <marquee>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
            </Col>
        </marquee>
        <div className="mt-5 mb-5 text-center" >
            <Link style={{textDecoration:"none"}} to={'/projects'}>View More...</Link>
        </div>
    </>
  )
}

export default HomeProjects