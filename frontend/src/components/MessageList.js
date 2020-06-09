import React, { useEffect, useState } from 'react'
import { Feed } from 'components/Feed'
import { Post } from 'components/Post'

const url = 'https://final-project-by-tuliany.herokuapp.com/feed'

export const MessageList = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <Post onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <Feed key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </main>
  )
}







// import React, {useEffect, useState} from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import { Post } from 'components/Post'
// import { Feed } from 'components/Feed'

// const url = 'https://final-project-by-tuliany.herokuapp.com/feed'

// export const MessageList = () => {
//   const [messages, setMessages] = useState([])
//   const [postedMessages, setPostedMessages] = useState('')

//   useEffect(()=> {
//     fetch(url)
//     .then(res => res.json())
//     .then(json => setMessages(json))
//   }, [postedMessages])

//   const onFormSubmit = message => {
//     setPostedMessages(message)
//   }
//   const onLiked = messageId => {
//     console.log ('Logging in APP.js', messageId)

//     const updatedMessages = messages.map(message => {
//       if(message._id === messageId) {
//         message.hearts +=1
//       }
//       return message
//     })
//     setMessages(updatedMessages)
//   }
//   return (
//     <main>
//       <Post onFormSubmit={onFormSubmit} />
//       {messages.map(message=>(
//         <Feed key={messages._id} message={messages} onLiked={onLiked} />
//       ))}
//     </main>
//   )
// }
