import React from "react";

function HomePage() {
  return (
    <div
      className="w-full h-[85vh] font-robotoSlab font-bold italic animate-bounce flex justify-center items-center my-auto text-5xl text-gradient"
      style={{
        animationIterationCount: "2",
        animationDuration: "3s",
        animationTimingFunction: "ease-out",
      }}
    >
      Welcome to school
    </div>
  );
}

export default HomePage;
