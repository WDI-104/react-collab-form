import React, { useState } from 'react';

const Form = () => {
  // State to hold the answers
  const [answers, setAnswers] = useState({
    // ⛔️ Replace the existing questions with new questions here example question4 => skinWalkers⛔️
    question1: '',//⛔️
    question2: [],// Multiple answers will be stored in an array ✅ 
    question3: '',//⛔️
    skinWalkers: '', // SkinWalkers question ✅ 
  });

  // State to store the submitted answers as a list
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Add the current answers to the submitted answers list
    // ⛔️ Replace the existing question entries with new question entries here see skinWalkers example ⛔️ 
    setSubmittedAnswers([
      ...submittedAnswers,
      { question: 'Question 1 Goes Here', answer: answers.question1 },//⛔️
      { question: 'Question 2 Goes Here', answer: answers.question2 },//⛔️
      { question: 'Question 3 Goes Here', answer: answers.question3 },//⛔️
      { question: 'Do you believe in SkinWalkers?', answer: answers.skinWalkers },//✅
    ]);

    // Clear the form after submission
    setAnswers({
      // ⛔️ Replace the existing questions with new questions here checkout skinWalkers example ⛔️
      question1: '',//⛔️
      question2: [],// Multiple answers will be stored in an array ✅ 
      question3: '',//⛔️
      skinWalkers: '',//✅
    });
  };

  // Handle input change for questions
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === 'checkbox' ? (checked ? [...prevAnswers[name], value] : prevAnswers[name].filter(item => item !== value)) : value,
    }));
  };

  //⛔️ Each team member can add a new question ⛔️
  return (
    <div className='form'>
      <h1>Form</h1>
      <hr style={{ width: "65%" }} />
      <form onSubmit={handleOnSubmit}>
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
            Which are water-type Pokemons?
            <br />
            <input
              type="checkbox"
              name="question2"
              value="Squirtle"
              checked={answers.question2.includes('Squirtle')}
              onChange={handleInputChange}
            />
            Squirtle
            <br />
            <input
              type="checkbox"
              name="question2"
              value="Pikachu"
              checked={answers.question2.includes('Pikachu')}
              onChange={handleInputChange}
            />
            Pikachu
            <br />
            <input
              type="checkbox"
              name="question2"
              value="Psyduck"
              checked={answers.question2.includes('Psyduck')}
              onChange={handleInputChange}
            />
            Psyduck
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
        <button type="submit">Submit</button>
      </form>

      <hr style={{ width: "65%" }} />

      <div>
        <h2>Submitted Answers:</h2>
        <ul>
          {submittedAnswers.map((item, index) => (
            <li key={index}>
              <strong>{item.question}: </strong>
              {Array.isArray(item.answer) ? item.answer.join(', ') : item.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;