"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const BlogSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl mb-8 w-full lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative w-full ${index === 0 || index === 3 ? 'h-64' : 'h-60'} overflow-hidden rounded-lg cursor-pointer ${index % 3 === 2 ? 'mt-4' : ''}`}
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4 pb-7">
                <h3 className="text-white text-2xl font-medium">{card.title}</h3>
                <p className="text-white text-base font-sans w-4/5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
