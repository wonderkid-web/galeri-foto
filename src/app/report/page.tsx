"use client";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Report from "@/components/Report";
import {
  Calendar,
  FilteredType,
  History,
  SelectedFilterDateType,
  SelectionDate,
} from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/lib/firebase";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import Select from "react-select";
import { optionDate } from "@/static";

const EventPDFPage = () => {
  const [history, setHistory] = useState<History[] | null>(null);
  const [filteredType, setFilteredType] = useState<FilteredType>("hari");
  const [selected, setSelected] = useState<Calendar[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    (async () => {
      const collectionRef = collection(database, "history");
      const querySnapshot = await getDocs(collectionRef);
      const docs = querySnapshot.docs.map((doc) => doc.data());

      setHistory(docs as History[]);
    })();
  }, []);

  const filterHistory = (hs: History) => {
    const [tahun, bulan, tanggal] = hs.eventDate.split("-");
    const startDate = selected[0].startDate;
    const endDate = selected[0].endDate;

    if (!startDate || !endDate) return false;

    const eventDate = new Date(
      parseInt(tahun),
      parseInt(bulan) - 1,
      parseInt(tanggal)
    );

    switch (filteredType) {
      case "hari":
        return (
          eventDate >=
            new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate()
            ) &&
          eventDate <=
            new Date(
              endDate.getFullYear(),
              endDate.getMonth(),
              endDate.getDate()
            )
        );
      case "minggu":
        return eventDate >= startDate && eventDate <= endDate;
      case "tahun":
        return eventDate.getFullYear() === startDate.getFullYear();
      case "all":
        return true;
      default:
        return false;
    }
  };

  const filteredHistory = history?.filter(filterHistory) || [];

  return (
    <div className="h-full pb-24">
      <h1 className="text-4xl font-semibold text-center mb-4 text-sky-700">
        Filter Konversi Galery
      </h1>

      <h1 className="text-2xl mb-4 text-sky-600">Pilih Jenis Waktu Filter</h1>

      <Select<SelectedFilterDateType>
        // @ts-ignore
        onChange={(e) => setFilteredType(e?.value || "hari")}
        //@ts-ignore
        options={optionDate}
        className="w-4/5 mb-5 mx-auto"
      />

      <div className="mx-auto w-full flex mb-12">
        <DateRangePicker
          // @ts-ignore
          onChange={({ selection }: { selection: SelectionDate }) =>
            setSelected([selection])
          }
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={selected}
          direction="horizontal"
          className="mx-auto"
        />
      </div>

      {filteredHistory.length > 0 && (
        <>
          <h1 className="text-2xl mb-4 text-sky-600">
            PDF yang akan terdownload
          </h1>
          <div className=" h-screen flex gap-8 flex-col justify-center items-center">
            <PDFViewer className="w-full mx-auto h-full">
              <Report history={filteredHistory} />
            </PDFViewer>
            <PDFDownloadLink
              document={<Report history={filteredHistory} />}
              fileName="event.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <p className="bg-green-500 text-white rounded-md px-3 py-2 text-2xl">
                    Download PDF
                  </p>
                )
              }
            </PDFDownloadLink>
          </div>
        </>
      )}
    </div>
  );
};

export default EventPDFPage;
