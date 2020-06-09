import React, { useState } from 'react'


const url = 'https://final-project-by-tuliany.herokuapp.com/feed'

export const Post = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setMessage('')
        props.onFormSubmit(message)
      })
  }

  return (
    <form className='happy-message'>
      <h3>Intern feed</h3>
      <textarea
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='footer'></div>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140} // this will be interpreted as true or false
        >
          Post a thought
        </button>
        <p>{message.length} / 140</p>
    </form>
  )
}



// import React, {useState, useEffect} from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import { messages, feed } from '../reducers/messages'

// const url = 'https://final-project-by-tuliany.herokuapp.com/feed'

// export const Post = props => {
//   const [message, setMessage] = useState('')

//   const handleSubmit = event => {
//     event.preventDefault()
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({message}),
//       headers: { 'Content-Type': 'application/json'}
// })  
//     .then(()=>{
//       setMessage('')
//       props.onFormSubmit(message)
//     })  
// }

//   return (
//     <form className='post'>
//       <textarea
//         rows='3'
//         value={message}
//         onChange={event => setMessage(event.target.value)}
//         ></textarea>
//         <button
//         type='submit'
//         onClick={handleSubmit}
//         disabled={message.length <5 || message.length > 140}>

//         </button>
    
//     <p>{message.length}/140</p>
//     </form>
//   )
// }