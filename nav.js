import React from 'react';

const img = React.createElement( 
    'img',
  {
    src: 'icon.png',
    alt: 'sample image'
  });

const a = React.createElement('a', {
    href: "#",
    id:"logo"
},
img
);
const a1 = React.createElement('a', {
    href: "#about",
    id:"about-link"
},
 "About me"
);
const a2 = React.createElement('a', {
    href: "#contact",
    id:"contact-link"
},
 "Portfolio"
);
const a3 = React.createElement('a', {
    href: "#services",
    id:"contact-link"
},
 "Services"
);
const a4 = React.createElement('a', {
    href: "#blog",
    id:"contact-link"
},
 "Blog"
);
const a5 = React.createElement('a', {
    href: "#bookaCall",
    id:"bookaCall"
},
 "Book A Call"
);
const box1 = React.createElement('div', {id:'box1'}, [a,a1,a2,a3,a4]);
const box2 = React.createElement('div', {id: 'box2'}, [a5]);

const Nav = React.createElement('nav', {id:'nav'}, [box1, box2]);
export default Nav;