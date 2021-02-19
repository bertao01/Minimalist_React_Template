import React from "react";
import Articles from "../data/Articles"

const Main = () => {
 
  return (
    <div className="jumbotron d-flex text-center justify-content-center">
      <div className="col-sm-6 text-justify">
      <h1>Welcome to my minimalist React Template</h1>
      <p>This template was made with:</p>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React js</li>
        <li>Node js</li>
      </ul>
      <h2>Feel free to clone and change all functionalities you want</h2>
      </div>
    </div>
  );
};

export default Main;