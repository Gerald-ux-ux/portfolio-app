import React from 'react'

const Contact = () => {
  return (
    <div >
      <form>
        <label className='input'>Name:
          <input type="text" autoComplete='yes' placeholder='Jane Doe' />
        </label>
      </form>
      <form>
        <label className='input'>Email:
          <input type="text" autoComplete='yes' placeholder='Janedoe@gmail.com' />
        </label>
      </form>
      <form>
        <label className='input'>Phone Number:
          <input type="number" autoComplete='yes' placeholder='+254 712345678' />
        </label>
      </form>
      <form>
        <label className='input'>Message:
          <input type="text" autoComplete='yes' placeholder='Write your custom message' />
        </label>
      </form>
      <button>
        Submit
      </button>
    </div>
  )
}

export default Contact