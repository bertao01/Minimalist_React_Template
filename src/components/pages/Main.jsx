import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
 
  return (
    <div className="jumbotron d-flex text-center justify-content-center">
      <div className="col-sm-6 text-center">
      <h1>Welcome to my minimalist React Template</h1>
      <p className="m-3 p-3"> 
        <FontAwesomeIcon icon={faEye} size="10x" />
      </p>
      <h2>Feel free to clone and change all functionalities you want</h2>
      </div>
    </div>
  );
};

export default Main;