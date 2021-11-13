import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";



const AddProucts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://limitless-river-82429.herokuapp.com/addProducts', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })

    };
    return (
        <div>
            <div className='container text-center py-5  w-50'>
                <h1 className='mb-5'>Add A New Products</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 form-control' {...register("ProductsTitlle", { required: true, maxLength: 70 })} placeholder='Products Title' />
                    <textarea className='mb-3 form-control' {...register("ProductsDescription", { required: true })} placeholder='Products Description' />
                    <input className='mb-3 form-control' type="number" {...register("price")} placeholder='Price' />
                    <input className='mb-3 form-control' {...register("imgUrl", { required: true })} placeholder='Image Url' />

                    <input className='py-2 px-4 bg-primary text-white' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProucts;