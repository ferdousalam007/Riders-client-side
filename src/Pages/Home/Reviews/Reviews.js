import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/getReview")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    return (
        <div>
            <h1>review {reviews.length}</h1>
        </div>
    );
};

export default Reviews;