import React, { Component } from 'react'
import styles from './HomeContainer.css'
import { PostsContainer, Button } from '../../Components'
import * as _ from 'lodash'

export default class HomeContainer extends Component {

  onChange() {}

  render() {
    return (
      <div className="homeContainer">
        <Button text="create" />
        <PostsContainer />
      </div>
    )
  }
}