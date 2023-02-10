import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/ProductSans-Black.ttf';
import './fonts/ProductSans-BlackItalic.ttf';
import './fonts/ProductSans-Bold.ttf';
import './fonts/ProductSans-BoldItalic.ttf';
import './fonts/ProductSans-Italic.ttf';
import './fonts/ProductSans-Light.ttf';
import './fonts/ProductSans-LightItalic.ttf';
import './fonts/ProductSans-Medium.ttf';
import './fonts/ProductSans-MediumItalic.ttf';
import './fonts/ProductSans-Regular.ttf';
import './fonts/ProductSans-Thin.ttf';
import './fonts/ProductSans-ThinItalic.ttf';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
