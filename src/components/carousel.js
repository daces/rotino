
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

 const squareImage = graphql`
fragment squareImage on File {
  childImageSharp {
    fluid(quality:90, maxWidth: 500){
      ...GatsbyImageSharpFluid
    }
  }
}
`
export default function Carousel(){
const gall = useStaticQuery(graphql`
  query {
    img1: file(sourceInstanceName: {eq: "images"}, name: {eq: "carousel1"}) {
      ...squareImage
    }
    img2: file(sourceInstanceName: {eq: "images"}, name: {eq: "carousel2"}) {
      ...squareImage
    }
    img3: file(sourceInstanceName: {eq: "images"}, name: {eq: "carousel3"}) {
      ...squareImage
    }
    img4: file(sourceInstanceName: {eq: "images"}, name: {eq: "carousel4"}) {
      ...squareImage
    }
  }
`)
  var [ next500, setnext500 ] = useState(0);

  function handleClick(event){
    event.persist();
    const swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
    let swiperSize = 500;
    const maxImages = swiperWrapper.childElementCount ;
    const windowSize = window.innerWidth / 2;
    const isMobile = window.innerWidth <= 500;
    if( isMobile ) {
      swiperSize = 360;
    }
    // next image
    // if next image is clicked
    if( event.clientX >= windowSize ) {
      if( next500 / -swiperSize === maxImages - 1 ) { // if is last image => set to first
        swiperWrapper.setAttribute("style", `transform: translateX(0px);`);
        setnext500(0);
      }
      else {
          swiperWrapper.setAttribute("style", `transform: translateX(${next500 + -swiperSize}px);`);
          setnext500(next500 + -swiperSize);
      }
    }
    // prev image
    if( event.clientX <= windowSize ) { // if prev image is clicked
      if( next500 === 0 ) { // if is fist image => set to last
        swiperWrapper.setAttribute("style", `transform: translateX(${(maxImages-1) * -swiperSize}px);`);
        setnext500((maxImages-1) * -swiperSize);
      }
      if( next500 / -swiperSize > 0 ) {
        swiperWrapper.setAttribute("style", `transform: translateX(${next500 + swiperSize}px);`);
        setnext500(next500 + swiperSize);
      }
    }
    console.log( "works ", next500)
  }

  return <div className="swiper__container" onClick={handleClick} role="presentation">
    <div 
      className="swiper-wrapper"
      onClick={handleClick} role="presentation">
        <img src={gall.img1.childImageSharp.fluid.src} alt="dwa " />
        <img src={gall.img2.childImageSharp.fluid.src} alt="dwa " />
        <img src={gall.img3.childImageSharp.fluid.src} alt="dwa " />
        <img src={gall.img4.childImageSharp.fluid.src} alt="dwa " />
    </div>
      <p className="menu__image_text">Restourant Rotino</p>
   </div>
}