import React from 'react';

const Greeting = ({ name }) => {
    const timeOfDay = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'Good morning';
        else if (hour >= 12 && hour < 18) return 'Good afternoon';
        else return 'Good evening';
    };

    // Inline styles for the heading element
    const headingStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '2rem',
        color: 'white', // Default color
    };

    return (
        <h1 style={headingStyle}>{`${timeOfDay()}, ${name}`}</h1>
    );
};

export default Greeting;
