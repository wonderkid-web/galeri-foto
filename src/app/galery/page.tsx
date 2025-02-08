"use client"

import HistoryCard from "@/components/HistoryCard"
import Loader from "@/components/Loader"
import { database } from "@/lib/firebase"
import { cabang } from "@/static"
import type { Cabang, History } from "@/types"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

const Page = () => {
  const [history, setHistory] = useState<History[] | null>(null)
  const [selectedBranch, setSelectedBranch] = useState<Cabang[number] | null>(null)

  const historyCollection = collection(database, "history")

  useEffect(() => {
    const unsubscribe = onSnapshot(historyCollection, (snapshot) => {
      const histories = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as History[]
      setHistory(histories)
    })

    return () => unsubscribe()
  }, [historyCollection]) // Added historyCollection to dependencies

  const handleSelectedBranch = (branch: Cabang[number] | null) => {
    setSelectedBranch(branch)
  }

  const filteredHistory =
    history?.filter((c) => (selectedBranch ? c.branch?.toLowerCase() === selectedBranch.toLowerCase() : true)) ?? []

  return (
    <div>
      <h1 className="text-4xl font-semibold capitalize text-sky-700 text-center mb-8">
        Galery {selectedBranch ?? "Semua Cabang"}
      </h1>

      <ul className="flex gap-4 flex-wrap justify-center mx-auto mb-8 overflow-auto items-stretch place-items-center">
        <li
          onClick={() => handleSelectedBranch(null)}
          className="px-2 py-1 rounded-xl transition hover:scale-110 cursor-pointer bg-sky-700 text-white font-semibold"
        >
          Semua Cabang
        </li>
        {cabang.map((c) => (
          <li
            key={c}
            onClick={() => handleSelectedBranch(c)}
            className="w-32 text-center px-2 py-1 rounded-xl transition hover:scale-110 cursor-pointer bg-sky-700 text-white font-semibold"
          >
            {c}
          </li>
        ))}
      </ul>
      <div className="grid lg:grid-cols-3 gap-4">
        {history ? (
          filteredHistory.length > 0 ? (
            filteredHistory.map((c) => <HistoryCard key={c.id} history={c} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No history found for the selected branch.</p>
          )
        ) : (
          <Loader style="mx-auto w-24 mt-56 col-span-full" />
        )}
      </div>
    </div>
  )
}

export default Page

