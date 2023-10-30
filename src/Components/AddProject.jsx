import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary rounded" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-2">
            <div className="col-lg-6">
              <label htmlFor="projectPic" className='text-center  justify-content-center d-flex'>
                <input type="file" id='projectPic' style={{display:'none'}} />
                <img width={'200px'} height={'200px'} src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" alt="img" />
              </label>
            </div>
            <div className="col-lg-6">
              <input type="text" className="form-control m-2" placeholder='Project Name' />
              <input type="text" className="form-control m-2" placeholder='Language Used'/>
              <input type="text" className="form-control m-2" placeholder='Website Link'/>
              <input type="text" className="form-control m-2" placeholder='GitHub Link'/>
            </div>
            <input type="text" className="form-control m-2" placeholder='Project Overview'/>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject