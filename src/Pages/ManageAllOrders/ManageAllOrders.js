import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [control, setConrol] = useState(false);

    //   const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    //   console.log(status);
    useEffect(() => {
        fetch("https://limitless-river-82429.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders, orderId, control]);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://limitless-river-82429.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        alert('product shiped');
    };


    const handleDelete = (id) => {
        fetch(`https://limitless-river-82429.herokuapp.com/deleteOrder/${id}`, {
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
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Update Status</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody key={pd?._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.description}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value=''></option>
                                        <option value="shipded">shipded</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td>
                            <td>
                                <Button

                                    className='bg-danger-btn' variant="primary">{pd?.status}</Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => handleDelete(pd?._id)}
                                    className='bg-danger-btn' variant="primary">Delete</Button>
                            </td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MangeAllOrders;