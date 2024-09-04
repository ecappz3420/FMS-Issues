'use client'
import React, { useState, useMemo } from 'react';

const SearchableTable = ({ initialRecords }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredRecords = useMemo(() => {
        if (!searchTerm) return initialRecords.data;
        return initialRecords.data.filter(record => 
            record.Issue_Type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.Issue.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, initialRecords]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className='table text-center table-responsive border table-hover table-striped'>
                <thead>
                    <tr>
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
                        filteredRecords.length > 0 ? (
                            filteredRecords.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.Issue_Type}</td>
                                    <td>{record.Issue}</td>
                                    <td>{record.Issue_Details}</td>
                                    <td>{record.Priority}</td>
                                    <td>{record.Reported_By.display_value}</td>
                                    <td>{record.Reported_Date_Time}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No Records Found</td>
                            </tr>
                        )
                 
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SearchableTable;
