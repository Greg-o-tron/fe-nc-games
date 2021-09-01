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
                            <p className="category">{review.category}</p>
                            <div>Posted: {review.created_at}</div>
                            <img className="preview" src={review.review_img_url}></img>
                            <h2>{review.title}</h2>
                            <em>by: {review.owner}</em>
                            <p><em>designer: {review.designer}</em></p>                            
                            <p className="reviewBody">{review.review_body}</p>
                            <p>Votes: {review.votes} Count: {review.comment_count}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Reviews;