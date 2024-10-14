import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a;] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "Abril Fatface, times, serif"}}>Quick Link</h2>
                        <div className="flex flex-col space-y-5">
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">About Us</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Terms & Conditions</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Privacy Policy</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Help</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Rooms</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4" style={{fontFamily:"Abril Fatface, times, serif"}}>Support</h2>
                        <div className="flex flex-col space-y-5">
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline lineHeight">Our Location</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">The Hosts</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">About</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Contact</Link>
                            <Link to="/" className="text-xl text-[#6c757d] hover:text-[#fff] no-underline">Restaurant</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="  text-2xl font-bold mb-4" style={{fontFamily:"Abril Fatface, times, serif"}}>Contact Info</h2>
                        <p className="text-lg text-[#fff]">Address:</p>
                        <p className="text-lg text-[#6c757d]">98 West 21st Street, Suite 721</p>
                        <p className="text-lg text-[#6c757d]">New York NY 10016</p>
                        <p className='text-lg'> Phone: </p>
                        <p className="text-lg text-[#6c757d]">(+1) 435 3533</p>
                        <p className='text-lg'>Email: </p>
                        <p className="text-lg text-[#6c757d]">info@yourdomain.com</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "Abril Fatface, times, serif"}}>Subscribe</h2>
                        <p className="text-lg text-[#6c757d]">Sign up for our newsletter</p>
                        <input
                            type="email"
                            placeholder="Your email..."
                            className="bg-gray-800 text-white p-2 rounded mb-4"
                        />
                        
                    </div>
                </div>
            </div>
            <div className="text-center py-4 border-t border-gray-600 mt-8">
                <p className="text-[#6c757d]">Copyright © 2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
                <div className="flex justify-center space-x-4 mt-2">

                
                  
                    <a href="#" className="text-xl text-white hover:text-[#65c0ba] no-underline">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" className="text-xl text-white hover:text-[#65c0ba] no-underline">
                      <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="#" className="text-xl text-white hover:text-[#65c0ba] no-underline">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="text-xl text-white hover:text-[#65c0ba] no-underline">
                      <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="#" className="text-xl text-white hover:text-[#65c0ba] no-underline">
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
