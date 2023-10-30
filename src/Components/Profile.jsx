import React from 'react'
import { Button } from 'react-bootstrap'

function Profile() {
  return (
    <>
        <div className="card shadow p-5 m-2">
            <div className="d-flex justify-content-between">
                <h2>My Profile</h2>
                <Button className="btn btn-warning rounded"><i class="fa-solid fa-check"></i></Button>
            </div>
            <div className="row justify-content-center mt-3">
                <label className='text-center' htmlFor="profile">
                    <input id='profile' type="file" style={{display:'none'}}/>
                    <img style={{width:'150px'}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="profile picture" />
                </label>
                <div className="m-1 p-1 shadow"><input type="text" className='form-control' placeholder='UserName' /></div>
                <div className="m-1 p-1 shadow"><input type="text" className='form-control' placeholder='GitHub' /></div>
                <div className="m-1 p-1 shadow"><input type="text" className='form-control' placeholder='LinkedIn' /></div>
            </div>
        </div>
    </>
  )
}

export default Profile