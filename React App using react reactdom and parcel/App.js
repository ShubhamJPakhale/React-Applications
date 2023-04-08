import React from'react';
import ReactDOM from 'react-dom/client';

const head1=React.createElement('h1',{id:"head1"},"Ecommerce Application");

const head2=React.createElement('h2',{id:"head2"},"Powered by React");

const container1=React.createElement('div',{id:"container"},[head1,head2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
