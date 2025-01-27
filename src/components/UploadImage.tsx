"use client";

import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import Image from "next/legacy/image";

export function UploadImage({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<string | null | undefined>>;
}) {
  // const { setImage } = useSetImage();
  const [buffer, setBuffer] = useState<Buffer | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    setBuffer(buffer);

    // Create preview for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setImage(reader.result as string);
        console.log(reader.result as string)
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <>
      <input
        type="file"
        onChange={handleFileChange}
        className="file:mr-4 file:py-2 file:px-4 py-0 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        accept="image/*"
      />
      {fileName && (
        <p className="text-sm text-gray-500">Selected file: {fileName}</p>
      )}
      {preview && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Image Preview</h3>
          <div className="relative w-full h-48">
            <Image
              src={preview}
              alt="File preview"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
      {buffer && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Buffer Information</h3>
          <p>Buffer size: {buffer.length} bytes</p>
          <p>First 10 bytes: {buffer.slice(0, 10).toString("hex")}</p>
        </div>
      )}
    </>
  );
}
