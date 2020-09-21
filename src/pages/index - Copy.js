import React from "react"
import { Row, Col, Container } from "react-bootstrap"
//import { Row, Col, Container, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

import story from "../images/background3.jpg"
import menuImage from "../images/pasta.jpg"
import menuImage2 from "../images/pizza.jpg"

import corporateEventsImg from "../images/corporate.jpg"
import privateEventsImg from "../images/private.jpg"
import weddingEventsImg from "../images/wedding.jpg"
import ownerImage from "../images/wallhaven-ymvrjl.jpg"

import calendar from "../images/calendar.svg"
import RotinoLocation from "../images/location.svg"
import RotinoEmail from "../images/email.svg"
import RotinoCall from "../images/call.svg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
 
    <Container fluid className="text-center">
   
    <Row className="margin-t-30">
        <Col className="header text-center">
          <div className="header__inner">
            <h1 className="header__title header__title_theme-dark">Welcome to rotino</h1>
            <button className="header__button button header__button_dark">Make Reservation</button>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col sm="12" md="6">
          <div className="story">
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
          <img src={story} className="story__image" alt="story " />
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

      <Row className="margin-tb-30">
        <Col className="featured" sm="12">
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
        <Col className="featured" sm="12">
         <img src={menuImage} className="featured__image" alt="featured " />
        </Col>
      </Row>
      <Row className="margin-tb-30">
      <Col className="featured" sm="12">
         <img src={menuImage2} className="featured__image"  alt="featured" />
        </Col>
        <Col className="featured" sm="12">
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
          <h2 className="events__title">Events</h2>
          <p>Experience Hosting Events that are unprecedented & sublime</p>
        </Col> 
      </Row>
      <Row className="margin-tb-30">     
        <Col md="12" className="events__options">
        <div className="events__option">
            <img src={weddingEventsImg} alt="featured " />
            <h3>Wedding</h3>
          </div>
        </Col>
        <Col md="6" className="events__options">
          <div className="events__option">
            <img src={privateEventsImg} alt="featured " />
            <h3>Private</h3>
          </div>
        </Col>
        <Col md="6" className="events__options">
        <div className="events__option">
            <img src={corporateEventsImg} alt="featured " />
            <h3>Corporate</h3>
          </div>
        </Col>
      </Row>

           
      <Row className="margin-tb-30">
        <Col className="owner" sm="12">
          <img src={ownerImage} alt="owner " />
        </Col> 
        <Col className="owner" sm="12">
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
            <img src={calendar} alt="book " />
            <button className="book__button button">Book Now</button>
          </div>
        </Col> 
        <Col className="book__map"  sm="12" md="4">
        <h2 className="book__location__title">Our location:</h2>
        <div>
        <iframe title="location" width="600" height="450" frameborder="0"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdd4hrwug2EcRmSrV3Vo6llI&key=AIzaSyAHl92EVr-khjlfcmelq0M5VDtAjyb8-tI" allowfullscreen></iframe>
         </div>
        </Col> 
        <Col className="book__location"  sm="12" md="4">
        <h2 className="book__location__title">Connect with us</h2>
          <Row>
          
            <Col>
            <img src={RotinoLocation} class="book_contact_image" alt="book__email " />
            </Col>
            <Col className="text-left">
              <h4>Rotino</h4>
              <p>99 Hudson Street</p>
              <p>New York, NY 10013</p>
            </Col>
          </Row>
          <h2 className="book__email__title">Connect via E-mail</h2>
          <Row className="book__email">
          
            <Col>
            <img src={RotinoEmail} class="book_contact_image"  alt="book__email " />
            </Col>
            <Col className="text-left">
              <p>eservatios@a.com</p>
              <p>dmin@rotino.com</p>
            </Col>
          </Row>
          <h2 className="book__call__title">Call Us At</h2>
          <Row className="book__call">
          
            <Col>
            <img src={RotinoCall} class="book_contact_image"  alt="book__call " />
            </Col>
            <Col className="text-left">
              <h4>333 333 333</h4>
              <p>333 333 222</p>
            </Col>
          </Row>
        </Col> 
      </Row>
     
    </Container>
  </Layout>
)

export default IndexPage

