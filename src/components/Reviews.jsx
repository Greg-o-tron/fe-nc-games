import { useEffect } from "react";
import { getAllReviews, getReviewsByCategory } from "../Utils/api";

const Reviews = ({ reviews, setReviews }) => {
  const resetAllReviews = () => {
    getAllReviews().then((allReviews) => {
      setReviews(allReviews);
    });
  };

  useEffect(() => {
    resetAllReviews();
  }, []);

  const displayReviewsByCategory = (category) => {
    getReviewsByCategory(category).then((filteredReviews) => {
      setReviews(filteredReviews);
    });
  };

  return (
    <div>
      <div className="centre_buttons">
        <p>Please choose a category: </p>
        <button onClick={() => resetAllReviews()}>All</button>
        <button onClick={() => displayReviewsByCategory("dexterity")}>
          dexterity
        </button>
        <button onClick={() => displayReviewsByCategory("hidden-roles")}>
          hidden-roles
        </button>
        <button onClick={() => displayReviewsByCategory("strategy")}>
          strategy
        </button>
        <button onClick={() => displayReviewsByCategory("deck-building")}>
          deck-building
        </button>
        <button onClick={() => displayReviewsByCategory("engine-building")}>
          engine-building
        </button>
        <button onClick={() => displayReviewsByCategory("push-your-luck")}>
          push-your-luck
        </button>
        <button onClick={() => displayReviewsByCategory("roll-and-write")}>
          roll-and-write
        </button>
      </div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p className="category">{review.category}</p>
              <div>Posted: {review.created_at}</div>
              <img className="preview" src={review.review_img_url}></img>
              <h2>{review.title}</h2>
              <em>by: {review.owner}</em>
              <p>
                <em>designer: {review.designer}</em>
              </p>
              <p className="reviewBody">{review.review_body}</p>
              <p className="centre_buttons">
                Votes: <button onClick={() => {}}>{review.votes}</button>{" "}
                Reviews:{" "}
                <button onClick={() => {}}>{review.comment_count}</button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
