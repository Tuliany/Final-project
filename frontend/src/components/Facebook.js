import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, login } from '../reducers/user'

import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';



export const Facebook = () =>{
  const [accessToken, setAccessToken] = useState('')
  const dispatch = useDispatch()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)

  const history = useHistory()
  const componentClicked = data =>{
    console.log('data', data)
  }

  const responseFacebook = (response) => {
    setAccessToken(response.accessToken)
  }
  
  useEffect (()=>{
    if (accessToken){
      history.push('./secrets')
    }
  })

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

 
  if (!accessToken){
    return (
  <div> 
  <FacebookLogin
    appId="3054377501311620"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} 
    />
    </div>
    )
} else {
  return <null />
}
}



// export const Facebook = () => {
//   state = {
//     isLoggedIn: false,
//     userId: '',
//     name: '',
//     email: '',
//     picture: '',
//   }

//   const responseFacebook = response =>  {
//     console.log(response)
//   }
  
//    const componentClicked = () => console.log('clicked');
//    const fbContent = () =>{
//     if (this.state.isLoggedIn) {
//       fbContent = null
//     } else {
      
//     <FacebookLogin
//   appId="3054377501311620"
//   autoLoad={true}
//   fields="name,email,picture"
//   onClick={this.componentClicked}
//   callback={this.responseFacebook} 
//   />
//     }
//   }
  
//     return (<div>{fbContent}</div>
//     )
//   } 


