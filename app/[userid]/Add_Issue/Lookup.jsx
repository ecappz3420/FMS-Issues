'use client'
import React, { useState } from 'react'

const Lookup = ({records, chooseVehicle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [lookupValue, setLookupValue] = useState("Choose Vehicle");

    const options = records.map(vehicle => vehicle.Registration_Number);

    const handleChange = (e) => {
        setSearchText(e.target.value);
        setList(() => options.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleChoose = (e) => {
        setIsOpen(false);
        setLookupValue(e.target.innerText);
        const vehicle_id = records.filter(record => record.Registration_Number === e.target.innerText)[0].ID;
        chooseVehicle(vehicle_id);
    }

    return (
        <>
            <div className='dropdown'>
                <div className={`btn-white form-control bg-white cursor-pointer d-flex justify-content-between align-items-center ${isOpen ? "open" : "close"}`}
                    onClick={(e) => {
                        e.preventDefault()
                        setList(options)
                        setIsOpen(prev => !prev)
                    }}>
                    <div>{lookupValue}</div>
                    <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                </div>
                <div className={`dropdown-menu p-1 ${isOpen ? "d-block" : ""}`}>
                    <div className='position-relative dropdown-list'>
                        <div className='search position-sticky border rounded bg-white top-0 p-1 d-flex gap-2 align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='text-secondary bi bi-search' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            <input type="text" value={searchText} className='w-100' onChange={handleChange} placeholder='Search' />
                        </div>
                        {
                            list.map((item, index) => (
                                <div className='dropdown-item cursor-pointer' onClick={handleChoose} key={index}>{item}</div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default Lookup