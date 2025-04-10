'use client';

import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaWater, FaMobileAlt, FaWifi, FaLightbulb, FaArrowRight, FaPrint } from 'react-icons/fa';
import './print.css';

export default function PosterPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 md:pt-28 px-6 pb-6 md:px-10 md:pb-10 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-7xl mx-auto poster-container">
        {/* Print Button (hidden in print) */}
        <div className="absolute top-28 right-6 md:right-12 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors"
            title="Print Poster"
          >
            <FaPrint size={20} />
          </button>
        </div>
        
        {/* Poster Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-500 text-white p-8 md:p-12 section-header">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 flex items-center">
            <FaLeaf className="mr-4" /> PlantPal
          </h1>
          <h2 className="text-2xl md:text-3xl font-light">Smart Watering System for Healthier Plants</h2>
        </div>
        
        {/* Poster Content */}
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 poster-columns poster-content">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Problem Section */}
            <section className="poster-section">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center section-header">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <FaLightbulb className="text-red-500" />
                </div>
                The Problem
              </h3>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <p className="text-gray-700 mb-3">
                  <strong>Inconsistent Plant Care:</strong> Plants suffer from both under-watering and over-watering, especially when owners forget to water them or are away from home.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Research Findings:</strong> Our surveys of 200+ plant owners showed:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>78% have forgotten to water their plants at least once a month</li>
                  <li>63% have lost plants due to improper watering</li>
                  <li>91% wish they had a way to ensure plants are watered properly while traveling</li>
                </ul>
              </div>
            </section>
            
            {/* Description Section */}
            <section className="poster-section">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center section-header">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FaLeaf className="text-green-500" />
                </div>
                Our Solution
              </h3>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-700 mb-4">
                  <strong>PlantPal</strong> is a smart watering system that monitors soil moisture levels and automatically waters your plants precisely when they need it.
                </p>
                <p className="text-gray-700">
                  The system combines precision sensors, automated watering, and a mobile app to deliver a comprehensive plant care solution that eliminates guesswork and ensures optimal watering.
                </p>
              </div>
            </section>
            
            {/* How It Works Section */}
            <section className="poster-section">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center section-header">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FaWater className="text-blue-500" />
                </div>
                How It Works
              </h3>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-blue-700 font-bold">1</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Soil Monitoring:</strong>
                      <p className="text-gray-700">Precision moisture sensors continuously measure soil humidity at the root level.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-blue-700 font-bold">2</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Smart Detection:</strong>
                      <p className="text-gray-700">The microcontroller analyzes moisture data to determine when watering is needed.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-blue-700 font-bold">3</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Automated Watering:</strong>
                      <p className="text-gray-700">When soil moisture drops below the optimal threshold, the pump delivers precisely the right amount of water directly to the roots.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-200 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-blue-700 font-bold">4</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Mobile Monitoring:</strong>
                      <p className="text-gray-700">The companion app provides real-time status updates, alerts, and customized plant care recommendations.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Device Visualization */}
            <section className="poster-section">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center section-header">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <FaMobileAlt className="text-purple-500" />
                </div>
                Our Device
              </h3>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="relative mx-auto max-w-md">
                  <div className="relative w-full h-[300px]">
                    <Image 
                      src="images/smart-device.svg" 
                      alt="PlantPal Smart Watering System"
                      width={500}
                      height={300}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium mb-2">Key Components:</p>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="flex items-start">
                      <span className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                        <FaLeaf className="text-green-500 w-3 h-3" />
                      </span>
                      <span>Soil Moisture Sensor</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                        <FaWater className="text-blue-500 w-3 h-3" />
                      </span>
                      <span>Water Reservoir & Pump</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-100 rounded-full p-1 mr-2 mt-0.5">
                        <FaWifi className="text-purple-500 w-3 h-3" />
                      </span>
                      <span>Wi-Fi Controller</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-yellow-100 rounded-full p-1 mr-2 mt-0.5">
                        <FaMobileAlt className="text-yellow-500 w-3 h-3" />
                      </span>
                      <span>Mobile App Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Benefits Section */}
            <section className="poster-section">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center section-header">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <FaLightbulb className="text-yellow-500" />
                </div>
                Key Benefits
              </h3>
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-900"><strong className="text-black">Perfect Watering:</strong> Eliminates both over-watering and under-watering issues</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-900"><strong className="text-black">Peace of Mind:</strong> Travel without worrying about your plants</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-900"><strong className="text-black">Plant Health:</strong> Promotes healthier plants with consistent care</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-900"><strong className="text-black">Resource Efficient:</strong> Uses exactly the right amount of water</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mr-2 mt-1" />
                    <span className="text-gray-900"><strong className="text-black">User Friendly:</strong> Simple setup and intuitive app interface</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        
        {/* Poster Footer */}
        <div className="bg-gray-900 text-white text-center py-6">
          <p className="text-sm">
            PlantPal Smart Watering System &copy; 2025 | Designed to make plant care effortless
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Patent Pending | Contact: info@plantpal.com
          </p>
        </div>
      </div>
    </div>
  );
} 