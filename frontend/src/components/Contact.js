import React, {useState} from 'react'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
    
  
  
  const handleSubmit=(e)=> {
    e.preventDefault()
    fetch('http://localhost:8080/contact', {
        method: "POST",
        body: JSON.stringify({name, email, message}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then ((res) => {
        if (!res.ok) {
            console.log('error?') 
        }else {
          return res.json()
        }
      })
      .then(()=>{
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err)=> console.log('errors', err))
  }
    
 
  return(
    <div>
     <form onSubmit={handleSubmit}>
       <input id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
       <input id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
       <input id="message" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
       <button onClick={handleSubmit}>Send message</button>

     </form>
   </div>
  )
}








//FOURTH TRY
// import React, {useState, useEffect } from 'react'
// import axios from 'axios'
// exportconst Contact = () => {
//  const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const handleClick=(e) => {
//     e.preventDefault()

//     if (e.target.id === "name") {
//     setName(e.target.value)
//   } else if (
//     setEmail(e.target.value)) {
//   } else {
//     setMessage(e.target.value)
//   }
// }

// const handleSubmit=(e)=>{
//   e.preventDefault()
// const dataToSubmit ={
//   name,
//   email,
//   message
// }

// axios.post('https://final-project-by-tuliany.herokuapp.com/contact', dataToSubmit)

// }


//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input id="name" placeholder="Name" value={name} onChange={handleClick}/>
//         <input id="email" placeholder="Email" value={email} onChange={handleClick}/>
//         <input id="message" placeholder="Message" value={message} onChange={handleClick}/>
//         <button onClick={handleSubmit}>Send message</button>

//       </form>
//     </div>
//   )
// }








// export const Contact = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
  


//   const handleSubmit=(e)=> {
//   e.preventDefault()
//   fetch('https://final-project-by-tuliany.herokuapp.com/contact', {
//       method: "POST",
//       body: JSON.stringify({name, email, message}),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     }).then(
//     (response) => (response.json())
//      ).then((response)=>{
//     if (response.status === 'success'){
//       alert("Message Sent."); 
//       this.resetForm()
//     }else if(response.status === 'fail'){
//       alert("Message failed to send.")
//     }
//   })}

// 	return(
//   	<div className="App">
//   	<form id="contact-form" onSubmit={handleSubmit} method="POST">
//   	<div className="form-group">
//       	<label htmlFor="name">Name</label>
//       	<input type="text" className="form-control" id="name" value={name} onChange={e =>setName(e.target.value)} />
//   	</div>
//   	<div className="form-group">
//       	<label htmlFor="exampleInputEmail1">Email address</label>
//       	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e=>setEmail(e.target.value)} />
//   	</div>
//   	<div className="form-group">
//       	<label htmlFor="message">Message</label>
//       	<textarea className="form-control" rows="5" id="message" value={message} onChange={e=>setMessage(e.target.value)} />
//   	</div>
//   	<button type="submit" className="btn btn-primary">Submit</button>
//   	</form>
//   	</div>
// )}


// import React, {useState, useEffect} from 'react';



//   onNameChange(event) {
// 	this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
// 	this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
// 	this.setState({message: event.target.value})
//   }
// }



//THIRD TRY


// import React from 'react';
// import axios from 'axios';

// export const Contact = () =>{
//   const 
//   constructor=(props)=> {
// 	super(props);
// 	this.state = {
//   	name: '',
//   	email: '',
//   	message: ''
// 	}
//   }

//   handleSubmit=(e)=>{
//     e.preventDefault();
//     axios({
//       method: "POST", 
//       url:"http://localhost:3002/send", 
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success'){
//         alert("Message Sent."); 
//         this.resetForm()
//       }else if(response.data.status === 'fail'){
//         alert("Message failed to send.")
//       }
//     })
//   }
//     onNameChange=(event)=> {
//     this.setState({name: event.target.value})
//     }
  
//     onEmailChange=(event)=> {
//     this.setState({email: event.target.value})
//     }
  
//     onMessageChange=(event)=> {
//     this.setState({message: event.target.value})
//     }
//   resetForm=()=>{
//     this.setState({name: '', email: '', message: ''})
//   }
  
 
// 	return(
//   	<div className="contact">
//   	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//   	<div className="form-group">
//       	<label htmlFor="name">Name</label>
//       	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//   	</div>
//   	<div className="form-group">
//       	<label htmlFor="exampleInputEmail1">Email address</label>
//       	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//   	</div>
//   	<div className="form-group">
//       	<label htmlFor="message">Message</label>
//       	<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//   	</div>
//   	<button type="submit" className="btn btn-primary">Submit</button>
//   	</form>
//   	</div>
// 	);
  

 
// }






//SECOND TRY

// import React,{useEffect,useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {lead} from '../reducers/lead'


// export const Contact = () => {
// const dispatch = useDispatch()
// const contactName = useSelector((store)=> store.lead.contact.contactName)
// const contactErrorMessage = useSelector((store)=> store.lead.contactErrorMessage)

// const [name, setName] = useState('')
// const [email, setEmail] = useState('')
// const [message, setMessage]= useState('')


  
// const handleSubmit=(event)=> {
//   event.preventDefault()
//   dispatch(lead(name, email, message))
// }

// useEffect(()=>{
//   if (contactName) {
//    const resetForm = () =>{
//       this.setState({name:'', email:'', message:''})
//      }
//   }
// })

// useEffect(()=>{
//   dispatch(lead.actions.setContactErrorMessage({ contactErrorMessage: null}))
// }, [])

    
//   return(
//     <div className="contact">
//    <form id="contact-form">
//     <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" className="form-control" value={name} onChange={event=>setName(event.target.value)} />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={event=>setEmail(event.target.value)} />
//     </div>
//     <div className="form-group">
//         <label htmlFor="message">Message</label>
//         <textarea className="form-control" rows="5" value={message} onChange={event=>setMessage(event.target.value)} />
//     </div>
//     <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
//     </form>
//     </div>
//   )
// }


//FIRST TRY

// const url = 'https://final-project-by-tuliany.herokuapp.com/contact'

// constructor = (props) => {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     message: ''
  //   }
// useEffect (()=>{

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(this.state),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type':'application/json'
//     }
//   }) 
//     .then(
//       (response) => (response.json())
//     ).then((response)=>{
//       if (response.status === 'success'){
//         alert('Message sent')
//         this.resetForm()
//       }else if (response.status === 'fail'){
//         alert('message failed to send')
//       }
//     })
// // })

// import React from 'react'

// export const Contact =()=>{
//   return(
//     <p>wtf?</p>
//   )