import React from "react";
import ReactDOM  from "react-dom/client";
import ProfileFunction from "./component/ProfileFunction";

const App = ()=>
{
    return(
        <>
            <h1>functional component in react</h1>
            <ProfileFunction />
        </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);