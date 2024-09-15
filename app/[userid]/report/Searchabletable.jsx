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
                    <h5 className='ms-4 d-xs-none'>All Issues</h5>
                    <input type="text" className='bg-transperant search-bar border-1 form-control' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search here...' />
                    <div className='d-flex gap-2 me-2'>
                        <a className='btn btn-primary shadow-md btn-sm' href='Add_Issue' >Add</a>
                        <a className='btn btn-primary shadow-md btn-sm' href='/'>Back</a>
                    </div>
                </div>
            </nav>
            <div className="overflow-y-auto content">
                <table className='table text-center table-striped table-responsive border'>
                    <thead>
                        <tr>
                            <th className='bg-dark text-white'><input type="checkbox" /></th>
                            <th className='bg-dark text-white'>Issue Type</th>
                            <th className='bg-dark text-white'>Issue</th>
                            <th className='bg-dark text-white'>Issue Details</th>
                            <th className='bg-dark text-white'>Priority</th>
                            <th className='bg-dark text-white'>Status</th>
                            <th className='bg-dark text-white'>Reported Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredRecords ? (
                                filteredRecords.length > 0 ? (
                                    filteredRecords.map((record, index) => (
                                        <tr key={index}>
                                            <td><input type="checkbox" /></td>
                                            <td>{record.Issue_Type}</td>
                                            <td>{record.Issue}</td>
                                            <td className='text-start'>{record.Issue_Details}</td>
                                            <td>{record.Priority}</td>
                                            <td>{record.Status}</td>
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
