import React from 'react';

const designerText = React.createElement('h1', {id:'vertical-text'}, 'Product designer');
const divider = React.createElement('div', {id:'vertical-line'});
const yearText = React.createElement('h1', {id:'year-text'}, '2025');

const sidebar = React.createElement('div', {id:'sidebar'}, [designerText, divider, yearText]);

export default sidebar;