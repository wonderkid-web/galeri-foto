"use client";
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Report from "@/components/Report";
import { History } from "@/types";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";

const EventPDFPage = () => {
  const [history, setHistory] = useState<History[] | null>(null);
  const historyCollection = collection(database, "history");

  useEffect(() => {
    (async () => {
      const unsubscribe = onSnapshot(historyCollection, (snapshot) => {
        const histories = snapshot.docs.map((doc) => doc.data()) as History[];
        setHistory(histories);
      });

      return () => unsubscribe();
    })();
  }, []);

  if (history?.length)
    return (
      <div className="h-full">
        <h1>Download Event PDF</h1>
        <PDFViewer className="w-3/4 mx-auto h-5/6">
          <Report history={history} />
        </PDFViewer>
        <PDFDownloadLink
          className="bg-green-500 text-white rounded-md px-2 py-1 mt-4 mx-auto"
          document={<Report history={history} />}
          fileName="event.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    );
};

export default EventPDFPage;
