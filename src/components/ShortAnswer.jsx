import React, { useState } from 'react';

const ShortAnswer = () => {
  const [ShortAnswer, setShortAnswer] = useState('');
  return (
    <div>
      <label>Short Answer</label>
      <input
        value={shortAnswer}
        onChange={(e) => setShortAnswer(e.target.value)}
      />
    </div>
  );
};

export default ShortAnswer;
