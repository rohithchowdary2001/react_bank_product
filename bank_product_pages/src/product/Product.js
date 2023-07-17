import './Product.css';

import { FaChevronLeft } from "react-icons/fa";

import React, { useState } from "react";
import axios from "react";



const App = () => {
  const [rangeValue, setRangeValue] = useState(100);
  const [inputValue, setInputValue] = useState(100);
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('');

  // Function to handle changes in the range bar
  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    setInputValue(value);
  };

  // Function to handle changes in the input box
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setInputValue(value);
    setRangeValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      category,
      inputValue,
      frequency,
    };
    axios.post('/api/form', formData)
      .then((response) => {
        console.log('Form submitted successfully');
        // Handle success case
      })
      .catch((error) => {
        console.error('Error submitting form: ', error);
        // Handle error case
      });


  };


  return (

    <div className="App" >
      <div className='header'>

        <h3 className="backbutton"><FaChevronLeft /></h3>

        <h3 className='head'>Add Budget</h3>

      </div>





      <div className='dropdo'>

        <div className='cate'><b>Category</b></div>

        <select className='dropdown'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >

          <option className='drop'>Air Travel</option>

          <option className='drop'>Road Travel</option>

          <option className='drop'>Water Travel</option>

        </select>

      </div>






      <div>

        <div className='container-amount'>

          <div className='Ammount-container'>

            <div className='Ammount-name'><b>Amount</b></div>

            <div className='input-container'>

              <span className='currency'>&#36;</span>

              <input className='value-input' type='number' max='200000' maxLength='6' value={inputValue}
                onChange={handleInputChange}></input>

            </div>

          </div>

          <input className='range-container' type="range" min="100" max="200000" value={rangeValue}
            onChange={handleRangeChange}></input>

        </div>

        <div className='value-ammount'>

          <div><b>100</b>USD</div>

          <div><b>2,00,000</b>USD</div>

        </div>

      </div>





      <div className='Frequency-component'>

        <div className='dropdo'>

          <div className='frequency'><b>Frequency</b></div>

          <select className='dropdown'
            value={frequency}
            onChange={(event) => setFrequency(event.target.value)}
          >

            <option className='drop'>Yearly</option>

            <option className='drop'>Monthly</option>

            <option className='drop'>Weekly</option>

          </select>

        </div>

      </div>




      <div className='add-reset-container'>

        <button className='button' onSubmit={handleSubmit}>ADD</button><br />

        <button className='reset-button' type='button' >Reset</button>

      </div>
    </div>






  );
};


export default App;