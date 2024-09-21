'use client'
import React, { useState } from 'react';
import { PinInput, PinInputField, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const Login = () => {
    const [phoneNumber, SetPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorAlert, setErrorAlert] = useState('');
    const [load, setLoad] = useState(false);
    const router = useRouter();
    const handlePinChange = (value) => {
        setPassword(value);
    };

    const handleSubmit = async (event) => {
        setLoad(true);
        event.preventDefault();
        try {
            const response = await fetch(`/api/authenticate?phone=${encodeURIComponent(phoneNumber)}&pin=${encodeURIComponent(password)}`);

            if (!response.ok) {
                throw new Error('Authentication failed');
            }
            const { record } = await response.json();
            router.push(`${record.ID}/report`);
        } catch (error) {
            setErrorAlert("Invalid Credentials");
            console.error('Error:', error);
            setLoad(false);
        }
    };


    return (
        <>
            {
                load == false ?
                    (
                        <div className="vh-100 bg-light">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <div className="card shadow-sm">
                                    <div className="card-header p-2 bg-primary text-white text-center fw-bold">
                                        <h4 className="fw-bold">Sign In</h4>
                                    </div>
                                    <div className="card-body py-4 px-3">
                                        <div className="container">
                                            <form className="login-form" onSubmit={handleSubmit}>
                                                <label htmlFor="form-label">Phone Number</label>
                                                <PhoneInput
                                                country={'zm'}
                                                onChange={e => SetPhoneNumber('+' + e)}
                                                value={phoneNumber}
                                                className={'mb-3'}
                                                inputStyle={{width: '200px'}}
                                                />
                                                <label htmlFor="form-label mb-2">PIN</label>
                                                <HStack className="mb-4 justify-content-between">
                                                    <PinInput otp onChange={handlePinChange}  >
                                                        <PinInputField className='field' required={true} />
                                                        <PinInputField className='field' required={true} />
                                                        <PinInputField className='field' required={true} />
                                                        <PinInputField className='field' required={true} />
                                                    </PinInput>
                                                </HStack>
                                                <p className='text-danger'>{errorAlert}</p>
                                                <div className="text-center">
                                                    <button className="btn btn-primary" type='submit'>Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="vh-100 d-flex justify-content-center align-items-center vw-100 overflow-hidden">
                            <div className='loader'></div>
                        </div>
                    )
            }



        </>
    );
};

export default Login;
