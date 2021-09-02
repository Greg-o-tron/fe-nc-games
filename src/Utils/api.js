export const getAllReviews = () => {
    return fetch("https://greg-example-api.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        return data.reviews;
      });
  };
  
  export const getReviewsByCategory = (category) => {
    return fetch(`https://greg-example-api.herokuapp.com/api/reviews?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        return data.reviews;
      });
  };