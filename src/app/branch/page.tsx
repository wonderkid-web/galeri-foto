// pages/branch.tsx
import BranchForm from "@/components/BranchForm";
import { getServerSession } from "next-auth";
import React from "react";
import { option } from "../api/auth/[...nextauth]/options";

export const revalidate = 0

const BranchPage: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl text-sky-700 text-center font-semibold">Form Input Galery</h1>
      <BranchForm />
    </>
  );
};

export default BranchPage;
