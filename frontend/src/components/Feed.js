import React from 'react'
import moment from 'moment' 

export const Feed = ({ thought, onLiked }) => {
  const { message, hearts, createdAt, _id } = thought

  const handleClick = () => {
    fetch(`https://final-project-by-tuliany.herokuapp.com/feed/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <article className='happy-feed'>
      <h3>{message}</h3>
      <div className="comment">
        <button
          onClick={handleClick}
          className={ hearts > 0 ? 'liked' :  'notLiked' }
        >
          <span role='img' aria-label='Heart'>
            💜 x {hearts}
          </span> 
        </button>
       
         <p>{moment(createdAt).fromNow()}</p>
         </div>
    </article>
  )
}



// import React from 'react'
// import moment from 'moment'

// export const Feed = ({ message, onLiked }) => {
//   const {messages, hearts, createdAt, _id} = message

//   const handleClick = () =>{
//   fetch (`https://final-project-by-tuliany.herokuapp.com/feed/${_id}/like`, {
//     method: 'POST',
//     body: '',
//     headers: { 'Content-Type': 'application/json' }
//   }).then (() => onLiked(_id))
// }
// return(
//   <article className='feed'>
//     <h3>{messages}</h3>
//     <button
//      onClick={handleClick}
//      className={hearts > 0 ? 'liked': 'notLiked'}>
//        <span role='img' aria-label='liked'>
//          👍🏽x {hearts}
//        </span>
//      </button>
//      <p>{moment(createdAt).fromNow()}</p>
//   </article>
// )
// }