const ADD_COMMENT = 'ADD_COMMENT'

var uuid = require('node-uuid')
var _ = require('lodash')

const initialState = {
    1:{
        id:'1',
        text:'hello',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    2:{
        id:'2',
        text:'ok',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    3:{
        id:'3',
        text:'nice',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    4:{
        id:'4',
        text:'not good',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    5:{
        id:'5',
        text:'awesome',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    6:{
        id:'6',
        text:'yeah',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    },
    7:{
        id:'7',
        text:'yo',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT+0530 (India Standard Time)'   
    }
}

export function addComment (id,text,author,time) {
  return {
    type: ADD_COMMENT,
    id,
    text,
    author,
    time  
  }
}


export default function comments (state = initialState, action = null) {
  switch (action.type) {
    case ADD_COMMENT :{
      var result = _.cloneDeep(state)
      result[action.id] = action
      return result
    }
    default :
      return state
  }
}

