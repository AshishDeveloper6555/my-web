import { Component } from "react";

class StateInClass extends Component{
constructor(props){
    super(props)
    this.state = {name: "xyz"}
}

    render(){
        return(
            <div>
             <h2>{this.state.name }</h2>
            </div>
        )
    }
}


export default StateInClass;