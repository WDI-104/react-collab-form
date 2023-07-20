import React, { useState } from 'react'

const Form = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);



  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        <br />
        <label htmlFor="multipleAnswer">which are water-type Pokemons?</label>
        <br />
        <input type="checkbox" id="option1" value="option1" />
        <label htmlFor="option1">Squirtle</label>
        <input type="checkbox" id="option2" value="option2" />
        <label htmlFor="option2">Pikachu</label>
        <input type="checkbox" id="option3" value="option3" />
        <label htmlFor="option3">Psyduck</label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form