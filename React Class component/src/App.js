import React from "react";
import ReactDOM  from "react-dom/client";
import Profileclass from "./component/Profileclass";

const AppLayout = ()=>{
    return(
        <>
            <h1>Class Based Component :- </h1>
            <Profileclass/>
        </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);