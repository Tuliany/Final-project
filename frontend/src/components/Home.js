import React from 'react'
import { useHistory } from 'react-router-dom';
import '../Style/Home.css'



export const Home = () => {
  const history = useHistory()

  return (

 

    <div>
      <section className="main">
      <div class="content">
        <div class="slider-wrapper">
          Welcome to our community for...
          <div class="slider">
              <div class="slider-text1">Growth</div>
              <div class="slider-text2">Connection</div>
              <div class="slider-text3">Visionaries</div>
              <div class="slider-text4">Inspiration</div>
              <div class="slider-text5">Entrepreneurship</div>
              <div class="slider-text6">Women of Marbella</div>
          </div>
        </div>       
      </div>

        <h1>W Club Official 💎 </h1>
      </section>
      <form className="Home">
          <button type ="Login" onClick={() => history.push('/Login')}> Log in  </button>
          <button type ="Signup" onClick={() => history.push('/Signup')}> Create Accout </button>  
      </form>
    </div>
  )
}