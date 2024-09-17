import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from 'next/link';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/sliderData.json'); // Fetch the JSON file from public/data
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="">
      <div className="">
        <Carousel responsive={responsive}>
          {data.map((item) => (
            <div key={item.id} className="relative  mx-4">
              {/* Image */}
              <Image
                src={item.imageSrc}
                alt={item.date}
                width={500}
                height={600}
                className="rounded-md"
              />

              {/* Overlay Container */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex flex-col justify-end p-4">
                {/* date and Description */}
                <h2 className="text-sm font-medium text-white">{item.date}</h2>
                <p className="text-sm text-white mb-2">
                  {item.description.length > 100
                    ? item.description.substring(0, 100) + '...'
                    : item.description}
                </p>

                {/* Read More Link */}
                <Link href={`/details/${item.id}`}>
                  <p className="text-blue-400 text-white">Read More</p>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
