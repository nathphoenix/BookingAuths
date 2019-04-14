import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    {
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
    }
  </div>
);



export default HomePage;
