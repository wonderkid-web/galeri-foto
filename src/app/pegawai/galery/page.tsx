"use client";
import HistoryCard from "@/components/HistoryCard";
import Loader from "@/components/Loader";
import { database } from "@/lib/firebase";
import { Cabang, History } from "@/types";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [history, setHistory] = useState<History[] | null>(null);
  const session = useSession()
  const historyCollection = collection(database, "history");
  
  useEffect(() => {
    (async () => {
      const session = await getSession()
      // @ts-ignore
      const queryByBranch = query(historyCollection, where("branch", "==", session?.user.user.branch.toLowerCase() as string))
      const unsubscribe = onSnapshot(queryByBranch, (snapshot) => {
        const histories = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          // @ts-ignore
        })) as History[];
        setHistory(histories);
      });

      return () => unsubscribe();
    })();
  }, []);



  return (
    <div>
      <h1 className="text-4xl font-semibold capitalize text-sky-700 text-center mb-8">
        Galery {
          // @ts-ignore
          session.data?.user.user.branch
        }
      </h1>

      <div className="grid lg:grid-cols-3 gap-4">
        {history ? (
          // @ts-ignore
          history.map((c) => <HistoryCard isAdmin="/pegawai" key={c.createdAt} history={c} />)
        ) : (
          <Loader style="mx-auto w-24 mt-56 col-span-full" />
        )}
      </div>
    </div>
  );
};

export default Page;
