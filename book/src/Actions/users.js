import api from "../api";
import { userLoggedIn } from "./auth";

// export const signup = data =>dispatch =>
//  api.user.signup(data).then(user=>{
//   localStorage.bookwormJWT = user.token;   // this way we save token into local storage for saving credentials
//                                               //on page refresh and remain on the page with the credentials
//   dispatch(userLoggedIn(user))}) //upon successful registration we want user to be automatically logged in

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    // localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });