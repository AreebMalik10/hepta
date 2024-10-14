import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Row, Col } from 'react-bootstrap';

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
    return (
        <>
            <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-4.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex justify-between items-center p-6">
                    <Link to="/" className='no-underline'>
                    <h1 className="text-white text-4xl font-bold mt-12">Hepta</h1>
                    </Link>
                    <Link to="/SideMenu" className="text-white text-3xl">
                        <FontAwesomeIcon icon={faBars} />
                    </Link>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-5xl font-bold mb-4">Our Hotel</h2>
                    <p className="text-white text-lg">A free template by Colorlib. Download and share!</p>
                </div>
            </header>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="familyroom">
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-12 ">
                    {/* Left Column */}
                    <div className="md:w-1/2 ml-13 "  data-aos="fade-up" data-aos-duration="1000">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg"
                            alt="hero1"
                            className="w-full h-[38rem]  object-cover border"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="md:w-2/5 md:pl-8 flex flex-col justify-center ml-14">
                        <h2 className="text-4xl font-bold mb-4">Family Room</h2>
                        <p className="text-[#6c757d] mb-4 text-lg -mr-2" style={{ fontFamily: '"Mukta Mahee", Arial, sans-serif' }}>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-[#6c757d] mb-8 text-lg">
                            A small river named Duden flows by their place and supplies it with the necessary regalia.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2  rounded hover:bg-teal-400 hover:text-white transition-colors duration-300">
                            LEARN MORE
                        </button>


                    </div>
                </div>
            </section>


            {/*left Column */}
            <section className='presidentialRoom'>

                <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-8 -mt-20">
                    <div className="md:w-2/5 flex flex-col justify-center mr-24">
                        <h2 className="text-4xl font-bold mb-4 ml-24" >Presidential Room</h2>
                        <p className="text-[#6c757d] mb-4 text-lg font-mukta ml-24 -mr-12">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-[#6c757d] mb-8 text-lg font-mukta ml-24">
                            A small river named Duden flows by their place and supplies it with the necessary regeliaria.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2  rounded hover:bg-teal-400 hover:text-white transition-colors duration-300 ml-24">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2 mt-8 md:mt-0 ml-6">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_2.jpg"
                            alt="hero 2"
                            className="w-full h-[38rem] object-cover border"
                        />
                    </div>

                </div>


            </section>

            <section className='hotGallery'>

                <div className="text-center py-16 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-5xl font-bold mt-8 mb-4" style={{fontFamily:"Abril Fatface, times, serif"}}>Hotel Gallery</h2>

                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
                            odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,
                            blanditiis laboriosam alias. Sed.
                        </p>
                    </div>
                </div>


            </section>


            <section className='slider'>

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

            <section className='hotGallery'>

                <div className="text-center py-16 bg-white mt-36">
                    <div className="container mx-auto">
                        <h2 className="text-5xl font-bold mb-4">More Hotel Features</h2>

                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
                        </p>
                    </div>
                </div>


            </section>

            <section className="cards">
                <div className="flex flex-col items-center justify-center h-screen -mt-16 -mb-40">
                    <div className="grid grid-cols-3 gap-8 -mt-60">
                        <div className="bg-white shadow-md rounded-lg pb-6 w-[350px] h-[400px] ml-64">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                alt="image 1"
                                className="w-full h-[280px] object-cover rounded-t-lg" 
                            />
                            <Link to="/" className="block text-xl font-bold text-gray-900 mt-4 hover:text-green-500 transition-colors duration-300 no-underline" >
                                <h1 className="text-2xl font-bold text-gray-900 mt-4 text-left hover:text-[#65c0ba] ml-10 " style={{ fontFamily: '"Abril Fatface", times, serif' }}>
                                    Five Reasons to Stay at Villa Resort
                                </h1>
                            </Link>
                        </div>

                        <div className="bg-white shadow-md rounded-lg pb-6 w-[350px] h-[400px] ml-116">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                alt="image 2"
                                className="w-full h-[280px] object-cover rounded-t-lg"
                            />
                            <Link to="/" className="block text-xl font-bold text-gray-900 mt-4 hover:text-green-500 transition-colors duration-300 no-underline" >
                                <h1 className="text-2xl font-bold text-gray-900 mt-4 text-left hover:text-[#65c0ba] ml-10" style={{ fontFamily: '"Abril Fatface", times, serif' }}>
                                    Five Reasons to Stay at Villa Resort
                                </h1>
                            </Link>
                        </div>

                        <div className="bg-white shadow-md rounded-lg pb-6 w-[350px] h-[400px] ml-168">
                            <img
                                src="https://preview.colorlib.com/theme/hepta/images/img_3.jpg"
                                alt="image 3"
                                className="w-full h-[280px] object-cover rounded-t-lg"
                            />
                            <Link
                                to="/"
                                className="block text-xl font-bold text-gray-900 mt-4 transition-colors duration-300 no-underline"
                            >
                                <h1 className="text-2xl font-bold text-gray-900 mt-4 text-left hover:text-[#65c0ba] ml-10" style={{ fontFamily: '"Abril Fatface", times, serif' }}>
                                    Five Reasons to Stay at Villa Resort
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}
