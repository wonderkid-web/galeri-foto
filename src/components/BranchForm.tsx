"use client";
import { database, imageDb } from "@/lib/firebase";
import { cabang } from "@/static";
import { History } from "@/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// components/BranchForm.tsx
import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


const BranchForm: React.FC = () => {
  const [file, setFile] = useState<ArrayBuffer | string | null>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<History>();

  const historyCollection = collection(database, "history");

  const onSubmit: SubmitHandler<History> = (data) => {
    if (!file) return;
    console.log(data)
    // handleUpload(data);
    // handle form submission
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const rawFile = e.target.files[0];

      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(reader.result);
      };

      reader.readAsDataURL(rawFile)
    }
  };

  const handleUpload = async (data: History) => {
    if (!file) return;

    try {
      const photoUrl = file
      await addDoc(historyCollection, {
        ...data,
        photoUrl,
        createdAt: new Date(),
      });

      reset();

      toast.success("History Berhasil di tambah");
    } catch (error) {
      toast.warning("Gagal Menambahkan History nih");
    }
  };

  // const handleUpload = (data: History) => {
  //   if (!file) return;

  //   const storageRef = ref(imageDb, `images/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.error("Upload failed:", error);
  //     },
  //     async () => {
  //       try {
  //         const photoUrl = await getDownloadURL(uploadTask.snapshot.ref);
  //         await addDoc(historyCollection, { ...data, photoUrl, createdAt: new Date() });
  //         reset()
  //         toast.success("History Berhasil di tambah")
  //       } catch (error) {
  //         toast.warning("Gagal Menambahkan History nih")
  //       }
  //     }
  //   );
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-8 overflow-auto"
    >
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Kategori
        </label>
        <select
          id="category"
          {...register("category", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Pilar Sosial">Pilar Sosial</option>
          <option value="Pilar Ekonomi">Pilar Ekonomi</option>
          <option value="Pilar Lingkungan">Pilar Lingkungan</option>
        </select>
        {errors.category && (
          <p className="text-red-500 mt-1">Kategori diperlukan.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="branch"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Cabang
        </label>
        <select
          id="branch"
          {...register("branch", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        >
          {
          
            cabang.map(c=><option key={c.toLowerCase()} value={c}>{c}</option>)
          }          
        </select>
        {errors.branch && (
          <p className="text-red-500 mt-1">Kategori diperlukan.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="photo"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Upload Foto
        </label>
        <input
          type="file"
          id="photo"
          onChange={handleFileChange}
          className="p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Deskripsi
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.description && (
          <p className="text-red-500 mt-1">Deskripsi diperlukan.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="eventDate"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Tanggal Acara
        </label>
        <input
          type="date"
          id="eventDate"
          {...register("eventDate", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.eventDate && (
          <p className="text-red-500 mt-1">Tanggal acara diperlukan.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="newsLink"
          className="mb-2 text-lg font-medium text-gray-700"
        >
          Link Berita
        </label>
        <input
          type="url"
          id="newsLink"
          {...register("newsLink", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.newsLink && (
          <p className="text-red-500 mt-1">Link berita diperlukan.</p>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BranchForm;
