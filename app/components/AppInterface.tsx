'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaWater, 
  FaThermometerHalf, 
  FaSun, 
  FaBell, 
  FaCog, 
  FaCalendarAlt,
  FaTint,
  FaLeaf
} from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AppInterface = () => {
  const [moistureLevel, setMoistureLevel] = useState(25);
  const [reservoirLevel, setReservoirLevel] = useState(80);
  const [isWatering, setIsWatering] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [lightLevel] = useState(65);
  const [temperature] = useState(24);
  const [lastWatered, setLastWatered] = useState('3 hours ago');
  const [nextWatering, setNextWatering] = useState('in 2 days');
  
  // Data for the moisture level chart
  const chartData = {
    labels: ['7 days ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Today'],
    datasets: [
      {
        label: 'Soil Moisture (%)',
        data: [65, 59, 52, 45, 38, 32, moistureLevel],
        fill: false,
        backgroundColor: '#4A90E2',
        borderColor: '#4A90E2',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Simulate changing moisture level
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

  // Simulate watering effect
  const handleWaterNow = () => {
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

  const getMoistureColor = () => {
    if (moistureLevel < 20) return 'text-red-500';
    if (moistureLevel < 40) return 'text-yellow-500';
    return 'text-blue-500';
  };

  return (
    <div className="relative w-[320px] h-[650px] bg-gray-100 rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
      {/* Phone Top Notch */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center">
        <div className="w-32 h-4 bg-gray-800 rounded-b-xl"></div>
      </div>
      
      {/* App Content */}
      <div className="pt-8 h-full overflow-y-auto px-4 pb-20 bg-white">
        {/* App Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold text-green-700 flex items-center">
            <FaLeaf className="mr-2" /> PlantPal
          </h1>
          <div className="flex gap-2">
            <button className="text-gray-600 p-2 rounded-full hover:bg-gray-100">
              <FaBell />
            </button>
            <button className="text-gray-600 p-2 rounded-full hover:bg-gray-100">
              <FaCog />
            </button>
          </div>
        </div>
        
        {/* Alert Notification (conditional) */}
        {showAlert && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4 rounded shadow-md"
          >
            <div className="flex items-center">
              <FaBell className="text-red-500 mr-2" />
              <span className="font-medium">Alert: Soil moisture critically low!</span>
            </div>
            <p className="text-sm mt-1">Your plant needs water immediately.</p>
          </motion.div>
        )}
        
        {/* Plant Status Overview */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Plant Status</h2>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <Image 
                  src="/images/plant.svg" 
                  alt="Plant"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="ml-2">
                <h3 className="font-medium text-gray-800">Fern</h3>
                <p className="text-sm text-gray-500">Indoor Plant</p>
              </div>
            </div>
            <div className={`text-center ${getMoistureColor()}`}>
              <FaWater className="text-3xl mx-auto" />
              <span className="text-xl font-bold">{moistureLevel}%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <div className="mr-2 text-blue-500">
                <FaTint />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Last watered:</p>
                <p className="font-medium">{lastWatered}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-blue-500">
                <FaCalendarAlt />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Next scheduled:</p>
                <p className="font-medium">{nextWatering}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-yellow-500">
                <FaSun />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Light:</p>
                <p className="font-medium">{lightLevel}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-red-400">
                <FaThermometerHalf />
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Temperature:</p>
                <p className="font-medium">{temperature}°C</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Moisture Trend */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Moisture Trend</h2>
          <Line data={chartData} options={chartOptions} height={120} />
        </div>
        
        {/* Water Reservoir Status */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Water Reservoir</h2>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-6 mr-4">
              <div 
                className="bg-blue-500 h-6 rounded-full"
                style={{ width: `${reservoirLevel}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{reservoirLevel}%</span>
          </div>
        </div>
        
        {/* Recommendations Box */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-2 flex items-center text-gray-700">
            <span className="mr-2">💡</span> Smart Recommendations
          </h2>
          {moistureLevel < 20 ? (
            <p className="text-sm text-gray-700">Moisture level is getting very low. Plants are drying out faster in your current environment. Consider increasing watering frequency.</p>
          ) : lightLevel < 50 ? (
            <p className="text-sm text-gray-700">Plant is in a low-light area. Consider moving it closer to a window for better growth.</p>
          ) : (
            <p className="text-sm text-gray-700">Your plant is healthy and all parameters look good. Keep up the good care!</p>
          )}
        </div>
        
        {/* Control Buttons */}
        <div className="flex gap-3 mb-4">
          <button 
            onClick={handleWaterNow}
            disabled={isWatering}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white ${isWatering ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} transition`}
          >
            <FaWater />
            {isWatering ? 'Watering...' : 'Water Now'}
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium text-gray-700">
            <FaCalendarAlt />
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppInterface; 