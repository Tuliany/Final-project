import React from 'react'
import { useHistory } from 'react-router-dom';
// import Navbar from 'navbar-react'



export const Home = () => {
  const history = useHistory()

  return (

 

    <div>
      <section className="header">
        <h1>W Club Official 💎 </h1>
      </section>
      <form className="Home">
          <button type ="Login" onClick={() => history.push('/Login')}> Log in  </button>
          <button type ="Signup" onClick={() => history.push('/Signup')}> Create Accout </button>  
      </form>
    </div>
  )
}