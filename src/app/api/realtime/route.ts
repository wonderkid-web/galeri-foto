import { database } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  let history;
  const historyCollection = collection(database, "history");
  onSnapshot(historyCollection, (snapshot) => {
    const histories = snapshot.docs.map((doc) => doc.data()) as History[];
    history = histories
  });
  return NextResponse.json({ history});
}
