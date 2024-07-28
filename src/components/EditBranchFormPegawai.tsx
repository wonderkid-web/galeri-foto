"use client";
import { database } from "@/lib/firebase";
import { History } from "@/types";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Loader from "./Loader";
import { getSession } from "next-auth/react";

const EditBranchForm: React.FC<{ id: History["id"] }> = ({ id }) => {
  const [file, setFile] = useState<ArrayBuffer | string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const { register, handleSubmit, reset, formState: { errors } } = useForm<History>();

  const docRef = doc(database, "history", id);

  const onSubmit: SubmitHandler<History> = (data) => {
    if (!file && !photoUrl) return; // Pastikan setidaknya ada satu gambar yang diunggah
    handleUpload(data);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const rawFile = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
        setPhotoUrl(null); // Set photoUrl to null if new file is chosen
      };
      reader.readAsDataURL(rawFile);
    }
  };

  const handleUpload = async (data: History) => {
    try {
      const session = await getSession()
      const uploadUrl = file || photoUrl; // Use new file or existing photoUrl
      await updateDoc(docRef, {
        ...data,
        photoUrl: uploadUrl,
        createdAt: new Date(),
        // @ts-ignore
        branch: session?.user.user.branch
      });
      toast.success("History Berhasil di Edit");
    } catch (error) {
      toast.warning("Gagal Mengedit History nih");
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const spesDoc = await getDoc(docRef);
      if (spesDoc.exists()) {
        const data = spesDoc.data();
        reset({ ...data });
        setPhotoUrl(data.photoUrl); // Set existing photo URL
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loader style="mx-auto w-24 mt-36" />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 overflow-auto">
      <div className="flex flex-col">
        <label htmlFor="category" className="mb-2 text-lg font-medium text-gray-700">
          Kategori
        </label>
        <select
          id="category"
          {...register("category", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Kategori 1">Kategori 1</option>
          <option value="Kategori 2">Kategori 2</option>
          <option value="Kategori 3">Kategori 3</option>
        </select>
        {errors.category && <p className="text-red-500 mt-1">Kategori diperlukan.</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="photo" className="mb-2 text-lg font-medium text-gray-700">
          Upload Foto
        </label>
        {photoUrl && (
          <img src={photoUrl} alt="Preview" className="mb-2 w-64 h-6w-64 mx-auto object-cover" />
        )}
        <input
          type="file"
          id="photo"
          onChange={handleFileChange}
          className="p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 text-lg font-medium text-gray-700">
          Deskripsi
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.description && <p className="text-red-500 mt-1">Deskripsi diperlukan.</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="eventDate" className="mb-2 text-lg font-medium text-gray-700">
          Tanggal Acara
        </label>
        <input
          type="date"
          id="eventDate"
          {...register("eventDate", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.eventDate && <p className="text-red-500 mt-1">Tanggal acara diperlukan.</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="newsLink" className="mb-2 text-lg font-medium text-gray-700">
          Link Berita
        </label>
        <input
          type="url"
          id="newsLink"
          {...register("newsLink", { required: true })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.newsLink && <p className="text-red-500 mt-1">Link berita diperlukan.</p>}
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default EditBranchForm;
