'use client'
import React, { useState } from 'react'
import {FormControl, FormLabel, Input, Select, Textarea} from '@chakra-ui/react'
import Lookup from './Lookup'

const Form = (props) => {
    const [formData, setFormData] = useState({
        Issue: "",
        Issue_Type: "",
        Issue_Details: "",
        Priority: "",
        Vehicles: "",
        Status: "Open",
        Reported_By: props.userid
    })


    const chooseVehicle = (value) => {
        setFormData({
            ...formData,
            Vehicles: value,
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const submitRecord = async(e)=> {
        e.preventDefault();
        try{
            const resp =  await fetch('/api/createIssue',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        }
        catch(err){
            console.log(err);
        }
    }

    return (

        <>
            <form className='bg-light border p-4 rounded' onSubmit={submitRecord}>
                <FormControl className='mb-4'>
                    <FormLabel>Issue <span className='text-danger'>*</span></FormLabel>
                    <Input type='text' value={formData.Issue} name='Issue' onChange={handleChange} className='bg-white' required={true} />
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Issue Type <span className='text-danger'>*</span></FormLabel>
                    <Select placeholder='Select' value={formData.Issue_Type} name='Issue_Type' onChange={handleChange} required={true} className='bg-white'>
                        <option>Truck Services</option>
                        <option>Non Truck Services  </option>
                    </Select>
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Vehicle <span className='text-danger'>*</span></FormLabel>
                    <Lookup className='w-100' records={props.records} chooseVehicle={chooseVehicle} />
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Issue Details <span className='text-danger'>*</span></FormLabel>
                    <Textarea className='bg-white' value={formData.Issue_Details} onChange={handleChange} name='Issue_Details' required={true} />
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Priority <span className='text-danger'>*</span></FormLabel>
                    <Select placeholder='Select' value={formData.Priority} name='Priority' onChange={handleChange} className='bg-white' required={true}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Select>
                </FormControl>

                <div className="text-center">
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>

        </>

    )
}

export default Form