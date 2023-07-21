import React, { useState } from 'react';

const YesOrNoComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <h1>Do you believe in SkinWalkers?</h1>
        <input
          type="radio"
          value="yes"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
        />
        No
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default YesOrNoComponent;
