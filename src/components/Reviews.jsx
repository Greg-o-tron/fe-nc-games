import { useEffect, useState } from "react";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect( () => {
        fetch('https://greg-example-api.herokuapp.com/api/reviews')
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data);
            setReviews(data.reviews);
        });
    }, []);

    return (
        <ul>
            {
                reviews.map( (review) => {
                    return (
                        <li key={review.review_id}>
                            {review.title}
                            {"  "}
                            {review.owner}
                            {"  "}
                            {review.designer}
                            {"  "}
                            {review.category}
                            {"  "}
                            {review.review_img_url}
                            {"  "}
                            {review.review_body}
                            {"  "}
                            {review.votes}
                            {"  "}
                            {review.comment_count}
                            {"  "}
                            {review.created_at}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Reviews;