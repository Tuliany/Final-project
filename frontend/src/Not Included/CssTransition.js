import React from 'react';
import { CSSTransition,SwitchTransition } from 'react-transition-group'

export const CssTransition = () =>{
  const [state, setState] = React.useState(true)
  return(
    <>
    <div className="main">
      <SwitchTransition mode = {'in-out'}>
        <CSSTransition
        key={state}
        addEndListener={(node, done) => {
          node.addEventListener('transitioned', done, false)

        }}
        classNames="fade">
          <div className= "image-container">
            <button onClick={()=> setState(!state)}>
              {state ? "Hello World" : "Goodbye World!"}
            </button>
          </div>
        </CSSTransition>
      </SwitchTransition>

    </div>
    </>
  )
}






// export default class SlideShow extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       SlideShowearHome: true,
//       property: data.properties[0]
//     }
//   }

//   toggleSlideShowear = () => {
//     this.setState({
//       SlideShowearHome: !this.state.SlideShowearHome
//     })
//   }

//   nextProperty = () => {
//     const newIndex = this.state.property.index+1;
//     this.setState({
//       property: data.properties[newIndex]
//     })
//   }

//   prevProperty = () => {
//     const newIndex = this.state.property.index-1;
//     this.setState({
//       property: data.properties[newIndex]
//     })
//   }

//   render() {
//     const {SlideShowearHome, property} = this.state;
//     return (
//       <div className="SlideShow">
//         <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
//         <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
//         <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>

//         <CSSTransition
//           in={appearHome}
//           appear={true}
//           timeout={1000}
//           classNames="fade"
//         >
//           <Home property={property} />
//         </CSSTransition>
//       </div>
//     );
//   }
// }





// export const Slideshow = () =>{
//   const [appearHome, setAppearHome] = useState()
//   const []

  
//   return ( 
//     <div>
//        <div className="slides">
//         <button onChange={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
//         <button onChange={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
//         <button onChange={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>

//         <CSSTransition
//           in={appearHome}
//           appear={true}
//           timeout={1000}
//           classNames="fade"
//         >
//           <Home property={property} />
//         </CSSTransition>
//       </div>
//     </div>
//   )
// }
















// export const Slideshow = () =>{
//   return (
//     <div>
//       <Wrapper>
//         <Slider
//           speed={500}
//           slidesToShow={1}
//           slidesToScroll={1}
//           infinite={false}
//           dots={true}
//         >
//           <Page>Page one </Page>
//           <Page>Page Two</Page>
//           <Page>Page Three</Page>
//         </Slider>
//       </Wrapper>
//     </div>
//   )
// }






 
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