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
            <button className='btn btn-primary btn-sm border-pills' onChange={changePath}>Back</button>
        </header>
    )
}

export default Header