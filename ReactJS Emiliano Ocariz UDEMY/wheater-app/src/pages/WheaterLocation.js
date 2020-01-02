import React from 'react';
import Location from './../components/Location';
import WheaterData from './../components/WheaterData';

const WheaterLocation = () => (
    <div>
        <p><Location city="Paraná"></Location></p>
        <WheaterData />
    </div>
);

export default WheaterLocation;