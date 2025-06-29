import Header from "@/components/Header";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid-background"></div>
      <main className="min-h-screen container p-5">
        <Header />
        <Outlet />
      </main>
      <div className="p-6 mt-6 text-center bg-gray-800 w-full">
        Made With 💞 By{" "}
        <Link
          className="cursor-pointer text-gray-950 bg-gray-300 p-1"
          to="https://www.linkedin.com/in/sajal-pakira-13661b241/"
        >
          SAJAL PAKIRA
        </Link>
      </div>
    </div>
  );
};

export default AppLayout;
