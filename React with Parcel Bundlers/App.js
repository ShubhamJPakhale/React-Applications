import React from "react";
import { createRoot } from "react-dom/client";

const Jsx1 = (
  <>
    <h1>Inside first jsx component</h1>
  </>
);

const Jsx2 = () => {
  return (
    <>
      {Jsx1}
      <h2>Inside first functional component</h2>
    </>
  );
};

const Fcomp1 = () => {
  return (
    <div>
      {<Jsx2></Jsx2>}
      <h3>Inside Main Funtional component</h3>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Fcomp1 />);
