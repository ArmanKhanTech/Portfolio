import React from "react";

const Welcome = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-start md:items-center justify-center bg-gradient-to-r from-slate-900 to-[#1B1212] p-5">
      <h1 className="text-5xl lg:text-7xl orange-gradient-text font-semibold">
        Welcome to my Portfolio
      </h1>
      <h3 className="text-3xl lg:text-5xl mt-5 text-3xl text-white-100">
        Setting up...
      </h3>
    </section>
  );
};

export default Welcome;
