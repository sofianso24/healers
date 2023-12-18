import React, { useState } from 'react';
import { FC } from 'react';

const Avatar = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (

        <div className="relative inline-block">
            {/* Dropdown toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
               
            >
                
                <img src="https://readymadeui.com/team-3.webp" className="w-14 h-14 rounded-full border-2 border-blue-600 p-0.5 mx-auto"/>
            </button>

            {/* Dropdown menu */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen
                        ? 'absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition-transform duration-300 transform scale-100 opacity-100'
                        : 'absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition-transform duration-300 transform scale-95 opacity-0'
                    }`}
            >
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Votre profil
                </a>
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Vos projets
                </a>
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Aide
                </a>
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Paramètres
                </a>
                <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Se déconnecter
                </a>
            </div>
        </div>
    )
}

export default Avatar