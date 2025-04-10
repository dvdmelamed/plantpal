'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaMobileAlt, FaWifi, FaBrain, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                  Never Forget to <span className="text-green-600">Water</span> Your Plants Again
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  PlantPal is a smart watering system that monitors soil moisture and automatically waters your plants when they need it. Get alerts, insights, and control everything from your phone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/webapp" 
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Try Demo
                  </Link>
                  <button className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-lg border border-green-600 transition-colors">
                    Pre-Order Now
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full max-w-md">
                  <Image 
                    src="images/smart-device.svg" 
                    alt="PlantPal Smart Watering System"
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Smart Features for Healthier Plants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PlantPal combines advanced sensors, intelligent automation, and user-friendly controls to make plant care effortless.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaWater />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Precise Moisture Sensing</h3>
              <p className="text-gray-600">
                Advanced soil moisture sensors detect exactly when your plants need water, preventing both under and overwatering.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Control</h3>
              <p className="text-gray-600">
                Monitor your plants&apos; status, receive alerts, and control watering from anywhere using our intuitive mobile app.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaWifi />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wireless Connectivity</h3>
              <p className="text-gray-600">
                Wi-Fi enabled device connects seamlessly to your home network, ensuring your plants are monitored 24/7.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaBrain />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Get personalized care tips based on your plant&apos;s specific needs and environmental conditions.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vacation Mode</h3>
              <p className="text-gray-600">
                Travel worry-free knowing your plants will be automatically watered according to their needs.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Plant Support</h3>
              <p className="text-gray-600">
                One system can monitor and water multiple plants with different watering needs and schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How PlantPal Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, effective solution for keeping your plants perfectly watered
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Install & Connect</h3>
              <p className="text-gray-600">
                Place the moisture sensor in your plant&apos;s soil, fill the water reservoir, and connect to your Wi-Fi network.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Preferences</h3>
              <p className="text-gray-600">
                Use the app to set your plant type and preferred moisture levels, or let our system recommend optimal settings.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Relax & Enjoy</h3>
              <p className="text-gray-600">
                PlantPal monitors and waters automatically. Just refill the reservoir occasionally and enjoy thriving plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invest in healthier, happier plants with our affordable smart watering system
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-green-600 text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-1">PlantPal Smart Watering System</h3>
                <p className="opacity-90">Complete kit with everything you need</p>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-800">$79</span>
                  <span className="text-gray-600 ml-2">USD</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Smart control unit with Wi-Fi</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Precision moisture sensor</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Water pump and 1L reservoir</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Free mobile app (iOS & Android)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">1-year warranty</span>
                  </li>
                </ul>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Pre-Order Now
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  *Shipping begins in June 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Plant Care?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of plant lovers who have discovered the joy of effortless plant care with PlantPal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/webapp" 
              className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Try Interactive Demo
            </Link>
            <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <FaLeaf className="mr-2" /> PlantPal
              </h2>
              <p className="text-gray-400 mt-2">Smart watering for happier plants</p>
            </div>
            
            <div className="flex gap-8">
              <div>
                <h3 className="font-semibold mb-2">Product</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Legal</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 PlantPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
