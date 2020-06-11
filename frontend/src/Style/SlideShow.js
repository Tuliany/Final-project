import React from 'react';
import { Fade } from 'react-slideshow-image'
import Growth from './img/Growth.jpg'
import Connection from './img/Connection.jpg'
import Contemplation from './img/Contemplation.jpg'
import Entreprenurship from './img/Entreprenurship.jpg'
import Inspo from './img/Inspo.jpg'
import Sisters from './img/Sisters.jpg'
import Solidarity from './img/Solidarity.jpg'
import Visionaries from './img/Visionaries.jpg'
import WOB from './img/WOB.jpg'
 
const fadeImages = [
  '../Img/Connection.jpg',
  './Img/Contemplation.jpg',
  './Img/Growth.jpg',
  '.'
]
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`)
  }
}
 
export const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}