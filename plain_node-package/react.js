import React from "react";
import ReactDOM from "react-dom/client"


// var heading = React.createElement('h1',{ id:'h1',style:{color:'red'}},'Namaste React - via React CDN/Plain');
// console.log(heading);
const roott = ReactDOM.createRoot(document.getElementById('roott'));
// roott.render(heading);


// creating nesteed html using react
// let childd =React.createElement('h1',{},'Hello from parent child h1');
// let child = React.createElement('div',{id:'child'},React.createElement('h1',{},'Hello from parent child h1'));
// let parent = React.createElement('div',{id:'parent',style:{background:'red',color:'white'}},child);
// let parent =
// React.createElement('div', { id: 'parent', style: { background: 'red', color: 'white' } },
//   [React.createElement('div', { id: 'child' },
//   [React.createElement('h1', {}, 'Hello from parent child h1'),
//      React.createElement('h2', {}, 'Hello from parent child h2')]),
//    React.createElement('div', { id: 'child1' },
//     [React.createElement('h1', {}, 'Hello from parent child h1'),
//       React.createElement('h2', {}, 'Hello from parent child h2')]
//   )]);


//  using jsx trans-piled by babel
// let parent = <div id="parent" style="background: red; color: white;"><div id="child"><h1>Hello from parent child h1</h1><h2>Hello from parent child h2</h2></div><div id="child1"><h1>Hello from parent child h1</h1><h2>Hello from parent child h2</h2></div></div>;
// let parent =
//   (<div id="parent" style="background: red; color: white;">
//     <div id="child">
//       <h1>Hello from parent child h1</h1>
//       <h2>Hello from parent child h2</h2>
//     </div>
//     <div id="child1">
//       <h1>Hello from parent child h1</h1>
//       <h2>Hello from parent child h2</h2>
//     </div>
//   </div>);


// using functional component and functional composition
const Child = ({id})=>{
  console.log({id})
  return(<div id="child">
    <h1>Hello from parent {id}</h1>
    <h2>Hello from child {id}</h2>
  </div>)
}
const Parent = () =>{
  return(<div id="parent" style={{background:'red',color:'white'}}>
  <Child id='1'/>
  <Child id ='2'/>
  {Child({id:'3'})}
  <Child id="4"></Child>
  </div>)
}
console.log(<Parent/>);
roott.render(<Parent/>);
