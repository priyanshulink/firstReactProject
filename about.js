import React from "react";

const img = React.createElement( 
    'img',
  {
    src: './lestimg-removebg-preview.png',
    alt: 'sample image'
  });
const h2 = React.createElement('h2',{id:'headingone'}, '200+');
const p1 = React.createElement('p',{id:'para'}, "Project completed");
const h3 = React.createElement('h2',{id:'headingone'}, '50+');
const p2 = React.createElement('p',{id:'para'}, "Startup Raised");

const boxcontianh2p1 = React.createElement('div',{id:'h2p1contianer'}, [h2,p1]);
const boxcontianh2p2 = React.createElement('div',{id:'h2p1contianer'}, [h3,p2]);

const helloheading = React.createElement('h1',{id:'helloheading'}, 'Hello');
const base = React.createElement('h3',{id:"base"}, '-I Made Modern Digital Experiencs');

const hello = React.createElement('div',{id:'hello'}, [helloheading, base])
const mainbox = React.createElement('div',{id:'mainbox'},[boxcontianh2p1, boxcontianh2p2])

const leftbox = React.createElement('div',{id:'leftbox'},[mainbox, hello]);
const rightbox = React.createElement('div',{id:'rightbox'},img)

const parentbox = React.createElement('div',{id:'main'},[leftbox, rightbox])

export default parentbox