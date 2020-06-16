import React from 'react'
import { useHistory } from 'react-router-dom';
import { SlideShow } from 'components/SlideShow'
// import '../Style/Home.css'



export const Home = () => {
  const history = useHistory()

  return (

 

    <div>
      <section className="main">
  
        <h1>W Club Official 💎 </h1> 
      </section>
      
      <form className="Home">
          <button type ="Login" onClick={() => history.push('/Login')}> Log in  </button>
          <button type ="Signup" onClick={() => history.push('/Signup')}> Create Accout </button>  
      </form>
      <SlideShow />
    </div>
    
  )
}