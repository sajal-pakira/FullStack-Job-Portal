import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find your dream job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            And Get{" "}
            <img
              src="/logo.png"
              alt="Hirred logo"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listing or Find the perfect candidate
        </p>
      </section>
      <div>
        <Link to="/jobs">
        <Button>Find Jobs</Button>
        </Link>
        <Link to="/post-job">
        <Button>Post a Job</Button>
        </Link>
      </div>
      <section></section>
    </main>
  );
};

export default LandingPage;
