import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{textDecoration:'none'}} className='text-warning shadow '> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
              <div className="ms-auto btn btn-dark bg-danger rounded m-1 p-2"> LOGOUT <i class="fa-solid fa-right-to-bracket fa-beat-fade ms-2"></i></div>
          }
        </Container> 
      </Navbar>
    </>
  )
}

export default Header