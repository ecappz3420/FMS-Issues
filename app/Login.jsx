'use client'
import React from 'react';
import { PinInput, PinInputField, HStack,InputLeftElement, InputGroup , Input} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

const Login = () => {
    return (
        <>
            <div className="vh-100 bg-light">
                <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="card shadow-sm">
                        <div className="card-header p-2 bg-primary text-white text-center fw-bold">
                            <h4 className="fw-bold">Sign In</h4>
                        </div>
                        <div className="card-body py-4 px-3">
                            <div className="container">
                                <form className="login-form">
                                    <label htmlFor="form-label">Phone Number</label>
                                    <InputGroup className="mb-4">
                                        <InputLeftElement pointerEvents='none'>
                                            <PhoneIcon color='gray.400' />
                                        </InputLeftElement>
                                        <Input type='tel' maxLength={10}  required/>
                                    </InputGroup>
                                    <label htmlFor="form-label mb-2">PIN</label>
                                    <HStack className="mb-4 justify-content-between">
                                        <PinInput otp >
                                            <PinInputField className='field' required={true} />
                                            <PinInputField className='field' required={true} />
                                            <PinInputField className='field' required={true} />
                                            <PinInputField className='field' required={true} />
                                        </PinInput>
                                    </HStack>
                                    <div className="text-center">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
