import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Practice React Project - Quick Start App */

// Project documentation - https://react.dev/learn

// In React, the style attribute is always an object, that allows us to set inline styles for an element. It's a different syntax than HTML, in which the value of the style attribute is a string, that contains one or more CSS property-value pairs separated by semicolons

// We can only call hooks at the top of our components (or other hooks). If we want to use useState in a condition or a loop, we need to extract a new component and put it there
