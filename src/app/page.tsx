// @ts-nocheck
"use client";
import { database } from "@/lib/firebase";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export type KantorType = {
  nama: string;
};

const dates = [
  "2023-08-10T08:24:33.127Z",
  "2023-12-15T06:50:20.923Z",
  "2024-03-04T14:30:59.114Z",
  "2023-11-22T19:47:48.854Z",
  "2024-05-12T22:18:37.639Z",
];

export default function Home() {
  const [bulanBox, setBulanBox] = useState<Number[] | null>(null);
  const [tahunBox, setTahunBox] = useState<Number[] | null>(null);
  const [bulan, setBulan] = useState<Number | null>(null);
  const [tahun, setTahun] = useState<Number | null>(null);

  const [kantor, setKantor] = useState<null | KantorType[]>(null);


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

  // const collectionRef = collection(database, "kantor");

  // const kantorCollectionRef = await getDocs(collectionRef);

  // const data  = kantorCollectionRef.docs.map(doc=>doc.data())

  useEffect(() => {
    const bulanBox = dates.map((d) => new Date(d).getMonth());
    const tahunBox = [...new Set(dates.map((d) => new Date(d).getFullYear()))];

    setBulanBox(bulanBox);
    setTahunBox(tahunBox);
  }, []);


  return (
    <main>
      <h1>TEST</h1>
      <pre>{JSON.stringify(kantor)}</pre>

      <button onClick={() => signOut()}>signout</button>
      <hr />
      <hr />

      <div className="mt-4 flex gap-2 justify-end pr-6 w-full">
        <form>
          <select
            onChange={(e) => setBulan(+e.currentTarget.value)}
            id="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={null}>Bulan Galery</option>
            <option value="0">Januari</option>
            <option value="1">Februari</option>
            <option value="2">Maret</option>
            <option value="3">April</option>
            <option value="4">Mei</option>
            <option value="5">Juni</option>
            <option value="6">Juli</option>
            <option value="7">Agustus</option>
            <option value="8">September</option>
            <option value="9">Oktober</option>
            <option value="10">November</option>
            <option value="11">Desember</option>
          </select>
        </form>
        <form>
          <select
            onChange={(e) => setTahun(+e.currentTarget.value)}
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={null}>Tahun Galery</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
        </form>
      </div>

      {bulan && tahun && (
        <>
          <pre>{JSON.stringify(bulan)}</pre>
          <pre>{JSON.stringify(bulanBox)}</pre>
          <hr />
          <pre>{JSON.stringify(tahun)}</pre>
          <pre>{JSON.stringify(tahunBox)}</pre>
        </>
      )}

      <hr />
      <hr />
      <hr />
      <hr />

      {dates
        .filter((d) => {
          if (!bulan && !tahun) return dates;

          if (
            new Date(d).getMonth() == bulan ||
            new Date(d).getFullYear() == tahun
          )
            return d;
        })
        .map((d) => (
          <p key={d}>
            bulan: {new Date(d).getMonth()} | tahun: {new Date(d).getFullYear()}
          </p>
        ))}
      {dates
        .filter((d) => {
          if (!bulan && !tahun) return dates;

          if (
            new Date(d).getMonth() == bulan ||
            new Date(d).getFullYear() == tahun
          )
            return d;
        })
        .map((d) => (
          <p key={d}>
            bulan: {new Date(d).getMonth()} | tahun: {new Date(d).getFullYear()}
          </p>
        ))}
    </main>
  );
}
