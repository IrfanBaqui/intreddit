import React, { Component, PropTypes } from 'react'
import { FormInput, Button } from '../../Components'
import styles from './NewPostContainer.css'
  
export default class NewPostContainer extends Component {
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
  closeModal(event){
      event.target.parentElement.parentElement.style.display = "none";
  }
  render() {
    return (
      <div className="modalWrap" id="modal-createPost">   
        <div className="newPostWrapper">
           <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
              </i>
            <h2 className="newPostTitle">{"Create a new Post"}</h2>
            <p>{"You are not signned in, this post will be added annonymously."}</p>
            <FormInput type="text" name="Title"/>
            <FormInput type="textarea" name="Details"/>
            <Button text="Submit" />
        </div>
      </div>
    )
  }
}