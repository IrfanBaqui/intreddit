import React, { Component, PropTypes } from 'react'
import {FormInput,Button} from '../../Components'
import styles from './SignInContainer.css'
  
export default class SignInContainer extends Component {    
  signIn(){
      var user = document.getElementById("user").value;
      var password = document.getElementById("password").value;
      console.log(user + password);
      if(user=="admin" && password =="admin")
          {
              document.getElementById("modal-signin").className = "signnedIn";
              document.getElementById("modal-signin").style.display = none;
          }
  }    
  render() {
    return (
      <div className="modalWrap" id="modal-signin">        
        <div className="signInWrapper">
            <h2 className="signInTitle">Sign In</h2>
            <FormInput type="text" name="User"/>
            <FormInput type="password" name="Password"/>
            <Button text="Sign In" onClick={this.signIn.bind(this)} />
        </div>
      </div>
    )
  }
}