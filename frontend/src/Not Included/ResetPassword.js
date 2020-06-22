import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ResetPassword = () =>{
  const { token } = useParams ()
  const [email, setEmail] = useState('')
  // const [newPassword, setNewPassword] = useState('')




  const handleSubmit = e =>{
    e.preventDefault()
    fetch('http://localhost:8080/reset', {
      method: 'POST',
      body: JSON.stringify({ email, token }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then ((res) =>{
      if (!res.ok) {
        console.log('error')
      } else {
        return res.json()
      }
    })
    .then(()=>{
      setEmail('')
    })
    .catch((err)=> console.log('errors', err))
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Reset password</button>

      </form>
    </div>
  )
}