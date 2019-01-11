import React, { Component } from 'react'
import Item from './Item'
import axios from 'axios'

class Store extends Component {
    state = {   
      formValue: '', 
      items: []
    }

    
    componentDidMount() {
      this.getList()
    }
      
      getList = () => {
        axios.get('http://localhost:4741/' + this.props.resourceName)
          .then(res => {
            this.setState({ items: res.data[this.props.resourceName]})
          })
      }
      
      handleChange = (event) => {
        this.setState({formValue: event.target.value})
      }
      
      string = ''

      handleSubmit = (event) => {
        
        switch (this.props.resourceName) {
        case 'items':
          axios({
            method: 'post', 
            url: 'http://localhost:4741/items',
            data:{
              item: {
                name: this.state.formValue
              }
            }
          }).then(this.getList)
          event.preventDefault()
          break 
        case 'tj_items':
          axios({
            method: 'post', 
            url: 'http://localhost:4741/tj_items',
            data:{
              tj_item: {
                name: this.state.formValue
              }
            }
          }).then(this.getList)
          event.preventDefault()
          break 
        }
      }
  
      render() { 

        const GroceryList = () => this.state.items.map(item => 
        
          <div key={item.id}>
            <Item name={item.name} id={item.id} getList={this.getList} resourceName={this.props.resourceName}/> 
          </div>
        )        
        return (        <div>

          <header>
            <div style={{ display: 'flex' , justifyContent: 'center'}}>
              <h1 className='display-4' style={{color:'white'}}>{this.props.storeName} </h1>
            </div> 
            <div style={{ display: 'flex' , justifyContent: 'center'}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input type="text" className="form-control" value={this.state.formValue} onChange={this.handleChange} />
                </label>
                <input type="submit" className='btn btn-primary' value="Add" />
              </form>
            </div>   
          </header>
          <br />
          <br />
          <br /> 
          <br /> 
          <br />
          <div className="container-fluid">
            <GroceryList />
          </ div>
        </div> )
      }
}
 
export default Store