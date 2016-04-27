const ADD_POST = 'ADD_POST'
var uuid = require('node-uuid')
var _ = require('lodash')

const initialState = {
  posts: {
    postId: {
      title: "",
      details: "",
      time: "",
      postId:""
    },
    postId: {
      title: "",
      details: "",
      time: "",
      postId:""
    },
    postId: {
      title: "",
      details: "",
      time: "",
      postId:""
    },
    postId: {
      title: "",
      details: "",
      time: "",
      postId:""
    },
    postId: {
      title: "",
      details: "",
      time: "",
      postId:""
    }
  }
}

export function addPost (title, detials, time) {
  POST_ID = uuid.v4()
  return {
    type: ADD_POST,
    post: {
      title,
      details,
      time,
      postId: POST_ID
    }
  }
}

export default function posts (state = initialState, action = null) {
  switch (action.type) {
    case ADD_POST : {
      var result = _.cloneDeep(state)
      result.posts[action.post.postId] = action.post
      return result
    }
    default :
      return state
  }
}

