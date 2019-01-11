import React, { Component } from 'react'
import Item from './Item'

import axios from 'axios'

import { Route } from 'react-router-dom'
import Store from './Store'

class List extends Component {

  constructor(props) {
    super(props)
    
  }

  render() { 

     

    return ( 
      <div>
        <Route path='/stop' render={()=>(
          <Store storeName={'Stop and Shop'} resourceName={'items'}/>
        )}/>
  
        <Route path='/tj' render={()=>(
          <Store storeName={'Trader Joes'}  resourceName={'tj_items'}/>
        )}/>
      </div>
    )
  }
}
 
export default List