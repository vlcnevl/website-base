import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="text-white" id="hero">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="text-4xl md:text-7xl sm:text-4xl font-bold md:py-6">
          Grow with Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl md:text-5xl sm:text-4xl py-4">
            Fast,Flexible,financing for
          </p>
          <span className="font-bold text-xl md:text-5xl sm:text-4xl md:pl-4 pl-2">
            <Typewriter
              words={["VELİ", "CAN", "EVLİ"]}
              typeSpeed={80}
              deleteSpeed={50}
              loop
              cursor
            />
          </span>
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, amet
          deleniti?
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
