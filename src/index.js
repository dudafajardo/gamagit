import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//modo antigo e desatualizado
// ReactDOM.render(
//   <App title="Hello" user="Gama" />,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

