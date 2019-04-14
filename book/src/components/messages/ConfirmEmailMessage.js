import React from "react";
import {Message} from "semantic-ui-react";

// const ConfirmEmailMessage = () => (
//   <Message info>
//   <Message.Header>Please Verify your email to unlock Awesomeness</Message.Header>
//   </Message>
// );

class ConfirmEmailMessage extends React.Component {
    render(){
      return(
        <Message info>
        <Message.Header>Please Verify your email to unlock Awesomeness</Message.Header>
        </Message>
      )
    }
}

export default ConfirmEmailMessage;