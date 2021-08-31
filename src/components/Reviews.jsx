const Reviews = ({ reviews }) => {
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