import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';



const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, errors, reset } = useForm();
    console.log(user)

    const onSubmit = (data) => {

        axios.post('http://localhost:5000/addSReview', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })
        console.log(data);
    };

    return (
        <div className='container w-50 py-5'>
            <div>
                <h1>Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control"
                        name="email"
                        value={user?.email}
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />
                    <input
                        className="form-control"
                        name="name"
                        value={user?.displayName}
                        type="text"
                        {...register("name", { required: true })}
                    />
                    <br />
                    <input
                        className="form-control"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <br />
                    <input
                        className="form-control"
                        name="rating"
                        type="number"
                        min='0'
                        max='5'
                        placeholder="Rating Number"
                        {...register("rating", { required: true })}
                    />
                    <br />

                    <input
                        className="btn btn-primary mt-3 px-5 py-3"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Review;