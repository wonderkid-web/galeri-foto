import React from "react";

function page({ params: { cabang } }: { params: { cabang: string } }) {
  return (
    <div>
      <h1 className="text-2xl">Cabang: {cabang}</h1>
    </div>
  );
}

export default page;
