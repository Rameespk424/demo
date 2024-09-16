import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ target, speed, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const increment = target / speed;

    const updateCount = () => {
      setCount(prevCount => {
        if (prevCount < target) {
          const newCount = Math.min(prevCount + increment, target);
          return newCount;
        }
        return target;
      });
    };

    let interval;

    if (isVisible) {
      interval = setInterval(updateCount, 1); // Start updating count
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isVisible, target, speed]);

  useEffect(() => {
    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(counterRef.current); // Stop observing once it's visible
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="relative flex flex-col items-center justify-center p-4"
    >
      <div className="text-4xl font-bold text-gray-800">
        {Math.floor(count)} {suffix}
      </div>
    </div>
  );
};

export default Counter;
