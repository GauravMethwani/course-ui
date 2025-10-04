import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  // Pricing Data inside the component
  const pricingPlans = {
    monthly: {
      free: {
        name: 'Free Plan',
        subtitle: 'For Small teams or office',
        price: 'Free',
        features: [
          { text: 'Unlimited access to all course, exercises and assessments', included: true },
          { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
          { text: 'Total assessment corrections with free download access system', included: true },
          { text: 'Unlimited download of courses on the mobile app contents', included: false },
          { text: 'Download and print courses and exercises in PDF', included: false }
        ],
        buttonText: 'Start free trial',
        buttonStyle: 'bg-orange-100 text-orange-500 hover:bg-orange-200'
      },
      premium: {
        name: 'Premium',
        subtitle: 'For startup enterprise',
        price: '49.99',
        period: '/mo',
        recommended: true,
        features: [
          { text: 'Unlimited access to all course, exercises and assessments', included: true },
          { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
          { text: 'Total assessment corrections with free download access system', included: true },
          { text: 'Unlimited download of courses on the mobile app contents', included: true },
          { text: 'Download and print courses and exercises in PDF', included: true }
        ],
        buttonText: 'Subscribe Now',
        buttonStyle: 'bg-orange-400 text-white hover:bg-orange-500'
      }
    },
    annual: {
      free: {
        name: 'Free Plan',
        subtitle: 'For Small teams or office',
        price: 'Free',
        features: [
          { text: 'Unlimited access to all course, exercises and assessments', included: true },
          { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
          { text: 'Total assessment corrections with free download access system', included: true },
          { text: 'Unlimited download of courses on the mobile app contents', included: false },
          { text: 'Download and print courses and exercises in PDF', included: false }
        ],
        buttonText: 'Start free trial',
        buttonStyle: 'bg-orange-100 text-orange-500 hover:bg-orange-200'
      },
      premium: {
        name: 'Premium',
        subtitle: 'For startup enterprise',
        price: '499.99',
        period: '/yr',
        recommended: true,
        features: [
          { text: 'Unlimited access to all course, exercises and assessments', included: true },
          { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
          { text: 'Total assessment corrections with free download access system', included: true },
          { text: 'Unlimited download of courses on the mobile app contents', included: true },
          { text: 'Download and print courses and exercises in PDF', included: true }
        ],
        buttonText: 'Subscribe Now',
        buttonStyle: 'bg-orange-400 text-white hover:bg-orange-500'
      }
    }
  };

  const currentPlans = pricingPlans[selectedPlan] || {};

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">PRICING PLAN</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Choose your pricing policy</h2>

        {/* Toggle */}
        <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
          <button onClick={() => setSelectedPlan('monthly')} className={`px-8 py-2 rounded-lg text-sm font-medium transition-all ${selectedPlan === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}>
            Monthly
          </button>
          <button onClick={() => setSelectedPlan('annual')} className={`px-8 py-2 rounded-lg text-sm font-medium transition-all ${selectedPlan === 'annual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}>
            Annual
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {currentPlans.free && (
          <div className="border-2 border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-1">{currentPlans.free.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentPlans.free.subtitle}</p>
            <div className="text-4xl font-bold mb-6">{currentPlans.free.price}</div>
            <ul className="space-y-4 mb-6">
              {currentPlans.free.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-0.5 ${f.included ? 'bg-teal-400' : 'bg-gray-300'}`}>
                    {f.included ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>{f.text}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg ${currentPlans.free.buttonStyle}`}>{currentPlans.free.buttonText}</button>
          </div>
        )}

        {currentPlans.premium && (
          <div className="border-2 border-teal-400 rounded-2xl p-8 bg-white hover:shadow-xl transition-shadow relative">
            {currentPlans.premium.recommended && <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-xs px-4 py-1 rounded-full">Recommended</span>}
            <h3 className="text-2xl font-bold mb-1">{currentPlans.premium.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentPlans.premium.subtitle}</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-teal-400">{currentPlans.premium.price}</span>
              {currentPlans.premium.period && <span className="text-gray-600 ml-1">{currentPlans.premium.period}</span>}
            </div>
            <ul className="space-y-4 mb-6">
              {currentPlans.premium.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-0.5 ${f.included ? 'bg-teal-400' : 'bg-gray-300'}`}>
                    {f.included ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>{f.text}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg ${currentPlans.premium.buttonStyle}`}>{currentPlans.premium.buttonText}</button>
          </div>
        )}
      </div>
    </section>
  );
}
