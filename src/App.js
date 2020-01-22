import React from "react";
import PostContainer from "./components/PhotoContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <h1>NASA Photo of the Day!</h1>
      </div>
      <PhotoContainer />
    </div>
  );
}

export default App;
