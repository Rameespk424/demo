import React from 'react';
import Counter from '../components/Counter';

const Achivement = () => {
    return (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Counter target={8} speed={200} suffix="years" />
                <h3 className="text-xl font-semibold text-gray-700">Of Success</h3>
              </div>
              <div className="flex flex-col items-center">
                <Counter target={200} speed={200} suffix="+" />
                <h3 className="text-xl font-semibold text-gray-700">Members</h3>
              </div>
              <div className="flex flex-col items-center">
                <Counter target={155} speed={200} suffix="+" />
                <h3 className="text-xl font-semibold text-gray-700">All over the USA</h3>
              </div>
              <div className="flex flex-col items-center">
                <Counter target={200} speed={200} suffix="K" />
                <h3 className="text-xl font-semibold text-gray-700">ss Clients</h3>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Achivement;
