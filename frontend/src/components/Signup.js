import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { user,signup } from '../reducers/user'

import '../Style/Signup.css'

export const Signup = () => {
  const history = useHistory ()
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const signupError = useSelector((store) => store.user.login.signupErrorMessage)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')

  const handleSignup = event => {
    event.preventDefault()
    dispatch(signup(name, email, password))
    // history.push('/secrets')
  }
 
  useEffect (() => {
    if (accessToken) {
      history.push('/admin')
    }
  })

  useEffect(() => {
    dispatch(user.actions.setSignupErrorMessage({ signupError: null }))
  }, [dispatch])
  
  return (
    <div>
      <form className="content">
        <div class="title">Create account</div>
            <input type="text" placeholder="Name"required 
            value={name} onChange={event => setName(event.target.value)}/>
          
         
            <input type="email" placeholder="Email"required 
            value={email} onChange={event => setEmail(event.target.value)}/>
        
            <input type="password" placeholder="Password"required 
            value={password} onChange={event => setPassword(event.target.value)}/>
            
            <input type="checkbox" id="rememberMe"/>
            <label for="rememberMe"></label><span>I have read and agree to the <a className="terms" href="#">Terms of Use </a>and <a href="#">Privacy Policy</a></span>
            <button type="submit" onClick={handleSignup}>Create Account</button>
      
      </form>
    <h3>{signupError && <p> {`${signupError}`}</p>}</h3>
  </div>
  )
}