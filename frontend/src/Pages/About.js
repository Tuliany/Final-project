import React from 'react'
import '../Style/About.css'

export const About = () => {
  return ( 
  <div className="about">
      <div class="underline2"></div>
        <div class="sub-title">
          <div className="about-container">
            <div className="title-container"><h14>ABOUT</h14></div>
              <h13> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h13>
         </div>
    </div>
        <div class="image-container">
          <img className="about-pic" alt="about-pic" src="/Data/Img9.jpg" />
        </div>
  </div>
  )
}