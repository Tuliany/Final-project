import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contact: {
    contactName: null,
    contactErrorMessage: null
  }
}

export const lead = createSlice ({
  name:'lead',
  initialState: initialState,
  reducers: {
    setContactName: (state, action) =>{
      const { contactName } = action.payload
      console.log( `ContactName: ${contactName}`)
      state.contact.contactName= contactName
    },
    setContactErrorMessage: (state, action) => {
      const {contactErrorMessage} = action.payload 
      console.log(`contactErrorMessage: ${contactErrorMessage}`)
      state.contact.contactErrorMessage = contactErrorMessage
    }
  }
})

export const contact = (name, email, message ) =>{
  const CONTACT_URL ='https://final-project-by-tuliany.herokuapp.com/contact'
  return (dispatch, getState) =>{
    fetch(`${CONTACT_URL}`,
    {
      method:'POST',
      body:JSON.stringify({name, email, message}),
      headers: { 'Content-Type': 'application/json'}
    })
    .then((res)=>{
      if (!res.ok){
        throw 'message failed to send'
      }
      return res.json()
    })
    .then ((json)=>{
      dispatch(lead.actions.setContactName({contactName: name }))
     
    })
    .catch((err)=>{
      dispatch(lead.action.setContactErrorMessage({errorMessage: err}))
    })
  }
}