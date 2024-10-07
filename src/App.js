
import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0); // Declare bmi state
  const [message, setMessage] = useState('');

  // Logic to calculate BMI
  let calcBmi = (e) => {
    e.preventDefault(); // Prevent form submission

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 25) {
        setMessage('You are underweight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are at a healthy weight');
      } else {
        setMessage('You are overweight'); // Fixed typo
      }
    }
  };

  // Reload function
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className='container'> {/* Fixed className typo */}
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number" // Changed to number type
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))} // Convert input to number
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number" // Changed to number type
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(Number(event.target.value))} // Convert input to number
            />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button> {/* Changed type to button */}
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;