import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/"  className="w-[500px] mx-auto my-4"/>
        <div className="flex flex-col justify-center" >
          <p className="text-[#00df9a] font-bold uppercase">Lorem ipsum dolor sit amet consectetur </p>
          <h1 className="text-2xl md:text-4xl sm:text-2xl font-bold py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            quam, neque natus
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, accusantium at adipisci illo perspiciatis nulla magni
            totam reprehenderit inventore temporibus quasi nam, vitae ullam
            velit, nihil eos corrupti numquam? A?
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]" >Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
