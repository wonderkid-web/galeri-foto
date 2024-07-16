"use client";
import { database } from "@/lib/firebase";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export type KantorType = {
  nama: string;
};

export default function Home() {
  const [kantor, setKantor] = useState<null | DocumentData[] | KantorType[]>(null);

  useEffect(() => {
    (async () => {
      const collectionRef = collection(database, "kantor");

      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const datas = snapshot.docs.map((data) => data.data());
        setKantor(datas);
      });

      return () => unsubscribe();
    })();
  }, []);
  

  return (
    <main>
      <h1>TEST</h1>
      <pre>
        {
          kantor?.map(d=>d.nama)
        }
      </pre>

     
    </main>
  );
}
