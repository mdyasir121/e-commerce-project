import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text'  placeholder='Your Name'/>
          <input type='email'  placeholder='Email Address'/>
          <input type='password'  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
        <input type='checkbox'  name='' id=''/>
        <p>By Continuing, i agree to the terms and use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
