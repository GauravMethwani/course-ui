import React from 'react'
import { Search } from 'lucide-react';
import bgImage from '../assets/BG.png';
import frameImage from '../assets/Frame.png';
import courseVideo from '../assets/video.mp4'
import { Header } from '../components/Header';

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background Image */}
      <img
        src={bgImage}
        alt=""
        className="absolute top-0 h-full object-cover pointer-events-none"
        style={{ objectPosition: 'center' }}
      />

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Section */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                <span className="text-gray-300 text-xl">★</span>
              </div>
              <span className="text-sm text-gray-600">Trusted by over 4,332 students</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn Design
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                with Nia Matos
              </h1>
              <img
                src={frameImage}
                alt="Frame"
                className="mt-6 w-48 sm:w-64 md:w-80 mx-auto md:mx-0 rounded-lg shadow-2xl"
              />
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              Get your blood tests delivered at home, collect samples from the victory of the managements that supply the best design system guidelines ever.
            </p>

            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Search Course Name"
                className="w-full px-6 py-4 pr-12 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8 pt-4">
              <span className="text-sm text-gray-500">Sponsored by:</span>
              <div className="flex items-center space-x-6 opacity-40">
                <span className="font-bold text-sm">Paypal</span>
                <span className="font-bold text-sm">Google</span>
                <span className="font-bold text-sm">Dropbox</span>
              </div>
            </div>
          </div>

          {/* Right Section - Video with Pattern */}
<div className="relative w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-lg mx-auto md:mx-0">

  {/* Pattern Behind Video */}
  <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 opacity-30 -z-10">
    <div className="grid grid-cols-8 gap-2">
      {[...Array(64)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
      ))}
    </div>
  </div>

  {/* Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={courseVideo} type="video/mp4" />
  </video>
</div>

        </div>
      </main>
    </div>
  );
}
