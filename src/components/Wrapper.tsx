"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);
export default Wrapper;
