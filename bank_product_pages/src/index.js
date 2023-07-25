import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Product from './product/Product';
// import Bankmenucollapse from './product/Bankmenucollapse';
// import Collapsableitem from './product/Collapsableitem';
// import Menubar from './product/Menubar';

// import Welcomepage from './resumeportifolio/Welcomepage';
import Aboutme from './resumeportifolio/Aboutmepage';
import Resume from './resumeportifolio/Resume/Resume';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Product /> 
    <Bankmenucollapse/>
    <Collapsableitem/>
    <Menubar/> */}
    {/* <Welcomepage/> */}
    {/* <Aboutme/> */}
    <Resume/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
