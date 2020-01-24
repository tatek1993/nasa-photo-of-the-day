import React from "react";
import PhotoContainer from "./components/PhotoContainer";
import styled from "styled-components";

import "./App.css";

const MainHeader = styled.div `
  font-size: 4rem;
  font-family: 'Audiowide', cursive;
  padding: 3%;
  color: #F24222;
  text-shadow: 1px 1px white;
`

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <MainHeader>NASA Photo of the Day!</MainHeader>
      </div>
      <PhotoContainer />
    </div>
  );
}

export default App;
