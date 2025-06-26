import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container p-10">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 mt-10 text-center bg-gray-800">
        made with 💕 by SAJAL PAKIRA
      </div>
    </div>
  );
};

export default AppLayout;
