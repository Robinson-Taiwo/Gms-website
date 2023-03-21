import React, { useState } from "react";
import { Parallax } from 'react-parallax'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from "../src/assets/logo1.svg"
import pin from "../src/assets/pin.png"
import Kindness from "./Kindness";
import Pride from "./Pride";
import Strength from "./Strength";
import school from "../src/assets/school1.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init()
import "./App.css"



const App = () => {

  const [heading, setHeading] = useState("strength")

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  // changing nav colour when scrolling
  const [colour, setColour] = useState(false)

  const changeColour = () => {
    if (window.scrollY >= 10) {
      setColour(true)
    } else {
      setColour(false)
    }
  }

  window.addEventListener("scroll", changeColour)

  const kindClick = () => {
    setHeading("kindness")
  }

  const strengthClick = () => {
    setHeading("strength")
  }

  const prideClick = () => {
    setHeading("pride")
  }

  return (
    <div className="home">
      <nav className={colour ? "navbar-active" : "navbar"}>
        <img src={logo1} alt="" className="logo" />
      </nav>

      <div className="slider">

        <Slider {...settings}>

          <div className="slider-frame">

            <div className="slider-body">

              <div className="head-logo">
                <img data-aos="fade-up" data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out" src={logo1} alt="" className="icon" />

              </div>
              <h1 data-aos="fade-down" data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" className="great">
                GREAT MARBLE GROUP OF SCHOOLS
              </h1>
              <p data-aos="fade-down" data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" className="motto">Be kind, Be strong, Be Proud.....</p>
            </div>

          </div>

          <div className="slider-frame2">

            <div className="slider-body2">

              <h1 className="slider-f2">
                <span className="purple">Developing self-motivated learners  </span>    <span className="orange"> demonstrating resilience and pride</span>    <div className="yellow">in everything they do.</div>
              </h1>
            </div>


            <div className="about-b">

            </div>

          </div>

        </Slider>
      </div>



      <div className="second">
        <div className="overlap">

          <div className="overlap-f">
            <h4 className="overlap-head"> WE OFFER:</h4>
            <div className="overlap-body">
              <p data-aos="zoom-in" data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" className="over-text">
                EXCELLENCE
              </p>
              <div className="v-line"></div>

              <p data-aos="zoom-in" data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" className="over-text">
                A LIFESTYLE
              </p>
              <div className="v-line"></div>

              <p data-aos="zoom-in" data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out" className="over-text">
                EDUCATION
              </p>
            </div>
          </div>

        </div>

        <div className="second-2">

          <div className="school-sect">
            <h1 data-aos="zoom-out-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out" className="the-school">
              About Our School
            </h1>
          </div>

          <div className="about-body">
            <p data-aos="zoom-out-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out" className="body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint modi enim sed doloribus suscipit nihil recusandae dolore minima, nostrum molestias architecto officiis nesciunt assumenda dolorum impedit aliquam debitis ducimus!
              Tenetur aperiam at ipsa architecto obcaecati! Ex, sint nostrum. Expedita dolor inventore eius nisi, quis deserunt quo maxime dolore aspernatur perferendis iure fugiat hic nulla animi repellendus eum aliquid debitis.
              Fugit veniam dolores nisi cum porro voluptatum dolore distinctio nostrum quidem dolorem ea commodi optio, quo fugiat accusantium sed autem. Repellendus odit dolore, doloribus harum officia saepe cumque quod impedit.
              Porrogite ducimus culpa eius rem facere ratione consectetur velit architecto sit, quibusdam illo, nemo dolore quia cumque autem distinctio, quasi adipisci. Quis laudantium quisquam ullam soluta sunt.
              Illo quidem quod aliquid consequatur! Quaerat facere placeat ullam blanditiis culpa assumenda eligendi itaque mollitia modi nihil error magni dolorum fugiat quis, velit veritatis asperiores deleniti! Ducimus quod unde pariatur!
            </p>
          </div>



        </div>

        <Parallax bgImage={school} strength={600}>

          <div className="third">
            <h1 className="mission">
              OUR MISSION
            </h1>
            <div className="mission-text">
              <p className="mi-text1"> With the support of the parents and our school community, we ensure</p>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out" className="mi-text2">
                  We: Develop self-motivated learners who demonstrate resilience and pride in everything they do.
                </p>

              </div>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-delay="60"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out" className="mi-text3">

                  We: Foster critical thinkers through rich,tailored, and exciting learning opportunities.
                </p>
              </div>


              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-delay="70"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out" className="mi-text4">

                  We: Nurture our global citizens to be socially responsible.
                </p>
              </div>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-delay="110"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out" className="mi-text5">

                  We: Promote the importance of mutual respect,positive well-being, and kindness.
                </p>
              </div>


              <div className="mi-coverl">

                <p className="mi-text6">
                  At Great Marble, our rigorous and forward-thinking  approach to teaching ensures learners have the tools needed to continue on their education path

                </p>
              </div>

            </div>

          </div>
        </Parallax>


        <div className="fourth">
          <div className="fourth-header">
            <h1 className="fourth-heading">Our Values</h1>
          </div>

          <div className="fourth-body">
            <div className="links">
              <button onClick={strengthClick} className={heading === "strength" ? "link active" : "link"}>STRENGTH</button>
              <button onClick={kindClick} className={heading === "kindness" ? "link active" : "link"}>KINDNESS</button>
              <button onClick={prideClick} className={heading === "pride" ? "link active" : "link"}>PRIDE</button>
            </div>
            <div className="value-content">
              {heading === "strength" ? <Strength /> : heading === "kindness" ? <Kindness /> : heading === "pride" ? <Pride /> : setHeading("strength")}
            </div>

          </div>

        </div>

      </div>

      <div>

      </div>

    </div >
  );


}

export default App

