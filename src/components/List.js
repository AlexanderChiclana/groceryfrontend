import React, { Component } from 'react'
import Item from './Item'

import axios from 'axios'

import { Route } from 'react-router-dom'
import Store from './Store'
import SwipeableRoutes from 'react-swipeable-routes'
import SwipeableViews from 'react-swipeable-views'

class List extends Component {

  constructor(props) {
    super(props)
    
  }

  render() { 

     

    return ( 
      <div>
        <SwipeableRoutes>
    
          <Route path='/stop' render={()=>(
            <Store storeName={'Stop and Shop'} resourceName={'items'}/>
          )}/>


          <Route path='/tj' render={()=>(
            <Store storeName={'Trader Joes'}  resourceName={'tj_items'}/>
          )}/>
 
    
          <Route path='/vm' render={()=>(
            <Store storeName={'V-Mart'}  resourceName={'vm_items'}/>
          )}/>
    
        </SwipeableRoutes>

      </div>
    )
  }
}
 
export default List