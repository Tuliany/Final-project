import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { user, login } from '../reducers/user'
import '../Style/Login.css'

export const Login = () => {
   const history = useHistory()
   const dispatch = useDispatch()
   const accessToken = useSelector((store) => store.user.login.accessToken)
   const errorMessage = useSelector((store) => store.user.login.errorMessage)

   const [name, setName] = useState('')
   const [password, setPassword] = useState('')
   
   const handleLogin = event => {
    event.preventDefault()
    dispatch(login(name, password))
  }  

  useEffect (() => {
  if (accessToken) {
    history.push('/')
  } 
})

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

 if (!accessToken) {
  return (
    <div className="login">
      <form className="content">
        <div className="title">LOG IN!</div>
          <input type="text" placeholder="Name"required 
            value={name} onChange={event => setName(event.target.value)}/>
          <input type="password" placeholder="Password"required 
            value={password} onChange={event => setPassword(event.target.value)}/>  
          <button type="submit" onClick={handleLogin}> Login</button>
        <div class="already">Create an account? <a href="./signup">Sign up</a></div>
      </form>
      <h3>{errorMessage && <p> {`${errorMessage} `}</p>}</h3>
    </div>
  )
} 
else {
  return <null/>
}
}
export default Login


