import React from 'react'


const Contact = () => {
  return (
    <div >
      <form>
        <label className='form-control'>Name:
          <input type="text" autoComplete='yes' placeholder='Jane Doe' />
        </label>
      </form>
      <br></br>
      <form>
        <label className='form-control'>Email:
          <input type="text" autoComplete='yes' placeholder='Janedoe@gmail.com' />
        </label>
      </form>
      <br></br>
      <form>
        <label className='form-control'>Phone Number:
          <input type="number" autoComplete='yes' placeholder='+254 712345678' />
        </label>
      </form>
      <br></br>
      <form>
        <label className='form-control'>Message:
          <input type="text" autoComplete='yes' placeholder='Write your custom message' />
        </label>
      </form>
      <br></br>
      <button className='btn btn-secondary btn-sm'>
        Submit
      </button>
    </div>
  )
}

export default Contact