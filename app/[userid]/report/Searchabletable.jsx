'use client'
import React, { useState, useMemo } from 'react';

const SearchableTable = ({ initialRecords, id }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecords = useMemo(() => {
        if (!searchTerm) return initialRecords.data;
        return initialRecords.data.filter(record =>
            record.Issue_Type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.Issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.Status.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, initialRecords]);

    return (
        <>
            <nav className='navbar bg-light position-sticky top-0'>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <h5 className='ms-4 d-xs-none fw-bold'>All Issues</h5>
                    <input type="text" className='bg-transperant search-bar border-1 form-control' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search here...' />
                    <div className='d-flex gap-2 me-2'>
                        <a className='btn btn-dark shadow-md btn-sm d-flex align-items-center gap-1' href='Add_Issue' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>Add</a>
                        <a className='btn btn-dark shadow-md btn-sm d-flex align-items-center gap-1' href='/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg>Back</a>
                    </div>
                </div>
            </nav>
            <div className="overflow-y-auto content">
                <table className='table text-center table-hover table-responsive border align-middle'>
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'><input type="checkbox" className='form-check-input' /></th>
                            <th className='bg-primary text-white'>Issue Type</th>
                            <th className='bg-primary text-white'>Issue</th>
                            <th className='bg-primary text-white'>Issue Details</th>
                            <th className='bg-primary text-white'>Priority</th>
                            <th className='bg-primary text-white'>Status</th>
                            <th className='bg-primary text-white'>Reported Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredRecords ? (
                                filteredRecords.length > 0 ? (
                                    filteredRecords.map((record, index) => (
                                        <tr key={index}>
                                            <td><input type="checkbox" className='form-check-input cursor-pointer' /></td>
                                            <td>{record.Issue_Type}</td>    
                                            <td>{record.Issue}</td>
                                            <td className='text-start'>{record.Issue_Details}</td>
                                            <td>{record.Priority}</td>
                                            <td><div className={`${record.Status == "Open" ? "bg-primary-subtle text-primary" : 
                                                record.Status == "Converted to Task" ? "bg-success-subtle text-success" :
                                                 record.Status == "Rejected" ? "bg-danger-subtle text-danger" : ""} rounded px-2 py-1`} 
                                                 style={{fontSize: '12px'}}>{record.Status}</div></td>
                                            <td>{record.Reported_Date_Time}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">No Records Found</td>
                                    </tr>
                                )
                            )
                                :
                                (
                                    <tr>
                                        <td colSpan="7">No Records Found</td>
                                    </tr>
                                )


                        }
                    </tbody>
                </table>
            </div>


        </>
    );
};

export default SearchableTable;
