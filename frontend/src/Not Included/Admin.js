import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import { logout, login } from '../reducers/user'

import { useDispatch, useSelector } from 'react-redux'
// import '../Style/Admin.css'

export const Admin = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.user.login.userName)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })
  
  const handleLogout = event => {
    event.preventDefault()
    dispatch(logout())
    history.push('/')
  }

  const handleBlogpost = event => {
    event.preventDefault()
    // dispatch(accessToken({ accessToken }))
    history.push('/blogpost')
  }
 

  return (
    <div className="ruta"> 

       <h4> {`Welcome ${userName}`}</h4>
       
    </div>
  )
}