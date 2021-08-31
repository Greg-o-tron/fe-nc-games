import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from './components/Reviews';
import { useState } from "react";

function App() {
  
  const [reviews, setReviews] = useState([
    {
      review_id: 1,
      title: "exampleTitle",
      owner: "exampleOwner",
      designer: "exampleDesigner",
      review_body: "exampleReview_body",
      review_img_url: "exampleReview_img_url",
      category: "exampleCategory",
      created_at: "exampleCreated_at",
      votes: 1,
      comment_count: "exampleComment_count"
    }
  ]);

  return (
    <div >
      <Header />
      <Nav />
      <Reviews reviews={reviews} setReviews={setReviews}/>
    </div>
  );
}

export default App;
