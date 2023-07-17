import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Product from './product/Product';
import reportWebVitals from './reportWebVitals';
import Bankmenucollapse from './product/Bankmenucollapse';
import Collapsableitem from './product/Collapsableitem';
import Menubar from './product/Menubar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Product /> */}
    <Bankmenucollapse/>
    {/* <Collapsableitem/> */}
    {/* <Menubar/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
