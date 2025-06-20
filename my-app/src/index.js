import React from 'react'; //core libraries for references
import ReactDOM from 'react-dom/client'; //implementation for web like react-native is an implementation for mobile app
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

