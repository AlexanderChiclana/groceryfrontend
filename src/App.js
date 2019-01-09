import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'
import List from './components/List'

const Dashboard = () => (
  <div>
    <h3>Dashboard</h3>
    <p>This is separate route.</p>
  </div>
)

const App = () => (
  <div>
    <List /> 
  </div>
)

export default App
