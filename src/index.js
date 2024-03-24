import './index.css'
import img from './background.jpg'

console.log("It works!")

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

  
  const myIcon = new Image();
  myIcon.src = img;

  document.querySelector('#content').appendChild(myIcon);
