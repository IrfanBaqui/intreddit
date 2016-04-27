import React, { Component } from 'react'
import styles from './PostContainer.css'
import { Post, Button } from '../../Components'
import * as _ from 'lodash'

export default class PostContainer extends Component {

  getData() {
    return [
      {
        id: 1,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'+
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45,
        author: 'Irfan Baqui',
        time: '24 hours'
      },
      {
        id: 2,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'+
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45,
        author: 'Irfan Baqui',
        time: '1 day'
      },
      {
        id: 3,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'+
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        votes: 45,
        author: 'Irfan Baqui',
        time: '4 days'
      },
      {
        id: 4,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        comments: ['HI', 'NO', 'Just Kidding'],
        details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'+
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
        votes: 45,
        author: 'Irfan Baqui',
        time: '24 hours'
      }
    ]
  }

  onChange() {}

  render() {
    return (
       <div className="postDetailsContainer">
        {
          _.map(_.sortBy(this.getData(),['id']), function(post) {
            if(post.id == 2)
            return (
                <Post key={post.id} text={post.text} time={post.time} author={post.author} comments={post.comments} votes={post.votes}>
                  {post.details}
                </Post>
                 )
            else
                return 
          })
        }
      </div>
    )
  }
}