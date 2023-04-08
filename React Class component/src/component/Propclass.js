import React from "react"
import { Component } from "react"

class Propclass extends React.Component{
    render(){
        return(
            <>
                <h2>Demonstration of passing props in class based component</h2>
                <h3>Name of user is {this.props.firstName} {this.props.lastName}</h3>
            </>
        )
    }
}

export default Propclass;