import React from 'react'
import Card from 'react-bootstrap/Card';
import ProjectImg from '../Assests/card-img.jpg'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Card className='shadow  m-3 mt-5 btn bg-lite' onClick={handleShow}>
          <Card.Img variant="top" src={ProjectImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>

        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mt-3'>
            <Row>
                <Col>
                <img style={{height:"200px"}} className='img-fluid' src={ProjectImg} alt="Single Project" />
                </Col>
                <Col>
                    <h2>Project Title</h2>
                    <p>Project OverView</p>
                    <p>Tech Used: <span className='fw-bolder ms-2'>HTML, CSS, React</span></p>
                </Col>
            </Row>
        </Modal.Body>
        <div className="m-3">
            <a href="https://github.com/GracesonJ/React-netflix-clone" traget="_blank" className='btn me-5 border shadow'><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="https://react-netflix-clone-nu.vercel.app" traget="_blank" className='btn me-5 border shadow'> <i class="fa-solid fa-link fa-2x"></i></a>
        </div>
      </Modal>
    </>
  )
}

export default ProjectCard