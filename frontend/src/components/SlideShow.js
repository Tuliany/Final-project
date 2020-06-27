import React from "react";
import '../Style/SlideShow.css'


import HeroSlider, {
  Slide,
  OverlayContainer,
  AutoplayButton
} from "hero-slider"


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
        height: "82vh"
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
  )
}























