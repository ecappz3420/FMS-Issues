'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';

const SearchableTable = ({ initialRecords }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const filteredRecords = useMemo(() => {
        if (!searchTerm) return initialRecords.data;
        return initialRecords.data.filter(record =>
            record.Issue_Type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.Issue.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, initialRecords]);

    const changeURL = ()=> {
        router.push('/');
    }

    return (
        <>
            <nav className='navbar bg-light position-sticky top-0'>
                <div className="d-flex w-100 justify-content-between">
                    <h4 className='ms-4'>All Issues</h4>
                    <div className='d-flex gap-2 me-2'>
                    <button className='btn btn-primary btn-sm px-3'>New</button>
                    <button className='btn btn-danger btn-sm px-3' onClick={changeURL}>Back</button>
                    </div>
                    
                </div>
            </nav>
            <div className="overflow-y-auto content">
                <table className='table text-center table-responsive border'>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th className='text-secondary'>Issue Type</th>
                            <th className='text-secondary'>Issue</th>
                            <th className='text-secondary'>Issue Details</th>
                            <th className='text-secondary'>Priority</th>
                            <th className='text-secondary'>Reported By</th>
                            <th className='text-secondary'>Reported Date & Time</th>
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
                                            <td>{record.Reported_By.display_value}</td>
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
