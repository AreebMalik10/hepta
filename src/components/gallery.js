import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Gallery() {
    const images = [

        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",



    ]

    const images2 = [
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg"

    ]

    const images3 = [
        "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-6.jpg",
        "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg"
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
                        <h2 className="text-white text-8xl font-bold mb-4" style={{ fontFamily: "Mukta Mahee, arial, sans-serif" }}>Gallery</h2>
                        <p className="text-white text-3xl">A free template by Colorlib. Download and share!</p>
                    </div>
                </header>

            </section>

            <section className='images mb-40'>
                <div className="container mx-auto mt-36">
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md"
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {images2.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md"
                            />
                        ))}
                    </div>
                </div>

                <div className="container mx-auto mt-6">
                    <div className="grid grid-cols-4 gap-4">
                        {images3.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="object-cover w-full h-full rounded-md"
                            />
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
