import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let n = 100

let App2 = () =>
  React.createElement('div', null, [n, React.createElement('button', {
    onClick: () => {
      n += 1
      ReactDOM.render(
        App2(),
        document.getElementById('root')
      );
    }
  }, '+1')])



ReactDOM.render(
  App2(),
  document.getElementById('root')
);

