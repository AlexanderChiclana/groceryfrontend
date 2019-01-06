import React, { Component } from 'react'

class Item extends Component {
    state = {  }
    render() { 
      return ( 
        <div>
          <button type="button" className="btn btn-info col-4">{this.props.name}</button>
          
          <button type="button" className="btn btn-danger">X</button>

        </div>
      )
    }
}
 
export default Item