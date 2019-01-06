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

    handleChange = (event) => {
      this.setState({formValue: event.target.value})
    }

    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.formValue)

      axios({
        method: 'post', //you can set what request you want to be
        url: 'http://localhost:4741/items',
        // data: {name: this.state.formValue},
        data:{
          item: {
            name: this.state.formValue
          }
        },
      
        headers: {
          Authorization: 'Token ' + 'token=BAhJIiUxYzc5NzMyNzJmODg1MTkzZjkyMTZmYzUwOTk2MzEwZAY6BkVG--96e181a0fe88c8e654c5b6a77be112a9c0ee83e5'
        }
      })

      event.preventDefault()
    }

    render() { 



      const GroceryList = () => this.state.items.map(item => 
        
        <div key={item.id}>
          <Item name={item.name}/> 
        </ div>
      )        

      return ( 
          
        <div>
          <h1>Grocery List </h1>
          <button type="button" className="btn btn-primary" onClick={()=> this.getList()}>Get List</button>


          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.formValue} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>



          <div className="container-fluid">
            <GroceryList />
          </ div>
        </div>
      )
    }
}
 
export default List