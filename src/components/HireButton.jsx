import React from "react";

export default function HireButton() {
    const isMobile = window.innerWidth <= 640;

    return (
        <button className={`relative mt-5 inline-flex items-center justify-center px-3 py-1.5 overflow-hidden font-bold ${isMobile ? 'text-3xl' : 'text-4xl'} transition duration-300 ease-out border-2 border-orange-600 rounded-md shadow-md group`}>
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full orange-gradient-text transition-all duration-300 transform group-hover:translate-x-full ease">
                Hire Me
            </span>
            <span className="relative invisible">
                Hire Me
            </span>
        </button>
    );
}