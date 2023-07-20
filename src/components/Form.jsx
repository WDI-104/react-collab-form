import React, {useState}from 'react'

const Form = () => {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    // State to store the submitted answers as a list
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Add the current answers to the submitted answers list
    setSubmittedAnswers([
      ...submittedAnswers,
      { question: 'Question 1', answer: answer1 },
      { question: 'Question 2', answer: answer2 },
      { question: 'Question 3', answer: answer3 },
      { question: 'Question 4', answer: answer4 },
    ]);

    // Clear the form after submission
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
  };

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleOnSubmit}>
            {/* Input fields for answers */}
        {/* <label> example
          Question 1:
          <input type="text" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
        </label> */}
        
        <button>Submit</button>
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
  )
}

export default Form