import React, { useEffect, useState } from "react";

const TextCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data/textData.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 pb-8">
          <h3 className="text-4xl mb-4">Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
            velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
            velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
            iaculis elit lorem, et varius ipsum dictum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative p-7 bg-sky-50 hover:bg-sky-900 rounded-lg shadow-md flex flex-col group"
            >
              <h4 className="text-2xl font-semibold border-b-2 border-gray-300 text-gray-800 group-hover:text-white transition-colors pb-1 mb-4">
                {card.title}
              </h4>
              <h5 className="text-lg font-semibold text-sky-900 group-hover:text-white transition-colors pb-2">
                {card.heading}
              </h5>
              <p className="text-gray-600 group-hover:text-white transition-colors">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextCard;
