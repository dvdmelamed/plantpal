'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <FaLeaf className={`text-2xl mr-2 ${isScrolled ? 'text-green-600' : 'text-green-500'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
            PlantPal
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-medium hover:text-green-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            href="#features" 
            className={`font-medium hover:text-green-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className={`font-medium hover:text-green-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            How It Works
          </Link>
          <Link 
            href="#pricing" 
            className={`font-medium hover:text-green-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            Pricing
          </Link>
          <Link 
            href="/poster" 
            className={`font-medium hover:text-green-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}
          >
            Poster
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/webapp" 
            className={`${
              isScrolled 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            } py-2 px-4 rounded-lg font-medium transition-colors`}
          >
            Try Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 