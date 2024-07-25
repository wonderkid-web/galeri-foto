"use client";

import { database } from "@/lib/firebase";
import { History } from "@/types";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { toast } from "sonner";

function DeleteButton({ id }: { id: History["id"] }) {

    const handleDelete = async () =>{
        try {
            const docRef = doc(database, "history", id)
            
            await deleteDoc(docRef)

            toast.success("berhasil menghapus galery")

        } catch (error) {
            toast.warning("gagal menghapus galery")
        }
    }

  return (
    <div onClick={handleDelete} className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
      Hapus
    </div>
  );
}

export default DeleteButton;
