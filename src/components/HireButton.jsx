import React from "react";

export default function HireButton() {
    return (
        <button className="relative mt-5 inline-flex items-center justify-center px-3 py-1.5 overflow-hidden font-bold text-2xl transition duration-300 ease-out border-2 border-orange-500 rounded-md shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
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
            <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Hire Me
            </span>
            <span className="relative invisible">
                Hire Me
            </span>
        </button>
    );
}