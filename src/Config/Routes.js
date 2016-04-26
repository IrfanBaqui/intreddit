import React, { Component } from 'react'
import { Router, hashHistory, IndexRoute } from 'react-router'
import { HomeContainer, MainContainer } from '../Components'

const routes = (
  <Router history = {hashHistory}>
    <Router path="/" component={MainContainer}>
      <Router path="/home" component={HomeContainer} />
    </Router>
  </Router>
)

export default routes