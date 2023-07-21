import React from 'react'

const McFour = ({ handleInputChange }) => {
  const [selection, setSelection] = useState('')
  return (
    <div>
      <p>What are your plans after graduation?</p>
      <label htmlFor="">
          <input type='radio' value="Developer Role" onChange={handleInputChange} />
          Developer Role
      </label>

      <label>
          <input type='radio' value="Freelancer" onchange={handleInputChange} />
          Freelancer
      </label>

      <label>
          <input type='radio' value="Personal Project" onchange={handleInputChange} />
          Personal Project
      </label>

      <label>
          <input type='radio' value="More School" onchange={handleInputChange} />
          More School
      </label>
    </div>
  )
}

export default McFour