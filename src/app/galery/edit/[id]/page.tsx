// pages/branch.tsx
import EditBranchForm from "@/components/EditBranchForm";
import { History } from "@/types";
import React from "react";

const BranchPage: React.FC<{params:{id:History["id"]}}> = ({params:{id}}) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Form Edit Galery</h1>
      <EditBranchForm id={id} />
    </>
  );
};

export default BranchPage;
