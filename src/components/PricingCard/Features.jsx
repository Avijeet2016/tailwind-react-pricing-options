import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({p}) => {
    console.log(p);
    return (
        <ul>
            <li className='flex gap-1'><CircleCheckBig></CircleCheckBig> {p}</li>
        </ul>
    );
};

export default Features;