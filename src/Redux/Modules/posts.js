const ADD_POST = 'ADD_POST'
const NAVIGATE_POST = 'NAVIGATE_POST'
const UPDATE_VOTES = 'UPDATE_VOTES'
const ADD_COMMENT_ID = 'ADD_COMMENT_ID'

var uuid = require('node-uuid')
var _ = require('lodash')

const initialState = {
  currentPost: '1',  
  posts: {
    1: {
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)",
      postId:"1",
      author:"Irfan Baqui",
      votes:4,
      comments:['1','4']    
    },
    2: {
      title: 'Duo Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 27 2016 17:45:34 GMT+0530 (India Standard Time)",
      postId:"2",
      author:"Irfan Baqui",
      votes:5,
      comments:['2','7']
    },
    3: {
      title: 'Tero Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Fri Apr 22 2016 17:45:34 GMT+0530 (India Standard Time)",
      postId:"3",
      author:"Irfan Baqui",
      votes:2,
      comments:['3','5','1']
    },
    4: {
      title: 'Quodro Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 20 2016 17:45:34 GMT+0530 (India Standard Time)",
      postId:"4",
      author:"Irfan Baqui",
      votes:10,
      comments:['1','2','3','7']
    },
    5: {
      title: 'Penta Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 27 2016 17:45:34 GMT+0530 (India Standard Time)",
      postId:"5",
      author:"Irfan Baqui",
      votes:0,
      comments:['6','5']
    }
  }
}

export function addPost (title, detials,time, author) {
  var POST_ID = uuid.v4()
  return {
    type: ADD_POST,
    post: {
      title,
      details,
      time,
      postId: POST_ID,
      author,
      votes:0
    }
  }
}
    
export function navigatePost (postId) {
  return {
    type: NAVIGATE_POST,
    postId  
  }
} 

export function updateVotes (postId,vote) {
  return {
    type: UPDATE_VOTES,
    postId,
    update: vote  
  }
} 
    
export function addCommentId (postId,commentId) {
  return {
    type: ADD_COMMENT_ID,
    postId,
    commentId  
  }
} 

export default function posts (state = initialState, action = null) {
  switch (action.type) {
    case ADD_POST : {
      var result = _.cloneDeep(state)
      result.posts[action.post.postId] = action.post
      return result
    }     
    case NAVIGATE_POST : {
      var result = _.cloneDeep(state)
      result['currentPost'] = action.postId
      return result
    }
    case UPDATE_VOTES : {
      var result = _.cloneDeep(state)
      var votes = parseInt(result.posts[action.postId].votes)
      if(action.update == "inc")
          result.posts[action.postId].votes = votes+1
      else      
          result.posts[action.postId].votes = votes-1
      return result
    } 
    case ADD_COMMENT_ID : {
      var result = _.cloneDeep(state)
      result.posts[action.postId].comments.push(action.commentId)
      return result
    }
    default :
      return state
  }
}

