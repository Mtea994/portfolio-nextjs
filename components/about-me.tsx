import React from "react";
import Connect from "./connect";
import Available from "./available";
import Location from "./loacation";
import TechStack from "./techstack";
import MyGithubCalendar from "./github-calendar";

function AboutMe() {
  return (
    <div className="flex flex-col sm:self-center w-full pb-20 sm:p-10 sm:pt-0 ">
      <h2 className="text-4xl font-bold mb-4">About me</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 sm:w-auto w-[360px]">
          <Connect />
          <MyGithubCalendar />
        </div>
        <div className="flex flex-col gap-4 sm:w-auto w-[360px]">
          <div className="grid sm:grid-cols-2 gap-4">
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
