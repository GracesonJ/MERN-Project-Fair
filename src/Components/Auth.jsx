import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import img from "../Assests/project.png"
function Auth({register}) {
    const registerForm = register ? true:false
  return (
    <>
        <div style={{width:"100%", height:"100vh"}} className="d-flex justify-content-center align-items-center">
            <div className="container w-75">
                <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center mb-2'> <i class="fa-solid fa-arrow-left me-2 mb-2"></i><h5>Back to Home</h5></Link>
                <div className="card shadow p-5 bg-success">
                    <div className="row align-item-center">
                        <div className="col-lg-6">
                            <img src={img} alt="" className='rounded-start w-100 pt-5'/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <div className="d-flex mt-2 text-light">
                                    <span className='h1 fw-bolder mb-0'>Project Fair</span>
                                </div>
                                <h5 className='fw-normal mt-4 pb-3 text-light'>
                                        {
                                            registerForm ? "Sign Up to Your Account" : "Sign in to Your Account"
                                        }
                                    </h5>
                                    <Form className='text-light w-100 '>
                                        { registerForm&& 
                                            <Form.Group className="mb-3 rounded" controlId="formBasicUsername">
                                            <Form.Control type="text" placeholder="Enter Your Name" />
                                        </Form.Group>}
                                        <Form.Group className="mb-3 rounded" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter Your email ID" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 rounded" controlId="formBasicPassword">                                 
                                            <Form.Control type="password" placeholder="Enter Password" />
                                        </Form.Group>
                                        
                                        {
                                            registerForm ?
                                            <div>
                                                <Button className='rounded' variant="light" type='submit' size="md">Register</Button>
                                            <p className='mt-3 text-light'>Already Have an Account ? <Link to={'/login'}className='btn-link text-warning '>Login Here</Link></p>
                                            </div>:
                                            <div>
                                                <Button className='rounded' variant="light" type='submit' size="md">Login</Button>
                                            <p className='mt-3 text-light'>New User ? <Link to={'/register'} className='btn-link text-warning'> Register Here</Link></p>
                                            </div>
                                        }
                                    
                                    </Form>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Auth