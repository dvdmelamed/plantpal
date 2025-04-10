'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import AppInterface from '../components/AppInterface';
import DeviceVisualization from '../components/DeviceVisualization';

export default function WebApp() {
  const [isWatering, setIsWatering] = useState(false);
  const [moistureLevel, setMoistureLevel] = useState(25);
  const [reservoirLevel, setReservoirLevel] = useState(80);
  const [showAlert, setShowAlert] = useState(false);
  const [lastWatered, setLastWatered] = useState('3 hours ago');
  const [nextWatering, setNextWatering] = useState('in 2 days');

  // Simulate decreasing moisture level over time
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isWatering) {
        setMoistureLevel((prev) => {
          const newLevel = Math.max(1, prev - 1);
          // Show alert if moisture level is too low
          if (newLevel < 15 && !showAlert) {
            setShowAlert(true);
          }
          return newLevel;
        });
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isWatering, showAlert]);

  const handleWatering = () => {
    setIsWatering(true);
    setShowAlert(false);
    
    // Simulate watering for 5 seconds
    setTimeout(() => {
      setIsWatering(false);
      setMoistureLevel(75);
      setReservoirLevel((prev) => Math.max(0, prev - 5));
      setLastWatered('Just now');
      setNextWatering('in 3 days');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">PlantPal Demo</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience how the PlantPal smart watering system works with our interactive demo
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 order-2 lg:order-1">
            <DeviceVisualization 
              isWatering={isWatering} 
              moistureLevel={moistureLevel}
              reservoirLevel={reservoirLevel}
            />
          </div>
          
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <AppInterface 
              moistureLevel={moistureLevel}
              setMoistureLevel={setMoistureLevel}
              reservoirLevel={reservoirLevel}
              setReservoirLevel={setReservoirLevel}
              isWatering={isWatering}
              setIsWatering={setIsWatering}
              showAlert={showAlert}
              setShowAlert={setShowAlert}
              lastWatered={lastWatered}
              setLastWatered={setLastWatered}
              nextWatering={nextWatering}
              setNextWatering={setNextWatering}
              handleWaterNow={handleWatering}
            />
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How The Demo Works</h2>
            <ul className="text-gray-600 space-y-3 list-disc pl-5">
              <li>The simulation shows both the physical device and the companion mobile app.</li>
              <li>The soil moisture level decreases over time, simulating a plant using water.</li>
              <li>When the moisture level gets too low, the app will display an alert.</li>
              <li>Click the &quot;Water Now&quot; button in the app to trigger the watering system.</li>
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