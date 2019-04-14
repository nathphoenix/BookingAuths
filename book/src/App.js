import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
// import DashboardPage from "./components/pages/DashboardPage";
// import UserRoute from "./components/Routes/UserRoute";  // this is to authenticate dashboard user before they can have access
// import GuestRoute from "./components/Routes/GuestRoute";
// import SignupPage from "./components/pages/SignupPage";
// import ConfirmationPage from "./components/pages/ConfirmationPage";

// class App extends Component {
  const App = () => (                     
    <div className="ui container">
        <Route  path="/" exact component={HomePage} />
        <Route  path="/login" exact component={LoginPage} />
    </div>
);
// App.propTypes = {
//   location: PropTypes.object.isRequired          this is not too advisable
// }

// App.propTypes = {
//   location: PropTypes.shape({      //then we go to index.js and add the location as it is not available now by importing Route and changing the App tag as done in the index.js
//     pathname: PropTypes.string.isRequired
//   }).isRequired
// };
//  we added location because of the conflict between react-redux
//  connect function and react router dom that renders an empty after successfully authenticating dashboard users 

//   defining something as object in javascript is same as not defining at all 

export default App;
