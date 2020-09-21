import React from "react"
import { Row, Col, Container } from "react-bootstrap"
//import { Row, Col, Container, Carousel } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Img } from 'react-progressive-loader'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"



export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp{
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid
      }
    }
  }
`


const IndexPage = () => {
  const imagesQuer = useStaticQuery(graphql`
  query {
    logo: file(relativePath:{eq: "wallhaven-49jgl1.jpg"}){
      ...squareImage
    }
    about: file(relativePath:{eq: "background3.jpg"}){
      ...squareImage
    }
    dish1: file(relativePath:{eq: "carousel1.jpg"}){
      ...squareImage
    }
    dish2: file(relativePath:{eq: "pizza.jpg"}){
      ...squareImage
    }
    wedding: file(relativePath:{eq: "wedding.jpg"}){
      ...squareImage
    }
    corporate: file(relativePath:{eq: "corporate.jpg"}){
      ...squareImage
    }
    private: file(relativePath:{eq: "private.jpg"}){
      ...squareImage
    }
    owner: file(relativePath:{eq: "wallhaven-ymvrjl.jpg"}){
      ...squareImage
    }
  }
  `)
  return (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container fluid className="text-center">
   
    <Row  className="margin-t-30">

        <Col  className="header text-center minus-p">
         <BackgroundImage
          fluid={imagesQuer.logo.childImageSharp.fluid}
          className="hero_image"
          >
          <div className="header__inner">
            <div >
            <h1 className="header__title header__title_theme-dark">Welcome to rotino</h1>
            <button className="header__button button header__button_dark">Make Reservation</button>
            </div>
          </div>
          </BackgroundImage>
        </Col>
      </Row>

      <Row className="justify-content-center gapless">
        <Col sm="12" md="6" className="nopadding">
          <div className="story margin-t-30">
            <h2 className="story__title">OUR STORY</h2>
            <div className="story__description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, nibh eu gravida laoreet, 
                elit massa facilisis erat, et tincidunt justo ex vitae libero. Maecenas arcu nisl, faucibus at lacus sit amet, 
                pulvinar luctus urna. Donec in convallis ante. Praesent risus nisl, consectetur ac ullamcorper vitae, 
                egestas id dolor. Vivamus suscipit eleifend ornare. Nullam purus dui, porta in lorem ac, 
              </p>
              <p>feugiat venenatis lorem. Nam non varius arcu. Pellentesque et volutpat ipsum, at pulvinar libero. 
                Nullam sagittis fermentum ante sit amet rutrum. Aliquam blandit vel nulla aliquam euismod.</p>
            </div>
            <button className="story__button button">KNOW MORE ABOUT US</button>
          </div>
        </Col>
        <Col sm="12" md="6" className="story__image_col">
          <Img src={imagesQuer.about.childImageSharp.fluid.src} loadOnScreen style={{}} className="story__image" alt="story " />
        </Col>
      </Row>

      <Row className="margin-tb-30">
        <Col className="banner">
          <h2 className="banner__title">Traditional Italian Cuisine with Contemporary Elan</h2>
        </Col>
      </Row>
      
      <Row>
        <Col className="menu">
          <h2 className="menu__title">Our menu</h2>
          <p className="menu_description">Complex and flavorsome Italian fare developed for the sophisticated new yorker</p>
        </Col>

      </Row>      
      <Row>
        <Col className="menu__image">
        <Carousel />
         <button className="menu__button button">Full Menu</button>
          
        </Col>
      </Row> 

      <Row className="margin-b-30">
        <Col className="featured" lg="6" sm="12">
          <h4 className="featured__text">Featured Dish</h4>
          <h2 className="featured__title">Pizza</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, 
            nibh eu gravida laoreet, elit massa facilisis erat, et tincidunt justo ex vitae libero. 
            Maecenas arcu nisl, faucibus at lacus sit amet, pulvinar luctus urna. Donec in convallis ante. 
            Praesent risus nisl, consectetur ac ullamcorper vitae, egestas id dolor. 
            Vivamus suscipit eleifend ornare. Nullam purus dui, porta in lorem ac, feugiat venenatis lorem. 
            Nam non varius arcu. Pellentesque et volutpat ipsum, at pulvinar libero. 
            Nullam sagittis fermentum ante sit amet rutrum. Aliquam blandit vel nulla aliquam euismod.</p>
          <button className="featured__button button">Order Now</button>
        </Col>
        <Col className="featured" lg="6"  sm="12">
         <Img src={imagesQuer.dish1.childImageSharp.fluid.src} loadOnScreen className="featured__image" alt="featured " />
        </Col>
      </Row>
      <Row className="margin-t-30">
      <Col className="featured" lg="6"  sm="12">
         <Img src={imagesQuer.dish2.childImageSharp.fluid.src} loadOnScreen className="featured__image"  alt="featured" />
        </Col>
        <Col className="featured" lg="6"  sm="12">
          <h4 className="featured__text">Featured Dish</h4>
          <h2 className="featured__title">Pizza</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, 
            nibh eu gravida laoreet, elit massa facilisis erat, et tincidunt justo ex vitae libero. 
            Maecenas arcu nisl, faucibus at lacus sit amet, pulvinar luctus urna. Donec in convallis ante. 
            Praesent risus nisl, consectetur ac ullamcorper vitae, egestas id dolor. 
            Vivamus suscipit eleifend ornare. Nullam purus dui, porta in lorem ac, feugiat venenatis lorem. 
            Nam non varius arcu. Pellentesque et volutpat ipsum, at pulvinar libero. 
            Nullam sagittis fermentum ante sit amet rutrum. Aliquam blandit vel nulla aliquam euismod.</p>
          <button className="featured__button button">Order Now</button>
        </Col>
      </Row>
      
      <Row className="">
        <Col className="events">
          <h2 className="events__h1">Events</h2>
          <p>Experience Hosting Events that are unprecedented & sublime</p>
        </Col> 
      </Row>
      <Row className="margin-tb-30">     
        <Col md="12" className="events__options">
        <div className="events__option">
            <Img src={imagesQuer.wedding.childImageSharp.fluid.src} loadOnScreen alt="featured wedding" />
            <h3 className="events__title">Wedding</h3>
          </div>
        </Col>
        <Col md="6" className="events__options">
          <div className="events__option">
            <Img src={imagesQuer.private.childImageSharp.fluid.src} loadOnScreen alt="featured private wedding" />
            <h3 className="events__title">Private</h3>
          </div>
        </Col>
        <Col md="6" className="events__options">
        <div className="events__option">
            <Img src={imagesQuer.corporate.childImageSharp.fluid.src} loadOnScreen alt="featured corporate wedding" />
            <h3 className="events__title">Corporate</h3>
          </div>
        </Col>
      </Row>

           
      <Row className="margin-tb-30">
        <Col className="owner" md="6" sm="12">
            <Img src={imagesQuer.owner.childImageSharp.fluid.src} loadOnScreen alt="owner" />
        </Col> 
        <Col className="owner" md="6" sm="12">
        <h2 className="owner__title">Antonia Vivadaldi, Owner of Rotino Italy</h2>
            <div className="owner__description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, nibh eu gravida laoreet, 
                elit massa facilisis erat, et tincidunt justo ex vitae libero. Maecenas arcu nisl, faucibus at lacus sit amet, 
                pulvinar luctus urna. Donec in convallis ante. Praesent risus nisl, consectetur ac ullamcorper vitae, 
                egestas id dolor. Vivamus suscipit eleifend ornare. Nullam purus dui, porta in lorem ac, 
              </p>
              <p>feugiat venenatis lorem. Nam non varius arcu. Pellentesque et volutpat ipsum, at pulvinar libero. 
                Nullam sagittis fermentum ante sit amet rutrum. Aliquam blandit vel nulla aliquam euismod.</p>
            </div>
            <button className="owner__button button">Read More</button>
        </Col> 
      </Row>

      
           
      <Row className="contact__section">
        <div className="contactUS"></div>
        <Col className="book" sm="12" md="4">
        <h2 className="book__location__title">Make Reservation:</h2>
          <div className="book__calendar">
            <svg id="f2f1e99e-1651-46a6-b45f-af903ca31f8b" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="887" height="542.47985" viewBox="0 0 887 542.47985"><title>online_calendar</title><ellipse cx="122" cy="527.89033" rx="122" ry="14.58952" fill="#e6e6e6"/><path d="M309.606,319.892c-.06219.31086-.12437.61288-.19544.92374-3.25092,13.87423-2.53145,27.91723,1.51,42.10238H243.41471l10.65882-48.75525a24.90115,24.90115,0,0,1,8.55371-18.80393c.453-.39971.92374-.79054,1.41226-1.14586a24.8029,24.8029,0,0,1,15.00231-5.01849h5.79131a25.94134,25.94134,0,0,1,10.15252,2.05182c.54182.231,1.07479.47963,1.58993.74609,11.19179,3.89047,17.93347,15.41091,16.5745,27.31323-1.6166,14.15847.73725,28.02387,6.3953,41.64048l-3.52632.4086C310.37878,347.80031,308.02493,333.99716,309.606,319.892Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><path d="M268.72941,326.94457s5.32941,23.09411-5.32941,24.87059,27.53529,7.10588,27.53529,7.10588-2.6647-18.65294,3.553-24.87059Z" transform="translate(-156.5 -178.76007)" fill="#fbbebe"/><path d="M224.26086,486.77007s-2.1772,27.16013,7.08906,27.5253,4.11906-26.743,4.11906-26.743Z" transform="translate(-156.5 -178.76007)" fill="#fbbebe"/><path d="M347.78235,500.15045s8.88236,25.75882,0,28.42353-10.65882-24.87059-10.65882-24.87059Z" transform="translate(-156.5 -178.76007)" fill="#fbbebe"/><polygon points="144.206 193.484 156.707 191.576 161.971 195.261 166.412 208.584 177.071 262.767 185.065 298.296 197.5 323.167 177.071 332.049 157.529 268.096 144.206 193.484" fill="#a26a28"/><path d="M251.40882,438.4181s-5.32941,35.52941-1.77647,42.63529c0,0-6.61115,41.24665-11.54706,68.39412l-7.10588,39.08235-15.98823,59.51177L240.75,655.14751l52.40588-145.67059,15.1,81.71765,2.66471,58.62353,27.53529-.88824L334.90294,546.7828s15.98824-67.50588-11.54706-92.37647-31.97647-24.87059-31.97647-24.87059Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><path d="M330.01765,646.26516l7.10588,23.98235,4.44118,21.31765s15.98823,23.98235,0,21.31764S323.8,701.33574,323.8,701.33574v-5.32941l-4.44118-2.6647v-8.88236s-6.21764-4.44117,0-11.54706l-2.6647-24.87058Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><path d="M221.65294,646.26516l-7.10588,23.98235-4.44118,21.31765s-15.98823,23.98235,0,21.31764,17.76471-11.54706,17.76471-11.54706v-5.32941l4.44117-2.6647v-8.88236s6.21765-4.44117,0-11.54706l2.66471-24.87058Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><circle cx="129.10588" cy="138.41391" r="22.20588" fill="#fbbebe"/><path d="M263.4,347.374s23.09412,9.77059,29.31176,7.99412,7.99412,6.21764,7.99412,6.21764l17.76471,12.4353-5.32941,30.2s4.44117,15.98823-.88824,26.64706c0,0,14.21177,4.44117,8.88235,11.54706,0,0,9.77059,5.32941,4.44118,15.98823,0,0-26.64706-7.10588-29.31176-20.42941l-27.5353,3.55294-19.54117,15.1s-9.77059-.88824-6.21765-15.1a50.66533,50.66533,0,0,0-.88824-26.64706l-9.77059-62.17647Z" transform="translate(-156.5 -178.76007)" fill="#a26a28"/><path d="M235.25322,351.87966l-3.54657.94032a6.309,6.309,0,0,0-3.1759,1.99548l-1.14935,1.3426a8.15071,8.15071,0,0,0-1.93913,4.733l-.7903,11.32323-1.24965,55.12851,1.11984,36.40042-5.83939,27.1861,21.99914,3.5064,2.97326-66.80566L238.15641,353.946A2.31605,2.31605,0,0,0,235.25322,351.87966Z" transform="translate(-156.5 -178.76007)" fill="#a26a28"/><path d="M289.95826,360.38659c-3.64652-8.82922-9.05058-18.16084-12.61767-26.53695-2.46168-9.786-3.08025-18.16285,2.49176-22.44919,0-9.42416.32865-15.57079-7.15917-20.15406a24.91349,24.91349,0,0,0-5.07493,2.96993l-.00581-.00326c-.29633.21556-.58393.44629-.8672.682-.11981.09878-.23653.2007-.35444.30165-.063.05459-.12827.10723-.19062.1622l.00575.00391a24.89479,24.89479,0,0,0-8.55946,18.8v46.97878h27.53529c-.91068-3.96806-2.12284-8.08005-3.37831-12.178,1.98784,3.96789,3.94289,7.96262,5.5545,11.85824Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><path d="M310.92059,311.40045c-12.03406,3.37431-25.57013,2.81816-39.97059,0V293.63574h22.2059a17.76469,17.76469,0,0,1,17.76469,17.76469Z" transform="translate(-156.5 -178.76007)" fill="#2f2e41"/><rect x="336" y="40.3663" width="551" height="343.11355" fill="#e6e6e6"/><rect x="372.94893" y="106.46612" width="100.91575" height="65.59524" fill="#fff"/><rect x="498.34439" y="106.46612" width="100.91575" height="65.59524" fill="#fff"/><rect x="623.73986" y="106.46612" width="100.91575" height="65.59524" fill="#fff"/><rect x="749.13532" y="106.46612" width="100.91575" height="65.59524" fill="#fff"/><rect x="372.94893" y="199.30861" width="100.91575" height="65.59524" fill="#fff"/><rect x="498.34439" y="199.30861" width="100.91575" height="65.59524" fill="#fff"/><rect x="623.73986" y="199.30861" width="100.91575" height="65.59524" fill="#fff"/><rect x="749.13532" y="199.30861" width="100.91575" height="65.59524" fill="#fff"/><rect x="372.94893" y="292.1511" width="100.91575" height="65.59524" fill="#fff"/><rect x="498.34439" y="292.1511" width="100.91575" height="65.59524" fill="#fff"/><rect x="623.73986" y="292.1511" width="100.91575" height="65.59524" fill="#fff"/><rect x="749.13532" y="292.1511" width="100.91575" height="65.59524" fill="#fff"/><circle cx="480.30952" cy="65.59524" r="15.13736" fill="#fff"/><circle cx="730.58059" cy="65.59524" r="15.13736" fill="#fff"/><rect x="474.25458" width="12.10989" height="69.63187" fill="#e6e6e6"/><rect x="724.52564" width="12.10989" height="69.63187" fill="#e6e6e6"/><path d="M978.91392,318.02381a22.75657,22.75657,0,1,1-3.52684-12.19042A22.81841,22.81841,0,0,1,978.91392,318.02381Z" transform="translate(-156.5 -178.76007)" fill="#a26a28"/><path d="M975.38708,305.83339l-22.46389,22.45974c-1.41187-2.1858-9.27766-12.34393-9.27766-12.34393a31.82988,31.82988,0,0,1,3.2198-2.84223l6.52257,8.69677,19.36856-19.36856A22.72614,22.72614,0,0,1,975.38708,305.83339Z" transform="translate(-156.5 -178.76007)" fill="#fff"/><path d="M728.123,410.8663a22.75657,22.75657,0,1,1-3.52684-12.19042A22.81841,22.81841,0,0,1,728.123,410.8663Z" transform="translate(-156.5 -178.76007)" fill="#a26a28"/><path d="M724.59615,398.67588l-22.46389,22.45974c-1.41187-2.1858-9.27766-12.34393-9.27766-12.34393a31.82988,31.82988,0,0,1,3.2198-2.84223l6.52257,8.69678,19.36856-19.36857A22.72665,22.72665,0,0,1,724.59615,398.67588Z" transform="translate(-156.5 -178.76007)" fill="#fff"/><path d="M602.72752,410.8663a22.75667,22.75667,0,1,1-3.52684-12.19042A22.81841,22.81841,0,0,1,602.72752,410.8663Z" transform="translate(-156.5 -178.76007)" fill="#a26a28"/><path d="M599.20068,398.67588l-22.46389,22.45974c-1.41187-2.1858-9.27765-12.34393-9.27765-12.34393a31.82988,31.82988,0,0,1,3.2198-2.84223l6.52256,8.69678,19.36857-19.36857A22.72658,22.72658,0,0,1,599.20068,398.67588Z" transform="translate(-156.5 -178.76007)" fill="#fff"/></svg>
            <button className="book__button button">Book Now</button>
          </div>
        </Col> 
        <Col className="book__map"  sm="12" md="4">
        <h2 className="book__location__title">Our location:</h2>
        <div>
        <iframe title="location" width="600" height="450" frameBorder="0"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdd4hrwug2EcRmSrV3Vo6llI&key=AIzaSyAHl92EVr-khjlfcmelq0M5VDtAjyb8-tI" allowFullScreen></iframe>
         </div>
        </Col> 
        <Col className="book__location"  sm="12" md="4">
        <h2 className="book__location__title">Connect with us</h2>
          <Row>
            <Col className="text-left marginl">
            <svg  className="book_contact_image" xmlns="http://www.w3.org/2000/svg" width="199.92" height="199.92" viewBox="0 0 199.92 199.92"><g transform="translate(-369.46 -683.16)"><path d="M419.96,169.3A99.96,99.96,0,1,1,320,69.34a99.96,99.96,0,0,1,99.96,99.96Z" transform="translate(149.42 613.82)" fill="#0c0c0c"/><path d="M320,121.47,280.15,213.4l3.72,3.72,36.14-15.93,36.14,15.93,3.72-3.72Z" transform="translate(149.42 613.82)" fill="#a26a28"/></g></svg>
              <p className="db">99 Hudson Street</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-left marginl">
            <svg  className="book_contact_image" xmlns="http://www.w3.org/2000/svg" width="201.27" height="200.01" viewBox="0 0 201.27 200.01"><g transform="translate(-448.77 -290.05)"><circle cx="99.96" cy="99.96" r="99.96" transform="translate(450.12 290.05)" fill="#0c0c0c"/><path d="M658.93,522.44,629,552.89a.54.54,0,0,0,0,.78L650,576a3.613,3.613,0,0,1-5.11,5.11L624,558.86a.57.57,0,0,0-.8,0L618.11,564a22.37,22.37,0,0,1-16,6.73,22.86,22.86,0,0,1-16.28-6.92l-4.89-5a.57.57,0,0,0-.8,0l-20.84,22.2a3.613,3.613,0,0,1-5.11-5.11l20.92-22.28a.6.6,0,0,0,0-.78l-29.93-30.45a.55.55,0,0,0-.94.39v60.93a8.92,8.92,0,0,0,8.89,8.89H651a8.92,8.92,0,0,0,8.89-8.89V522.83a.55.55,0,0,0-.96-.39Z" transform="translate(-52 -162.63)" fill="#a26a28"/><path d="M602.08,563.5A15.14,15.14,0,0,0,613,559l43.59-44.37a8.7,8.7,0,0,0-5.5-2H553.15a8.64,8.64,0,0,0-5.5,2L591.25,559A15.08,15.08,0,0,0,602.08,563.5Z" transform="translate(-52 -162.63)" fill="#a26a28"/><path d="M600.82,452.69a100,100,0,1,0,99.95,99.972A100,100,0,0,0,600.82,452.69Zm0,186.62a86.67,86.67,0,1,1,86.67-86.67,86.67,86.67,0,0,1-86.67,86.67Z" transform="translate(-52 -162.63)" opacity="0.1"/></g></svg>
              <p className="db">eservatios@a.com</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-left marginl">
            <svg className="book_contact_image db" xmlns="http://www.w3.org/2000/svg" width="200.01" height="200.01" viewBox="0 0 200.01 200.01"><g transform="translate(-679.68 -138.22)"><circle cx="99.96" cy="99.96" r="99.96" transform="translate(679.77 138.22)" fill="#0c0c0c"/><path d="M874.64,426.59c-3.48-3.48-11.85-8.73-16-10.69-4.79-2.3-6.55-2.26-9.94.19-2.82,2-4.65,3.93-7.89,3.22s-9.66-5.55-15.87-11.74S813.91,395,813.22,391.71s1.21-5.08,3.23-7.9c2.44-3.39,2.51-5.15.19-9.94-2-4.15-7.19-12.5-10.7-16s-4.27-2.73-6.19-2a35.8,35.8,0,0,0-5.67,3c-3.48,2.33-5.43,4.27-6.8,7.19s-2.92,8.34,5.05,22.53a125.691,125.691,0,0,0,22.1,29.47h0A125.881,125.881,0,0,0,844,440.2c14.18,8,19.61,6.41,22.53,5.05s4.86-3.29,7.18-6.8a35.33,35.33,0,0,0,3-5.67C877.37,430.86,878.15,430.08,874.64,426.59Z" transform="translate(-52 -162.63)" fill="#a26a28"/><path d="M831.73,300.86a100,100,0,1,0,99.95,99.972A100,100,0,0,0,831.73,300.86Zm0,186.62a86.67,86.67,0,1,1,86.67-86.67,86.67,86.67,0,0,1-86.67,86.67Z" transform="translate(-52 -162.63)" opacity="0.1"/></g></svg>
              <p className="db" >333 333 222</p>
            </Col>
          </Row>
        </Col> 
      </Row>
     
    </Container>
  </Layout>
)
  }

export default IndexPage

