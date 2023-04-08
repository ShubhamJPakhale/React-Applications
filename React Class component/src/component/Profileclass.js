import React from "react";
import { Component } from "react";
import Propclass from "./Propclass";

// function Fullname(user)
// {
//     return user.firstName   + user.lastName;
// }

// const user ={
//      fname : "Shubham",
//      lname : "Pakhale"
// }

class Profileclass extends React.Component{
    render(){
        return(
            <>
                <h1>React.component - this function is came from react library </h1>
                <h2>render() - this is only mandatory method in class Based component in react</h2>
                <Propclass firstName={"fname"} lastName={"lname"} />
            </>
        );
    }
}

export default Profileclass;