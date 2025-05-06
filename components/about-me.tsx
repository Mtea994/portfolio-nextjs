import React from "react";
import Connect from "./connect";
import Available from "./available";
import Location from "./loacation";
import TechStack from "./techstack";

function AboutMe() {
  return (
    <div className="flex flex-col self-center w-full p-8 pb-20 sm:p-10 sm:pt-0 ">
      <h2 className="text-4xl font-bold mb-4">About me</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 w-full">
        <div className="grid gap-4">
          <Connect />
          {/* <div className="grid grid-cols-2 gap-4">
            <CodingHours />
            <GiveStar />
          </div> */}
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Available />
            <Location />
          </div>
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
