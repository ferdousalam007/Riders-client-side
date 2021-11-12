import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token,authError } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                else {
                    console.log(data);
                    setSuccess(false);
                }
            })

        e.preventDefault()
    }





    return (
        <div className='container w-50 py-5 '>
            <h1>make admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <Form.Group
                            className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            />
                        </Form.Group>
                {/* <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> */}
                <Button type="submit" variant="primary">Make Admin</Button>
            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;