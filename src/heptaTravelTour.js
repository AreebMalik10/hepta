import React, { useState } from 'react';
import './hepta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Card from 'react-bootstrap/Card';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function HeptaTravelTours() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <div>
      <section className='header'>
        <header className="relative bg-cover bg-center h-screen " style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex justify-between items-center p-6">
            <Link to="/" className='no-underline'>
              <h1 className="text-white text-4xl font-bold">Hepta</h1>
            </Link>
            <Link to="/SideMenu" className="text-white text-3xl">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-8xl font-bold mb-4" style={{ fontFamily: "Mukta Mahee, arial, sans-serif" }}>Travel & Tours</h2>
            <p className="text-white text-3xl">A free template by Colorlib. Download and share!</p>
            <button className="border-2 border-white text-white px-12 py-3 rounded hover:bg-white hover:text-black transition-colors duration-300 mt-10">
                           VISIT COLORLIB
                        </button>


          </div>
        </header>

      </section>

      <div className="part2">
        <img src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg" alt="img2" />
        <div className="content">
          <h1>Welcome to Our Website</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind
            texts. Separated they live
            in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the
            necessary regelialia.

          </p>
          <button className="watchButton">
            <span className="icon-circle">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            WATCH THE VIDEO
          </button>

        </div>

      </div>

      <hr className='line' />

      <div className='part3'>
        <h1>Experience Once in Your Life Time</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

        <div className='cards'>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg" alt="Good Foods" />
            <h1>Good Foods</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>

          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg" alt="Travel Anywhere" />
            <h1>Travel Anywhere</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          </div>

          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg" alt="Airplane" />
            <h1>Airplane</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>

          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg" alt="Beach Resort" />
            <h1>Beach Resort</h1>
            <p>Far far away,behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          </div>

          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg" alt="Mountain Climbing" />
            <h1>Mountain Climbing</h1>
            <p>Far far away,behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          </div>

          <div className='card'>
            <img src="https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg" alt="Hot Air Balloon" />
            <h1>Hot Air Balloon</h1>
            <p>Far far away,behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>

      <div className='part4'>
        <div className='content1'>
          <h1>International Tour Management</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>


        <div className='bgContainer'>
          <div className='content2'>
            <Carousel

              prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="prevIcon" />}
              nextIcon={<FontAwesomeIcon icon={faChevronRight} className="nextIcon" />}


            >

              <Carousel.Item>
                <img className="slide1" src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg" alt="slider1" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="slide2" src="https://preview.colorlib.com/theme/hepta/images/slider-2.jpg" alt="slider2" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="slide3" src="https://preview.colorlib.com/theme/hepta/images/slider-3.jpg" alt="slider3" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="slide4" src="https://preview.colorlib.com/theme/hepta/images/slider-4.jpg" alt="slider4" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="slide5" src="https://preview.colorlib.com/theme/hepta/images/slider-5.jpg" alt="slider5" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="slide6" src="https://preview.colorlib.com/theme/hepta/images/slider-6.jpg" alt="slider6" />
              </Carousel.Item>

            </Carousel>

          </div>

          <div className='blogPost'>
            <h1>Recent Blog Post</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className='cardContainers'>
              <div className='bestPlaces'>
                <Card style={{ width: '22rem' }}>
                  <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" />
                  <Card.Body>
                    <p id='p1'>FEBRUARY 26, 2018</p>
                    <button class="h3">45 Best Places to Unwind</button>

                    <p>

                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                  </Card.Body>
                </Card>
              </div>


              <div className='bestPlaces'>
                <Card style={{ width: '22rem' }}>
                  <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" />
                  <Card.Body>
                    <p id='p1'>FEBRUARY 26, 2018</p>
                    <button class="h3">45 Best Places to Unwind</button>
                    <p>

                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                  </Card.Body>
                </Card>
              </div>


              <div className='bestPlaces'>
                <Card style={{ width: '22rem' }}>
                  <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_4.jpg" />
                  <Card.Body>
                    <p id='p1'>FEBRUARY 26, 2018</p>
                    <button class="h3">45 Best Places to Unwind</button>
                    <p>

                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='happyCustomers'>

        <div className="flex flex-col items-center justify-center py-12 bg-gray-50 mt-28 mb-0">


          <h2 className="text-8xl font-bold mb-32" style={{ fontFamily: "Abril Fatface, times, serif" }}>Happy Customers</h2>

          <div className="flex justify-center gap-0">

            {/* Testimonial 1 */}
            <div className="w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_1.jpg"
                  alt="Clare Gupta"
                  className="w-20 h-20 rounded-full mb-4 "
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”


                </p>
                <p className=" text-gray-500">— Clare Gupta</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_2.jpg"
                  alt="Rogie Slater"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;

                </p>
                <p className=" text-gray-500">— Rogie Slater</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_3.jpg"
                  alt="John Doe"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”

                </p>
                <p className=" text-left text-gray-500">— John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='part5'>
        <h1>Top Destination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
      </div>
      <div className='cards4'>
        <Card style={{ width: '18rem' }}>
          <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg" />
          <Card.Body>
            <h1 id='food'>Food & Wines</h1>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
              <FontAwesomeIcon icon={faStarRegular} />
              <p>3,239 reviews</p>
            </div>


          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg" />
          <Card.Body>
            <h1 id='resort'>Resort & Spa</h1>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
              <FontAwesomeIcon icon={faStarRegular} />
              <p>4,921 reviews</p>

            </div>




          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_4.jpg" />
          <Card.Body>
            <h1 id='hotel'>Hotel Rooms</h1>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarRegular} />
              <p>2,112 reviews</p>
            </div>


          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <img variant="top" src="https://preview.colorlib.com/theme/hepta/images/img_5.jpg" />
          <Card.Body>
            <h1 id='mountain'>Mountain Climbing</h1>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarRegular} />
              <p>6,421 reviews</p>
            </div>

          </Card.Body>
        </Card>
      </div>




    </div>

  );
}

export default HeptaTravelTours;
