import React, { Component } from 'react'
import Item from './Item'

import axios from 'axios'



class List extends Component {

    state = { 
      formValue: '', 
      items: []
    }

    constructor(props) {
      super(props)
    
    }

    getList = () => {
      console.log('working')
      axios.get('http://localhost:4741/items')
        .then(res => {
        //   const items = res.data
          console.log(res.data)
          this.setState({ items: res.data.items})
        })
    }

    render() { 

      const GroceryList = () => this.state.items.map(item => <li key={item.name}> {item.name}</li>)        

      return ( 
          
        <div>
          <h1>Grocery List </h1>
          <button type="button" className="btn btn-primary" onClick={()=> this.getList()}>Get List</button>


          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.formValue} />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <ul>
            <ul>
              <GroceryList />
            </ul>
          </ul>
        </div>
      )
    }
}
 
export default List