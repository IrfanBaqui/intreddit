import React, { Component } from 'react'
import styles from './HomeContainer.css'
import { PostsContainer, Button, Ctrls, SignInContainer } from '../../Components'
import * as _ from 'lodash'

export default class HomeContainer extends Component {

  onChange() {}
  componentDidMount(){
  }
  render() {
    return (
      <div className="homeContainer">
        <Ctrls />
        <PostsContainer />
        <SignInContainer />
      </div>
    )
  }
}