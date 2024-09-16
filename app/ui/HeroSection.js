"use client";

const HeroSection = () => {
  return (
    <section
      className="relative h-[700px] md:min-h-lvh flex flex-col items-center justify-end bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >

<div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container  relative z-10 text-white pb-20 text-xl font-medium mb-6">
      <div className= " h -full flex flex-col w-full  lg:w-2/3">
      <h1 className="text-5xl pb-6">Lorem ipsum dolor sit amet</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst.
        </p>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
