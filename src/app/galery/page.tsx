"use client";
import HistoryCard from "@/components/HistoryCard";
import Loader from "@/components/Loader";
import { database } from "@/lib/firebase";
import { cabang } from "@/static";
import { Cabang, History } from "@/types";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [history, setHistory] = useState<History[] | null>(null);

  const [selectedBranch, setSelectedBranch] = useState<
    Cabang[0] | Cabang[1] | Cabang[2] | null
  >(null);

  const historyCollection = collection(database, "history");

  useEffect(() => {
    (async () => {
      const unsubscribe = onSnapshot(historyCollection, (snapshot) => {
        const histories = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})) as History[];
        setHistory(histories);
      });

      return () => unsubscribe();
    })();
  }, []);

  const handleSelectedBranch = (
    branch: Cabang[0] | Cabang[1] | Cabang[2] | null
  ) => {
    setSelectedBranch(branch);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize">Galery {selectedBranch ? selectedBranch : "Semua Cabang"}</h1>
      <ul className="flex gap-4 justify-center mx-auto mb-8">
        <li
          onClick={() => handleSelectedBranch(null)}
          className="px-2 py-1 rounded-xl transition hover:scale-110 cursor-pointer bg-sky-700 text-white font-semibold"
        >
          Semua Cabang
        </li>
        {cabang.map((c) => (
          <li
            key={c}
            onClick={() =>
              handleSelectedBranch(c as Cabang[0] | Cabang[1] | Cabang[2])
            }
            className="px-2 py-1 rounded-xl transition hover:scale-110 cursor-pointer bg-sky-700 text-white font-semibold"
          >
            {c}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-4">
        {history ? (
          history
            .filter((c) =>
              selectedBranch
                ? c.branch.toLowerCase() === selectedBranch.toLowerCase()
                : history
            )
            .map((c) => <HistoryCard key={c.createdAt} history={c} />)
        ) : (
          <Loader style="mx-auto w-24 mt-24" />
        )}
      </div>
    </div>
  );
};

export default Page
