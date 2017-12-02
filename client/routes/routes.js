import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "../components/home.jsx"
import TaskList from "../components/taskList.jsx"
import AppContainer from "../components/appContainer.jsx"
import CreateUser from "../components/CreateUser.jsx"
import Login from "../components/Login.jsx"

const routes = [
  {
    path: '/',
    component: AppContainer
  },
  {
    path: '/createUser',
    component: CreateUser
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/taskList',
    component: TaskList
  },
  {
    path: '/login',
    component: Login
  }
]

module.exports = routes;

//   https://reacttraining.com/react-router/web/example/route-config
// Ques
// use of module.export in Node