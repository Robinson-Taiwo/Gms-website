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
import "./App.css"

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 1000, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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

  // const changeColour = () => {
  //   if (window.scrollY >= 10) {
  //     setColour(true)
  //   } else {
  //     setColour(false)
  //   }
  // }

  // window.addEventListener("scroll", changeColour)

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
      <nav className="navbar">
        <img src={logo1} alt="" className="logo" />
        <div className="login">
          <a href="" className="href">Login</a>
        </div>
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

          <div className="slider-frame3">

            <div className="slider-body2">

              <h1 className="slider-f22">
                Dealing with excellence is our Strong Suit
              </h1>
            </div>


            <div className="about-b">

            </div>

          </div>

          <div className="slider-frame4">

            <div className="slider-body2">

              <h1 className="slider-f23">
                Conducive learning environments for your wards
              </h1>
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
            <h1 data-aos="fade-down" data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              // data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className="the-school">
              ABOUT OUR SCHOOL
            </h1>
          </div>
          {/* data-aos="zoom-out-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out" git status */}
          {/* data-aos="zoom-out-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"  */}

          <div className="about-body">
            <div className="body-text">
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                // data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="body-p">
                Great Marble Group of School is a leading institution of learning that values pride, strength, and kindness. The school prides itself on providing top-quality education to both primary and secondary school students. The institution's mission is to inspire and empower students to achieve their full potential through the provision of an environment that nurtures academic excellence, character development, and lifelong learning.
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                // data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="body-p">
                Located at 1, Olabanwo Street, off Ofin Road, Igbagbo in Baiyeku LCDA, the Great Marble Group of School is building a reputation for excellence in academics and character development. The school's dedicated and experienced faculty members work tirelessly to provide students with an education that is both rigorous and supportive. Great Marble Group of School is committed to creating a learning environment that is inclusive and values-driven, where students are encouraged to learn and grow.


              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                // data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="body-p">
                Whether you are a primary school student or a secondary school student, Great Marble Group of School has everything you need to succeed. With a strong focus on academic excellence, character development, and community involvement, this institution is the perfect place to begin your journey towards a bright and successful future. So come and join us at Great Marble Group of School, where education and values go hand in hand!




              </div>
            </div>
          </div>



        </div>

        <Parallax bgImage={school} strength={600}>

          <div className="third">
            <h1 data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-mirror="true"
              // data-aos-once="false"
              data-aos-anchor-placement="top-center" className="mission">
              OUR MISSION
            </h1>
            <div className="mission-text">
              <p
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                // data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="mi-text1"> With the support of the parents and our school community, we ensure</p>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  // data-aos-once="false"
                  data-aos-anchor-placement="top-center" className="mi-text2">
                  We: Develop self-motivated learners who demonstrate resilience and pride in everything they do.
                </p>

              </div>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="70"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  // data-aos-once="false"
                  data-aos-anchor-placement="top-center" className="mi-text3">

                  We: Foster critical thinkers through rich,tailored, and exciting learning opportunities.
                </p>
              </div>


              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="90"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  // data-aos-once="false"
                  data-aos-anchor-placement="top-center" className="mi-text4">

                  We: Nurture our global citizens to be socially responsible.
                </p>
              </div>

              <div className="mi-cover">
                <img src={pin} alt="" className="pin" />

                <p data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="110"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  // data-aos-once="false"
                  data-aos-anchor-placement="top-center" className="mi-text5">

                  We: Promote the importance of mutual respect,positive well-being, and kindness.
                </p>
              </div>


              <div className="mi-coverl">

                <p
                  data-aos="zoom-out"
                  data-aos-offset="200"
                  data-aos-delay="130"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  // data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                  className="mi-text6">
                  At Great Marble, our rigorous and forward-thinking  approach to teaching ensures learners have the tools needed to continue on their education path

                </p>
              </div>

            </div>

          </div>
        </Parallax>


        <div className="fourth">
          <div className="fourth-header">
            <h1 data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className="fourth-heading">Our Values</h1>
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

        <div className="footer">

          <div className="footer1">


            <div className="footer-icon">
              <div className="newsletter">
                <h1 className="news-head">
                  Suscribe to our  newsletter to get latest update
                </h1>
                <input placeholder="input your email here" type="text" className="news-input" />
                <button className="submit">
                  submit
                </button>
              </div>
            </div>

            <div className="footer-info">
              <div className="footer-contacts">

                <h1 className="fch">
                  Contacts
                </h1>

                <p className="conts">greatmarblesch410@gmail.com</p>
                <p className="conts">00447883830723</p>
                <p className="conts">08100244181</p>
                <p className="conts">+2340743020701</p>
              </div>

              <div className="footer-address">
                <h1 className="fch">
                  Address
                </h1>
                <p className="conts">
                  1, Olabanwo street, off ofin road, igbagbo. baiyeku lcda
                </p>
              </div>
            </div>
            {/* footer end */}
          </div>

          <div className="footer2">
            © copyright 2023
          </div>
        </div>

      </div>

      <div>

      </div>

    </div >
  );


}

export default App

