import React, {useState}from 'react'

const Form = () => {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    
    // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleOnSubmit}>
        <button>Submit</button>
        </form>

    </div>
  )
}

export default Form