'use client';

import React, { useState, useEffect } from 'react';
import AppInterface from '../components/AppInterface';
import DeviceVisualization from '../components/DeviceVisualization';

export default function WebApp() {
  const [moistureLevel, setMoistureLevel] = useState(25);
  const [reservoirLevel, setReservoirLevel] = useState(80);
  const [isWatering, setIsWatering] = useState(false);
  
  // Simulate decreasing moisture level over time
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isWatering) {
        setMoistureLevel((prev) => Math.max(1, prev - 1));
      }
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isWatering]);
  
  // Handle watering action
  const handleWatering = () => {
    setIsWatering(true);
    
    // Simulate watering for 5 seconds
    setTimeout(() => {
      setIsWatering(false);
      setMoistureLevel(75);
      setReservoirLevel((prev) => Math.max(0, prev - 5));
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pt-24 md:pt-28 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-700 mb-2">PlantPal Smart Watering System Demo</h1>
          <p className="text-lg text-gray-600">Interactive Demonstration of Device and App Interface</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="flex-1 order-2 lg:order-1">
            <DeviceVisualization 
              isWatering={isWatering} 
              moistureLevel={moistureLevel} 
              reservoirLevel={reservoirLevel} 
            />
          </div>
          
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <AppInterface />
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How The Demo Works</h2>
            <ul className="text-gray-600 space-y-3 list-disc pl-5">
              <li>The simulation shows both the physical device and the companion mobile app.</li>
              <li>The soil moisture level decreases over time, simulating a plant using water.</li>
              <li>When the moisture level gets too low, the app will display an alert.</li>
              <li>Click the "Water Now" button in the app to trigger the watering system.</li>
              <li>Watch the device visualization to see the water flowing from the reservoir to the soil.</li>
              <li>The moisture sensor will detect the increased moisture and update the readings.</li>
              <li>The water reservoir level decreases slightly with each watering.</li>
            </ul>
            
            <div className="mt-6 text-center">
              <button 
                onClick={handleWatering}
                disabled={isWatering}
                className={`py-3 px-6 rounded-lg font-medium ${isWatering ? 'bg-blue-300 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition`}
              >
                {isWatering ? 'Watering in Progress...' : 'Trigger Watering Manually'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 