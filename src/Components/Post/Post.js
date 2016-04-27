import React, { Component } from 'react'
import styles from './Post.css'


export default class Post extends Component {

  onChange() {}

  render() {
    return (
    <div className="postWrap">    
      <div className="postContainer">
        <Voting />
        <PostText time={this.props.time} author={this.props.author} comments={this.props.comments} text={this.props.text}>
          {this.props.children}
        </PostText>
      </div>
        {(() => {
            if(this.props.children != false)
                   return(
                       <PostDetails>
                            {this.props.children}
                       </PostDetails>
                   )
          })()}
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
        {(() => {
            if(this.props.children != false)
                   return(
                       <h1 className="postTitle">
                            {this.props.text}
                        </h1>)
            else
                    return(
                      <a href="/post/#" className="postLink">
                        {this.props.text}
                      </a>
                   )
          })()}
            
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

class PostDetails extends Component {

  onChange() {}

  render() {
    return (
      <div className="postData">
        {this.props.children}
      </div>
    )
  }
}