import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import MyProject from '../Components/MyProject'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashboard={true}/>
      <Row  className='container-fluid'>
        <Col className='mt-5' sm={12} md={8}>
        <h1>Welcome <span className='text-warning'>user</span></h1>
          <MyProject/>
        </Col>
        <Col className='mt-5' sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard