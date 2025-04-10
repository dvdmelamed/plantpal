'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface DeviceVisualizationProps {
  isWatering: boolean;
  moistureLevel: number;
  reservoirLevel: number;
}

const DeviceVisualization: React.FC<DeviceVisualizationProps> = ({
  isWatering,
  moistureLevel,
  reservoirLevel,
}) => {
  const [waterFlow, setWaterFlow] = useState(false);
  const [ledColor, setLedColor] = useState('#4CAF50'); // Green by default

  // Update LED color based on moisture level
  useEffect(() => {
    if (moistureLevel < 20) {
      setLedColor('#F44336'); // Red when dry
    } else if (moistureLevel < 40) {
      setLedColor('#FF9800'); // Orange when medium
    } else {
      setLedColor('#4CAF50'); // Green when moist
    }
  }, [moistureLevel]);

  // Simulate water flow animation
  useEffect(() => {
    if (isWatering) {
      setWaterFlow(true);
      
      // After watering stops
      const timer = setTimeout(() => {
        setWaterFlow(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isWatering]);

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center">
      <div className="relative">
        {/* Device SVG Wrapper */}
        <div className="relative">
          <div className="relative w-full h-auto max-w-lg">
            <Image 
              src="/images/smart-device.svg" 
              alt="Smart Watering Device"
              width={500}
              height={500} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          
          {/* Animated LED */}
          <motion.div 
            className="absolute"
            style={{ 
              top: '220px', 
              left: '340px', 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: ledColor,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ 
              opacity: moistureLevel < 20 ? [1, 0.4, 1] : 1
            }}
            transition={{ 
              repeat: moistureLevel < 20 ? Infinity : 0, 
              duration: 1 
            }}
          />
          
          {/* Water Flow Animation */}
          {waterFlow && (
            <>
              {/* Water droplets from tube to soil */}
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [250, 270, 290]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1,
                  repeatDelay: 0.2
                }}
                className="absolute"
                style={{
                  top: 0,
                  left: '170px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#1E90FF'
                }}
              />
              
              {/* Ripple effect in soil */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  scale: [0, 1.5, 3]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  repeatDelay: 1
                }}
                className="absolute"
                style={{
                  top: '280px',
                  left: '170px',
                  width: '20px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#1E90FF',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              
              {/* Pumping animation */}
              <motion.div
                animate={{ 
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 0.5
                }}
                className="absolute"
                style={{
                  top: '340px',
                  left: '65px',
                  width: '20px',
                  height: '25px',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }}
              />
            </>
          )}
          
          {/* Dynamic Water Level in Reservoir */}
          <div 
            className="absolute"
            style={{
              top: '350px',
              left: '30px',
              width: '50px',
              height: '120px',
              overflow: 'hidden'
            }}
          >
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-[#1E90FF] opacity-60"
              style={{
                height: `${reservoirLevel}%`,
                maxHeight: '100%'
              }}
              animate={{
                height: `${reservoirLevel}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 50
              }}
            />
          </div>
          
          {/* Wireless Signal Animation */}
          <motion.div
            className="absolute"
            style={{
              top: '230px',
              left: '360px',
              width: '100px',
              height: '50px',
              pointerEvents: 'none'
            }}
            animate={{
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
          >
            <svg width="100" height="50" viewBox="0 0 100 50">
              <path 
                d="M0,25 C25,5 50,0 70,-5" 
                stroke="#4A90E2" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                fill="none"
              />
              <path 
                d="M0,25 C30,10 60,5 90,0" 
                stroke="#4A90E2" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                fill="none"
              />
              <path 
                d="M0,25 C35,15 70,15 100,15" 
                stroke="#4A90E2" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                fill="none"
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Moisture Level Indicator */}
        <div className="absolute top-[350px] left-[110px] transform -rotate-90 origin-left">
          <div className="bg-gray-200 h-2 w-[100px] rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{
                width: `${moistureLevel}%`,
                backgroundColor: ledColor
              }}
              animate={{
                width: `${moistureLevel}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 50
              }}
            />
          </div>
          <span className="text-xs text-gray-600 absolute -top-4 left-0 transform -translate-x-full">0%</span>
          <span className="text-xs text-gray-600 absolute -top-4 right-0 transform translate-x-full">100%</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceVisualization; 