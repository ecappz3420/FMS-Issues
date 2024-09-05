import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Form'
const page = () => {
    return (
        <ChakraProvider>
            <div className="container-fluid p-2 vh-100">
                <header className='p-2 d-flex justify-content-between'>
                    <div className="fs-4 fw-bold">Add Issue</div>
                    <button className='btn btn-primary border-pills'>Back</button>
                </header>
                <Form />
            </div>

        </ChakraProvider>
    )
}

export default page