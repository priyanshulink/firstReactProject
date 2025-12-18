const img = React.createElement( 
    'img',
  {
    src: '',
    alt: 'sample image'
  });

const leftbox = React.createElement('div',{id:'leftbox'},'')
const rightbox = React.createElement('div',{id:'rightbox'},img)

const parentbox = React.createElement('div',{id:'main'},[leftbox, rightbox])

export default parentbox