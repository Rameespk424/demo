import React from 'react';
import Counter from '../components/Counter';

const Achivement = () => {
    return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center border-r border-gray-300">
                <Counter target={8} speed={500} suffix="years" />
                <h3 className="text-xl font-medium text-gray-700">Of Success</h3>
              </div>
              <div className="flex flex-col items-center border-r border-gray-300">
                <Counter target={200} speed={500} suffix="+" />
                <h3 className="text-xl font-medium text-gray-700">Members</h3>
              </div>
              <div className="flex flex-col items-center border-r border-gray-300">
                <Counter target={155} speed={500} suffix="+" />
                <h3 className="text-xl font-medium text-gray-700">All over the USA</h3>
              </div>
              <div className="flex flex-col items-center">
                <Counter target={200} speed={500} suffix="K" />
                <h3 className="text-xl font-medium text-gray-700">Satisfied Clients</h3>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Achivement;
