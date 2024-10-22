import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Gallery() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const images = [
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",
    ];

    const images2 = [
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg"
    ];

    const images3 = [
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg"
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
        navigate('/gallery'); 
    };

    return (
        <>
            <section className='header'>
                <header className="relative bg-cover bg-center h-screen sm:h-[50vh] md:h-[60vh] lg:h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_2.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Navbar */}
                    <div className="relative z-10 flex justify-between items-center p-6">
                        <Link to="/" className='no-underline'>
                            <h1 className="text-white text-2xl sm:text-2xl md:text-4xl font-semibold">Hepta</h1>
                        </Link>
                        <button className="text-white text-2xl sm:text-3xl" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center" >
                        <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ fontFamily: "Abril Fatface, times, serif" }}>
                            Gallery
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

            <section className='images mb-40' data-aos="fade-up">
                <div className="container mx-auto mt-36">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md cursor-pointer"
                                onClick={() => handleImageClick(image)} 
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {images2.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {images3.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md cursor-pointer"
                                onClick={() => handleImageClick(image)} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50" onClick={closeModal}>
                    <div className="relative">
                        <button 
                            className="absolute top-4 right-4 text-white text-2xl bg-transparent border-none cursor-pointer z-10"
                            onClick={closeModal} 
                        >
                            &times; 
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Enlarged" 
                            className="max-w-full max-h-full" 
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </div>
                </div>
            )}
        </>
    );
}
