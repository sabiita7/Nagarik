import React from 'react'
import './username.css'

const Username = () => {
  return (
    <div className='form__container'>
      <form>
        
        <span>Current UserName:  <input type="text" name='username'/></span>
        <span>Change UserName: <input type="text" name='changeusername'/></span>
        <span>Confirm Username: <input type="text" name='confirmusername'/></span>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Username
