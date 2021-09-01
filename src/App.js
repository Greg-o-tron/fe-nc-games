import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from './components/Reviews';
// import { useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() { 

  return (
      <div >
          <Header />
          <Nav />
            <Reviews />
      </div>
  );
}

export default App;
