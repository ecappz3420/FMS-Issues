'use client'
import React from 'react'

const Header = () => {
    return (
        <header className='p-2 d-flex bg-secondary-subtle rounded justify-content-between' style={{ height: '60px' }}>
            <div className="fs-4 fw-bold">Add Issue</div>
            <div><a className='btn btn-primary' href='report'>Back</a></div>
        </header>
    )
}

export default Header