
// import { useRouter } from "next/navigation";
import { database } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}:{params: {id:string}}) {
  try {
    const docRef = doc(database, "history", params.id)

    await deleteDoc(docRef)

    return NextResponse.redirect(new URL('/', req.url))

  } catch (error) {
    return NextResponse.json({error})
  }
}
