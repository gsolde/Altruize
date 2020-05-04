import React from 'react';
import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound () {
  return (
    <div className="NotFound">
      <div className="wrapper">
        <h1>Error 404</h1>
        <h1>Page not found !!</h1>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
