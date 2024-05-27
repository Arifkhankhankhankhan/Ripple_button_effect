import React from 'react';


const RippleButton = () => {
    const handleClick = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const circle = document.createElement('span');
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return (
        <div className="container">
            <button className="button" onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
};

export default RippleButton;
