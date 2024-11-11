import React, { useState, useEffect } from 'react';

function ShootingStars({ numStars }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateRandomPosition = () => {
      return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      };
    };

    const generateRandomDelay = () => {
      return Math.random() * 5 + 1; // Random delay between 1 and 6 seconds
    };

    const newStars = Array.from({ length: numStars }, (_, index) => ({
      id: `star-${index}`,
      position: generateRandomPosition(),
      delay: generateRandomDelay()
    }));

    setStars(newStars);
  }, [numStars]);

  return (
    <div className="shooting-stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.position.top,
            left: star.position.left,
            animationDelay: `${star.delay}s`
          }}
        />
      )}
    </div>
  );
}

export default ShootingStars;
