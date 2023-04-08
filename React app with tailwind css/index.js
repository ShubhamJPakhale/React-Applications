import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./src/App";
import Example from "./src/Example"

const Demo =()=>{
    return(
        <><App />
        <Example />
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Demo/>)