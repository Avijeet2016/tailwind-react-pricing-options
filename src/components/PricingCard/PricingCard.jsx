import React from 'react';
import Features from './Features';

const PricingCard = ({ pricing }) => {
  return (
    <div className="">
      <div className="bg-amber-500 px-5 rounded-lg border border-red-500">
        <h1 className="text-3xl">{pricing.name}</h1>
        <h2>
          {pricing.price}TK. / {pricing.duration}
        </h2>
        <p>Admission Fee: {pricing.admission_fee}TK.</p>
        <h3 className="text-bold text-2xl">Features:</h3>
        {pricing.features.map((p, index) => (
          <Features key={index} p={p}></Features>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;