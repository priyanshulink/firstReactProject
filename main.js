import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './nav.js'
import about from './about.js'
import sidebar from './horizental.js'

const main = React.createElement('div', {id:'appand'}, [Nav, sidebar, about])

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);

root.render(main);