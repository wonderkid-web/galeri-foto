"use client";

import { useState, ChangeEvent } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { UploadImage } from "@/components/UploadImage";
import { toast } from "sonner";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<string | null | undefined>(null);
  const [progress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>("");

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  const handleUpload = () => {
    // if (!file) return;
    // const storageRef = ref(imageDb, `images/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     setProgress(progress);
    //   },
    //   (error) => {
    //     console.error('Upload failed:', error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setUrl(downloadURL);
    //     });
    //   }
    // );
    toast.info(file);
  };

  return (
    <div>
      <h1>Upload Fotooo</h1>
      <UploadImage setImage={setFile} />
      {/* <input type="file" onChange={handleFileChange} /> */}
      <button onClick={handleUpload}>Upload</button>
      <p>Progress: {progress}%</p>
      {url && (
        <div>
          <p>Upload selesai! Lihat fotonya di bawah ini:</p>
          <img src={url} alt="Uploaded file" width="300" />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
