import React, { Component } from 'react'
import axios from 'axios'
class Item extends Component {
    state = {  }

    handleDelete = (event) => {
      axios({
        method: 'delete', //you can set what request you want to be
        url: `http://localhost:4741/${this.props.resourceName}/${this.props.id}`
        // headers: {
        //   Authorization: 'Token ' + 'token=BAhJIiUxYzc5NzMyNzJmODg1MTkzZjkyMTZmYzUwOTk2MzEwZAY6BkVG--96e181a0fe88c8e654c5b6a77be112a9c0ee83e5'
        // }
      }).then(this.props.getList)



      console.log(this.props.getList)
      event.preventDefault()
    }

    render() { 
      return ( 
        <div>
          <button type="button" className="btn btn-info col-10 col-md-3">{this.props.name}</button>
          
          <button type="button" className="btn btn-danger col-2 col-md-1" style={{zIndex: 1 }}onClick={this.handleDelete}>X</button>



        </div>
      )
    }
}
 
export default Item