import React, { useState } from 'react';
import './css/hepta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';




function HeptaTravelTours() {

  const [isClicked, setIsClicked] = useState(false);


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleClick = () => {
    setIsClicked(true);
  }


  const Card = ({ imageSrc, date, title, description }) => {
    return (
      <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageSrc} alt={title} />
        <div className="px-6 py-4">
          <p className="text-[#ced4da] text-lg" >{date}</p>
          <Link to="/" c className='no-underline'>
            <div className=" text-[#000000] hover:text-[#65c0ba] font-semibold text-3xl mb-2" style={{ fontFamily: "Abril Fatface, times, serif" }}>{title}</div>
          </Link>
          <p className="text-[#6c757d] text-base" style={{ fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: 1.8, fontSize: "18px", fontWeight: "200" }}>{description}</p>
        </div>
      </div>
    );
  };

  const Features = [
    { title: "Good Foods", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { title: "Travel Anywhere", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. " },
    { title: "Airplane", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { title: "Beach Resort", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { title: "Mountain Climbing", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { title: "Hot Air Balloon", image: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." }

  ]

  const FeatureCard = ({ title, image, description }) => (
    <div className="flex flex-col items-center text-center p-4">
      <img src={image} alt="" className='w-16 h-16 mb-4' />
      <h3 className="font-semibold text-3xl mb-2" style={{ fontFamily: "Abril Fatface, times, serif" }}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )

  const reviews = [
    {
      image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
      title: "Food & Wines",
      stars: 4,
      reviews: "3,239 reviews",
    },
    {
      image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
      title: "Resort & Spa",
      stars: 4,
      reviews: "4,921 reviews",
    },
    {
      image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
      title: "Hotel Rooms",
      stars: 4,
      reviews: "2,112 reviews",

    },
    {
      image: "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
      title: "Mountain Climbing",
      stars: 4,
      reviews: "6,421 reviews",
    }
  ]

  return (
    <div>
      <section className='header'>
        <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_1.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Navbar Section */}
          <div className="relative z-10 flex justify-between items-center p-6">
            <Link to="/" className='no-underline'>
              <h1 className="text-white text-2xl sm:text-2xl md:text-4xl font-semibold " style={{ fontFamily: "Abril Fatface, times, serif" }}>Hepta</h1>
            </Link>
            <button className="text-white text-2xl sm:text-3xl md:text-2xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {/* Main Text Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-white text-4xl font-bold mb-4 sm:text-8xl md:text-8xl" style={{ fontFamily: "Abril Fatface, times, serif" }}>
              Travel & Tours
            </h2>
            <p className="text-white text-xl sm:text-3xl md:text-3xl" style={{fontFamily:"Mukta Mahee, arial, sans-serif"}}>A free template by Colorlib. Download and share!</p>

            {/* Button */}
            <button className="border-2 border-white text-white h-16 w-48 px-6 py-2  hover:bg-white hover:!text-black transition-colors duration-300 ml-0 sm:ml-0 mt-10" style={{fontFamily:"Mukta Mahee, arial, sans-serif", lineHeight:1.8, letterSpacing: "0.06em"}}>
              VISIT COLORLIB
            </button>

          </div>

          {/* Scroll Down Button */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <a href="#next-section" className="text-white text-2xl sm:text-3xl md:text-2xl ml-8">
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <p className="text-white text-sm mt-2 sm:text-xs">SCROLL DOWN</p>
          </div>


          {/* Conditional rendering for the full-screen menu */}
          {menuOpen && (
            <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-20">
              <button className="absolute top-5 right-5 text-black text-3xl" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <ul className="text-center space-y-8 text-black text-3xl">
                <li><Link to="/" className="text-teal-500 font-bold no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>Home</Link></li>
                <li><Link to="/hotels" className=" text-[#000000] font-semibold hover:text-[#65c0ba] no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>Hotels</Link></li>
                <li><Link to="/aboutus" className="text-[#000000] font-semibold hover:text-[#65c0ba] no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>About Us</Link></li>
                <li><Link to="/gallery" className="text-[#000000] font-semibold hover:text-[#65c0ba] no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>Gallery</Link></li>
                <li><Link to="/news" className="text-[#000000] font-semibold hover:text-[#65c0ba] no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>News</Link></li>
                <li><Link to="/contact" className="text-[#000000] font-semibold hover:text-[#65c0ba] no-underline" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "40px" }}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>
      </section>



      <div className ="part2" data-aos="fade-up" >
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


      <div className='part3' data-aos="fade-down">
        <h1 style={{ fontFamily: "Abril Fatface, times, serif" }}>Experience Once in Your Life Time</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
      <section className="py-16 bg-white" data-aos="fade-up" >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            {Features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>



      <div className='part4' data-aos="fade-up">
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

          <section className='blogPost'>
            <h1>Recent Blog Post</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </section>

          {/* Card Containers inside the bgContainer */}
          <section className='cardContainers'>
            <div className="  flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-4 md:space-y-0">
              {/* Card 1 */}
              <Card
                imageSrc="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                date="FEBRUARY 26, 2018"
                title="45 Best Places To Unwind"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />

              {/* Card 2 */}
              <Card
                imageSrc="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                date="FEBRUARY 26, 2018"
                title="45 Best Places To Unwind"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />

              {/* Card 3 */}
              <Card
                imageSrc="https://preview.colorlib.com/theme/hepta/images/img_4.jpg"
                date="FEBRUARY 26, 2018"
                title="45 Best Places To Unwind"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />
            </div>
          </section>
        </div>
      </div>


      <section className='happyCustomers' data-aos="fade-up">
        <div className="flex flex-col items-center justify-center py-12 bg-gray-50 mb-40 mt-32">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-16 md:mb-24 lg:mb-32" style={{ fontFamily: "Abril Fatface, times, serif" }}>
            Happy Customers
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:gap-4 md:gap-6 lg:gap-0">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_1.jpg"
                  alt="Clare Gupta"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", sm: { fontSize: "18px" }, md: { fontSize: "20px" }, fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <p className="text-gray-500">— Clare Gupta</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_2.jpg"
                  alt="Rogie Slater"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", sm: { fontSize: "18px" }, md: { fontSize: "20px" }, fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <p className="text-gray-500">— Rogie Slater</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[26.5%] bg-white p-6 rounded-lg shadow-none">
              <div className="flex flex-col items-left text-left">
                <img
                  src="https://preview.colorlib.com/theme/hepta/images/person_3.jpg"
                  alt="John Doe"
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", sm: { fontSize: "18px" }, md: { fontSize: "20px" }, fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight: "1.8" }}>
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <p className="text-gray-500">— John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='topDestination' data-aos="fade-up">

        <div className="text-center py-16 bg-white mt-36">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
              Top Destination
            </h2>

            <p className="text-gray-500 text-xl max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
            </p>
          </div>
        </div>


      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl cursor-pointer text-[#000000] hover:text-[#65c0ba] font-semibold mb-2 text-left">{review.title}</h3>

                <div className="flex justify-between items-center mb-2">

                  <div className="flex items-center">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < review.stars ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 text-teal-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.918c.969 0 1.371 1.24.588 1.81l-3.973 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.973-2.884a1 1 0 00-1.176 0l-3.973 2.884c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.783-.57-.38-1.81.588-1.81h4.918a1 1 0 00.95-.69l1.518-4.674z"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-500">{review.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>

  );
}

export default HeptaTravelTours;
