import React from "react";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl">
          Find your dream job{" "}
          <span>
            And Get{" "}
            <img
              src="/logo.png"
              alt="Hirred logo"
              className="h-14 sm:24 lg:32"
            />
          </span>
        </h1>
      </section>
      <div></div>
      <section></section>
    </main>
  );
};

export default LandingPage;
