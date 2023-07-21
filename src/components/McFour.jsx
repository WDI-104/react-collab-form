import React from 'react'

const McFour = () => {
  const [selection, setSelection] = useState('')
  return (
    <div>
      <p>What are your plans after graduation?</p>
      <label htmlFor="">
            <input type='radio' value="Developer Role" onChange={() => setSelection(e.target.value)} />
            Developer Role
          </label>
          <label>
            <input type='radio' value="Freelancer" onchange={() => setSelection(e.target.value)} />
            Freelancer
          </label>
          <label>
            <input type='radio' value="Personal Project" onchange={() => setSelection(e.target.value)} />
            Personal Project
          </label>
          <label>
            <input type='radio' value="More School" onchange={() => setSelection(e.target.value)} />
            More School
          </label>
    </div>
  )
}

export default McFour