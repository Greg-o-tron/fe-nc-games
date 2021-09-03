import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Reviews reviews={reviews} setReviews={setReviews}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
