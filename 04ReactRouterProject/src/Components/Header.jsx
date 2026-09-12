import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header () {
    return (
        <>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
                    </a>
                    
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink 
                                to="/"
                                end
                                className={({isActive}) =>
                                `block py-2 ${isActive ?
                                    "text-orange-700" : "text-gray-700"
                                } pl-3 pr-4 bg-purple-700 rounded lg:bg-transparent lg:p-0`}
                                >
                                Home
                                </NavLink>

                            </li>
                            <li>
                                <NavLink 
                                to="/company"
                                className={({isActive}) =>
                                `block py-2 ${isActive ?
                                    "text-orange-700" : "text-gray-700"
                                } pl-3 pr-4 bg-purple-700 rounded lg:bg-transparent lg:p-0`}
                                >
                                Company
                                </NavLink>

                            </li>
                            <li>
                                <NavLink 
                                to="/features"
                                className={({isActive}) =>
                                `block py-2 ${isActive ?
                                    "text-orange-700" : "text-gray-700"
                                } pl-3 pr-4 bg-purple-700 rounded lg:bg-transparent lg:p-0`}
                                >
                                Features
                                </NavLink>

                            </li>
                            <li>
                                <NavLink 
                                to="/contact"
                                className={({isActive}) =>
                                `block py-2 ${isActive ?
                                    "text-orange-700" : "text-gray-700"
                                } pl-3 pr-4 bg-purple-700 rounded lg:bg-transparent lg:p-0`}
                                >
                                Contact 
                                </NavLink>

                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

