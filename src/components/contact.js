import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <>
            <section className='header'>
                <header className="relative bg-cover bg-center h-screen h-[68vh] max-h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-3.jpg')" }}>
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
                        <h2 className="text-white text-8xl font-bold mb-4" style={{ fontFamily: "Mukta Mahee, arial, sans-serif" }}>Contact</h2>
                        <p className="text-white text-3xl">A free template by Colorlib. Download and share!</p>
                    </div>
                </header>

            </section>

            <section className='form'>
                <div className="flex justify-center items-center min-h-screen bg-white mt-32">

                    {/* Form Container */}
                    <div className="w-[50%] h-[700px] bg-white p-8 shadow-lg rounded-lg mr-0 ml-32">
                        <form className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label htmlFor="name" className=" block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 w-[70%] h-[60px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65c0ba]"

                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="mt-1 w-[70%] h-[60px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65c0ba]"

                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 w-[86%] h-[60px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65c0ba]"

                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700">Write Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 w-[86%] h-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#65c0ba]"

                                ></textarea>
                            </div>

                            <button className="w-[25%] h-[60px] border-2 border-teal-400 text-black-400 px-6 py-2 mr-64 rounded hover:bg-teal-400 hover:text-white transition-colors duration-300">
                                LEARN MORE
                            </button>
                        </form>
                    </div>

                    {/* Address Container */}
                    <div className="w-[35%] h-[700px]  bg-transparent p-8 shadow-none rounded-lg ml-16">
                        <h3 className="text-[#65c0ba]  uppercase text-xs tracking-wide" style={{ fontFamily: "Mukta Mahee, arial, sans-serif", fontSize: "16px" }}>Address:</h3>
                        <p className="  font-bold mt-3" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "30px" }}>98 West 21th Street, Suite</p>
                        <p className=" font-bold mb-10" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "30px" }}>721 New York NY 10016</p>

                        <h3 className="text-[#65c0ba]  uppercase text-xs tracking-wide" style={{ fontFamily: "Mukta Mahee, arial, sans-serif", fontSize: "16px" }}>Phone:</h3>
                        <p className="text-xl font-semibold mb-10 mt-3 " style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "30px" }} >(+1) 435 3533</p>

                        <h3 className="text-[#65c0ba] uppercase text-xs tracking-wide" style={{ fontFamily: "Mukta Mahee, arial, sans-serif", fontSize: "16px" }}>Email:</h3>
                        <p className="text-xl font-semibold mt-3" style={{ fontFamily: "Abril Fatface, times, serif", fontSize: "30px" }}>info@yourdomain.com</p>
                    </div>

                </div>
            </section>

            <section className='happyCustomers'>

                <div className="flex flex-col items-center justify-center py-12 bg-gray-50 mb-40">

                    
                    <h2 className="text-8xl font-bold mb-32" style={{fontFamily:"Abril Fatface, times, serif"}}>Happy Customers</h2>

                    <div className="flex justify-center gap-0">

                        {/* Testimonial 1 */}
                        <div className="w-[26.5%] bg-white p-6 rounded-lg shadow-none">
                            <div className="flex flex-col items-left text-left">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/person_1.jpg"
                                    alt="Clare Gupta"
                                    className="w-20 h-20 rounded-full mb-4 "
                                />
                                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight:"1.8"}}>
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
                                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight:"1.8" }}>
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
                                <p className="italic text-left text-[#000] mb-4" style={{ fontSize: "20px", fontFamily: "Mukta Mahee, arial, sans-serif", lineHeight:"1.8" }}>
                                    “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”

                                </p>
                                <p className=" text-left text-gray-500">— John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>



    )
}
