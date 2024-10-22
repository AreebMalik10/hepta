import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './css/aboutus.css';


export default function Aboutus() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

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
                <header className="relative bg-cover bg-center h-screen sm:h-[50vh] md:h-[60vh] lg:h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_2.jpg')" }}>
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
                            About Us
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



            <section className="welcome" >
                <div className="flex flex-col md:flex-row bg-white p-6 sm:ml-0 md:ml-20 lg:ml-40" data-aos="fade-up">
                    {/* Image Section */}
                    <div className="sm:w-full md:w-5/12 h-96 sm:h-64 md:h-176 mb-6 md:mb-0 mt-6 sm:mt-16 md:mt-32">
                        <img
                            src="https://preview.colorlib.com/theme/hepta/images/hero_1.jpg"
                            alt="Beautiful scenery"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="sm:w-full md:w-[35%] md:pl-6 flex flex-col justify-center sm:ml-0 md:ml-20 mt-8 sm:mt-8 md:mt-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                            Welcome Travel & Tours
                        </h2>
                        <p className="text-base sm:text-lg md:text-lg mb-4" style={{ fontFamily: "Abril Fatface, times, serif", color: "#6c757d", lineHeight: "1.8", fontSize: '20px' }}>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-base sm:text-lg md:text-lg mb-4" style={{ fontFamily: "Abril Fatface, times, serif", color: "#6c757d", lineHeight: "1.8", fontSize: '20px' }}>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <button className="border-2 border-teal-400 text-black-400 h-12 w-48 px-6 py-2 rounded hover:bg-teal-400 hover:text-white transition-colors duration-300">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </section>


            <section className='hotelGallery'>

                <div className="text-center py-16 bg-white mt-40" data-aos="fade-up">
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

            <section className='team mb-28' data-aos="fade-up">

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
                                        <h3 className="mt-2 text-3xl font-bold text-[#000000] text-left hover:text-[#65c0ba] transition-colors duration-300" style={{ fontFamily: "Abril Fatface, times, serif" }}>
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
