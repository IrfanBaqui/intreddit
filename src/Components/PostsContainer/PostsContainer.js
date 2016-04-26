import React, { Component } from 'react'
import styles from './PostsContainer.css'
import { Post, Button } from '../../Components'
console.log(Post)
import * as _ from 'lodash'

export default class PostsContainer extends Component {

  getData() {
    return [
      {
        id: 1,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45
      },
      {
        id: 2,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45
      },
      {
        id: 3,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45
      },
      {
        id: 4,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45
      }
    ]
  }

  onChange() {}

  render() {
    return (
      <div className="postsContainer">
        {
          _.map(_.sortBy(this.getData(),['id']), function(post) {
            return (
                <Post key={post.id} text={post.text} comments={post.comments} votes={post.votes}/>
            )
          })
        }
      </div>
    )
  }
}