"use client";

import Button from "../components/Button";
import Link from "next/link";

const Subscription = () => {
  return (
    <section
      className="relative min-h-96 flex flex-col items-start justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#2b5667] opacity-50"></div>

      <div className="container relative z-10 text-white text-xl font-medium mb-6">
        <div className="w-full flex align-baseline justify-between">
          <div className="w:full lg:w-2/3">
            <h1 className="text-4xl">Let’s work Together</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
              tristique euismod rcu tristique nisl id nibh. viverra feugiat
              viverra.Lorem ipsum dolor sit amet consectetur
            </p>
          </div>

          <div className="flex self-center">
            <Link href="/career" passHref>
              <Button className="bg-gray-50 text-slate-950 text-md hover:bg-blue-700 w-full lg:w-auto">
                View Vacancies{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
