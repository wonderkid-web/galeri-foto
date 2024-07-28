"use client";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isVisible = pathname.includes("/auth") ? true : false;


  return (
    <SessionProvider>
      <div
        className={`${
          isVisible ? "flex" : "grid"
        } grid-cols-12 grid-rows-12 max-h-screen w-screen overflow-hidden`}
      >
        <Navbar isVisible={isVisible} />
        <Sidebar  isVisible={isVisible} />
        <main className="pt-8 overflow-auto row-start-2 -row-end-2 col-start-3 col-end-13 pl-8 pb-28">
        {children}
        </main>
       <Footer isVisible={isVisible} />
      </div>
    </SessionProvider>
  );
};
export default Wrapper;
