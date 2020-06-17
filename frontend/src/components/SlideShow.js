import React from "react";
import '../Style/SlideShow.css'


import HeroSlider, {
  Slide,
  OverlayContainer,
  AutoplayButton
} from "hero-slider";


// Images
const Growth = "/Data/Img1.jpg"
const Solidarity = "/Data/Img4.jpg"
const Inspiration= "/Data/Img5.jpg"
const Entrepreneurship = "/Data/Img6.jpg"
const WOB = "/Data/Img9.jpg"

export const SlideShow = () => {
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        sliderFadeInDuration: 50,	
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        height: "90vh"
      }}
    >
      <OverlayContainer>

          <div class="slider">
              <div class="slider-text1">Growth</div>
              <div class="slider-text2">Sisterhood</div>
              <div class="slider-text3">Inspiration</div>
              <div class="slider-text4">Entrepreneurship</div>
              <div class="slider-text5">Women of Marbella</div>
          </div>
      </OverlayContainer>
        <AutoplayButton />
      <Slide
        background={{
          backgroundImage: Growth,
          backgroundAnimation: "zoom",
          // maskBackgroundBlendMode: 'luminosity',	
        }}
      />

      <Slide
        background={{
          backgroundImage: Solidarity,
          backgroundAnimation: "zoom",
          maskBackgroundBlendMode: 'luminosity',
        }}
      />

      <Slide
        background={{
          backgroundImage: Inspiration,
          backgroundAnimation: "zoom",
          maskBackgroundBlendMode: 'luminosity',
        }}
      />

      <Slide
        background={{
          backgroundImage: Entrepreneurship,
          backgroundAnimation: "zoom",
          maskBackgroundBlendMode: 'luminosity',
        }}
      />

      <Slide
        background={{
          backgroundImage: WOB,
          backgroundAnimation: "zoom"
        }}
      />

    </HeroSlider>
  );
};























// THRID TRY

// import React from 'react'
// import HeroSlider, { Slide, Nav, AutoplayButton} from 'hero-slider'


// const kyoto = '/Data/Img1.jpg'
// const tenryuJiTemple = '/Data/Img2.jpg'
// const hakone = '/Data/Img3.jpg'
// const byodoInTemple = '/Data/Img4.jpg'

// export const SlideShow = () => {
//   return (
//     <HeroSlider
//       slidingAnimation='fade'
//       orientation='horizontal'
//       set
//       initialSlide={1}
//       style={{
//         backgroundColor: '#000'
//       }}
//       settings={{
//         slidingDuration: 500,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: false,
//         autoplayDuration: 2000,
//         height: '90vh'
//       }}>
   
//       <AutoplayButton />

//       <Slide
//         shouldRenderMask
//         background={{
//           backgroundColor: '#8A8A8A',
//           maskBackgroundBlendMode: 'luminosity',
//           backgroundImage: kyoto,
//           backgroundAnimation: 'fade'
//         }} />

//       <Slide
//         shouldRenderMask
//         background={{
//           backgroundColor: '#8A8A8A',
//           maskBackgroundBlendMode: 'luminosity',
//           backgroundImage: tenryuJiTemple,
//           backgroundAnimation: 'fade',
//           title: "Growth"
//         }} />

//       <Slide
//         shouldRenderMask
//         background={{
//           backgroundColor: '#8A8A8A',
//           maskBackgroundBlendMode: 'luminosity',
//           backgroundImage: hakone,
//           backgroundAnimation: 'fade'
//         }} />

//       <Slide
//         shouldRenderMask
//         background={{
//           backgroundColor: '#8A8A8A',
//           maskBackgroundBlendMode: 'luminosity',
//           backgroundImage: byodoInTemple,
//           backgroundAnimation: 'fade'
//         }} />

//       <Nav />
//     </HeroSlider>
//   )
// }




// import React, {useState} from 'react';
// import { Carousel } from 'react-responsive-carousel'
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { CSSTransition, SwitchTransition } from 'react-transition-group'


// const photoAlbum = [
//   {
//     name: "Growth",
//     image: '/Data/Img1.jpg'
//   },
//   {
//     name: "Connection",
//     image: '/Data/Img2.jpg'
//   },
//   {
//     name: "Solidarity",
//     image: '/Data/Img3.jpg'
//   },
//   {
//     name: "Vision",
//     image: '/Data/Img4.jpg'
//   }
// ]

// export const SlideShow = () =>{
//   return(
//     <Carousel infiniteLoop useKeyboardArrows autoPlay 
//   emulateTouch
//   enterClass="animated fadeIn faster"
//   exitClass="animated fadeOut faster"
//   exitTimeout={400}
// >    
//      <div class="carousel" data-transition="fade">
//        <img src="/Data/Img1.jpg" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div class="carousel" data-transition="fade">
//        <img src="../data/Img2.jpg" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div class="carousel" data-transition="fade">
//        <img src="../data/Img3.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div class="carousel" data-transition="fade">
//        <img src="../data/Img4.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//        <img src="../data/Img5.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//        <img src="../data/Img6.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//        <img src="../data/Img7.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//        <img src="../data/Img8.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//        <img src="../data/Img9.jpg" />
//         <p className="legend">Legend 3</p>
//       </div>
//       </Carousel>
//   )
// }









// import { CSSTransition,SwitchTransition } from 'react-transition-group'

// export const SlideShown = () =>{
//   const [state, setState]= useState(true)
//   return(
//     <>
//     <div className="main">
//       <SwitchTransition mode = {'in-out'}>
//         <CSSTransition
//         key={state}
//         addEndListener={(node, done) =>{
//           node.addEventListener('transitioned', done, false)
//         }}
//         className="fade"
//         >

//       </CSSTransition>
//       </SwitchTransition>

//  </div>
//     </>
//   )
// }