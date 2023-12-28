import React, { Component } from 'react'

 class Jadu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {Name:"ashish nagar"}
        
      
    }
  render() {
    return (
      <div>
        <h2>{this.state.Name}</h2>
      </div>
    )
  }
}

export default Jadu;