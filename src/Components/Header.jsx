import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Navbar style={{zIndex:'1'}} className="w-100 position-fixed top-0 bg-danger">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:"none", color:"white", fontSize:'30px'}}>Project Fair</Link>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header