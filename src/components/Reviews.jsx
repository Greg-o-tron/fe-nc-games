const Reviews = ({ reviews }) => {
    return (
        <ul>
            {
                reviews.map( (review) => {
                    return (
                        <li key={review.review_id}>
                            {review.title}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Reviews;