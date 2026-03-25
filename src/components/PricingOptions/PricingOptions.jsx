import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);

    const pricingPlans = pricingData.plans;
    return (
      <div className='px-5'>
        <h2 className='text-5xl font-bold text-center py-5'>Get Out Membership</h2>
        <div className='grid sm:grid-cols-3 gap-5 '>
          {pricingPlans.map((pricing, index) => (
            <PricingCard key={index} pricing={pricing}></PricingCard>
          ))}
        </div>
      </div>
    );
};

export default PricingOptions;