'use client';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React, { useState } from 'react';

const PricingCards = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      id: 3,
      name: 'Free',
      price: 'Free',
      span: '14 days trial',
      theme: '#FF8B07',
      bg: '#FFF6EE',
      features: [
        'Deals: 1000',
        'Custom Fields: 50',
        'free trial: 14',
        'Leads: 1000',
        'Stages: 50',
        'Users: 20',
        'Pipelines: 10'
      ]
    },
    {
      id: 1,
      name: 'Monthly',
      price: 12,
      span: 'Per Month',
      theme: '#FF8B07',
      bg: '#FFF6EE',
      features: [
        'Unlimited lead',
        'Unlimited deal',
        'Unlimited workflow',
        'Unlimited stage',
        'Unlimited dynamic column',
        '100GB file',
        'Facebook & Website Integration',
        'Calls data integration'
      ]
    },
    {
      id: 2,
      name: 'Annually',
      price: 108,
      span: 'Per Year',
      theme: '#02B388',
      bg: '#E9FFF9',
      features: [
        'Unlimited lead',
        'Unlimited deal',
        'Unlimited workflow',
        'Unlimited stage',
        'Unlimited dynamic column',
        '100GB file',
        'Facebook & Website Integration',
        'Calls data integration'
      ]
    }
  ];

  const handleGetStarted = () => {
    window.location.href = 'http://live.lastingsales.com/';
  };

  const handleCancelSubscription = (planName) => {
    setSelectedPlan(planName);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
    setSelectedPlan('');
  };

  const confirmCancel = () => {
    console.log(`Cancelling subscription for ${selectedPlan}`);
    closeDialog();
  };

  return (
<>
<NavBar/>
    <div className="container mx-auto px-4 py-12 pt-30">

      {/* ⭐ Updated to 3 cards per row on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-xl shadow-md bg-white max-w-sm w-full pb-6"
            style={{ border: `2px solid ${plan.theme}` }}
          >
            {/* Header */}
            <div
              className="text-center py-5 rounded-t-xl border-b"
              style={{
                background: plan.bg,
                borderColor: plan.theme
              }}
            >
              <h2
                className="text-2xl font-bold"
                style={{ color: plan.theme }}
              >
                {plan.name} Plan
              </h2>
              <p className="text-gray-500 text-sm mt-1">{plan.span}</p>
            </div>

            {/* Price */}
            <div className="text-center mt-4">
              <p
                className="text-4xl font-bold"
                style={{ color: plan.theme }}
              >
                ${plan.price}
              </p>
              <p className="text-gray-500 text-sm mt-1">per user</p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleGetStarted(plan.name)}
                className="px-6 py-2 text-white rounded-lg transition font-medium"
                style={{ background: plan.theme }}
              >
                Get Started
              </button>
            </div>

            {/* Features (2 columns) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 px-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-lg" style={{ color: plan.theme }}>
                    ✔
                  </span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Dialog */}
      {openDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Cancel Subscription
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your
              <strong> {selectedPlan} </strong>
              subscription?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeDialog}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition"
              >
                No, Keep It
              </button>

              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

    <Footer/>
</>
  );
};

export default PricingCards;
