import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
    <>
        <div className="card shadow mt-4 p-2">
            <div className="d-flex">
                <h2 className="mt-2">My Projects</h2>
                <div className="ms-auto btn rounded"><AddProject/></div>
            </div>
            <div className="mt-4">
                {/* display your projects*/}
                <div className="border d-flex align-items-center rounded p-2">
                    <h4>Project Title</h4>
                    <div className="icons ms-auto d-flex">
                        <div className='btn btn-outline-warning rounded m-1'><i class="fa fa-edit "></i></div>
                        <div className='btn btn-outline-warning rounded m-1'><i class="fa fa-trash"></i></div>
                        <div className='btn btn-outline-warning rounded m-1'><i class="fa fa-github"></i></div>
                    </div>
                </div>
                <p className='text-danger pt-2'>No Projects Uploaded</p>

            </div>
        </div>
    </>
  )
}

export default MyProject