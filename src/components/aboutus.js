import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Aboutus() {
    const teamMembers = [
        {
            name: "Vince Richardson",
            role: "CEO, CO-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg"

        },
        {
            name: "Jean Love",
            role: "CTO, CO-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg"
        },
        {
            name: "Jeff Stark",
            role: "MARKETER, CO-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg"
        },
        {
            name: "Vince Richardson",
            role: "CEO, CO-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg"
        },
        {
            name: "Jean Love",
            role: "CTO, Co-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg"
        },
        {
            name: "Jeff Stark",
            role: "MARKETER, CO-FOUNDER",
            image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg"
        }


    ]
    return (
        <>
            <section className='header'>
                <header className="relative bg-cover bg-center h-screen h-[68vh] max-h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_2.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex justify-between items-center p-6">
                        <Link to="/" className='no-underline'>
                        <h1 className="text-white text-4xl font-bold">Hepta</h1>
                        </Link>
                        <Link to="/SideMenu" className="text-white text-3xl">
                            <FontAwesomeIcon icon={faBars} />
                        </Link>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h2 className="text-white text-8xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>About Us</h2>
                        <p className="text-white text-3xl">A free template by Colorlib. Download and share!</p>
                    </div>
                </header>
            </section>

            <section className='welcome'>
                <div className="flex flex-col md:flex-row bg-white p-6 ml-40">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-176 mb-6 md:mb-0 mt-32">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg"
                            alt="Beautiful scenery"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-[35%] md:pl-6 flex flex-col justify-center ml-20 mt-14" >
                        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }} >Welcome Travel & Tours</h2>
                        <p className="text-lg mb-4" style={{ fontFamily: "Abril Fatface, times, serif", color: "#6c757d", lineHeight: "1.8", fontSize: '20px' }}>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-lg mb-4" style={{ fontFamily: "Abril Fatface, times, serif", color: "#6c757d", lineHeight: "1.8", fontSize: '20px' }} >
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2  rounded hover:bg-teal-400 hover:text-white transition-colors duration-300">
                            LEARN MORE
                        </button>
                    </div>
                </div>

            </section>

            <section className='hotelGallery'>

                <div className="text-center py-16 bg-white mt-40">
                    <div className="container mx-auto">
                        <h2 className="text-7xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>Hotel Gallery</h2>

                        <p className="text-gray-500 text-xl max-w-[62%] mx-auto mt-15" style={{ fontFamily: "Abril Fatface, times, serif", lineHeight: "1.8", fontSize: '22px' }} >
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
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

            <section className='team mb-28'>

                <div className="text-center py-16 bg-white mt-40">
                    <div className="container mx-auto">
                        <h2 className="text-7xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>Team</h2>

                        <p className="text-gray-500 text-xl max-w-[62%] mx-auto mt-15" style={{ fontFamily: "Abril Fatface, times, serif", lineHeight: "1.8", fontSize: '22px' }} >
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-wrap justify-center gap-8 ">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[30%] lg:w-[30%] text-center bg-white rounded-lg overflow-hidden shadow-none "
                            >
                                <img
                                    className="w-[100%] h-90 object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                                <div className="p-6">
                                    <p className="text-md text-gray-400 uppercase tracking-wide text-left">
                                        {member.role}
                                    </p>
                                    <Link to="/aboutus" className="no-underline">
                                        <h3 className="mt-2 text-3xl font-bold text-[#000000] text-left hover:text-[#65c0ba] transition-colors duration-300" style={{fontFamily:"Abril Fatface, times, serif"}}>
                                            {member.name}
                                        </h3>
                                    </Link>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>


        </>


    )
}
