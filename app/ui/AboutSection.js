"use client";
import React from "react";
import YouTubeModal from "../components/VideoModal";

const AboutSection = () => {
  return (
    <>
      <section className="container py-16 ">
        <div
          className=" relative h-[500px] bg-center bg-cover rounded-2xl px-9 pb-16 flex flex-col justify-end"
          style={{ backgroundImage: `url('/about_bg.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
            <YouTubeModal />
            <div className=" pt-3 text-white ">
              <h3 className="font-medium text-3xl pb-4">
                Lorem ipsum dolor sit amet.
              </h3>

              <div className="text-lg pb-1">Sanchez Alexis</div>
              <p className="font-thin font-inter text-md">
                CEO & Founder of Demo
              </p>
            </div>
          </div>
        </div>

        <div className="pt-16 flex justify-between container">
          <div className=" w-8/12 pr-6 ">
            <h3 className="text-4xl mb-4">
              Lorem ipsum dolor sit amet, consectetur
            </h3>
            <p className="leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
              congue non sem et efficitur. Donec in dolor nec tellus iaculis
              sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
              convallis accumsan, nibh odio gravida felis, vitae mollis massa
              lectus a neque. Mauris mollis elit quis iaculis iaculis.
              Vestibulum molestie nisl eget aliquet scelerisque. Vivamus
              efficitur dui eget velit interdum, non dapibus nisi fringilla.
              Mauris fermentum venenatis volutpat. Quisque efficitur ultricies
              erat eget rutrum. Phasellus feugiat quam eget est dapibus, non
              eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
            </p>
          </div>
          <div className="w-4/12 ">
            <div className=" pb-4 border-b mb-5 relative pl-5">
            <div class="absolute left-0 top-1 h-[90%] w-0.5 bg-gray-300"></div>

              <h4 className="text-2xl font-medium mb-4">Lorem ipsum</h4>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </p>
            </div>
            <div className=" relative pl-5">
            <div class="absolute left-0 top-2 h-[90%] w-0.5 bg-gray-300"></div>

            <h4 className="text-2xl font-medium mb-4">Lorem ipsum</h4>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Fusce non
                venenatis velit. Proin luctus malesuada mauris vitae mattis.
                Pellentesque iaculis elit lorem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
