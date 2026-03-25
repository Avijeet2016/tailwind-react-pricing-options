import React from 'react';
import Features from './Features';

const PricingCard = ({ pricing }) => {
  return (
    <div className="bg-amber-500 p-5 rounded-lg border border-red-500">
      <h1 className="text-5xl ">{pricing.name}</h1>
      <h2>
        TK.{pricing.price} / {pricing.duration}
      </h2>
      <p>Admission Fee: TK.{pricing.admission_fee}</p> <br />
      <h3 className="text-bold text-2xl font-bold">Features:</h3>
      <div className="bg-amber-600 p-5  rounded-lg">
        {pricing.features.map((p, index) => (
          <Features key={index} p={p}></Features>
        ))}
      </div>{" "}
      <br />
      <button className="btn w-full rounded-lg">Subscribe</button>
    </div>
  );
};

export default PricingCard;