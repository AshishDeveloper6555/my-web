import React, { Component } from 'react'

export class ClassInState2 extends Component {
    constructor(props){
        super(props)
        this.state = "my name is ashish"
    }
    
    
  render() {
    return (
      <div>
          <h2>{this.state}</h2>
      </div>
    )
  }
}

export default ClassInState2