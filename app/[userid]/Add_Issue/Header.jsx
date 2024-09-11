'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter();
    const changePath = ()=> {
        router.push('/report');
    }
    return (
        <header className='p-2 d-flex justify-content-between' style={{ height: '60px' }}>
            <div className="fs-4 fw-bold">Add Issue</div>
            <div><a className='btn btn-primary' href='report'>Back</a></div>
            
        </header>
    )
}

export default Header