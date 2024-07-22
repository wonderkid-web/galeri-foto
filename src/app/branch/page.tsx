// pages/branch.tsx
import BranchForm from "@/components/BranchForm";
import { cabang } from "@/static";
import Link from "next/link";
import React from "react";

const BranchPage: React.FC = () => {
  return (
    <>
      {/* <ul className="flex gap-4 justify-center mx-auto mb-8">
        {cabang.map((c) => (
          <li className="px-2 py-1 rounded-xl transition hover:scale-110 cursor-pointer bg-sky-700 text-white font-semibold">
            <Link className="h-full w-full" href={`branch/${c}`}>
              {c}
            </Link>
          </li>
        ))}
      </ul> */}
      <h1 className="text-2xl font-semibold">Form Input Galery</h1>
      <BranchForm />
    </>
  );
};

export default BranchPage;
