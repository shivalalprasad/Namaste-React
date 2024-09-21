// var heading = React.createElement('h1',{ id:'h1',style:{color:'red'}},'Namaste React - via React CDN/Plain');
// console.log(heading);
const roott = ReactDOM.createRoot(document.getElementById('roott'));
// roott.render(heading);


// creating nesteed html using react
// let childd =React.createElement('h1',{},'Hello from parent child h1');
// let child = React.createElement('div',{id:'child'},React.createElement('h1',{},'Hello from parent child h1'));
// let parent = React.createElement('div',{id:'parent',style:{background:'red',color:'white'}},child);
let parent =
React.createElement('div', { id: 'parent', style: { background: 'red', color: 'white' } },
  [React.createElement('div', { id: 'child' },
  [React.createElement('h1', {}, 'Hello from parent child h1'),
     React.createElement('h2', {}, 'Hello from parent child h2')]),
   React.createElement('div', { id: 'child1' },
    [React.createElement('h1', {}, 'Hello from parent child h1'),
      React.createElement('h2', {}, 'Hello from parent child h2')]
  )]);
console.log(parent);
roott.render(parent);
