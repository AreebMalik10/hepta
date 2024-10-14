import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function News() {
    const categories = [
        {
            name: "Events", count: 12
        },
        {
            name: "Resto bar", count: 4
        },
        {
            name: "Celebration", count: 23
        },
        {
            name: "Promos", count: 8
        }

    ];

    return (
        <>
            <section className='header'>
                <header className="relative bg-cover bg-center h-screen h-[68vh] max-h-[68vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_3.jpg')" }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex justify-between items-center p-6">
                        <Link to="/">
                        <h1 className="text-white text-4xl font-bold">Hepta</h1>
                        </Link>
                        <Link to="/SideMenu" className="text-white text-3xl">
                            <FontAwesomeIcon icon={faBars} />
                        </Link>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h2 className="text-white text-8xl font-bold mb-4" style={{ fontFamily: "Mukta Mahee, arial, sans-serif" }}>Blog</h2>
                        <p className="text-white text-3xl">A free template by Colorlib. Download and share!</p>
                    </div>
                </header>

            </section>

            <section>
                <div className="container mx-auto px-4 py-10 mt-28">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* 1st Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm ">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba]  " style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                            {/* 2nd Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba] " style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                            {/* 3rd Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba]" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                            {/* 4th Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba] " style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                            {/* 5th Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba] " style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                            {/* 6th Post Item */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
                                <img
                                    src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                    alt="Post Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-lg text-gray-500 mb-2">FEBRUARY 26, 2018</p>
                                    <Link to="/news" className='no-underline'>
                                        <h3 className="text-3xl font-bold text-[#000000] hover:text-[#65c0ba] " style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h3>
                                    </Link>
                                </div>
                            </div>

                        </div>



                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search bar */}
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-[115%]">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>

                            </div>

                            {/* Popular Posts */}
                            <div className="bg-white p-4 rounded-lg shadow-md  w-[115%] ">
                                <h4 className="font-semibold text-lg mb-4">Popular Post</h4>

                                {/* 1st Post Preview Item */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                        alt="Post Thumbnail"
                                        className="w-22 h-[80px] object-cover  mr-4"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">FEBRUARY 27, 2018</p>
                                        <Link to="/news" className='text-black font-bold no-underline'>
                                            <h5 className="text-lg font-bold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h5>
                                        </Link>
                                    </div>
                                </div>

                                {/* 2nd Post Preview Item */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                        alt="Post Thumbnail"
                                        className="w-22 h-[80px] object-cover  mr-4"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">FEBRUARY 27, 2018</p>
                                        <Link to="/news" className='text-black font-bold no-underline'>
                                            <h5 className="text-lg font-bold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h5>
                                        </Link>
                                    </div>
                                </div>

                                {/* 3rd Post Preview Item */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://preview.colorlib.com/theme/hepta/images/img_1.jpg"
                                        alt="Post Thumbnail"
                                        className="w-22 h-[80px] object-cover  mr-4"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">FEBRUARY 27, 2018</p>
                                        <Link to="/news" className='text-black font-bold no-underline'>
                                            <h5 className="text-lg font-bold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h5>
                                        </Link>
                                    </div>
                                </div>

                                {/* 4th Post Preview Item */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://preview.colorlib.com/theme/hepta/images/img_2.jpg"
                                        alt="Post Thumbnail"
                                        className="w-22 h-[80px] object-cover  mr-4"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">FEBRUARY 27, 2018</p>
                                        <Link to="/news" className='text-black font-bold no-underline'>
                                            <h5 className="text-lg font-bold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h5>
                                        </Link>
                                    </div>
                                </div>

                                {/* 5th Post Preview Item */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://preview.colorlib.com/theme/hepta/images/img_3.jpg"
                                        alt="Post Thumbnail"
                                        className="w-22 h-[80px] object-cover  mr-4"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">FEBRUARY 27, 2018</p>
                                        <Link to="/news" className='text-black font-bold no-underline'>
                                            <h5 className="text-lg font-bold" style={{ fontFamily: "Abril Fatface, times, serif" }}>Free Template by Colorlib</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto px-8 mt-20 rounded-lg shadow-md w-[300%] h-[250px]">
                                <div className="w-[200%] max-w-md mx-auto">
                                    <h3 className="text-xl  mb-4">Categories</h3>
                                    <ul className="space-y-2 text-lg -ml-8">
                                        {categories.map((category, index) => (
                                            <li key={index} className="grid grid-cols-2">
                                                <Link to="/news" className='no-underline'>
                                                    <span className="text-[#65c0ba]">{category.name}</span>
                                                </Link>
                                                <Link to="/news" className='no-underline'>
                                                    <span className="text-[#6c757d] text-right">({category.count})</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <div className="flex items-center justify-left space-x-2 mb-20 ml-52">
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#65c0ba] text-white shadow-lg">
                    1
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-full text-[#65c0ba] hover:bg-gray-200">
                    2
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-full text-[#65c0ba] hover:bg-gray-200">
                    3
                </button>
            </div>

        </>
    )
}