import React from 'react';
import arrowImage from '../assets/arrow.png';

const steps = [
  {
    number: '01',
    title: 'Set disbursement Instructions',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.'
  },
  {
    number: '02',
    title: 'Assembly retrieves funds from your account',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.'
  },
  {
    number: '03',
    title: 'Assembly initiates disbursement',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.'
  },
  {
    number: '04',
    title: 'Customer receives funds payment',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.'
  }
];


export default function HowItsWorks() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            WHAT'S THE FUNCTION
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Let's see how it works</h2>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              {/* Step Card */}
              <div className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-gray-200 mb-6">{step.number}</div>
                <h3
                  className="text-gray-900 mb-3 leading-[155%]"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: 500,
                    fontSize: '22px',
                    letterSpacing: '0px',
                    lineHeight: '155%'
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0px'
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute right-[-50px] w-24 h-12"
                  style={{ top: '40%' }} // slightly above center
                >
                  <img
                    src={arrowImage}
                    alt="arrow"
                    className="w-full h-full object-contain opacity-80"
                    style={{ filter: 'brightness(0.4)' }} // darken arrow
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
