// pages/branch.tsx
import BranchForm from "@/components/BranchForm";
import React from "react";

const BranchPage: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl text-sky-700 text-center font-semibold">Form Input Galery</h1>
      <BranchForm />
    </>
  );
};

export default BranchPage;
