import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-white flex justify-center items-center">
            <button
                className="absolute top-8 right-6 text-5xl"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="text-center space-y-6">
                <li className="text-4xl font-bold">
                    <Link to="/" className="text-teal-500 hover:text-[#65c0ba] no-underline">Home</Link>
                </li>
                <li className="text-4xl font-bold">
                    <Link to="/hotels" className="text-[#000000] hover:text-[#65c0ba] no-underline">Hotels</Link>
                </li>
                <li className="text-4xl font-bold">
                    <Link to="/aboutus" className="text-[#000000] hover:text-[#65c0ba] no-underline">About Us</Link>
                </li>
                <li className="text-4xl font-bold">
                    <Link to="/gallery" className="text-[#000000] hover:text-[#65c0ba] no-underline">Gallery</Link>
                </li>
                <li className="text-4xl font-bold">
                    <Link to="/news" className="text-[#000000] hover:text-[#65c0ba] no-underline">News</Link>
                </li>
                <li className="text-4xl font-bold">
                    <Link to="/contact" className="text-[#000000] hover:text-[#65c0ba] no-underline">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;