import React,{ useState, useEffect, useRef } from 'react';
import Slider from 'react-slick'
import { Fade } from 'react-slideshow-image'
import styled from 'styled-components'

import Img1 from '../Img/Img1.jpg'
import Img2 from '../Img/Img2.jpg'
import Img3 from '../Img/Img3.jpg'
import Img4 from '../Img/Img4.jpg'
import Img5 from '../Img/Img5.jpg'
import Img6 from '../Img/Img6.jpg'
import Img7 from '../Img/Img7.jpg'
import Img8 from '../Img/Img8.jpg'
import Img9 from '../Img/Img9.jpg'
 

const Wrapper = styled.div`
  width: 100%
`

const Page = styled.div`
  width: 100%
`


export const Slideshow = () =>{
  return (
    <div>
      <Wrapper>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={false}
          dots={true}
        >
          <Page>Page one </Page>
          <Page>Page Two</Page>
          <Page>Page Three</Page>
        </Slider>
      </Wrapper>
    </div>
  )
}






 
// const fadeImages = [
//   '../Img/Img1.jpg',
//   '../Img/Img2.jpg',
//   '../Img/Img3.jpg',
//   '../Img/Img4.jpg',
//   '../Img/Img5.jpg',
//   '../Img/Img6.jpg',
//   '../Img/Img7.jpg'
// ]

// // const autoPlayRef = useRef()

// // useEffect(() => {
// //   autoPlayRef.current = nextSlide
// // })
 
// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`)
//   }
// }
 
// export const SlideShow = () => {
//   return (
//     <div className="slide-container">
//       <Fade {...fadeProperties}>
//         <div className="each-fade">
//           <div className="image-container">
//             <img className="Img"src={Img1} alt="Img1" />
//           </div>
//           <h2>First Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img className="Img" src={Img2} alt="Img2" />
//           </div>
//           <h2>Second Slide</h2>
//         </div>
//         <div className="each-fade">
//           <div className="image-container">
//             <img className="Img"src={Img3} alt="Img3" />
//           </div>
//           <h2>Third Slide</h2>
//         </div>
//       </Fade>
//     </div>
//   )
// }