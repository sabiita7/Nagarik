import React from 'react'
import './username.css'

const Password = () => {
  return (
    <div>
         <form>
        
        <span>Current Password:  <input type="text" name='password'/></span>
        <span>Change Password: <input type="text" name='changepassword'/></span>
        <span>Confirm Password: <input type="text" name='confirmpassword'/></span>
        <button>Submit</button>

      </form>
      
    </div>
  )
}

export default Password
