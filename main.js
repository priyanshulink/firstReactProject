import Nav from './nav.js'
import about from './about.js'
// import React from 'react';

const main = React.createElement('div', {id:'appand'}, [Nav, about])

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);

root.render(main);