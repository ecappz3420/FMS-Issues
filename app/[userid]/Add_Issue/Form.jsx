import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Textarea
} from '@chakra-ui/react'
const Form = () => {
    return (
        <>
            <form action="" className='bg-light h-100 border p-4 rounded'>
                <FormControl className='mb-4'>
                    <FormLabel>Issue</FormLabel>
                    <Input type='text' className='bg-white' />
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Issue Type</FormLabel>
                    <Select placeholder='Select' className='bg-white'>
                        <option>Truck Services</option>
                        <option>Non Truck Services  </option>
                    </Select>
                </FormControl>
                <FormControl className='mb-4'>
                    <FormLabel>Issue Details</FormLabel>
                    <Textarea className='bg-white' />
                </FormControl>
                <FormControl className='mb-5'>
                    <FormLabel>Priority</FormLabel>
                    <Select placeholder='Select' className='bg-white'>
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