import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import routes from "./Config/Routes"
import { createStore, combineReducers } from 'redux'
import users from './Redux/Modules/users'
import posts from './Redux/Modules/posts'    
import comments from './Redux/Modules/comments'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({ users, posts, comments}));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('main'))