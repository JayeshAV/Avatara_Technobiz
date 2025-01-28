import React, { useState, useEffect } from 'react';
import { Users, Monitor, Coffee } from 'lucide-react';

const CounterUp = () => {
  const counterData = [
    { icon: Users, number: 2523, label: 'Customers' },
    { icon: Monitor, number: 63075, label: 'Total Web Pages' },
    { icon: Coffee, number: 12218, label: 'Cups Of Coffee' },
  ];

  return (
    <div className="container w-[85%] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {counterData.map((item, index) => (
          <CounterItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const CounterItem = ({ icon: Icon, number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * number);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }, [number]);

  return (
    <div className="shadow-lg w-[85%] mx-auto rounded-lg p-7 text-center m-0 ">
      <Icon className="mx-auto text-4xl mb-4 text-blue-500" />
      <h3 className="text-2xl font-bold mb-2">{count.toLocaleString()}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default CounterUp;