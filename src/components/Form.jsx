import React, { useState } from 'react';

const Form = () => {
  // State to hold the answers
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    skinWalkers: '', // SkinWalkers question
  });

  // State to store the submitted answers as a list
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Add the current answers to the submitted answers list
    setSubmittedAnswers([
      ...submittedAnswers,
      { question: 'Question 1 Goes Here', answer: answers.question1 },
      { question: 'Question 2 Goes Here', answer: answers.question2 },
      { question: 'Question 3 Goes Here', answer: answers.question3 },
      { question: 'Do you believe in SkinWalkers?', answer: answers.skinWalkers },
    ]);

    // Clear the form after submission
    setAnswers({
      question1: '',
      question2: '',
      question3: '',
      skinWalkers: '',
    });
  };

  // Handle input change for questions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        {/* Input fields for answers */}
        <div>
          <label>
            Question 1 Goes Here:
            <input
              type="text"
              name="question1"
              value={answers.question1}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Question 2 Goes Here:
            <input
              type="text"
              name="question2"
              value={answers.question2}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Question 3 Goes Here:
            <input
              type="text"
              name="question3"
              value={answers.question3}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />

        {/* SkinWalkers question */}
        <div>
          <h1>Do you believe in SkinWalkers?</h1>
          <label>
            <input
              type="radio"
              name="skinWalkers"
              value="yes"
              checked={answers.skinWalkers === 'yes'}
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="skinWalkers"
              value="no"
              checked={answers.skinWalkers === 'no'}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted answers as a list */}
      <div>
        <h2>Submitted Answers:</h2>
        <ul>
          {submittedAnswers.map((item, index) => (
            <li key={index}>
              <strong>{item.question}: </strong>
              {item.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
