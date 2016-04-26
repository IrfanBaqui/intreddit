import React, { Component } from 'react'
import styles from './Post.css'


export default class Post extends Component {

  onChange() {}

  render() {
    return (
      <div className="postContainer">
        <Voting />
        <PostText comments={this.props.comments}>
          {this.props.text}
        </PostText>
      </div>
    )
  }
}

class PostText extends Component {

  onChange() {}

  render() {
    return (
      <div className="postText">
        <div className="mainText">
          <a href="#" className="postLink">
            {this.props.children}
          </a>
        </div>
        <div className="postDetails">
          {"submitted " + this.props.time + " ago by " + this.props.author + " to /i/general"}
        </div>
        <div className="commentsText">
          {this.props.comments.length + " comments"}
        </div>
      </div>
    )
  }
}

class Voting extends Component {

  onChange() {}

  render() {
    return (
      <div className="voting">
        <div className="upvote">
          <i className="fa fa-angle-up fa-lg">
          </i>
        </div>
        <div className="voteCount">
          300
        </div>
        <div className="downvote">
          <i className="fa fa-angle-down fa-lg">
          </i>
        </div>
      </div>
    )
  }
}