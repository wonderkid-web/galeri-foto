// pages/branch.tsx
import EditBranchForm from "@/components/EditBranchFormPegawai";
import { History } from "@/types";
import React from "react";

const BranchPage: React.FC<{params:{id:History["id"]}}> = ({params:{id}}) => {
  return (
    <>
      <h1 className="text-4xl text-sky-700 text-center font-semibold">Form Edit Galery</h1>

      <EditBranchForm id={id} />
    </>
);
};

export default BranchPage;
