import React, { useState } from 'react';

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='lista'>
      <h2>React onFocus and onBlur Example</h2>
      <input
        className='campo'
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Click or tab to focus"
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;