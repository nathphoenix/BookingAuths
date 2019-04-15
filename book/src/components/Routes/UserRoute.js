// //user route is for authentication of users to access the dashboard

// import React from "react";
// import PropTypes from "prop-types";
// import {Route, Redirect } from "react-router-dom";
// import {connect} from "react-redux";

// const UserRoute = ({ isAuthenticated, component:Component, ...rest}) => (   // it will takes everything we pssed to routes and we then rename the compnet to capitali letter
//   <Route 
//   {...rest}
//    render={props =>
//      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />} 
//    />
// );

// UserRoute.propTypes = {
//   component: PropTypes.func.isRequired,         // compomet is just a function from react
//   isAuthenticated: PropTypes.bool.isRequired
// };

// function mapStateToProps(state){
//   return{
//     isAuthenticated: !!state.user.token
//   }
// }

// export default connect(mapStateToProps)(UserRoute);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(UserRoute);
