import React, { Component } from 'react'
import Item from './Item'

import axios from 'axios'

import { Route } from 'react-router-dom'

class List extends Component {

    state = { 
      formValue: '', 
      items: []
    }

    constructor(props) {
      super(props)
    
    }

    componentDidMount() {
      axios.get('http://localhost:4741/items')
        .then(res => {
        //   const items = res.data
          this.setState({ items: res.data.items})
        })
    }


    getList = () => {
      console.log('working to get list')
      axios.get('http://localhost:4741/items')
        .then(res => {
        //   const items = res.data
          console.log(res.data)
          this.setState({ items: res.data.items})
        })
    }

    handleChange = (event) => {
      this.setState({formValue: event.target.value})
    }

    handleSubmit = (event) => {

      axios({
        method: 'post', //you can set what request you want to be
        url: 'http://localhost:4741/items',
        // data: {name: this.state.formValue},
        data:{
          item: {
            name: this.state.formValue
          }
        }
      
        // headers: {
        //   Authorization: 'Token ' + 'token=BAhJIiUxYzc5NzMyNzJmODg1MTkzZjkyMTZmYzUwOTk2MzEwZAY6BkVG--96e181a0fe88c8e654c5b6a77be112a9c0ee83e5'
        // }
      }).then(
        this.getList
      )

      event.preventDefault()
    }

    render() { 

     
      const GroceryList = () => this.state.items.map(item => 
        
        <div key={item.id}>
          <Item name={item.name} id={item.id} getList={this.getList}/> 
        </div>
      )        

      return ( 
        
        <Route path='/stop' render={() => ( 
          <div>
            <div style={{ display: 'flex' , justifyContent: 'center'}}>
              <h1 style={{color:'white'}}>Grocery List </h1>
            </div> 
            <div style={{ display: 'flex' , justifyContent: 'center'}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input type="text" className="form-control"value={this.state.formValue} onChange={this.handleChange} />
                </label>
                <input type="submit" className='btn btn-primary' value="Add" />
              </form>
            </div>
  
            <div className="container-fluid">
              <GroceryList />
            </ div>
  
  
          </div>
        )
        } />
      )
    }
}
 
export default List