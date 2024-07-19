"use client";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {

  const pathname = usePathname()

  const isVisible = pathname.includes('/auth/signin') ? true : false

  return (
    <SessionProvider>
      <div className={`${isVisible ? 'flex' : 'grid'} grid-cols-12 grid-rows-12 min-h-screen w-screen overflow-hidden`}>
        <nav className={`${isVisible && 'hidden'} row-span-1 col-span-full bg-red-500 text-white`}>
          NAVBAR
        </nav>
        <aside className={`${isVisible && 'hidden'} bg-green-500 row-span-full row-start-2 col-span-2`}>
          ASIDE
        </aside>
        <main className="row-start-2 -row-end-1 col-start-4 col-end-13">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};
export default Wrapper;
