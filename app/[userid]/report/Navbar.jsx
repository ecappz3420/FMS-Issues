import React from 'react'

const Navbar  =  async () => {
  return (
    <>
    <nav className='navbar'>
        <div className="d-flex w-100 justify-content-between">
            <h4 className='ms-4'>All Issues</h4>
            <button className='btn btn-primary btn-sm me-4 px-3'> New</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
