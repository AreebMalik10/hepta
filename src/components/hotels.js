import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./css/hotels.css";

const features = [
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
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
)



export default function Hotels() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <section className='header'>
                <header className="relative bg-cover bg-center h-screen sm:h-[50vh] md:h-[60vh] lg:h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-4.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Navbar */}
                    <div className="relative z-10 flex justify-between items-center p-6">
                        <Link to="/" className='no-underline'>
                            <h1 className="text-white text-2xl sm:text-2xl md:text-4xl font-semibold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Hepta</h1>
                        </Link>
                        <button className="text-white text-2xl sm:text-3xl" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                            Our Hotel
                        </h2>
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            A free template by Colorlib. Download and share!
                        </p>
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

            <section className="py-16 bg-white" data-aos="fade-up" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="familyroom" data-aos="fade-up" >
                <div className="flex flex-col sm:flex-row max-w-6xl mx-auto my-12">
                    {/* Left Column */}
                    <div className="sm:w-1/2 w-full mb-4 sm:mb-0 ml-0 sm:ml-13 -mr-6" data-aos="fade-up" data-aos-duration="1000">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg"
                            alt="hero1"
                            className="w-full h-[38rem] object-cover border sm:h-[24rem] lg:h-[38rem]"
                        // Comment: Adjusting image height for smaller screens 
                        />
                    </div>

                    {/* Right Column */}
                    <div className="sm:w-1/2 sm:pl-8 flex flex-col justify-center w-full ml-10 mr-1">
                        <h2
                            className="text-4xl font-bold mb-4 sm:text-2xl lg:text-4xl"
                            style={{ fontFamily: "Abril Fatface, times, serif" }}>
                            Family Room
                        </h2>
                        <p
                            className="text-[#6c757d] mb-4 text-lg sm:text-base lg:text-lg mr-10"
                            style={{ fontFamily: '"Mukta Mahee", Arial, sans-serif' }}>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-[#6c757d] mb-8 text-lg sm:text-base lg:text-lg mr-16" style={{ fontFamily: '"Mukta Mahee", Arial, sans-serif' }}>
                            A small river named Duden flows by their place and supplies it with the necessary regalia.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2 rounded hover:bg-teal-400 hover:text-white transition-colors duration-300 ml-0 sm:ml-0">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </section>


            <section className='presidentialRoom' data-aos="fade-up">
                <div className="flex flex-col sm:flex-row max-w-7xl mx-auto p-8 mt-24 sm:mt-[-6.5rem]">
                    <div className="sm:w-2/5 flex flex-col justify-center w-full mb-4 sm:mb-0 mr-0 sm:mr-24 -ml-6 ">
                        <h2 className="text-4xl font-bold mb-4 ml-0 sm:ml-24" style={{ fontFamily: "Abril Fatface, times, serif" }}>Presidential Room</h2>
                        <p className="text-[#6c757d] mb-4 text-lg font-mukta ml-0 sm:ml-24 -mr-12">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-[#6c757d] mb-8 text-lg font-mukta ml-0 sm:ml-24">
                            A small river named Duden flows by their place and supplies it with the necessary regeliaria.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2 rounded hover:bg-teal-400 hover:text-white transition-colors duration-300 ml-0 sm:ml-24">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="sm:w-1/2 mt-8 sm:mt-0 -ml-4 sm:ml-10 w-full">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_2.jpg"
                            alt="hero 2"
                            className="w-full h-[38rem] object-cover border"
                        />
                    </div>
                </div>
            </section>


            <section className='hotGallery' data-aos="fade-up">

                <div className="text-center py-16 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 mt-28" style={{ fontFamily: "Abril Fatface, times, serif" }}>Hotel Gallery</h2>

                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
                            odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,
                            blanditiis laboriosam alias. Sed.
                        </p>
                    </div>
                </div>


            </section>


            <section className='slider' data-aos="fade-up">

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

            </section>

            <section className='hotelfeature' data-aos="fade-up">
                <div className="text-center py-16 bg-white mt-16 sm:mt-24 md:mt-36">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                            More Hotel Features
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white-100 py-10 mb-28" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg  overflow-hidden">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                alt="Drink"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5">
                                <Link to="/hotels" className='no-underline'>
                                    <h2 className="  text-3xl font-bold text-left text-[#000000] hover:text-[#65c0ba] mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                                        Five Reasons to Stay at Villa Resort
                                    </h2>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg  overflow-hidden">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                alt="Surfing"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5">
                                <Link to="/hotels" className='no-underline'>
                                    <h2 className="text-3xl font-bold text-left text-[#000000] hover:text-[#65c0ba] mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                                        Five Reasons to Stay at Villa Resort
                                    </h2>
                                </Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg  overflow-hidden">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_3.jpg"
                                alt="Living Room"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-5">
                                <Link to="/hotels" className='no-underline'>
                                    <h2 className="text-3xl font-bold text-left text-[#000000] hover:text-[#65c0ba] mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                                        Five Reasons to Stay at Villa Resort
                                    </h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








        </>
    )
}
