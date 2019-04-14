import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import LoginForm from "../form/LoginForm";


// const LoginPage = () => (
//   <div>
//     <h1>Login Page</h1>
//     {
//       <div>
//         <LoginForm />
//       </div>
//     }
//   </div>
// );

class LoginPage extends React.Component {
  // we have login thunk action, we passed data into it and will return promise 
  // then if everything is ok we want to redirect to another page
  // to redirect we use history and history is passed to this component by react router
  submit = data => this.props.login(data).then(() => this.props.history.push('/dashboard'))
  // anytime we use a props type, we must define at the bottom of our script
  render (){
      return(
          <div>
              <h1>Login Page</h1>
              {/* <Link to="/login">Login</Link> */}
              < LoginForm  submit ={this.submit}/>
          </div>
      );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};


export default LoginPage;
