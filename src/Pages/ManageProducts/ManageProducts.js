import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';


const ManageProducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('https://limitless-river-82429.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProduct(data));
    }, [control]);
    console.log(allProduct);
    const handleDelete = (id) => {
        fetch(`https://limitless-river-82429.herokuapp.com/products/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('You want delete this order');
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        // console.log(id);
    };


    return (
        <div className='container py1'>
            <h1 className='text-center'>All Products{allProduct.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Products Title</th>
                        <th>Products Image</th>
                        <th>price</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                {
                    allProduct?.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.ProductsTitlle}</td>
                                <td><img src={order?.imgUrl} width='50' alt="" /></td>
                                <td >{order?.price}</td>



                                <Button
                                    onClick={() => handleDelete(order._id)}
                                    className='bg-danger-btn my-2' variant="primary">Delete</Button>
                            </tr>
                        </tbody>)
                }

            </Table>
        </div>
    );
};

export default ManageProducts;